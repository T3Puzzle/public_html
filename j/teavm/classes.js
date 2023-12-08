"use strict";
(function(root,module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(root,exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(global,exports);}else{module(root,root);}}(typeof self!=='undefined'?self:this,function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,
cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,
cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,
data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),
data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data)
{var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data)
{var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:
jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element
=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays
=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),
arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),
arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]
=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+
0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"
?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix
=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if
(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass
=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f)
{return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f)
{return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target)
{return target.$clinit=function(){};}var $rt_numberConversionBuffer=new $rt_globals.ArrayBuffer(16);var $rt_numberConversionView=new $rt_globals.DataView($rt_numberConversionBuffer);var $rt_numberConversionFloatArray=new $rt_globals.Float32Array($rt_numberConversionBuffer);var $rt_numberConversionDoubleArray=new $rt_globals.Float64Array($rt_numberConversionBuffer);var $rt_numberConversionIntArray=new $rt_globals.Int32Array($rt_numberConversionBuffer);var $rt_doubleToRawLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt
!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else if(typeof $rt_globals.BigInt64Array!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,
true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32));};}else {var $rt_numberConversionLongArray=new $rt_globals.BigInt64Array($rt_numberConversionBuffer);$rt_doubleToRawLongBits=function(n){$rt_numberConversionDoubleArray[0]=n;return $rt_numberConversionLongArray[0];};$rt_longBitsToDouble=function(n){$rt_numberConversionLongArray[0]=n;return $rt_numberConversionDoubleArray[0];};}function $rt_floatToRawIntBits(n){$rt_numberConversionFloatArray[0]=n;return $rt_numberConversionIntArray[0];}function $rt_intBitsToFloat(n){$rt_numberConversionIntArray[0]
=n;return $rt_numberConversionFloatArray[0];}function $rt_equalDoubles(a,b){if(a!==a){return b!==b;}$rt_numberConversionDoubleArray[0]=a;$rt_numberConversionDoubleArray[1]=b;return $rt_numberConversionIntArray[0]===$rt_numberConversionIntArray[2]&&$rt_numberConversionIntArray[1]===$rt_numberConversionIntArray[3];}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,
[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString()
:null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "
+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName
="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if
(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val,
 -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(lo))
|$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32)));};Long_fromInt=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val|0));};Long_fromNumber=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val)));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val)
{return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.dB=f;}
function $rt_cls(cls){return GU(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Kb(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.w.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return J4(t);}
function $rt_throwableCause(t){return J7(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Kx());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return Ky(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var R=$rt_throw;var Ik=$rt_compare;var Kz=$rt_nullCheck;var Q=$rt_cls;var V=$rt_createArray;var Kf=$rt_isInstance;var KA=$rt_nativeThread;var KB=$rt_suspending;var KC=$rt_resuming;var KD=$rt_invalidPointer;var D=$rt_s;var X=$rt_eraseClinit;var IF=$rt_imul;var FH=$rt_wrapException;var KE=$rt_checkBounds;var KF=$rt_checkUpperBound;var KG=$rt_checkLowerBound;var KH=$rt_wrapFunction0;var KI=$rt_wrapFunction1;var KJ=$rt_wrapFunction2;var KK=$rt_wrapFunction3;var KL=$rt_wrapFunction4;var E=$rt_classWithoutFields;var Cs
=$rt_createArrayFromData;var KM=$rt_createCharArrayFromData;var KN=$rt_createByteArrayFromData;var KO=$rt_createShortArrayFromData;var KP=$rt_createIntArrayFromData;var KQ=$rt_createBooleanArrayFromData;var KR=$rt_createFloatArrayFromData;var KS=$rt_createDoubleArrayFromData;var KT=$rt_createLongArrayFromData;var KU=$rt_createBooleanArray;var FL=$rt_createByteArray;var KV=$rt_createShortArray;var BP=$rt_createCharArray;var Kt=$rt_createIntArray;var KW=$rt_createLongArray;var KX=$rt_createFloatArray;var KY=$rt_createDoubleArray;var Ik
=$rt_compare;var KZ=$rt_castToClass;var K0=$rt_castToInterface;var K1=$rt_equalDoubles;var K2=Long_toNumber;var K3=Long_fromInt;var K4=Long_fromNumber;var K5=Long_create;var K6=Long_ZERO;var K7=Long_hi;var K8=Long_lo;
function B(){this.$id$=0;}
function B_(a){return GU(a.constructor);}
function Jg(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=D(0);else{if(!d)f=32;else{g=0;f=d>>>16|0;if(f)g=16;else f=d;h=f>>>8|0;if(!h)h=f;else g=g|8;i=h>>>4|0;if(!i)i=h;else g=g|4;f=i>>>2|0;if(!f)f=i;else g=g|2;if(f>>>1|0)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=BP(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){i=f+1|0;l[f]=D6((d>>>j|0)&15,16);j=j-4|0;f=i;}e=Kb(k);}b=W();P(P(b,D(1)),e);return U(b);}
function JL(a){var b,c,d;if(!Kf(a,CG)&&a.constructor.$meta.item===null){b=new Eq;Bf(b);R(b);}b=Ib(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var Gf=E();
function Kh(b){var c,d,e,f,g,h;Gp();Gw();GL();Hx();Ht();Gd();Gq();c=$rt_globals.window.document;d=Da($rt_str(c.getElementById("h_type").textContent));e=Da($rt_str(c.getElementById("h_level").textContent));f=C(0,0);C(0,0);if(d<10)f=EE(ID(d,e,0,f));else if(d<20)f=K(Ke(d,e,0,f,1));else if(e){Bz();f=(O(K9,e,d,0)).cz(f);}else if(d<23){BN();f=C9(CP(K$,d,0),f);}else if(d<25){BK();f=C9(Dd(K_,d,0),f);}else if(d>=27){BL(BS(),D(2));f=null;}else{C8();f=C9(DE(La,d,0),f);}if(f===null)f=EE(ID(1,1,0,Lb));g=f.S();h=D(3);if(Bd(g)
>0){f=W();P(P(Bi(f,91),g),D(4));h=U(f);}f=c.getElementById("h_textformat");h=$rt_ustr(h);f.textContent=h;}
var EJ=E(0);
var Er=E(0);
function ES(){B.call(this);this.Z=null;}
function GU(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new ES;c.Z=b;d=c;b.classObject=d;}return c;}
function C0(a){return a.Z.$meta.primitive?1:0;}
function CO(a){return GU(a.Z.$meta.item);}
var HF=E();
function Go(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function DG(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Hj=E();
function Ib(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function GX(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(GX(d[e],c))return 1;e=e+1|0;}return 0;}
function CC(){var a=this;B.call(a);a.dy=null;a.dv=null;a.b6=0;a.ci=0;}
function Lc(a){var b=new CC();Bk(b,a);return b;}
function Ld(a){var b=new CC();GS(b,a);return b;}
function Bk(a,b){a.b6=1;a.ci=1;a.dy=b;}
function GS(a,b){a.b6=1;a.ci=1;a.dv=b;}
function Im(a){return a;}
function J4(a){return a.dy;}
function J7(a){var b;b=a.dv;if(b===a)b=null;return b;}
var B4=E(CC);
function Le(){var a=new B4();Bf(a);return a;}
function Bf(a){a.b6=1;a.ci=1;}
var Bc=E(B4);
function Ky(a){var b=new Bc();I4(b,a);return b;}
function I4(a,b){Bk(a,b);}
var Ho=E(Bc);
var BZ=E(0);
var BJ=E(0);
var C5=E(0);
function BT(){var a=this;B.call(a);a.w=null;a.bn=0;}
var Lf=null;var Lg=null;var Lh=null;function C_(){C_=X(BT);II();}
function Kb(a){var b=new BT();EN(b,a);return b;}
function Js(a,b,c){var d=new BT();F2(d,a,b,c);return d;}
function EN(a,b){C_();F2(a,b,0,b.data.length);}
function F2(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;C_();e=BP(d);a.w=e;if(b===null){f=new CQ;Bk(f,D(5));R(f);}if(c>=0&&d>=0&&(c+d|0)<=DU(b)&&(0+d|0)<=DU(e)){a:{b:{c:{if(b!==e){g=CO(B_(b));f=CO(B_(e));if(g!==null&&f!==null){if(g===f)break c;if(!C0(g)&&!C0(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;m=k[j];n=f.Z;if(!(m!==null&&!(typeof m.constructor.$meta==='undefined'?1:0)&&GX(m.constructor,n)?1:0)){DY(b,c,e,0,i);g=new C2;Bf(g);R(g);}i=i+1|0;j=l;}DY(b,c,e,0,d);break a;}if(!C0(g))break b;if(C0(f))break c;else break b;}g
=new C2;Bf(g);R(g);}}DY(b,c,e,0,d);break a;}g=new C2;Bf(g);R(g);}return;}g=new Br;Bf(g);R(g);}
function Be(a,b){var c,d;if(b>=0){c=a.w.data;if(b<c.length)return c[b];}d=new DT;Bf(d);R(d);}
function Bd(a){return a.w.data.length;}
function FA(a){return a.w.data.length?0:1;}
function CU(a,b,c){var d,e;d=Ik(b,c);if(d>0){e=new Br;Bf(e);R(e);}if(!d){C_();return Lg;}if(!b&&c==Bd(a))return a;return Js(a.w,b,c-b|0);}
function CJ(a,b){var c,d,e;c=Bd(a)-Bd(b)|0;d=0;while(d<=c){e=0;while(true){if(e>=Bd(b))return 1;if(Be(a,d+e|0)!=Be(b,e))break;e=e+1|0;}d=d+1|0;}return 0;}
function Bs(a,b,c){var d,e,f,g;d=W();e=Bd(a)-Bd(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Bd(b)){P(d,c);f=f+(Bd(b)-1|0)|0;break a;}if(Be(a,f+g|0)!=Be(b,g))break;g=g+1|0;}Bi(d,Be(a,f));}f=f+1|0;}P(d,CU(a,f,Bd(a)));return U(d);}
function Ed(b){C_();if(b===null)b=D(6);return b;}
function FM(b){var c,d;C_();c=new BT;d=BP(1);d.data[0]=b;EN(c,d);return c;}
function B3(a,b){var c;if(a===b)return 1;if(!(b instanceof BT))return 0;if(Bd(b)!=Bd(a))return 0;c=0;while(c<Bd(b)){if(Be(a,c)!=Be(b,c))return 0;c=c+1|0;}return 1;}
function IO(a){var b,c,d,e;a:{if(!a.bn){b=a.w.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.bn=(31*a.bn|0)+e|0;d=d+1|0;}}}return a.bn;}
function II(){var b,c;b=BP(0);Lf=b;c=new BT;C_();c.w=b;Lg=c;Lh=new F4;}
var Cz=E(CC);
var CF=E(Cz);
var G8=E(CF);
var D5=E();
function Ci(){D5.call(this);this.bB=0;}
var Li=null;var Lj=null;function Iy(a){var b=new Ci();F6(b,a);return b;}
function F6(a,b){a.bB=b;}
function BA(b){return (EZ(Ko(20),b,10)).bf();}
function Da(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;if(b===null){b=new BI;Bk(b,D(7));R(b);}c=Bd(b);if(0==c){b=new BI;Bk(b,D(8));R(b);}a:{d=0;switch(Be(b,0)){case 43:break;case 45:d=1;e=1;break a;default:e=0;break a;}e=1;}f=0;if(e==c){b=new BI;Bf(b);R(b);}b:{c:{while(e<c){g=e+1|0;h=Be(b,e);if(Lk===null){if(Ll===null)Ll=G9();i=(Ll.value!==null?$rt_str(Ll.value):null);j=new FS;k=i.w.data;l=BP(k.length);m=l.data;e=0;n=m.length;while(e<n){m[e]=k[e];e=e+1|0;}j.dq=l;n=Hg(j);k=Kt(n*2|0);l=k.data;o=0;p=0;q=0;r=0;while
(r<n){p=p+GA(j)|0;q=q+GA(j)|0;s=o+1|0;l[o]=p;o=s+1|0;l[s]=q;r=r+1|0;}Lk=k;}k=Lk.data;n=0;o=(k.length/2|0)-1|0;d:{while(o>=n){p=(n+o|0)/2|0;e=p*2|0;q=Ik(h,k[e]);if(q>0)n=p+1|0;else{if(q>=0){n=k[e+1|0];break d;}o=p-1|0;}}n=(-1);}if(n<0){i=new BI;b=Ed(CU(b,0,c));j=W();P(P(j,D(9)),b);Bk(i,U(j));R(i);}if(n>=10){i=new BI;b=Ed(CU(b,0,c));j=W();P(P(Bm(P(j,D(10)),10),D(11)),b);Bk(i,U(j));R(i);}f=(10*f|0)+n|0;if(f<0){if(g!=c)break b;if(f!=(-2147483648))break b;if(!d)break b;f=(-2147483648);break c;}e=g;}if(d)f= -f|0;}return f;}i
=new BI;b=Ed(CU(b,0,c));j=W();P(P(j,D(12)),b);Bk(i,U(j));R(i);}
function Z(b){var c,d;if(b>=(-128)&&b<=127){a:{if(Lj===null){Lj=V(Ci,256);c=0;while(true){d=Lj.data;if(c>=d.length)break a;d[c]=Iy(c-128|0);c=c+1|0;}}}return Lj.data[b+128|0];}return Iy(b);}
function Ge(a){return a.bB;}
function Jt(a,b){if(a===b)return 1;return b instanceof Ci&&b.bB==a.bB?1:0;}
function Gp(){Li=Q($rt_intcls());}
function DC(){var a=this;B.call(a);a.n=null;a.m=0;}
function Ko(a){var b=new DC();GF(b,a);return b;}
function GF(a,b){a.n=BP(b);}
function EZ(a,b,c){return Hd(a,a.m,b,c);}
function Hd(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)CZ(a,b,b+1|0);else{CZ(a,b,b+2|0);f=a.n.data;g=b+1|0;f[b]=45;b=g;}a.n.data[b]=D6(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=IF(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;CZ(a,b,b+i|0);if(e)e=b;else{f=a.n.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.n.data;b=e+1|0;f[e]=D6($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function Fd(a,b){var c,d,e,f,g;c=a.n.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Cb(b,Cb(c*2|0,5));e=a.n.data;f=BP(d);g=f.data;b=B8(d,e.length);c=0;while(c<b){g[c]=e[c];c=c+1|0;}a.n=f;}
function U(a){return Js(a.n,0,a.m);}
function CZ(a,b,c){var d,e,f,g;d=a.m;e=d-b|0;a.b$((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.n.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.m=a.m+(c-b|0)|0;}
var DH=E(0);
var Gn=E(DC);
function W(){var a=new Gn();Jf(a);return a;}
function Jf(a){GF(a,16);}
function P(a,b){var c;c=a.m;if(b===null)b=D(6);FW(a,c,b);return a;}
function S(a,b){FW(a,a.m,b);return a;}
function Bm(a,b){EZ(a,b,10);return a;}
function Bi(a,b){var c;c=a.m;CZ(a,c,c+1|0);a.n.data[c]=b;return a;}
function Jb(a){return U(a);}
function JI(a,b){Fd(a,b);}
function FW(a,b,c){var d,e,f;if(b>=0&&b<=a.m){a:{if(c===null)c=D(6);else if(FA(c))break a;Fd(a,a.m+Bd(c)|0);d=a.m-1|0;while(d>=b){a.n.data[d+Bd(c)|0]=a.n.data[d];d=d+(-1)|0;}a.m=a.m+Bd(c)|0;d=0;while(d<Bd(c)){e=a.n.data;f=b+1|0;e[b]=Be(c,d);d=d+1|0;b=f;}}return a;}c=new DT;Bf(c);R(c);}
var Cp=E(CF);
var G2=E(Cp);
function Lm(a){var b=new G2();Jn(b,a);return b;}
function Jn(a,b){Bk(a,b);}
var GO=E(Cp);
function Ln(a){var b=new GO();Jz(b,a);return b;}
function Jz(a,b){Bk(a,b);}
var BC=E(0);
var Eh=E(0);
var Ep=E(0);
var BM=E(0);
var GB=E(0);
var EY=E(0);
function Bp(){var a=this;B.call(a);a.j=0;a.k=0;}
var Lb=null;var Lo=null;var Lp=null;var Lq=null;function Cd(a,b){var c=new Bp();HB(c,a,b);return c;}
function EB(b){var c;c=b%6|0;if(c>=0)b=c%6|0;else{if(c<0)c= -c|0;b=(6-(c%6|0)|0)%6|0;}return b;}
function C(b,c){return Cd(b,c);}
function Dw(b){var c,d,e,f,g;if(b!==null&&b.A()){c=(b.h(0)).j;d=(b.h(0)).k;e=1;f=c;g=d;while(e<b.A()){f=B8(f,(b.h(e)).j);c=Cb(c,(b.h(e)).j);g=B8(g,(b.h(e)).k);d=Cb(d,(b.h(e)).k);e=e+1|0;}return Ct(f,g,c-f|0,d-g|0);}return Ct(0,0,1,1);}
function HB(a,b,c){a.j=b;a.k=c;}
function BF(a,b){return Cd(a.j+b.j|0,a.k+b.k|0);}
function Ew(a,b){return Cd(a.j-b.j|0,a.k-b.k|0);}
function C$(a){var b,c,d;b=a.j;c=a.k;d=W();Bm(Bi(Bm(d,b),44),c);return U(d);}
function Gw(){Lb=Cd(0,0);Lo=Cd(2,0);Lp=Cd(0,2);Lq=Cd(2,2);}
function GW(){var a=this;B.call(a);a.fx=0;a.gO=0;a.gy=0;a.fN=null;}
function Hs(){B.call(this);this.e8=null;}
var Fi=E();
var Lr=null;function BS(){var b;if(Lr===null){b=new EW;b.dJ=Ls;b.bz=W();b.dM=BP(32);b.eE=0;Iq();b.dz=Lt;Lr=b;}return Lr;}
function Kg(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=DU(b)&&(e+f|0)<=DU(d)){DY(b,c,d,e,f);return;}b=new Br;Bf(b);R(b);}
function DY(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
var HT=E();
var FV=E(0);
var Fo=E(0);
var Fg=E(0);
var E1=E(0);
var Fk=E(0);
var FB=E(0);
var Fu=E(0);
var FG=E(0);
var GQ=E();
function IW(a,b){b=a.h(b);Fp();return b===null?null:b instanceof $rt_objcls()&&b instanceof BU?D8(b):b;}
function Id(a,b,c){a.fC($rt_str(b),DG(c,"handleEvent"));}
function J8(a,b,c){a.fm($rt_str(b),DG(c,"handleEvent"));}
function IT(a,b,c,d){a.fM($rt_str(b),DG(c,"handleEvent"),d?1:0);}
function I1(a,b){return !!a.fK(b);}
function Jr(a){return a.gs();}
function H_(a,b,c,d){a.gK($rt_str(b),DG(c,"handleEvent"),d?1:0);}
var Fs=E(0);
var F4=E();
var Br=E(Bc);
var GG=E();
function DU(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Lu());}return b.data.length;}
function Hq(b,c){if(b===null){b=new CQ;Bf(b);R(b);}if(b===Q($rt_voidcls())){b=new BO;Bf(b);R(b);}if(c>=0)return I9(b.Z,c);b=new F5;Bf(b);R(b);}
function I9(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var CQ=E(Bc);
var C2=E(Bc);
var Cc=E();
var Lv=null;var Lk=null;var Lw=null;var Ll=null;function E5(b){return (b&64512)!=55296?0:1;}
function EU(b){return (b&64512)!=56320?0:1;}
function D6(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GL(){Lv=Q($rt_charcls());Lw=V(Cc,128);}
function G9(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
var BO=E(Bc);
function Ka(a){var b=new BO();JZ(b,a);return b;}
function JZ(a,b){Bk(a,b);}
var BI=E(BO);
function BU(){B.call(this);this.de=null;}
var Lx=null;var Ly=null;var Lz=null;var LA=null;var LB=null;var LC=null;function Fp(){Fp=X(BU);Jx();}
function ED(a){var b=new BU();Gs(b,a);return b;}
function Gs(a,b){Fp();a.de=b;}
function D8(b){Fp();if(b!==null)return b.de;return null;}
function Eu(b){var c,d;Fp();if(b===null)return null;if(b instanceof $rt_objcls())b=b;else a:{b=b;if(b===null)b=null;else{b:{c=b;if(Ly!==null){d=$rt_str(typeof c);if(!B3(d,D(13))&&!B3(d,D(14))){if(B3(d,D(15))){b=Lz.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=ED(c);d=b;Lz.set(c,new $rt_globals.WeakRef(d));E6(LB,d,c);break a;}if(!B3(d,D(16)))break b;else{b=LA.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b
=ED(c);d=b;LA.set(c,new $rt_globals.WeakRef(d));E6(LC,d,c);break a;}}b=Ly.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=ED(c);Ly.set(c,new $rt_globals.WeakRef(b));break a;}}b=ED(c);}}return b;}
function Jx(){Lx=new $rt_globals.WeakMap();Ly=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();Lz=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();LA=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();LB=Lz===null?null:new $rt_globals.FinalizationRegistry(Go(new FE,"accept"));LC=LA===null?null:new $rt_globals.FinalizationRegistry(Go(new FF,"accept"));}
function E6(b,c,d){return b.register(c,d);}
var Hf=E();
var GJ=E();
var HP=E();
var D9=E(0);
var FE=E();
function Jp(a,b){var c;b=Eu(b);c=Lz;b=D8(b);c.delete(b);}
var G7=E();
var FF=E();
function Ic(a,b){var c;b=Eu(b);c=LA;b=D8(b);c.delete(b);}
var HR=E();
var Hi=E();
function FS(){var a=this;B.call(a);a.dq=null;a.ds=0;}
var GZ=E();
function Hg(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.dq.data;f=b.ds;b.ds=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+IF(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function GA(b){var c,d;c=Hg(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var HU=E();
var DT=E(Br);
var BV=E(0);
function Gj(){var a=this;B.call(a);a.dg=0;a.dk=0;a.bc=0;a.bi=null;}
function ID(a,b,c,d){var e=new Gj();Jo(e,a,b,c,d);return e;}
function Jo(a,b,c,d,e){a.dg=b;a.dk=c;a.bc=d;a.bi=e;}
function EE(a){var b,c;BL(BS(),D(17));CW();b=Hm(Bw(LD,a.dk-1|0));c=a.dg;if(!c)b=b.l;else{if(c!=1){if(c!=2)return Dm(HH(a.bc,a.bi),D(18));return Dm(HH(a.bc,a.bi),D(19));}b=b.s;}if(!CJ(b,D(0))&&!CJ(b,D(20)))return FR(IE(a.bc,a.bi),b);return Dm(HH(a.bc,a.bi),b);}
function GP(){var a=this;B.call(a);a.bD=0;a.O=0;a.b5=0;a.bU=null;a.db=0;}
function M(a,b,c,d){var e=new GP();JU(e,a,b,c,d);return e;}
function Ke(a,b,c,d,e){var f=new GP();GV(f,a,b,c,d,e);return f;}
function JU(a,b,c,d,e){GV(a,b,c,d,e,0);}
function GV(a,b,c,d,e,f){a.bD=b;a.O=c;a.b5=d;a.bU=e;a.db=f;}
function K(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;if(!a.db){b=a.bD;if(b==10){Ck();c=(CM(LE,a.O)).K;}else if(b!=11){Ck();c=(CM(LE,a.O)).X;}else{Ck();c=(CM(LE,a.O)).bb;}return FR(IE(a.b5,a.bU),c);}d=a.bD;if(d==10){Ck();c=(D2(LE,a.O)).K;}else if(d!=11){Ck();c=(D2(LE,a.O)).X;}else{Ck();c=(D2(LE,a.O)).bb;}d=a.b5;e=a.bU;if(c===null)c=CL((-1),d,d,e,e,V(DJ,0));else{b=Bd(c);f=I();g=0;h=0;if(b<=0){i=d;j=e;}else{k=Be(c,h);if(Hl(k)){l=W();Bi(l,k);g=GT(U(l));h=1;k=Be(c,h);}H(f,In(CI(k),BR(d,k),e,g));m=b-1|0;i=d;j=e;while(h<
m){h=h+1|0;n=Be(c,h);if(Hl(n)){l=W();Bi(l,n);g=GT(U(l));h=h+1|0;n=Be(c,h);}o=BR(i,k);i=Fl(i,k);j=BF(j,k!=88&&k!=68?(n==68?Bq(o,C((-8),(-4))):n!=88?Bq(o,C((-2),(-4))):Bq(o,C((-6),(-6)))):Bq(o,C(2,4)));H(f,In(CI(n),BR(i,n),j,g));k=n;}}c=CL((-1),d,i,e,j,Ev(f,V(DJ,0)));}return c;}
function GI(){var a=this;B.call(a);a.e3=0;a.f_=0;a.gr=0;a.f2=null;}
function GD(){var a=this;B.call(a);a.gw=0;a.eZ=0;a.ga=null;}
function Bh(){var a=this;B.call(a);a.er=null;a.dR=0;}
function BE(a,b,c){a.er=b;a.dR=c;}
function CE(){Bh.call(this);this.cj=null;}
var LD=null;var LF=null;function CW(){CW=X(CE);H0();}
function Bw(a,b){var c,d,e;c=a.cj;d=c.t;if(b<d)return J(c,b);c=J(c,d-1|0);b=b+1|0;while(d<b){e=Ji(c,0);H(a.cj,e);d=d+1|0;c=e;}return c;}
function H0(){var b,c,d,e;b=new CE;CW();BE(b,D(21),0);c=I();b.cj=c;d=new FJ;d.cp=0;d.l=D(22);d.s=D(23);d.dp=null;H(c,d);LD=b;e=V(CE,1);e.data[0]=b;LF=e;}
var FK=E(0);
function FJ(){var a=this;B.call(a);a.cp=0;a.l=null;a.s=null;a.dp=null;}
function Ji(a,b){var c=new FJ();IK(c,a,b);return c;}
function IK(a,b,c){var d,e,f,g;a.dp=b;a.cp=b.cp+1|0;if(!c){d=b.l;e=b.s;a.l=Bs(Bs(D(24),D(25),d),D(26),e);e=b.l;f=b.s;a.s=Bs(Bs(D(27),D(25),e),D(26),f);}else{d=b.l;e=b.s;g=d!==D(22)?D(28):D(29);a.l=Bs(Bs(g,D(25),d),D(26),e);e=b.l;f=b.s;a.s=Bs(Bs(e!==D(22)?D(30):D(31),D(25),e),D(26),f);}}
function Hm(b){return Ji(b,1);}
function Gu(){var a=this;B.call(a);a.bE=0;a.C=0;a.ca=null;a.L=null;a.dZ=null;a.cl=0;}
function HH(a,b){var c=new Gu();JW(c,a,b);return c;}
function He(b){return CJ(D(32),FM(b));}
function Hc(b){var c,$$je;a:{try{c=Da(b);}catch($$e){$$je=FH($$e);if($$je instanceof BI){break a;}else{throw $$e;}}return c;}return (-1);}
function JW(a,b,c){a.bE=b;a.C=b;a.ca=c;a.L=c;a.dZ=D(22);a.cl=(-1);}
function Dm(a,b){var c,d,e,f,g,h,i,j,k,l;if(b===null)return CL(a.cl,a.bE,a.C,a.ca,a.L,V(Fv,0));a:{c=Bd(b);d=I();e=0;f=0;if(c>0){g=Be(b,f);if(He(g)){h=W();Bi(h,g);e=Hc(U(h));f=1;g=Be(b,f);}H(d,Jv(CI(g),BR(a.C,g),a.L,e));i=c-1|0;while(true){if(f>=i)break a;f=f+1|0;j=Be(b,f);if(He(j)){h=W();Bi(h,j);e=Hc(U(h));f=f+1|0;j=Be(b,f);}k=BR(a.C,g);a.C=Fl(a.C,g);a.L=BF(a.L,g!=88&&g!=68?(j==68?Bq(k,C((-8),(-4))):j!=88?Bq(k,C((-2),(-4))):Bq(k,C((-6),(-6)))):Bq(k,C(2,4)));H(d,Jv(CI(j),BR(a.C,j),a.L,e));g=j;}}}l=Ev(d,V(BQ,
0));return CL(a.cl,a.bE,a.C,a.ca,a.L,l);}
function HO(){var a=this;B.call(a);a.bK=0;a.z=0;a.b_=null;a.I=null;a.eg=null;a.bF=0;}
function IE(a,b){var c=new HO();JF(c,a,b);return c;}
function JF(a,b,c){a.bK=b;a.z=b;a.b_=c;a.I=c;a.eg=D(22);a.bF=(-1);}
function FR(a,b){var c,d,e,f,g,h,i;if(b===null)return CL(a.bF,a.bK,a.z,a.b_,a.I,V(BQ,0));a:{c=Bd(b);d=V(BQ,c);if(c>0){e=d.data;f=Be(b,0);e[0]=JS(CI(f),BR(a.z,f),a.I);g=1;while(true){if(g>=Bd(b))break a;h=Be(b,g);i=BR(a.z,f);a.z=Fl(a.z,f);a.I=BF(a.I,f!=88&&f!=68?(h==68?Bq(i,C((-8),(-4))):h!=88?Bq(i,C((-2),(-4))):Bq(i,C((-6),(-6)))):Bq(i,C(2,4)));e[g]=JS(CI(h),BR(a.z,h),a.I);g=g+1|0;f=h;}}}return CL(a.bF,a.bK,a.z,a.b_,a.I,d);}
function CD(){Bh.call(this);this.bS=null;}
var LE=null;var LG=null;function Ck(){Ck=X(CD);IU();}
function CM(a,b){var c,d,e,f,g;c=a.bS;d=c.t;if(b<d)return J(c,b);c=J(c,d-1|0);e=b+1|0;while(d<e){f=new Dl;f.bL=c;g=c.v+1|0;f.v=g;f.K=Ip(c,g-1|0);f.bb=Jm(f.v);f.X=Ia(f.v);H(a.bS,f);d=d+1|0;c=f;}return c;}
function D2(a,b){var c,d,e,f,g,h,i,j;if(!b)return JT(1);c=CM(a,b-1|0);d=new Dl;d.bL=c;b=c.v+1|0;d.v=b;b=b-1|0;e=c.K;CW();f=(Bw(LD,b)).l;g=(Bw(LD,b)).s;c=e!==D(22)?D(33):D(22);h=f!==D(22)?D(0):D(22);i=W();Bi(P(P(P(P(P(i,h),D(34)),h),D(34)),c),78);d.K=Bs(Bs(Bs(U(i),D(25),f),D(26),g),D(35),e);b=d.v;d.bb=b<2?(Bw(LD,b)).l:(Hm(Bw(LD,b-1|0))).l;b=d.v;j=(Bw(LD,b)).l;i=(Bw(LD,b)).s;if(j===D(22)){c=W();P(Bi(c,49),i);c=U(c);}else{c=W();P(Bi(P(Bi(P(Bi(c,48),j),49),i),48),j);c=U(c);}d.X=c;return d;}
function IU(){var b,c,d;b=new CD;Ck();BE(b,D(21),0);c=I();b.bS=c;H(c,JT(0));LE=b;d=V(CD,1);d.data[0]=b;LG=d;}
function Gi(){var a=this;B.call(a);a.gE=0;a.e6=0;a.gH=null;a.fe=null;a.gm=null;a.e2=0;}
function Hl(b){return CJ(D(32),FM(b));}
function GT(b){var c,$$je;a:{try{c=Da(b);}catch($$e){$$je=FH($$e);if($$je instanceof BI){break a;}else{throw $$e;}}return c;}return (-1);}
function B$(){Bh.call(this);this.Q=null;}
var K9=null;var LH=null;var LI=null;function Bz(){Bz=X(B$);IG();}
function Fj(a,b){var c,d,e,f,g,h,i,j,k;Bz();c=LH.data;d=0;e=c.length;Gt(b);f=0;a:{while(!f){b:{while(d<e){g=d+1|0;f=Bx(b,c[d]);if(!(f?0:1)){d=g;break b;}d=g;}}if(!(d>=e?0:1))break a;}}if(!f){BL(BS(),D(36));return null;}if(FI(a.Q,b)===null?0:1)return Cr(a.Q,b);if(Bx(b,LJ)){h=EV();Bb(a.Q,b,h);return h;}if(Bx(b,LJ)){BL(BS(),D(37));i=LJ;}else{d=b.F;i=d?F1(b.G,d-1|0):F1(b.G-1|0,2);}Fj(a,i);if(Bx(b,LJ))i=EV();else if(Bx(b,Ba(0,1))){i=BW(Ba(0,1));h=i.f;j=Z(23);BK();Bb(h,j,Dr(K_,23));Bb(i.f,Z(24),Dr(K_,24));}else if
(Bx(b,Ba(0,2))){i=BW(Ba(0,2));h=i.f;j=Z(25);C8();Bb(h,j,D_(La,25));Bb(i.f,Z(26),D_(La,26));}else if(Bx(b,Ba(1,0)))i=Gh();else if(!Bx(b,Ba(1,1))){if(Bx(b,Ba(1,2))){i=BW(Ba(1,2));Bb(i.f,Z(25),H5());Bb(i.f,Z(26),Hw());}else i=Bx(b,Ba(2,0))?Ih():Bx(b,Ba(2,1))?IC():!Bx(b,Ba(2,2))?null:I0();}else{i=BW(Ba(1,1));h=i.f;j=Z(23);k=I();e=0;while(e<6){H(k,By(1,23,e,J(F9(),e),Bg(J(F9(),e)),null));e=e+1|0;}Bb(h,j,k);h=i.f;j=Z(24);k=I();e=0;while(e<6){H(k,By(1,24,e,J(G3(),e),Bg(J(G3(),e)),null));e=e+1|0;}Bb(h,j,k);}Bb(a.Q,
b,i);return i;}
function O(a,b,c,d){var e,f,g,h;if(b<0)b= -b|0;e=d>=0?d%6|0:( -d|0)%6|0;Bz();f=Ba(b,c!=25&&c!=26?(c!=23&&c!=24?0:1):2);if(Fj(a,f)!==null)return Fz(Cr(a.Q,f),c,e);g=BS();f=Ft(f);h=W();P(P(h,D(38)),f);BL(g,U(h));return Fz(Gh(),20,0);}
function IG(){var b,c,d;b=new B$;Bz();BE(b,D(21),0);c=J0();b.Q=c;Bb(c,LJ,EV());K9=b;d=V(B$,1);d.data[0]=b;LI=d;LH=Cs(Dj,[LJ,Ba(0,1),Ba(0,2),Ba(1,0),Ba(1,1),Ba(1,2),Ba(2,0),Ba(2,1),Ba(2,2)]);}
function Ch(){Bh.call(this);this.R=null;}
var K$=null;var LK=null;function BN(){BN=X(Ch);JC();}
function CP(a,b,c){return (J(a.R,b-20|0)).h(c);}
function BG(a,b,c,d){if(b!=20&&b!=21&&b!=22)return Cn(20,c,d);return Cn(b,c,d);}
function CH(a,b){return J(a.R,b-20|0);}
function JC(){var b,c,d,e,f,g,h,i;b=new Ch;BN();BE(b,D(21),0);b.R=I();c=I();d=0;while(d<6){e=new Bj;BD();Ca(e,20,d,J(LL,d),J(LM,d),Bg(J(LM,d)),null);H(c,e);d=d+1|0;}H(b.R,c);c=I();d=0;while(d<6){f=new Bj;BD();Ca(f,21,d,J(LN,d),J(LO,d),Bg(J(LO,d)),null);H(c,f);d=d+1|0;}H(b.R,c);e=I();g=0;while(g<6){h=new Bj;BD();Ca(h,22,g,J(LP,g),J(LQ,g),Bg(J(LQ,g)),null);H(e,h);g=g+1|0;}H(b.R,e);K$=b;i=V(Ch,1);i.data[0]=b;LK=i;}
var C6=E(0);
var F3=E(0);
function Bj(){var a=this;B.call(a);a.b1=0;a.cn=0;a.bs=null;a.dw=null;a.d_=null;a.bH=null;}
var LR=null;var LM=null;var LS=null;var LL=null;var LT=null;var LO=null;var LU=null;var LV=null;var LN=null;var LQ=null;var LW=null;var LP=null;function BD(){BD=X(Bj);J2();}
function LX(a,b,c,d,e,f){var g=new Bj();Ca(g,a,b,c,d,e,f);return g;}
function Bg(b){var c,d;BD();if(Gg(b))return Ct(0,0,1,1);c=(b.h(0)).B;if(c===null)c=Ct(0,0,1,1);d=1;while(d<b.A()){c=(b.h(d)).B!==null?(b.h(d)).B:Ct(0,0,1,1);d=d+1|0;}return c;}
function Ca(a,b,c,d,e,f,g){BD();a.b1=b;a.cn=c;a.bs=e;a.bH=f;a.d_=g;}
function Iv(a){return a.cn;}
function JB(a){return a.bH;}
function G0(a){var b;b=a.dw;if(!(b!==null&&!b.bW()))H(I(),Lb);return a.dw;}
function If(a){return a.b1;}
function C9(a,b){var c,d,e,f,g,h,i,j,k;c=a.bs.A();d=V(DO,c);e=d.data;f=0;while(f<c){g=a.bs.h(f);h=DL(g);i=BF(g.p,b);e[f]=J1(EF(DQ(g)),h,i,g.ba);f=f+1|0;}j=new Dv;k=a.b1;c=a.cn;b=Lb;E7(j,k,c,c,b,b,d);return j;}
function Cn(b,c,d){var e,f;BD();if(b<23){e=new CT;BN();D0(e,CP(K$,b,c),d);return e;}if(b>=25){f=new CT;C8();D0(f,DE(La,b,c),d);return f;}e=new CT;BK();D0(e,Dd(K_,b,c),d);return e;}
function H9(a,b){return C9(a,b);}
function J2(){var b,c,d,e,f;b=V(Cj,2);c=b.data;Bn();c[0]=Cg(LY,1,0,Lb);c[1]=Cg(LY,1,3,C((-8),2));LR=Bv(b);d=new Em;Bu(d);e=0;while(e<6){f=Lb;BD();H(d,F(20,Bl(e,f,LR)));e=e+1|0;}LM=d;LS=Bv(Cs(Bp,[Lb,C((-8),2)]));d=new En;Bu(d);e=0;while(e<6){f=Lb;BD();H(d,BH(e,f,LS));e=e+1|0;}LL=d;LT=Bv(Cs(Cj,[Cg(LY,1,1,Lb),Cg(LY,1,3,C((-2),2)),Cg(LY,1,5,C((-4),(-2)))]));d=new Ei;Bu(d);e=0;while(e<6){f=Lb;BD();H(d,F(21,Bl(e,f,LT)));e=e+1|0;}LO=d;LU=Bv(V(Cj,0));LV=Bv(Cs(Bp,[Lb,C((-2),2),C((-4),(-2))]));d=new Ej;Bu(d);e=0;while
(e<6){f=Lb;BD();H(d,BH(e,f,LV));e=e+1|0;}LN=d;d=new Ek;Bu(d);e=0;while(e<6){f=Lb;BD();H(d,Bl(e,f,LU));e=e+1|0;}LQ=d;b=V(Bp,1);b.data[0]=Lb;LW=Bv(b);d=new El;Bu(d);e=0;while(e<6){BD();H(d,LW);e=e+1|0;}LP=d;}
function Co(){Bh.call(this);this.W=null;}
var K_=null;var LZ=null;function BK(){BK=X(Co);IQ();}
function Dd(a,b,c){if(b<23){BN();return CP(K$,b,c);}if(b>=25){C8();return DE(La,b,c);}return (J(a.W,b-23|0)).h(c);}
function Bo(a,b,c,d){if(b!=20&&b!=21&&b!=22){if(b!=23&&b!=24)return Cn(b,c,d);return Cn(b,c,d);}return Cn(b,c,d);}
function Dr(a,b){if(b<23){BN();return CH(K$,b);}if(b>=25){C8();return D_(La,b);}return J(a.W,b-23|0);}
function IQ(){var b,c,d,e,f,g,h;b=new Co;BK();BE(b,D(21),0);b.W=I();c=I();d=0;while(d<6){e=new B6;Ce();D7(e,23,d,J(L0,d),J(FC(),d),Bg(J(FC(),d)),null);H(c,e);d=d+1|0;}H(b.W,c);e=I();f=0;while(f<6){g=new B6;Ce();D7(g,24,f,J(L1,f),J(Fm(),f),Bg(J(Fm(),f)),null);H(e,g);f=f+1|0;}H(b.W,e);K_=b;h=V(Co,1);h.data[0]=b;LZ=h;}
var B6=E(Bj);
var L2=null;var L0=null;var L3=null;var L1=null;function Ce(){Ce=X(B6);JH();}
function L4(a,b,c,d,e,f){var g=new B6();D7(g,a,b,c,d,e,f);return g;}
function D7(a,b,c,d,e,f,g){Ce();Ca(a,b,c,d,e,f,g);}
function FC(){var b,c,d;Ce();b=I();c=I();BN();G(c,F(20,(BG(K$,20,0,Lb)).e));G(c,F(20,(BG(K$,20,2,C(16,8))).e));G(c,F(20,(BG(K$,20,4,C(8,16))).e));Bn();G(c,F(10,L(LY,K(M(10,1,4,Lb)))));G(c,F(10,L(LY,K(M(10,1,0,C(16,8))))));G(c,F(10,L(LY,K(M(10,1,2,C(8,16))))));G(c,F(21,(BG(K$,21,0,C(10,8))).e));H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function HD(){var b;Ce();b=I();BN();G(b,F(20,(BG(K$,20,3,C(0,0))).e));G(b,F(20,(BG(K$,20,5,C(30,(-12)))).e));G(b,F(20,(BG(K$,20,1,C(42,30))).e));Bn();G(b,F(10,L(LY,K(M(10,1,4,C(8,(-2)))))));G(b,F(10,L(LY,K(M(10,1,0,C(32,(-2)))))));G(b,F(10,L(LY,K(M(10,1,2,C(32,22))))));G(b,F(21,(BG(K$,21,0,C(18,6))).e));G(b,F(21,(BG(K$,21,0,C(26,(-2)))).e));G(b,F(21,(BG(K$,21,0,C(34,14))).e));G(b,F(10,L(LY,K(M(10,1,0,C(24,6))))));G(b,F(10,L(LY,K(M(10,1,2,C(24,6))))));G(b,F(10,L(LY,K(M(10,1,4,C(24,6))))));return b;}
function Fm(){var b,c,d;Ce();b=I();c=HD();H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function JH(){var b,c,d,e,f;b=V(Bp,3);c=b.data;d=Lb;c[0]=d;c[1]=d;c[2]=d;L2=Bv(b);d=new EH;Bu(d);e=0;while(e<6){f=Lb;Ce();H(d,BH(e,f,L2));e=e+1|0;}L0=d;b=V(Bp,3);c=b.data;d=Lb;c[0]=d;c[1]=d;c[2]=d;L3=Bv(b);d=new EI;Bu(d);e=0;while(e<6){f=Lb;Ce();H(d,BH(e,f,L3));e=e+1|0;}L1=d;}
function Cy(){Bh.call(this);this.bk=null;}
var La=null;var L5=null;function C8(){C8=X(Cy);Ij();}
function DE(a,b,c){if(b<23){BN();return CP(K$,b,c);}if(b<25){BK();return Dd(K_,b,c);}return (J(a.bk,b-25|0)).h(c);}
function D_(a,b){if(b<23){BN();return CH(K$,b);}if(b<25){BK();return Dr(K_,b);}return J(a.bk,b-25|0);}
function Ij(){var b,c,d,e,f,g,h,i;b=new Cy;C8();BE(b,D(21),0);b.bk=I();c=I();d=0;while(d<6){e=new B5;Cf();Dx(e,25,d,J(L6,d),J(EL(),d),Bg(J(EL(),d)),null);H(c,e);d=d+1|0;}f=I();g=0;while(g<6){h=new B5;Cf();Dx(h,26,g,J(L7,g),J(E9(),g),Bg(J(E9(),g)),null);H(f,h);g=g+1|0;}H(b.bk,c);H(b.bk,f);La=b;i=V(Cy,1);i.data[0]=b;L5=i;}
var B5=E(Bj);
var L8=null;var L6=null;var L9=null;var L7=null;function Cf(){Cf=X(B5);HY();}
function L$(a,b,c,d,e,f){var g=new B5();Dx(g,a,b,c,d,e,f);return g;}
function Dx(a,b,c,d,e,f,g){Cf();Ca(a,b,c,d,e,f,g);}
function Gl(){var b;Cf();b=I();BK();G(b,F(23,(Bo(K_,23,0,Lb)).e));G(b,F(24,(Bo(K_,24,1,C((-8),8))).e));G(b,F(24,(Bo(K_,24,0,C(10,56))).e));G(b,F(23,(Bo(K_,23,1,C(36,78))).e));Bn();G(b,F(11,L(LY,K(M(11,1,5,C(18,24))))));G(b,F(11,L(LY,K(M(11,1,4,C(26,46))))));G(b,F(11,L(LY,K(M(11,1,1,C(18,48))))));G(b,F(11,L(LY,K(M(11,1,2,C(26,70))))));G(b,F(20,(Bo(K_,20,0,C(26,46))).e));return b;}
function EL(){var b,c,d;Cf();b=I();c=Gl();H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function E9(){var b,c,d;Cf();b=I();c=I();BK();G(c,F(24,(Bo(K_,24,0,Lb)).e));G(c,F(23,(Bo(K_,23,1,C(0,(-24)))).e));G(c,F(23,(Bo(K_,23,1,C(46,(-4)))).e));G(c,F(23,(Bo(K_,23,1,C(26,22))).e));Bn();G(c,F(11,L(LY,K(M(11,1,0,C(40,14))))));G(c,F(11,L(LY,K(M(11,1,2,C(16,14))))));G(c,F(11,L(LY,K(M(11,1,4,C(16,(-10)))))));H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function HY(){var b,c,d,e,f;b=V(Bp,3);c=b.data;d=Lb;c[0]=d;c[1]=d;c[2]=d;L8=Bv(b);d=new Ex;Bu(d);e=0;while(e<6){f=Lb;Cf();H(d,BH(e,f,L8));e=e+1|0;}L6=d;b=V(Bp,3);c=b.data;d=Lb;c[0]=d;c[1]=d;c[2]=d;L9=Bv(b);d=new Ey;Bu(d);e=0;while(e<6){f=Lb;Cf();H(d,BH(e,f,L9));e=e+1|0;}L7=d;}
var D4=E(0);
var EQ=E(0);
var Fy=E(0);
var Cx=E();
function Dz(){Cx.call(this);this.dJ=null;}
function EW(){var a=this;Dz.call(a);a.eE=0;a.b9=0;a.bz=null;a.dM=null;a.dz=null;}
function E0(a,b,c,d){var e,$$je;e=a.dJ;if(e===null)a.b9=1;if(!(a.b9?0:1))return;a:{try{Hu(e,b,c,d);break a;}catch($$e){$$je=FH($$e);if($$je instanceof Fq){}else{throw $$e;}}a.b9=1;}}
function BL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;Bi(S(a.bz,b),10);b=a.bz;c=b.m;d=a.dM;if(c>d.data.length)d=BP(c);e=0;f=0;if(e>c){b=new Br;Bk(b,D(39));R(b);}while(e<c){g=d.data;h=f+1|0;i=b.n.data;j=e+1|0;g[f]=i[e];f=h;e=j;}i=d.data;e=c-0|0;k=new Fh;j=i.length;h=0+e|0;EG(k,j);k.o=0;k.y=h;k.cL=0;k.eM=0;k.dD=d;d=FL(Cb(16,B8(e,1024)));e=d.data.length;b=new Fa;h=0+e|0;EG(b,e);Jk();b.eX=L_;b.dm=0;b.c8=d;b.o=0;b.y=h;b.dV=0;b.cM=0;l=a.dz;m=new F0;i=FL(1);g=i.data;g[0]=63;I3();n=Ma;m.cb=n;m.cd=n;f=g.length;if(f&&f>=
m.cu){m.ec=l;m.c5=i.dB();m.en=2.0;m.cu=4.0;m.cK=BP(512);m.df=FL(512);l=Mb;if(l===null){l=new BO;Bk(l,D(40));R(l);}m.cb=l;m.cd=l;while(m.bx!=3){m.bx=2;a:{while(true){try{l=G5(m,k,b);}catch($$e){$$je=FH($$e);if($$je instanceof Bc){b=$$je;l=new Fc;GS(l,b);R(l);}else{throw $$e;}}if(l.bd?0:1){e=B0(k);if(e<=0)break a;l=DI(e);}else if(DD(l))break;n=!E$(l)?m.cb:m.cd;b:{if(n!==Mb){if(n===Mc)break b;else break a;}e=B0(b);i=m.c5;c=i.data.length;if(e<c){l=Md;break a;}Fb(b,i,0,c);}c=k.o;if(!HE(l)){b=new CX;Bf(b);R(b);}Eg(k,
c+l.dj|0);}}e=DD(l);E0(a,d,0,b.o);Fe(b);if(!e){while(true){e=m.bx;if(e!=2&&e!=4)break;l=Me;if(l===l)m.bx=3;f=DD(l);E0(a,d,0,b.o);Fe(b);if(!f){a.bz.m=0;return;}}b=new Ds;Bf(b);R(b);}}b=new Ds;Bf(b);R(b);}R(Ka(D(41)));}
function Dc(){Cx.call(this);this.d2=null;}
var DP=E(Dc);
var Ls=null;function Hu(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Ht(){var b;b=new DP;b.d2=FL(1);Ls=b;}
function Dt(){var a=this;B.call(a);a.dS=null;a.d9=null;}
function HM(b){var c,d;if(FA(b))R(GE(b));if(!HN(Be(b,0)))R(GE(b));c=1;while(c<Bd(b)){a:{d=Be(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(HN(d))break a;else R(GE(b));}}c=c+1|0;}}
function HN(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Ea=E(Dt);
var Lt=null;function Iq(){Iq=X(Ea);H$();}
function H$(){var b,c,d,e,f;b=new Ea;Iq();c=V(BT,0);d=c.data;HM(D(42));e=d.length;f=0;while(f<e){HM(d[f]);f=f+1|0;}b.dS=D(42);b.d9=c.dB();Lt=b;}
function Dj(){var a=this;B.call(a);a.G=0;a.F=0;}
var LJ=null;function F1(a,b){var c=new Dj();Gk(c,a,b);return c;}
function Ba(b,c){return F1(b,c);}
function Gk(a,b,c){a.G=b;a.F=c;}
function I6(a){var b,c,d,e;b=V(B,2).data;b[0]=Z(a.F);b[1]=Z(a.G);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e!==null?Ge(e):0)|0;d=d+1|0;}return c;}
function Bx(a,b){var c;if(a===b)return 1;if(b!==null&&B_(a)===B_(b)){c=b;return a.F==c.F&&a.G==c.G?1:0;}return 0;}
function Ft(a){var b,c,d;b=a.G;c=a.F;d=W();Bi(Bm(Bi(Bm(Bi(d,40),b),44),c),41);return U(d);}
function Hx(){LJ=F1(0,0);}
var EK=E(0);
var DM=E(0);
var De=E();
function Gg(a){return a.A()?0:1;}
function Ev(a,b){var c,d,e,f,g,h;c=b.data;d=a.t;e=c.length;if(e<d)b=Hq(CO(B_(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BX(a);while(BY(f)){g=b.data;h=e+1|0;g[e]=B2(f);e=h;}return b;}
function G(a,b){var c,d;c=0;d=BX(b);while(BY(d)){if(!H(a,B2(d)))continue;c=1;}return c;}
var FP=E(0);
var EA=E(0);
function Cu(){De.call(this);this.bp=0;}
function BX(a){var b;b=new E3;b.dh=a;b.c1=a.bp;b.c4=a.A();b.cJ=(-1);return b;}
var CG=E(0);
var DR=E(0);
function Y(){var a=this;Cu.call(a);a.U=null;a.t=0;}
function I(){var a=new Y();Bu(a);return a;}
function Bu(a){a.U=V(B,10);}
function GK(a,b){var c,d,e,f,g;c=a.U.data.length;if(c<b){d=c>=1073741823?2147483647:Cb(b,Cb(c*2|0,5));e=a.U;f=e.data;g=Hq(CO(B_(e)),d);b=B8(d,f.length);d=0;while(d<b){g.data[d]=f[d];d=d+1|0;}a.U=g;}}
function J(a,b){var c;if(b>=0&&b<a.t)return a.U.data[b];c=new Br;Bf(c);R(c);}
function IZ(a){return a.t;}
function H(a,b){var c,d;GK(a,a.t+1|0);c=a.U.data;d=a.t;a.t=d+1|0;c[d]=b;a.bp=a.bp+1|0;return 1;}
var FN=E(0);
function Dl(){var a=this;B.call(a);a.v=0;a.K=null;a.bb=null;a.X=null;a.bL=null;}
function JT(a){var b=new Dl();HW(b,a);return b;}
function Ip(b,c){var d,e,f;d=b.K;CW();e=(Bw(LD,c)).l;f=(Bw(LD,c)).s;return Bs(Bs(Bs(D(43),D(25),e),D(26),f),D(35),d);}
function Jm(b){CW();return (Bw(LD,b)).l;}
function Ia(b){var c,d,e;CW();c=(Bw(LD,b)).l;d=(Bw(LD,b)).s;e=W();P(P(P(e,c),d),c);return U(e);}
function HW(a,b){a.v=0;a.K=D(22);a.bb=D(22);a.X=D(22);a.bL=null;}
var EC=E(0);
var DX=E();
function Hr(){var a=this;DX.call(a);a.be=0;a.u=null;a.bC=0;a.dC=0.0;a.b8=0;}
function J0(){var a=new Hr();H1(a);return a;}
function H1(a){var b;b=Ha(16);a.be=0;a.u=V(CV,b);a.dC=0.75;FD(a);}
function Ha(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function FD(a){a.b8=a.u.data.length*a.dC|0;}
function Cr(a,b){var c;c=FI(a,b);if(c===null)return null;return c.br;}
function FI(a,b){var c,d;if(b===null)c=FU(a);else{d=b.bo();c=EM(a,b,d&(a.u.data.length-1|0),d);}return c;}
function EM(a,b,c,d){var e,f;e=a.u.data[c];while(e!==null){if(e.bR==d){f=e.cm;if(b!==f&&!b.bX(f)?0:1)break;}e=e.bl;}return e;}
function FU(a){var b;b=a.u.data[0];while(b!==null&&b.cm!==null){b=b.bl;}return b;}
function Bb(a,b,c){var d,e,f;if(b===null){d=FU(a);if(d===null){a.bC=a.bC+1|0;d=Fw(a,null,0,0);e=a.be+1|0;a.be=e;if(e>a.b8)FO(a);}}else{e=b.bo();f=e&(a.u.data.length-1|0);d=EM(a,b,f,e);if(d===null){a.bC=a.bC+1|0;d=Fw(a,b,f,e);e=a.be+1|0;a.be=e;if(e>a.b8)FO(a);}}b=d.br;d.br=c;return b;}
function Fw(a,b,c,d){var e,f,g;e=new CV;f=null;e.cm=b;e.br=f;e.bR=d;g=a.u.data;e.bl=g[c];g[c]=e;return e;}
function FO(a){var b,c,d,e,f,g,h,i;b=a.u.data.length;b=Ha(!b?1:b<<1);c=V(CV,b);d=c.data;e=0;f=b-1|0;while(true){g=a.u.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.bR&f;i=h.bl;h.bl=d[b];d[b]=h;h=i;}e=e+1|0;}a.u=c;FD(a);}
function F_(){var a=this;B.call(a);a.ce=null;a.f=null;a.ei=null;}
function BW(a){var b=new F_();Je(b,a);return b;}
function EV(){var b,c,d;b=BW(Ba(0,0));c=b.f;d=Z(20);BN();Bb(c,d,CH(K$,20));Bb(b.f,Z(21),CH(K$,21));Bb(b.f,Z(22),CH(K$,22));return b;}
function Gh(){var b,c,d,e,f;b=BW(Ba(1,0));Bb(b.f,Z(20),DK());Bb(b.f,Z(21),Hn());c=b.f;d=Z(22);e=I();f=0;while(f<6){H(e,By(1,22,f,J(F7(),f),Bg(J(F7(),f)),null));f=f+1|0;}Bb(c,d,e);return b;}
function Ih(){var b,c,d,e,f,g,h;b=BW(Ba(2,0));c=b.f;d=Z(20);e=I();f=0;while(f<6){H(e,By(2,20,f,J(HJ(),f),Bg(J(HJ(),f)),null));f=f+1|0;}Bb(c,d,e);c=b.f;d=Z(21);g=I();h=0;while(h<6){H(g,By(2,21,h,J(Hk(),h),Bg(J(Hk(),h)),null));h=h+1|0;}Bb(c,d,g);Bb(b.f,Z(22),Hw());return b;}
function IC(){var b,c,d,e,f,g;b=BW(Ba(2,1));c=b.f;d=Z(23);e=I();f=0;while(f<6){H(e,By(2,23,f,J(Gv(),f),Bg(J(Gv(),f)),null));f=f+1|0;}Bb(c,d,e);c=b.f;d=Z(24);g=I();f=0;while(f<6){H(g,By(2,24,f,J(HQ(),f),Bg(J(HQ(),f)),null));f=f+1|0;}Bb(c,d,g);return b;}
function I0(){var b,c,d,e,f,g;b=BW(Ba(2,2));c=b.f;d=Z(25);e=I();f=0;while(f<6){H(e,By(2,25,f,J(Gm(),f),Bg(J(Gm(),f)),null));f=f+1|0;}Bb(c,d,e);c=b.f;d=Z(26);g=I();f=0;while(f<6){H(g,By(2,26,f,J(HL(),f),Bg(J(HL(),f)),null));f=f+1|0;}Bb(c,d,g);return b;}
function Je(a,b){var c,d;c=J0();d=null;a.ce=b;a.f=c;a.ei=d;}
function Dn(a){return a.ce.F;}
function Fz(a,b,c){var d,e,f;if(b<23&&!Dn(a))return (Cr(a.f,Z(b))).h(c);if(b<25&&Dn(a)==1)return (Cr(a.f,Z(b))).h(c);if(b<27&&Dn(a)==2)return (Cr(a.f,Z(b))).h(c);d=BS();e=Ft(a.ce);f=W();P(Bi(Bm(P(f,D(44)),b),32),e);BL(d,U(f));return null;}
var Df=E(0);
function EF(b){if(B3(D(45),b))return 0;if(B3(D(46),b))return 1;if(B3(D(47),b))return 3;BL(BS(),D(48));return 3;}
var Do=E(0);
var C3=E(0);
var Cj=E(0);
function Bl(b,c,d){var e,f,g,h;e=I();f=BX(d);while(BY(f)){g=B2(f);h=BF(Bq(b,Ew(g.p,c)),c);Bn();H(e,Cg(LY,EF(DQ(g)),(DL(g)+b|0)%6|0,h));}return e;}
var Cw=E(Bh);
var LY=null;var Mf=null;function Bn(){Bn=X(Cw);I$();}
function L(a,b){var c,d,e,f,g,h;c=b.cq.data;d=I();e=c.length;f=0;while(f<e){g=c[f];h=g.V;if(!h)H(d,IB(g.x,g.D));else if(h==1)H(d,Jq(g.x,g.D));else if(h==3)H(d,HC(g.x,g.D));f=f+1|0;}return d;}
function Cg(a,b,c,d){b=b%6|0;c=c%6|0;if(!b)return IB(c,d);if(b==1)return Jq(c,d);if(b!=3)return HC(c,d);return HC(c,d);}
function I$(){var b,c;b=new Cw;Bn();BE(b,D(21),0);LY=b;c=V(Cw,1);c.data[0]=b;Mf=c;}
var G4=E();
function Bv(b){var c;Gt(b);c=new ER;c.cc=b;return c;}
var Em=E(Y);
var En=E(Y);
var Ei=E(Y);
var Ej=E(Y);
var Ek=E(Y);
var El=E(Y);
function Gc(){var a=this;B.call(a);a.bO=0;a.bN=0;a.b7=0;a.bT=0;}
function Ct(a,b,c,d){var e=new Gc();Iz(e,a,b,c,d);return e;}
function Iz(a,b,c,d,e){a.bO=b;a.bN=c;a.b7=d;a.bT=e;}
var GC=E();
function Gt(b){if(b!==null)return b;b=new CQ;Bk(b,D(22));R(b);}
function ER(){Cu.call(this);this.cc=null;}
function HX(a,b){return a.cc.data[b];}
function IR(a){return a.cc.data.length;}
var HA=E();
function F(b,c){var d;d=BX(c);while(BY(d)){(B2(d)).ba=b;}return c;}
function F$(){var b,c,d;b=I();c=I();BK();G(c,F(25,(Bo(K_,25,0,Lb)).e));G(c,F(26,(Bo(K_,26,0,C(30,30))).e));G(c,F(26,(Bo(K_,26,1,C((-28),34))).e));Bn();G(c,F(12,L(LY,K(M(12,1,0,C(50,70))))));G(c,F(12,L(LY,K(M(12,1,3,C((-6),24))))));H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function Gz(){var b,c,d;b=I();c=I();BK();G(c,F(23,(Bo(K_,23,0,Lb)).e));G(c,F(25,(Bo(K_,25,5,C((-52),4))).e));G(c,F(25,(Bo(K_,25,3,C(64,68))).e));G(c,F(25,(Bo(K_,25,1,C(12,(-48)))).e));Bn();G(c,F(12,L(LY,K(M(12,1,1,C((-8),2))))));G(c,F(12,L(LY,K(M(12,1,3,C(14,(-2)))))));G(c,F(12,L(LY,K(M(12,1,5,C(18,24))))));H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function F7(){var b,c,d;b=I();c=I();BK();G(c,F(26,(Bo(K_,26,0,Lb)).e));H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function F9(){var b,c,d;b=I();c=I();G(c,F(20,(N(J(DK(),0),C((-92),(-40)))).c));G(c,F(20,(N(J(DK(),2),C(128,46))).c));G(c,F(20,(N(J(DK(),4),C(42,180))).c));Bn();G(c,F(10,L(LY,K(M(10,2,4,C(0,0))))));G(c,F(10,L(LY,K(M(10,2,2,C((-10),88))))));G(c,F(10,L(LY,K(M(10,2,0,C(88,98))))));G(c,F(21,(N(J(Hn(),0),C(18,54))).c));H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function IS(){var b;b=I();Bz();G(b,F(22,(N(O(K9,1,22,0),Lb)).c));G(b,F(21,(N(O(K9,1,21,0),C(18,(-66)))).c));G(b,F(21,(N(O(K9,1,21,0),C(80,64))).c));G(b,F(21,(N(O(K9,1,21,0),C((-50),(-4)))).c));G(b,F(20,(N(O(K9,1,20,0),C((-160),(-98)))).c));G(b,F(20,(N(O(K9,1,20,4),C(104,190))).c));G(b,F(20,(N(O(K9,1,20,2),C(128,(-74)))).c));Bn();G(b,F(10,L(LY,K(M(10,2,4,C(62,10))))));G(b,F(10,L(LY,K(M(10,2,2,C((-10),(-32)))))));G(b,F(10,L(LY,K(M(10,2,0,C(20,40))))));G(b,F(10,L(LY,K(M(10,2,4,C((-68),(-58)))))));G(b,F(10,L(LY,
K(M(10,2,2,C(52,98))))));G(b,F(10,L(LY,K(M(10,2,0,C(88,(-22)))))));return b;}
function G3(){var b,c,d;b=I();c=IS();H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function JA(){var b;b=I();Bz();G(b,F(24,(N(O(K9,1,24,0),Lb)).c));G(b,F(24,(N(O(K9,1,24,1),C((-44),170))).c));G(b,F(23,(N(O(K9,1,23,1),C(234,(-36)))).c));G(b,F(23,(N(O(K9,1,23,0),C((-226),148))).c));G(b,F(20,(N(O(K9,1,20,1),C(24,78))).c));Bn();G(b,F(11,L(LY,K(M(11,2,5,C(76,170))))));G(b,F(11,L(LY,K(M(11,2,2,C((-78),30))))));G(b,F(11,L(LY,K(M(11,2,0,C(150,108))))));G(b,F(11,L(LY,K(M(11,2,3,C((-152),92))))));return b;}
function G6(){var b,c,d;b=I();c=JA();H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function HV(){var b,c,d;b=I();c=I();Bz();G(c,F(24,(N(O(K9,1,24,0),Lb)).c));G(c,F(23,(N(O(K9,1,23,1),C(234,(-36)))).c));G(c,F(23,(N(O(K9,1,23,1),C(76,170))).c));G(c,F(23,(N(O(K9,1,23,1),C((-130),(-194)))).c));Bn();G(c,F(11,L(LY,K(M(11,2,0,C(150,108))))));G(c,F(11,L(LY,K(M(11,2,2,C((-78),30))))));G(c,F(11,L(LY,K(M(11,2,4,C(0,(-120)))))));H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function HJ(){var b,c,d;b=I();c=I();Bz();G(c,F(25,(N(O(K9,1,25,5),Lb)).c));G(c,F(26,(N(O(K9,1,26,0),C(328,8))).c));G(c,F(26,(N(O(K9,1,26,1),C((-170),164))).c));Bn();G(c,F(12,L(LY,K(M(12,2,0,C(320,322))))));G(c,F(12,L(LY,K(M(12,2,3,C((-120),(-120)))))));H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function Hk(){var b,c,d;b=I();c=I();Bz();G(c,F(23,(N(O(K9,1,23,0),Lb)).c));G(c,F(25,(N(O(K9,1,25,5),C(194,64))).c));G(c,F(25,(N(O(K9,1,25,1),C(24,228))).c));G(c,F(25,(N(O(K9,1,25,3),C((-140),(-106)))).c));Bn();G(c,F(12,L(LY,K(M(12,2,1,C((-140),14))))));G(c,F(12,L(LY,K(M(12,2,3,C(74,(-56)))))));G(c,F(12,L(LY,K(M(12,2,5,C(144,228))))));H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function H6(){var b;b=I();Bz();G(b,F(21,(N(O(K9,2,21,0),C((-200),(-200)))).c));G(b,F(20,(N(O(K9,2,20,0),C((-1030),(-672)))).c));G(b,F(20,(N(O(K9,2,20,4),C(148,718))).c));G(b,F(20,(N(O(K9,2,20,2),C(360,(-460)))).c));Bn();G(b,F(10,L(LY,K(M(10,3,4,C((-338),(-626)))))));G(b,F(10,L(LY,K(M(10,3,2,C((-498),26))))));G(b,F(10,L(LY,K(M(10,3,0,C(314,186))))));return b;}
function Gv(){var b,c,d;b=I();c=H6();H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function Iu(){var b;b=I();Bz();G(b,F(22,(N(O(K9,2,22,0),Lb)).c));G(b,F(21,(N(O(K9,2,21,0),C(14,(-560)))).c));G(b,F(21,(N(O(K9,2,21,0),C(502,464))).c));G(b,F(21,(N(O(K9,2,21,0),C((-522),(-72)))).c));G(b,F(20,(N(O(K9,2,20,0),C((-1352),(-544)))).c));G(b,F(20,(N(O(K9,2,20,4),C(850,1382))).c));G(b,F(20,(N(O(K9,2,20,2),C(574,(-820)))).c));Bn();G(b,F(10,L(LY,K(M(10,3,4,C(364,38))))));G(b,F(10,L(LY,K(M(10,3,2,C((-284),(-334)))))));G(b,F(10,L(LY,K(M(10,3,0,C((-8),314))))));G(b,F(10,L(LY,K(M(10,3,4,C((-660),(-498)))))));G(b,
F(10,L(LY,K(M(10,3,2,C(204,690))))));G(b,F(10,L(LY,K(M(10,3,0,C(528,(-174)))))));return b;}
function Ix(){var b;b=I();Bz();G(b,F(24,(N(O(K9,2,24,0),Lb)).c));G(b,F(24,(N(O(K9,2,24,1),C((-388),1462))).c));G(b,F(23,(N(O(K9,2,23,1),C(1430,54))).c));G(b,F(23,(N(O(K9,2,23,0),C((-1566),1750))).c));G(b,F(20,(N(O(K9,2,20,1),C((-172),646))).c));Bn();G(b,F(11,L(LY,K(M(11,3,5,C(474,1338))))));G(b,F(11,L(LY,K(M(11,3,2,C((-820),154))))));G(b,F(11,L(LY,K(M(11,3,0,C(1016,850))))));G(b,F(11,L(LY,K(M(11,3,3,C((-1362),642))))));return b;}
function IY(){var b;b=I();Bz();G(b,F(24,(N(O(K9,2,24,1),C((-388),1462))).c));G(b,F(23,(N(O(K9,2,23,0),C((-1566),1750))).c));G(b,F(23,(N(O(K9,2,23,0),C(1300,2994))).c));G(b,F(23,(N(O(K9,2,23,0),C((-322),128))).c));Bn();G(b,F(11,L(LY,K(M(11,3,3,C((-1362),642))))));G(b,F(11,L(LY,K(M(11,3,2,C((-1844),(-382)))))));G(b,F(11,L(LY,K(M(11,3,4,C(1498,1880))))));return b;}
function HQ(){var b,c,d;b=I();c=Iu();H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function Gm(){var b,c,d;b=I();c=Ix();H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function HL(){var b,c,d;b=I();c=IY();H(b,c);d=1;while(d<6){H(b,Bl(d,Lb,c));d=d+1|0;}return b;}
function DZ(){B.call(this);this.cQ=null;}
var Mg=null;function DS(){DS=X(DZ);JV();}
function Bq(b,c){var d;DS();switch(b%6|0){case 0:break;case 1:b=c.j;return C(b-c.k|0,b);case 2:d=c.k;return C( -d|0,c.j-d|0);case 3:return Cd((-1)*c.j|0,(-1)*c.k|0);case 4:b= -c.j|0;return C(b+c.k|0,b);default:b=c.k;return C(b,b-c.j|0);}return c;}
function BH(b,c,d){var e;DS();e=I();d=BX(d);while(BY(d)){H(e,BF(Bq(b,Ew(B2(d),c)),c));}return e;}
function Ef(b,c){var d,e;DS();a:{d=I();if(b!==null&&!b.bW()){b=b.eP();while(true){if(!b.eS())break a;e=b.eC();if(e instanceof Bp)H(d,e.dY(c));}}}return d;}
function Ff(b,c){DS();return Ct(b.bO+c.j|0,b.bN+c.k|0,b.b7,b.bT);}
function JV(){var b,c;b=new DZ;Jd();c=Mh;DS();if(c!==null)b.cQ=c;else{BL(BS(),D(49));b.cQ=Mh;}Mg=b;}
var EH=E(Y);
var EI=E(Y);
var Ex=E(Y);
var Ey=E(Y);
function Dg(){var a=this;B.call(a);a.dU=0;a.dt=null;}
var Mh=null;function Jd(){Jd=X(Dg);JP();}
function JP(){var b,c;b=new Dg;c=Lb;Jd();b.dU=0;if(c!==null)b.dt=c;else{BL(BS(),D(50));b.dt=Lb;}Mh=b;}
function HS(){BO.call(this);this.eq=null;}
function GE(a){var b=new HS();It(b,a);return b;}
function It(a,b){Bf(a);a.eq=b;}
var Eq=E(B4);
var FT=E(0);
function E3(){var a=this;B.call(a);a.bZ=0;a.c1=0;a.c4=0;a.cJ=0;a.dh=null;}
function BY(a){return a.bZ>=a.c4?0:1;}
function B2(a){var b,c,d;b=a.c1;c=a.dh;if(b<c.bp){c=new ET;Bf(c);R(c);}d=a.bZ;a.cJ=d;a.bZ=d+1|0;return c.h(d);}
var CR=E(0);
function B1(){var a=this;B.call(a);a.r=null;a.p=null;a.B=null;a.ba=0;}
function C4(a){var b,c;b=a.r.bP;c=a.p;return Ct(b.bO+c.j|0,b.bN+c.k|0,b.b7,b.bT);}
function DL(a){return a.r.co;}
function Io(a){return a.B;}
function DQ(a){return a.r.bw();}
function Jj(a){return a.p;}
function Ir(a,b){a.ba=b;}
function Is(a){return a.ba;}
var Et=E(B1);
function IB(a,b){var c=new Et();IJ(c,a,b);return c;}
function IJ(a,b,c){var d;IP();d=Mi;if(b<0)b= -b|0;b=b%6|0;a.r=J(d.cf,b);a.p=c;a.B=C4(a);}
function Ie(a,b){var c,d;c=new Et;d=a.r;b=BF(a.p,b);c.r=d;c.p=b;return c;}
var Fr=E(B1);
function Jq(a,b){var c=new Fr();HZ(c,a,b);return c;}
function HZ(a,b,c){var d;J6();d=Mj;if(b<0)b= -b|0;b=b%6|0;a.r=J(d.b2,b);a.p=c;a.B=C4(a);}
function IX(a,b){var c,d;c=new Fr;d=a.r;b=BF(a.p,b);c.r=d;c.p=b;return c;}
var FX=E(B1);
function HC(a,b){var c=new FX();JQ(c,a,b);return c;}
function JQ(a,b,c){var d;IM();d=Mk;if(b<0)b= -b|0;b=b%6|0;a.r=J(d.cg,b);a.p=c;a.B=C4(a);}
function Jh(a,b){var c,d;c=new FX;d=a.r;b=BF(a.p,b);c.r=d;c.p=b;c.B=C4(c);return c;}
var Ec=E(0);
function G1(){var a=this;B.call(a);a.em=0;a.eR=0;a.ef=null;a.eJ=null;a.cq=null;a.eW=0;}
function CL(a,b,c,d,e,f){var g=new G1();I_(g,a,b,c,d,e,f);return g;}
function I_(a,b,c,d,e,f,g){a.eW=b;a.em=c;a.eR=d;a.ef=e;a.eJ=f;a.cq=g;}
function IV(a){var b,c,d,e;b=W();c=a.cq.data;d=c.length;e=0;while(e<d){S(b,c[e].S());e=e+1|0;}return U(b);}
function BQ(){var a=this;B.call(a);a.V=0;a.x=0;a.D=null;}
function JS(a,b,c){var d=new BQ();Ez(d,a,b,c);return d;}
function CI(b){if(b!=68&&b!=88)return 1;return 3;}
function BR(b,c){if(c==88)b=b+5|0;if(c==68)b=b+3|0;return EB(b);}
function Fl(b,c){if(c==68)b=b+(-1)|0;if(c==88)b=b+1|0;return EB(b);}
function Ez(a,b,c,d){a.V=b;a.x=c;a.D=d;}
function I2(a){return a.V;}
function Ii(a){return a.x;}
function H3(a){return a.D;}
function JD(a){var b;b=W();S(b,BA(a.V));S(b,D(51));S(b,BA(a.x));S(b,D(51));S(b,C$(a.D));S(b,D(51));S(b,D(52));return U(b);}
function Fv(){BQ.call(this);this.cD=0;}
function Jv(a,b,c,d){var e=new Fv();JR(e,a,b,c,d);return e;}
function JR(a,b,c,d,e){Ez(a,b,c,d);a.cD=e;}
function Jy(a){var b;b=W();S(b,BA(a.V));S(b,D(51));S(b,BA(a.x));S(b,D(51));S(b,C$(a.D));S(b,D(51));S(b,BA(a.cD));S(b,D(51));S(b,D(52));return U(b);}
var DA=E(0);
function DJ(){BQ.call(this);this.dL=0;}
function In(a,b,c,d){var e=new DJ();JG(e,a,b,c,d);return e;}
function JG(a,b,c,d,e){Ez(a,b,c,d);a.dL=e;}
function IA(a){var b;b=W();S(b,BA(a.V));S(b,D(51));S(b,BA(a.x));S(b,D(51));S(b,C$(a.D));S(b,D(51));S(b,BA(a.dL));S(b,D(51));S(b,D(52));return U(b);}
var Eo=E(0);
function DW(){var a=this;B.call(a);a.cm=null;a.br=null;}
function CV(){var a=this;DW.call(a);a.bR=0;a.bl=null;}
function GN(){var a=this;B.call(a);a.ek=0;a.cU=0;a.cI=0;a.bh=null;a.eU=null;a.eD=null;a.ew=null;}
function By(a,b,c,d,e,f){var g=new GN();Iw(g,a,b,c,d,e,f);return g;}
function DK(){var b,c;b=I();c=0;while(c<6){H(b,By(1,20,c,J(F$(),c),Bg(J(F$(),c)),null));c=c+1|0;}return b;}
function Hn(){var b,c;b=I();c=0;while(c<6){H(b,By(1,21,c,J(Gz(),c),Bg(J(Gz(),c)),null));c=c+1|0;}return b;}
function H5(){var b,c;b=I();c=0;while(c<6){H(b,By(1,25,c,J(G6(),c),Bg(J(G6(),c)),null));c=c+1|0;}return b;}
function Hw(){var b,c;b=I();c=0;while(c<6){H(b,By(1,26,c,J(HV(),c),Bg(J(HV(),c)),null));c=c+1|0;}return b;}
function Iw(a,b,c,d,e,f,g){a.ek=b;a.cU=c;a.cI=d;a.bh=e;a.ew=f;a.eD=g;a.eU=I();}
function N(b,c){var d;d=new Fx;b=b;d.cZ=b;d.bu=c;d.eQ=Ff(Bg(b.bh),d.bu);d.c=I();b=BX(d.cZ.bh);while(BY(b)){c=B2(b);H(d.c,c.bm(d.bu));}d.d3=Ef(null,d.bu);return d;}
function J3(a,b){var c,d,e,f,g,h,i,j,k;c=a.bh.A();d=V(DO,c);e=d.data;f=0;while(f<c){g=a.bh.h(f);h=g.ba;i=DL(g);j=BF(g.p,b);e[f]=J1(EF(DQ(g)),i,j,h);f=f+1|0;}k=new Dv;h=a.cU;c=a.cI;b=Lb;E7(k,h,c,c,b,b,d);return k;}
function CA(){Bh.call(this);this.cf=null;}
var Mi=null;var Ml=null;function IP(){IP=X(CA);JX();}
function JX(){var b,c,d,e,f,g,h;b=new CA;IP();BE(b,D(21),0);b.cf=I();c=0;while(true){I5();d=Mm;if(c>=d.t)break;d=Dw(J(d,c));e=Mn;e.T=1;e.P=J(Mm,c);e=D$(e);f=b.cf;g=new CS;Du(g,c,e,d);H(f,g);c=c+1|0;}Mi=b;h=V(CA,1);h.data[0]=b;Ml=h;}
function Cv(){Bh.call(this);this.b2=null;}
var Mj=null;var Mo=null;function J6(){J6=X(Cv);H7();}
function H7(){var b,c,d,e,f,g,h;b=new Cv;J6();BE(b,D(21),0);b.b2=I();c=0;while(true){Il();d=Mp;if(c>=d.t)break;d=Dw(J(d,c));e=Mn;e.T=1;e.P=J(Mp,c);e=D$(e);f=b.b2;g=new CY;Du(g,c,e,d);H(f,g);c=c+1|0;}Mj=b;h=V(Cv,1);h.data[0]=b;Mo=h;}
function Cl(){Bh.call(this);this.cg=null;}
var Mk=null;var Mq=null;function IM(){IM=X(Cl);JE();}
function JE(){var b,c,d,e,f,g,h;b=new Cl;IM();BE(b,D(21),0);b.cg=I();c=0;while(true){Jc();d=Mr;if(c>=d.t)break;d=Dw(J(d,c));e=Mn;e.T=1;e.P=J(Mr,c);e=D$(e);f=b.cg;g=new C7;Du(g,c,e,d);H(f,g);c=c+1|0;}Mk=b;h=V(Cl,1);h.data[0]=b;Mq=h;}
var G_=E();
function B8(b,c){if(b<c)c=b;return c;}
function Cb(b,c){if(b>c)c=b;return c;}
var Dy=E(0);
var EX=E(0);
function CT(){var a=this;B.call(a);a.ey=null;a.ep=null;a.e=null;a.eK=null;a.et=null;}
function Ms(a,b){var c=new CT();D0(c,a,b);return c;}
function D0(a,b,c){var d,e;a.ey=b;a.ep=c;a.eK=Ff(b.bH,c);a.e=I();d=BX(b.bs);while(BY(d)){e=B2(d);H(a.e,e.bm(c));}a.et=Ef(G0(b),c);}
function Cq(){var a=this;B.call(a);a.dd=0;a.o=0;a.y=0;a.bt=0;}
function EG(a,b){a.bt=(-1);a.dd=b;a.y=b;}
function B0(a){return a.y-a.o|0;}
function B9(a){return a.o>=a.y?0:1;}
var FZ=E(0);
var Dp=E(Cq);
function Eg(a,b){var c,d,e;if(b>=0&&b<=a.y){a.o=b;if(b<a.bt)a.bt=0;return a;}c=new BO;d=a.y;e=W();Bi(Bm(P(Bm(P(e,D(53)),b),D(54)),d),93);Bk(c,U(e));R(c);}
function D1(){var a=this;Cq.call(a);a.dm=0;a.c8=null;a.eX=null;}
function Fb(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.cM){e=new FQ;Bf(e);R(e);}if(B0(a)<d){e=new E_;Bf(e);R(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Br;j=W();Bm(P(Bm(P(j,D(55)),h),D(56)),g);Bk(i,U(j));R(i);}if(d<0){e=new Br;i=W();P(Bm(P(i,D(57)),d),D(58));Bk(e,U(i));R(e);}h=a.o;k=h+a.dm|0;l=0;while(l<d){b=a.c8.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.o=h+d|0;return a;}}b=b.data;e=new Br;d=b.length;i=W();Bi(Bm(P(Bm(P(i,D(59)),c),D(54)),d),41);Bk(e,U(i));R(e);}
function Fe(a){a.o=0;a.y=a.dd;a.bt=(-1);return a;}
function CK(){B.call(this);this.d6=null;}
var Mc=null;var Mb=null;var Ma=null;function I3(){I3=X(CK);H8();}
function G$(a){var b=new CK();HI(b,a);return b;}
function HI(a,b){I3();a.d6=b;}
function H8(){Mc=G$(D(60));Mb=G$(D(61));Ma=G$(D(62));}
var Dh=E(Dp);
function Fh(){var a=this;Dh.call(a);a.eM=0;a.cL=0;a.dD=null;}
function Db(){var a=this;B.call(a);a.ec=null;a.c5=null;a.en=0.0;a.cu=0.0;a.cb=null;a.cd=null;a.bx=0;}
function Dk(){var a=this;B.call(a);a.bd=0;a.dj=0;}
var Me=null;var Md=null;function Hb(a,b){var c=new Dk();HK(c,a,b);return c;}
function HK(a,b,c){a.bd=b;a.dj=c;}
function DD(a){return a.bd!=1?0:1;}
function HE(a){var b;b=a.bd!=2?0:1;return !b&&!E$(a)?0:1;}
function E$(a){return a.bd!=3?0:1;}
function DI(b){return Hb(2,b);}
function Gd(){Me=Hb(0,0);Md=Hb(1,0);}
function Fa(){var a=this;D1.call(a);a.dV=0;a.cM=0;}
function B7(){var a=this;B.call(a);a.co=0;a.dT=null;a.bP=null;}
function Du(a,b,c,d){a.co=b;a.dT=c;a.bP=d;}
function JY(a){return a.bP;}
function IN(a){return a.co;}
var CS=E(B7);
var Mt=null;var Mm=null;function I5(){I5=X(CS);Ju();}
function Jl(a){return D(45);}
function Ju(){var b,c,d;Mt=Bv(Cs(Bp,[Lb,C(1,(-1)),C(0,(-2)),C(0,(-3)),C(2,(-2)),C(3,(-3)),C(4,(-2)),C(5,(-2)),C(6,0),C(5,1),C(4,2),C(2,1),C(2,2),C(1,2)]));b=new Es;Bu(b);c=0;while(c<6){d=Lb;I5();H(b,BH(c,d,Mt));c=c+1|0;}Mm=b;}
function D3(){var a=this;B.call(a);a.el=0;a.dG=null;}
var Mn=null;var Mu=null;function JM(a,b){var c=new D3();Hv(c,a,b);return c;}
function Hv(a,b,c){a.el=b;if(c!==null)a.dG=c;else a.dG=I();}
function Gq(){var b;b=new Fn;b.T=0;b.P=I();Mn=b;Mu=JM(0,I());}
var CY=E(B7);
var Mv=null;var Mp=null;function Il(){Il=X(CY);I8();}
function Jw(a){return D(46);}
function I8(){var b,c,d;Mv=Bv(Cs(Bp,[Lb,C(1,2),C(0,2),C((-1),1),C((-2),2),C((-4),1),C((-6),0),C((-7),(-2)),C((-6),(-2)),C((-6),(-3)),C((-4),(-2)),C((-3),(-3)),C((-2),(-2)),C((-2),(-1))]));b=new EO;Bu(b);c=0;while(c<6){d=Lb;Il();H(b,BH(c,d,Mv));c=c+1|0;}Mp=b;}
var C7=E(B7);
var Mw=null;var Mr=null;function Jc(){Jc=X(C7);H2();}
function JO(a){return D(47);}
function H2(){var b,c,d;Mw=Bv(Cs(Bp,[Lb,C(1,2),C(0,2),C(0,3),C((-2),2),C((-3),0),C((-4),0),C((-5),(-1)),C((-4),(-2)),C((-2),(-1)),C((-2),(-2)),C((-1),(-2)),C(0,(-2)),C(1,(-1))]));b=new FY;Bu(b);c=0;while(c<6){d=Lb;Jc();H(b,BH(c,d,Mw));c=c+1|0;}Mr=b;}
function Fn(){var a=this;B.call(a);a.T=0;a.P=null;}
function D$(a){var b;b=JM(a.T,a.P);a.T=0;a.P=I();return b;}
function DN(){B.call(this);this.ex=null;}
var L_=null;var Mx=null;function Jk(){Jk=X(DN);JK();}
function H4(a){var b=new DN();F8(b,a);return b;}
function F8(a,b){Jk();a.ex=b;}
function JK(){L_=H4(D(63));Mx=H4(D(64));}
var Es=E(Y);
var EO=E(Y);
var FY=E(Y);
var DF=E(0);
function Gb(){B.call(this);this.e0=null;}
function DO(){var a=this;B.call(a);a.dE=0;a.cO=0;a.ct=null;a.cC=0;}
function J1(a,b,c,d){var e=new DO();IL(e,a,b,c,d);return e;}
function IL(a,b,c,d,e){a.cC=e;a.dE=b;a.cO=c;a.ct=d;}
function Dv(){var a=this;B.call(a);a.ev=0;a.dO=0;a.eT=0;a.es=null;a.eO=null;a.c9=null;}
function My(a,b,c,d,e,f){var g=new Dv();E7(g,a,b,c,d,e,f);return g;}
function E7(a,b,c,d,e,f,g){a.ev=b;a.dO=c;a.eT=d;a.es=e;a.eO=f;a.c9=g;}
function JN(a){var b,c,d,e,f,g;b=W();c=a.c9.data;d=c.length;e=0;while(e<d){f=c[e];g=W();S(g,BA(f.dE));S(g,D(51));S(g,BA(f.cO));S(g,D(51));S(g,C$(f.ct));S(g,D(51));S(g,BA(f.cC));S(g,D(51));S(g,D(52));S(b,U(g));e=e+1|0;}return U(b);}
function Ee(){var a=this;Db.call(a);a.cK=null;a.df=null;}
function G5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.cK;e=0;f=0;g=a.df;a:{b:{while(true){if((e+32|0)>f&&B9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=B0(b)+j|0;h=i.length;f=B8(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new Br;b=W();Bm(P(Bm(P(b,D(65)),k),D(56)),h);Bk(l,U(b));R(l);}if(B0(b)<e)break;if(e<0){b=new Br;c=W();P(Bm(P(c,D(57)),e),D(58));Bk(b,U(c));R(b);}h=b.o;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.dD.data[n+b.cL|0];m=m+1|0;j=o;n=k;}b.o=h+e|0;e=0;}if(!B9(c))
{l=!B9(b)&&e>=f?Me:Md;break a;}i=g.data;k=B8(B0(c),i.length);p=new E8;p.cG=b;p.dc=c;l=HG(a,d,e,f,g,0,k,p);e=p.cF;j=p.di;if(l===null){if(!B9(b)&&e>=f)l=Me;else if(!B9(c)&&e>=f)l=Md;}Fb(c,g,0,j);if(l!==null)break a;}b=new EP;Bf(b);R(b);}p=new Br;l=W();Bi(Bm(P(Bm(P(l,D(59)),j),D(54)),h),41);Bk(p,U(l));R(p);}Eg(b,b.o-(f-e|0)|0);return l;}
var F0=E(Ee);
function HG(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Di(h,2))break a;i=Md;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!E5(l)&&!EU(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(Di(h,3))break a;i=Md;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!E5(l))
{i=DI(1);break a;}if(j>=d){if(B9(h.cG))break a;i=Me;break a;}c=j+1|0;n=k[j];if(!EU(n)){j=c+(-2)|0;i=DI(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Di(h,4))break a;i=Md;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.cF=j;h.di=f;return i;}
var Fq=E(B4);
var ET=E(Bc);
var E2=E(0);
var E4=E(0);
var DB=E();
function Gx(){var a=this;DB.call(a);a.gb=null;a.fT=0;a.gC=0;a.gM=0;}
var F5=E(Bc);
function Fx(){var a=this;B.call(a);a.cZ=null;a.bu=null;a.eQ=null;a.c=null;a.d3=null;}
function GM(){var a=this;B.call(a);a.gv=0;a.fO=null;}
var Gy=E();
var Ds=E(Bc);
var Fc=E(Cz);
var CX=E(Bc);
function E8(){var a=this;B.call(a);a.cG=null;a.dc=null;a.cF=0;a.di=0;}
function Di(a,b){return B0(a.dc)<b?0:1;}
var FQ=E(CX);
var E_=E(Bc);
var EP=E(Bc);
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,0,Gf,0,B,[],0,3,0,0,0,EJ,0,B,[],3,3,0,0,0,Er,0,B,[],3,3,0,0,0,ES,0,B,[EJ,Er],0,3,0,0,0,HF,0,B,[],4,0,0,0,0,Hj,0,B,[],4,3,0,0,0,CC,0,B,[],0,3,0,0,0,B4,0,CC,[],0,3,0,0,0,Bc,0,B4,[],0,3,0,0,0,Ho,0,Bc,[],0,3,0,0,0,BZ,0,B,[],3,3,0,0,0,BJ,0,B,[],3,3,0,0,0,C5,0,B,[],3,3,0,0,0,BT,0,B,[BZ,BJ,C5],0,3,0,C_,0,Cz,0,CC,[],0,3,0,0,0,CF,0,Cz,[],0,3,0,0,0,G8,0,CF,[],0,3,0,0,0,D5,0,B,[BZ],1,3,0,0,0,Ci,0,D5,[BJ],0,3,0,0,["bo",KH(Ge),"bX",KI(Jt)],DC,0,B,[BZ,C5],0,0,0,0,["b$",KI(Fd),"bf",KH(U)],DH,
0,B,[],3,3,0,0,0,Gn,0,DC,[DH],0,3,0,0,["bf",KH(Jb),"b$",KI(JI)],Cp,0,CF,[],0,3,0,0,0,G2,0,Cp,[],0,3,0,0,0,GO,0,Cp,[],0,3,0,0,0,BC,0,B,[],3,3,0,0,0,Eh,0,B,[BC],3,3,0,0,0,Ep,0,B,[Eh],3,3,0,0,0,BM,0,B,[BC],3,3,0,0,0,GB,0,B,[Ep,BM],3,3,0,0,0,EY,0,B,[],3,3,0,0,0,Bp,0,B,[BJ,EY],0,3,0,0,0,GW,0,B,[],0,3,0,0,0,Hs,0,B,[],0,3,0,0,0,Fi,0,B,[],4,3,0,0,0,HT,0,B,[],4,3,0,0,0,FV,0,B,[BM],3,3,0,0,0,Fo,0,B,[BM],3,3,0,0,0,Fg,0,B,[BM],3,3,0,0,0,E1,0,B,[BM],3,3,0,0,0,Fk,0,B,[BM],3,3,0,0,0,FB,0,B,[BM,FV,Fo,Fg,E1,Fk],3,3,0,0,0,Fu,
0,B,[],3,3,0,0,0,FG,0,B,[BC],3,3,0,0,0,GQ,0,B,[BC,FB,Fu,FG],1,3,0,0,["f5",KI(IW),"gP",KJ(Id),"f6",KJ(J8),"ff",KK(IT),"fH",KI(I1),"fQ",KH(Jr),"gn",KK(H_)],Fs,0,B,[],3,3,0,0,0,F4,0,B,[Fs],0,3,0,0,0,Br,0,Bc,[],0,3,0,0,0,GG,0,B,[],4,3,0,0,0]);
$rt_metadata([CQ,0,Bc,[],0,3,0,0,0,C2,0,Bc,[],0,3,0,0,0,Cc,0,B,[BJ],0,3,0,0,0,BO,0,Bc,[],0,3,0,0,0,BI,0,BO,[],0,3,0,0,0,BU,0,B,[],4,3,0,Fp,0,Hf,0,B,[BC],1,3,0,0,0,GJ,0,B,[BC],1,3,0,0,0,HP,0,B,[BC],1,3,0,0,0,D9,0,B,[BC],3,3,0,0,0,FE,0,B,[D9],0,3,0,0,["eL",KI(Jp)],G7,0,B,[BC],1,3,0,0,0,FF,0,B,[D9],0,3,0,0,["eL",KI(Ic)],HR,0,B,[],4,0,0,0,0,Hi,0,B,[],4,3,0,0,0,FS,0,B,[],0,3,0,0,0,GZ,0,B,[],4,3,0,0,0,HU,0,B,[],4,3,0,0,0,DT,0,Br,[],0,3,0,0,0,BV,0,B,[],3,3,0,0,0,Gj,0,B,[BV],0,3,0,0,0,GP,0,B,[BV],0,3,0,0,0,GI,0,B,[BV],
0,3,0,0,0,GD,0,B,[BV],0,3,0,0,0,Bh,0,B,[BJ,BZ],1,3,0,0,0,CE,0,Bh,[],12,3,0,CW,0,FK,0,B,[],3,3,0,0,0,FJ,0,B,[FK],0,3,0,0,0,Gu,0,B,[BV],0,3,0,0,0,HO,0,B,[BV],0,3,0,0,0,CD,0,Bh,[],12,3,0,Ck,0,Gi,0,B,[BV],0,3,0,0,0,B$,0,Bh,[],12,3,0,Bz,0,Ch,0,Bh,[],12,3,0,BN,0,C6,0,B,[],3,3,0,0,0,F3,0,B,[C6],3,3,0,0,0,Bj,0,B,[F3],0,3,0,BD,["cz",KI(H9)],Co,0,Bh,[],12,3,0,BK,0,B6,0,Bj,[],0,3,0,Ce,0,Cy,0,Bh,[],12,3,0,C8,0,B5,0,Bj,[],0,3,0,Cf,0,D4,0,B,[],3,3,0,0,0,EQ,0,B,[D4],3,3,0,0,0,Fy,0,B,[],3,3,0,0,0,Cx,0,B,[EQ,Fy],1,3,0,0,0,Dz,
0,Cx,[],0,3,0,0,0,EW,0,Dz,[],0,3,0,0,0,Dc,0,Cx,[],1,3,0,0,0,DP,0,Dc,[],0,3,0,0,0,Dt,0,B,[BJ],1,3,0,0,0]);
$rt_metadata([Ea,0,Dt,[],0,3,0,Iq,0,Dj,0,B,[],0,3,0,0,["bo",KH(I6),"bX",KI(Bx)],EK,0,B,[],3,3,0,0,0,DM,0,B,[EK],3,3,0,0,0,De,0,B,[DM],1,3,0,0,0,FP,0,B,[DM],3,3,0,0,0,EA,0,B,[FP],3,3,0,0,0,Cu,0,De,[EA],1,3,0,0,0,CG,0,B,[],3,3,0,0,0,DR,0,B,[],3,3,0,0,0,Y,0,Cu,[CG,BZ,DR],0,3,0,0,["h",KI(J),"A",KH(IZ)],FN,0,B,[],3,3,0,0,0,Dl,0,B,[FN],0,3,0,0,0,EC,0,B,[],3,3,0,0,0,DX,0,B,[EC],1,3,0,0,0,Hr,0,DX,[CG,BZ],0,3,0,0,0,F_,0,B,[],0,3,0,0,0,Df,0,B,[],3,3,0,0,0,Do,0,B,[],3,3,0,0,0,C3,0,B,[],3,3,0,0,0,Cj,0,B,[Df,Do,C3],3,3,
0,0,0,Cw,0,Bh,[],12,3,0,Bn,0,G4,0,B,[],0,3,0,0,0,Em,0,Y,[],0,0,0,0,0,En,0,Y,[],0,0,0,0,0,Ei,0,Y,[],0,0,0,0,0,Ej,0,Y,[],0,0,0,0,0,Ek,0,Y,[],0,0,0,0,0,El,0,Y,[],0,0,0,0,0,Gc,0,B,[],0,3,0,0,0,GC,0,B,[],4,3,0,0,0,ER,0,Cu,[DR],0,0,0,0,["h",KI(HX),"A",KH(IR)],HA,0,B,[],0,3,0,0,0,DZ,0,B,[],0,3,0,DS,0,EH,0,Y,[],0,0,0,0,0,EI,0,Y,[],0,0,0,0,0,Ex,0,Y,[],0,0,0,0,0,Ey,0,Y,[],0,0,0,0,0,Dg,0,B,[],0,3,0,Jd,0,HS,0,BO,[],0,3,0,0,0,Eq,0,B4,[],0,3,0,0,0,FT,0,B,[],3,3,0,0,0,E3,0,B,[FT],0,0,0,0,0,CR,0,B,[],3,3,0,0,0,B1,0,B,[Cj,CR],
1,3,0,0,0,Et,0,B1,[],0,3,0,0,["bm",KI(Ie)],Fr,0,B1,[],0,3,0,0,["bm",KI(IX)],FX,0,B1,[],0,3,0,0,["bm",KI(Jh)],Ec,0,B,[],3,3,0,0,0,G1,0,B,[Ec],0,3,0,0,["S",KH(IV)]]);
$rt_metadata([BQ,0,B,[CR],0,3,0,0,["S",KH(JD)],Fv,0,BQ,[C3],0,3,0,0,["S",KH(Jy)],DA,0,B,[CR],3,3,0,0,0,DJ,0,BQ,[DA,C3],0,3,0,0,["S",KH(IA)],Eo,0,B,[],3,3,0,0,0,DW,0,B,[Eo,CG],0,0,0,0,0,CV,0,DW,[],0,0,0,0,0,GN,0,B,[C6],0,3,0,0,["cz",KI(J3)],CA,0,Bh,[],12,3,0,IP,0,Cv,0,Bh,[],12,3,0,J6,0,Cl,0,Bh,[],12,3,0,IM,0,G_,0,B,[],4,3,0,0,0,Dy,0,B,[C6,Do],3,3,0,0,0,EX,0,B,[Dy],3,3,0,0,0,CT,0,B,[EX],0,3,0,0,0,Cq,0,B,[],1,3,0,0,0,FZ,0,B,[],3,3,0,0,0,Dp,0,Cq,[BJ,DH,C5,FZ],1,3,0,0,0,D1,0,Cq,[BJ],1,3,0,0,0,CK,0,B,[],0,3,0,I3,
0,Dh,0,Dp,[],1,0,0,0,0,Fh,0,Dh,[],0,0,0,0,0,Db,0,B,[],1,3,0,0,0,Dk,0,B,[],0,3,0,0,0,Fa,0,D1,[],0,0,0,0,0,B7,0,B,[Df],1,3,0,0,0,CS,0,B7,[],0,3,0,I5,["bw",KH(Jl)],D3,0,B,[],0,3,0,0,0,CY,0,B7,[],0,3,0,Il,["bw",KH(Jw)],C7,0,B7,[],0,3,0,Jc,["bw",KH(JO)],Fn,0,B,[],4,3,0,0,0,DN,0,B,[],4,3,0,Jk,0,Es,0,Y,[],0,0,0,0,0,EO,0,Y,[],0,0,0,0,0,FY,0,Y,[],0,0,0,0,0,DF,0,B,[],3,3,0,0,0,Gb,0,B,[DF],0,3,0,0,0,DO,0,B,[DA],0,3,0,0,0,Dv,0,B,[Ec],0,3,0,0,["S",KH(JN)],Ee,0,Db,[],1,3,0,0,0,F0,0,Ee,[],0,3,0,0,0,Fq,0,B4,[],0,3,0,0,0,ET,
0,Bc,[],0,3,0,0,0,E2,0,B,[D4],3,3,0,0,0,E4,0,B,[E2],3,3,0,0,0,DB,0,B,[E4],1,3,0,0,0,Gx,0,DB,[],0,3,0,0,0,F5,0,Bc,[],0,3,0,0,0,Fx,0,B,[Dy],0,3,0,0,0,GM,0,B,[DF],0,3,0,0,0]);
$rt_metadata([Gy,0,B,[],4,3,0,0,0,Ds,0,Bc,[],0,3,0,0,0,Fc,0,Cz,[],0,3,0,0,0,CX,0,Bc,[],0,3,0,0,0,E8,0,B,[],0,3,0,0,0,FQ,0,CX,[],0,3,0,0,0,E_,0,Bc,[],0,3,0,0,0,EP,0,Bc,[],0,3,0,0,0]);
function $rt_array(cls,data){this.ib=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Error in MetaTileDescriptorSupplier ","[]","0]","Either src or dest is null","null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","object","function","string","number","SystemTileDescriptorSupplier called to supply","Xa","aD","1","INSTANCE","","a","zizizXazizaDziziz",
"z","i","aDzizizXa","0z1i0z1i0z3Xa0z1i0z2aD0z1i0z1i0z","z1iz1iz3Xaz1iz2aDz1iz1iz","2aD0z1i0z1i0z3Xa","2aDz1iz1iz3Xa","01234","2","z1i","N","A pair is requested, which is not implemented","Pair.prev called from LAST","SuperSystemDispenser has no such blueprint ","Index out of bounds","Action must be non-null","Replacement preconditions do not hold","UTF-8","ziziN","Illegal request for Superblueprint ","Turtle","FTurtle","FHat","TileBlueprint.getTypeNr has invalid type","HexTransformer got data null","HexPlacementData got rotCenter null",
",","\n","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst "]);
BT.prototype.toString=function(){return $rt_ustr(this);};
BT.prototype.valueOf=BT.prototype.toString;B.prototype.toString=function(){return $rt_ustr(Jg(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(Kh);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=GQ.prototype;c.removeEventListener=c.ff;c.dispatchEvent=c.fH;c.get=c.f5;c.addEventListener=c.gn;Object.defineProperty(c,"length",{get:c.fQ});c=FE.prototype;c.accept=c.eL;c=FF.prototype;c.accept=c.eL;})();
}));

//# sourceMappingURL=classes.js.map