(()=>{
function readMetadata(buf){
  let T = signed_crc_table();
  let uint8 = new Uint8Array(4)
  let int32 = new Int32Array(uint8.buffer)
  let uint32 = new Uint32Array(uint8.buffer)

	let result = {};
	const chunks = extractChunks(buf);
	chunks.forEach( chunk => {
		switch(chunk.name){
			case 'tEXt':
				if (!result.tEXt) {
					result.tEXt = {};
				}
				let textChunk = textDecode(chunk.data);
				result.tEXt[textChunk.keyword] = textChunk.text;
				break
			case 'pHYs':
				result.pHYs = {
					// Pixels per unit, X axis: 4 bytes (unsigned integer)
					"x": readUint32(chunk.data, 0),
					// Pixels per unit, Y axis: 4 bytes (unsigned integer)
					"y":  readUint32(chunk.data, 4),
					"unit": chunk.data[8],
				}
				break
			case 'gAMA':
			case 'cHRM':
			case 'sRGB':
			case 'IHDR':
			case 'iCCP':
			default:
				result[chunk.name] = true;
		}
	})
	return result;
  
function readUint32 (uint8array,offset) {
	let byte1, byte2, byte3, byte4;
	byte1 = uint8array[offset++];
	byte2 = uint8array[offset++];
	byte3 = uint8array[offset++];
	byte4 = uint8array[offset];
	return  0 | (byte1 << 24) | (byte2 << 16) | (byte3 << 8) | byte4;
}


function textDecode (data) {
	if (data.data && data.name) {
		data = data.data
	}

	let naming = true
	let text = ''
	let name = ''

	for (let i = 0; i < data.length; i++) {
		let code = data[i]

		if (naming) {
			if (code) {
				name += String.fromCharCode(code)
			} else {
				naming = false
			}
		} else {
			if (code) {
				text += String.fromCharCode(code)
			} else {
				throw new Error('Invalid NULL character found. 0x00 character is not permitted in tEXt content')
			}
		}
	}

	return {
		keyword: name,
		text: text
	}
}

function extractChunks (data) {
	if (data[0] !== 0x89) throw new Error('Invalid .png file header')
	if (data[1] !== 0x50) throw new Error('Invalid .png file header')
	if (data[2] !== 0x4E) throw new Error('Invalid .png file header')
	if (data[3] !== 0x47) throw new Error('Invalid .png file header')
	if (data[4] !== 0x0D) throw new Error('Invalid .png file header: possibly caused by DOS-Unix line ending conversion?')
	if (data[5] !== 0x0A) throw new Error('Invalid .png file header: possibly caused by DOS-Unix line ending conversion?')
	if (data[6] !== 0x1A) throw new Error('Invalid .png file header')
	if (data[7] !== 0x0A) throw new Error('Invalid .png file header: possibly caused by DOS-Unix line ending conversion?')

	let ended = false
	let chunks = []
	let idx = 8

	while (idx < data.length) {
		// Read the length of the current chunk,
		// which is stored as a Uint32.
		uint8[3] = data[idx++]
		uint8[2] = data[idx++]
		uint8[1] = data[idx++]
		uint8[0] = data[idx++]

		// Chunk includes name/type for CRC check (see below).
		let length = uint32[0] + 4
		let chunk = new Uint8Array(length)
		chunk[0] = data[idx++]
		chunk[1] = data[idx++]
		chunk[2] = data[idx++]
		chunk[3] = data[idx++]

		// Get the name in ASCII for identification.
		let name = (
			String.fromCharCode(chunk[0]) +
			String.fromCharCode(chunk[1]) +
			String.fromCharCode(chunk[2]) +
			String.fromCharCode(chunk[3])
		)

		// The IHDR header MUST come first.
		if (!chunks.length && name !== 'IHDR') {
			throw new Error('IHDR header missing')
		}

		// The IEND header marks the end of the file,
		// so on discovering it break out of the loop.
		if (name === 'IEND') {
			ended = true
			chunks.push({
				name: name,
				data: new Uint8Array(0)
			})

			break
		}

		// Read the contents of the chunk out of the main buffer.
		for (let i = 4; i < length; i++) {
			chunk[i] = data[idx++]
		}

		// Read out the CRC value for comparison.
		// It's stored as an Int32.
		uint8[3] = data[idx++]
		uint8[2] = data[idx++]
		uint8[1] = data[idx++]
		uint8[0] = data[idx++]

		let crcActual = int32[0]
		let crcExpect = crc32_buf(chunk)
		if (crcExpect !== crcActual) {
			throw new Error(
				'CRC values for ' + name + ' header do not match, PNG file is likely corrupted'
			)
		}

		// The chunk data is now copied to remove the 4 preceding
		// bytes used for the chunk name/type.
		let chunkData = new Uint8Array(chunk.buffer.slice(4))

		chunks.push({
			name: name,
			data: chunkData
		})
	}

	if (!ended) {
		throw new Error('.png file ended prematurely: no IEND header was found')
	}

	return chunks
}
  
/*** CRC32 ***/
	function signed_crc_table() {
		var c = 0, table = new Array(256);

		for(var n =0; n != 256; ++n){
			c = n;
			c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
			c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
			c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
			c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
			c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
			c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
			c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
			c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
			table[n] = c;
		}

		return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;
	}

	function crc32_bstr(bstr, seed) {
		var C = seed ^ -1, L = bstr.length - 1;
		for(var i = 0; i < L;) {
			C = (C>>>8) ^ T[(C^bstr.charCodeAt(i++))&0xFF];
			C = (C>>>8) ^ T[(C^bstr.charCodeAt(i++))&0xFF];
		}
		if(i === L) C = (C>>>8) ^ T[(C ^ bstr.charCodeAt(i))&0xFF];
		return C ^ -1;
	}

	function crc32_buf(buf, seed) {
		if(buf.length > 10000) return crc32_buf_8(buf, seed);
		var C = seed ^ -1, L = buf.length - 3;
		for(var i = 0; i < L;) {
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		}
		while(i < L+3) C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		return C ^ -1;
	}

	function crc32_buf_8(buf, seed) {
		var C = seed ^ -1, L = buf.length - 7;
		for(var i = 0; i < L;) {
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
			C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		}
		while(i < L+7) C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		return C ^ -1;
	}

	function crc32_str(str, seed) {
		var C = seed ^ -1;
		for(var i = 0, L=str.length, c, d; i < L;) {
			c = str.charCodeAt(i++);
			if(c < 0x80) {
				C = (C>>>8) ^ T[(C ^ c)&0xFF];
			} else if(c < 0x800) {
				C = (C>>>8) ^ T[(C ^ (192|((c>>6)&31)))&0xFF];
				C = (C>>>8) ^ T[(C ^ (128|(c&63)))&0xFF];
			} else if(c >= 0xD800 && c < 0xE000) {
				c = (c&1023)+64; d = str.charCodeAt(i++)&1023;
				C = (C>>>8) ^ T[(C ^ (240|((c>>8)&7)))&0xFF];
				C = (C>>>8) ^ T[(C ^ (128|((c>>2)&63)))&0xFF];
				C = (C>>>8) ^ T[(C ^ (128|((d>>6)&15)|((c&3)<<4)))&0xFF];
				C = (C>>>8) ^ T[(C ^ (128|(d&63)))&0xFF];
			} else {
				C = (C>>>8) ^ T[(C ^ (224|((c>>12)&15)))&0xFF];
				C = (C>>>8) ^ T[(C ^ (128|((c>>6)&63)))&0xFF];
				C = (C>>>8) ^ T[(C ^ (128|(c&63)))&0xFF];
			}
		}
		return C ^ -1;
	}
  /** CRC32 **/
}
// export {readMetadata};
return _export ({ readMetadata });
function _export(j){document.currentScript.setAttribute("x-module",(()=>{for(let k in j){j[k]=j[k].toString()};return JSON.stringify(j)})())}
})();
