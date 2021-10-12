
function gol(inputarray,iteration) {
  let ret = [];
  let input = [];
  inputarray.map(v=>{
    input.push({i:v[0],j:v[1],k:v[2],l:lconv(v[3]),m:v[4]});
  });
  let output = automata(input,iteration);
  output.map(o=>{
    ret.push([o.i,o.j,o.k,lconv(o.l),o.m,0,0]);
  });
console.log(ret);
  return ret;
}
/*
console.log(gol(
[
 [0,0,1,0,1,0,0],
 [1,0,1,0,0,0,0],
]
,2));
console.log(automata(
[
// {i:0,j:-1,k:1,l:2,m:0},
// {i:0,j: 0,k:1,l:1,m:0},
// {i:1,j: 0,k:1,l:2,m:0},
 {i:1,j: 1,k:1,l:1,m:1},
 {i:1,j: 2,k:1,l:1,m:0},
]
,2));
*/
function lconv (l) {
  let conv = {
    0:1,
    1:0,
    2:2,
  };
  return conv[l];
}
function automata(input,iteration) {
/*
let xx = [2,1,2,0,0,0];
let input = [
 {i:0,j:-1,k:1,l:2,m:0},
 {i:0,j: 0,k:1,l:1,m:0},
 {i:1,j: 0,k:1,l:2,m:0},
];
*/
/*
let iteration=2;
*/
let dupHash, dh;
for (let i=0;i<iteration;i++) {
  // reset
  dupHash = {};
  //addDupHash(0,-1,1,xx[0],xx[3]);
  //addDupHash(0, 0,1,xx[1],xx[4]);
  //addDupHash(1, 0,1,xx[2],xx[5]);
  // make dupHash first
  input.map(p=>{
    addDupHash(p.i,p.j,p.k,p.l,p.m);
  });
  dh = getDataHash();
  //let me = {i:0,j:0,k:0,l:0,m:0};
  //console.log(next(me));
  let seed = getSeed(input);
  input = iter(seed,i);
}
return input;

/////////////////
function getSeed (input) {
  let seedHash = {};
  let ret = [];
  input.map(p=>{
    let {a,b,c}=getABC(p);
    [p,a,b,c].map(x=>{
      let key = JSON.stringify({i:x.i,j:x.j,k:x.k});
      if (key in seedHash) {
        return;
      }
      seedHash[key] = true;
      ret.push(x);
    });
  });
  return ret;
}
function iter (input,i) {
  let output = [];
  input.map(p=>{
    let pp = null;
    if (p.k===i%2) {
      pp = next(p);
    } else {
      if (p.l!==-1) {
        pp = p;
      }
    }
    if (pp) {
      output.push(pp);
    }
  });
  return output;
}
return;
function addDupHash(i,j,k,l,m) {
  let key = JSON.stringify({i:i,j:j,k:k});
  dupHash[key] = {i:i,j:j,k:k,l:l,m:m};
}
function getABC (p) {
    if (p.k===0) {
      a = getRelative( p,0,-1,1);
      b = getRelative( p,0,0,1);
      c = getRelative( p,1,0,1);
    } else {
      a = getRelative( p,0,1,-1);
      b = getRelative( p,0,0,-1);
      c = getRelative( p,-1,0,-1);
    }
console.log(a);
console.log(b);
console.log(c);
    return {a,b,c};
}
function next ( me ) {
  let {a,b,c}=getABC(me);
  let abc = [a.l,b.l,c.l,a.m,b.m,c.m];
  let key = JSON.stringify(abc);
  let val = dh[key];
console.log(key);
if ( !val ) {
  console.log(key);
}
  return updateMe(me, val[0], val[1]);
}
function updateMe(me,l,m) {
  if (l===-1) {
    return null;
  } else if (l===-2) { 
    if (me.l===-1) {
      return null;
    } else {
      // -2 === ASIS
      return me;
    }
  }
  let copy = JSON.parse(JSON.stringify(me));
  copy.l = l;
  copy.m = m;
  return copy;
}
function getRelative(  me, i, j ,k ) {
  return getValue(me.i+i, me.j+j, me.k+k);
}
function getValue(i,j,k) {
  let key = JSON.stringify({i:i,j:j,k:k});
  if (key in dupHash) {
    let json = dupHash[key];
    return json;
  } else {
    return {
      i:i, j:j, k:k,
      l:-1,
      m:-1
    };
  }
}
function getDataHash() {
  let data = getTripleData();
  let dh = {};
  data.map(d=>{ 
    let key = JSON.stringify(d[0]);
    dh[key] = d[1];
  });
  return dh;
}
function getTripleData () {
  let ret = [];
  let dbl = getDoubleData();
  dbl.map(d=>{ 
    ret.push(d);
    if (d[2]%3===0) {
      let q = d[0];
      let p = d[1];
      ret.push([
        [
		lRotate(q[1],1),
  		lRotate(q[2],1),
		lRotate(q[0],1),
		q[4],q[5],q[3]
	],
        [
        	lRotate(p[0],1),
		p[1],
	],
        d[2]
      ]);
      ret.push([
        [
        	lRotate(q[2],2),
        	lRotate(q[0],2),
        	lRotate(q[1],2),
        	q[5],q[3],q[4]
        ],
        [
        	lRotate(p[0],2),
        	p[1],
        ],
        d[2]
      ]);
    }
  });
  return ret;
}
function lRotate (l,r) {
 if (l<0) {
   return l;
 } else {
   return (l+r+3)%3;
 }
}
function getDoubleData () {
  let ret = [];
  let raw = getRawData();
  raw.map(d=>{ 
    ret.push(d);
    if (d[2]%2===0) {
      let q = d[0];
      let p = d[1];
      ret.push([
	[
        	lFlip(q[0]),
		lFlip(q[2]),
		lFlip(q[1]),
		q[3],q[5],q[4]
 	],
        [
		lFlip(p[0]),
		p[1],
	],
        d[2]
      ]);
    }
  });
  return ret;
}
function lFlip (l) {
  if (l<0) {
   return l;
  } else if (l===0) {
   return 0;
  } else if (l===1) {
   return 2;
  } else if (l===2) {
   return 1;
  }
}
function getRawData () {
  return [
    [[0,0,0,0,0,0],[0,1],3],
    [[0,0,0,1,1,1],[0,0],3],
    [[0,1,2,0,0,0],[0,1],1],
    [[0,1,2,1,1,1],[0,0],1],
    [[0,2,1,0,0,0],[0,0],3],
    [[0,2,1,1,1,1],[0,1],3],
///
///
    [[1,1,2,0,0,0],[1,1],6],
    [[1,1,2,1,1,1],[2,1],6],
///
///
    [[1,2,0,0,0,0],[0,1],2],
    [[1,2,0,1,1,1],[0,1],2],
///
    [[1,2,1,0,0,0],[1,1],6],
    [[1,2,1,1,1,1],[0,1],6],
///
    [[1,2,2,0,0,0],[1,1],6],
    [[1,2,2,1,1,1],[0,1],6],
///
///
    [[-1,0,0,-1,0,0],[0,1],3],
    [[-1,0,0,-1,1,1],[0,0],3],
    [[-1,0,0,-1,0,1],[1,1],6],
///
    [[-1,1,0,-1,0,0],[0,1],6],
    [[-1,1,0,-1,1,1],[0,0],6],
    [[-1,1,0,-1,0,1],[0,0],6],
    [[-1,1,0,-1,1,0],[0,1],6],
///
    [[-1,1,1,-1,0,0],[0,0],6],
    [[-1,1,1,-1,1,1],[0,1],6],
    [[-1,1,1,-1,0,1],[1,0],6],
    [[-1,1,1,-1,1,0],[0,0],6], //
///
    [[-1,1,2,-1,0,0],[0,1],3],
    [[-1,1,2,-1,1,1],[0,0],3],
    [[-1,1,2,-1,0,1],[0,0],6],
///
///
    [[-1,2,0,-1,0,0],[2,1],6],
    [[-1,2,0,-1,1,1],[1,1],6],
    [[-1,2,0,-1,0,1],[0,0],6],
    [[-1,2,0,-1,1,0],[0,1],6],
///
    [[-1,2,1,-1,0,0],[0,0],3],
    [[-1,2,1,-1,1,1],[0,1],3],
    [[-1,2,1,-1,0,1],[2,1],6],
///
///
    [[0,0,0,0,1,1],[0,0],3],
    [[0,0,0,1,0,0],[0,1],3],
///
    [[0,1,0,0,1,1],[0,0],6],
    [[0,1,0,1,0,0],[1,0],6],
///
    [[0,1,2,0,1,1],[0,0],3],
    [[0,1,2,1,0,0],[0,1],3],
///
    [[0,2,0,0,1,1],[1,1],6],
    [[0,2,0,1,0,0],[2,1],6],
///
    [[0,2,1,0,1,1],[0,1],3],
    [[0,2,1,1,0,0],[2,1],3],
///
    [[0,2,2,0,1,1],[0,1],6],
    [[0,2,2,1,0,0],[2,1],6],
///
///
    [[1,0,0,0,1,1],[1,1],6],
    [[1,0,0,1,0,0],[0,1],6],
///
    [[1,1,0,0,1,1],[1,1],6],
    [[1,1,0,1,0,0],[1,0],6],
///
    [[1,1,2,0,1,1],[2,0],6],
    [[1,1,2,1,0,0],[2,1],6],
///
    [[1,2,0,0,1,1],[1,1],6],
    [[1,2,0,1,0,0],[2,1],6],
///
    [[1,2,1,0,1,1],[0,1],6],
    [[1,2,1,1,0,0],[2,1],6],
///
    [[1,2,2,0,1,1],[1,1],6],
    [[1,2,2,1,0,0],[2,1],6],
///
///
    [[2,1,0,0,1,1],[2,1],6],
    [[2,1,0,1,0,0],[0,1],6],
///
    [[2,2,0,0,1,1],[2,1],6],
    [[2,2,0,1,0,0],[0,1],6],
///
    [[2,2,2,0,1,1],[0,1],6],
    [[2,2,2,1,0,0],[1,1],6],
///
///
    [[0,-1,-1,0,-1,-1],[-2,-2],3],
    [[0,-1,-1,1,-1,-1],[-2,-2],3],
///
    [[1,-1,-1,0,-1,-1],[-2,-2],6],
    [[1,-1,-1,1,-1,-1],[-2,-2],6],
///
///
    [[-1,-1,-1,-1,-1,-1],[-1,-1],1],
  ];
}
}

