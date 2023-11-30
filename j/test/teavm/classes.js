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
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.cZ=f;}
function $rt_cls(cls){return FQ(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Ig(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.r.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return H9(t);}
function $rt_throwableCause(t){return Ia(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(IC());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ID(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var I=$rt_throw;var D3=$rt_compare;var IE=$rt_nullCheck;var M=$rt_cls;var U=$rt_createArray;var Ij=$rt_isInstance;var IF=$rt_nativeThread;var IG=$rt_suspending;var IH=$rt_resuming;var II=$rt_invalidPointer;var C=$rt_s;var N=$rt_eraseClinit;var G4=$rt_imul;var HN=$rt_wrapException;var IJ=$rt_checkBounds;var IK=$rt_checkUpperBound;var IL=$rt_checkLowerBound;var IM=$rt_wrapFunction0;var IN=$rt_wrapFunction1;var IO=$rt_wrapFunction2;var IP=$rt_wrapFunction3;var IQ=$rt_wrapFunction4;var D=$rt_classWithoutFields;var Ev
=$rt_createArrayFromData;var IR=$rt_createCharArrayFromData;var IS=$rt_createByteArrayFromData;var IT=$rt_createShortArrayFromData;var IU=$rt_createIntArrayFromData;var IV=$rt_createBooleanArrayFromData;var IW=$rt_createFloatArrayFromData;var IX=$rt_createDoubleArrayFromData;var IY=$rt_createLongArrayFromData;var IZ=$rt_createBooleanArray;var E0=$rt_createByteArray;var I0=$rt_createShortArray;var BD=$rt_createCharArray;var Iy=$rt_createIntArray;var I1=$rt_createLongArray;var I2=$rt_createFloatArray;var I3=$rt_createDoubleArray;var D3
=$rt_compare;var I4=$rt_castToClass;var I5=$rt_castToInterface;var I6=$rt_equalDoubles;var I7=Long_toNumber;var I8=Long_fromInt;var I9=Long_fromNumber;var I$=Long_create;var I_=Long_ZERO;var Ja=Long_hi;var Jb=Long_lo;
function B(){this.$id$=0;}
function De(a){return FQ(a.constructor);}
function Hz(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=C(0);else{if(!d)f=32;else{g=0;f=d>>>16|0;if(f)g=16;else f=d;h=f>>>8|0;if(!h)h=f;else g=g|8;i=h>>>4|0;if(!i)i=h;else g=g|4;f=i>>>2|0;if(!f)f=i;else g=g|2;if(f>>>1|0)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=BD(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){i=f+1|0;l[f]=Dx((d>>>j|0)&15,16);j=j-4|0;f=i;}e=Ig(k);}b=X();L(L(b,C(1)),e);return R(b);}
function HW(a){var b,c,d;if(!Ij(a,Ci)&&a.constructor.$meta.item===null){b=new DP;Q(b);I(b);}b=GL(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var Fn=D();
function Il(b){var c,d,e,f,g,h,i,j,k;Fr();Fv();FJ();Fs();Gd();Fm();c=$rt_globals.window.document;d=Fc($rt_str(c.getElementById("h_type").textContent));e=Fc($rt_str(c.getElementById("h_level").textContent));f=E(0,0);if(d<10)g=D0(G2(d,e,0,f));else if(d<20)g=P(W(d,e,0,f));else if(!e){if(d<23){Bs();g=CJ(Cm(Jc,d,0),f);}else if(d<25){Bw();g=CJ(CM(Jd,d,0),f);}else if(d>=27){Bx(BH(),C(2));g=null;}else{Cc();g=CJ(C7(Je,d,0),f);}}else{Bx(BH(),C(3));FK();h=Jf;if(e<0)e= -e|0;g=h.X;i=g.j;if(e<i)g=EP(K(g,e),d,0);else{K(g,
i-1|0);while(i<=e){j=Hr();Bd(j.f,Bc(20),DG(Jf,1,20));Bd(j.f,Bc(21),DG(Jf,1,21));Bd(j.f,Bc(22),DG(Jf,1,22));g=j.f;k=Bc(23);Bw();Bd(g,k,BY(Jd,23));Bd(j.f,Bc(24),BY(Jd,24));g=j.f;k=Bc(25);Cc();Bd(g,k,Ch(Je,25));Bd(j.f,Bc(26),Ch(Je,26));F(h.X,j);i=i+1|0;}g=EP(K(h.X,e),d,0);}Bx(BH(),C(4));g=g.b4(f);}if(g===null)g=D0(G2(1,1,0,Jg));k=g.ck();g=C(5);if(Z(k)>0){g=X();L(L(Bl(g,91),k),C(6));g=R(g);}k=c.getElementById("h_textformat");g=$rt_ustr(g);k.textContent=g;}
var D5=D(0);
var DQ=D(0);
function Eb(){B.call(this);this.I=null;}
function FQ(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Eb;c.I=b;d=c;b.classObject=d;}return c;}
function CB(a){return a.I.$meta.primitive?1:0;}
function CS(a){return FQ(a.I.$meta.item);}
var Gl=D();
function Fq(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function C9(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var F_=D();
function GL(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function FR(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(FR(d[e],c))return 1;e=e+1|0;}return 0;}
function Cd(){var a=this;B.call(a);a.cV=null;a.cS=null;a.bE=0;a.bP=0;}
function Jh(a){var b=new Cd();V(b,a);return b;}
function Ji(a){var b=new Cd();FP(b,a);return b;}
function V(a,b){a.bE=1;a.bP=1;a.cV=b;}
function FP(a,b){a.bE=1;a.bP=1;a.cS=b;}
function GU(a){return a;}
function H9(a){return a.cV;}
function Ia(a){var b;b=a.cS;if(b===a)b=null;return b;}
var BI=D(Cd);
function Jj(){var a=new BI();Q(a);return a;}
function Q(a){a.bE=1;a.bP=1;}
var O=D(BI);
function ID(a){var b=new O();Hl(b,a);return b;}
function Hl(a,b){V(a,b);}
var Ga=D(O);
var BB=D(0);
var Bp=D(0);
var CE=D(0);
function BK(){var a=this;B.call(a);a.r=null;a.S=0;}
var Jk=null;var Jl=null;var Jm=null;function DD(){DD=N(BK);G7();}
function Ig(a){var b=new BK();FA(b,a);return b;}
function HJ(a,b,c){var d=new BK();Fe(d,a,b,c);return d;}
function FA(a,b){DD();Fe(a,b,0,b.data.length);}
function Fe(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;DD();e=BD(d);a.r=e;if(b===null){f=new Cn;V(f,C(7));I(f);}if(c>=0&&d>=0&&(c+d|0)<=Dk(b)&&(0+d|0)<=Dk(e)){a:{b:{c:{if(b!==e){g=CS(De(b));f=CS(De(e));if(g!==null&&f!==null){if(g===f)break c;if(!CB(g)&&!CB(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;m=k[j];n=f.I;if(!(m!==null&&!(typeof m.constructor.$meta==='undefined'?1:0)&&FR(m.constructor,n)?1:0)){Do(b,c,e,0,i);g=new CD;Q(g);I(g);}i=i+1|0;j=l;}Do(b,c,e,0,d);break a;}if(!CB(g))break b;if(CB(f))break c;else break b;}g
=new CD;Q(g);I(g);}}Do(b,c,e,0,d);break a;}g=new CD;Q(g);I(g);}return;}g=new Bf;Q(g);I(g);}
function Bi(a,b){var c,d;if(b>=0){c=a.r.data;if(b<c.length)return c[b];}d=new Dj;Q(d);I(d);}
function Z(a){return a.r.data.length;}
function ER(a){return a.r.data.length?0:1;}
function Cs(a,b,c){var d,e;d=D3(b,c);if(d>0){e=new Bf;Q(e);I(e);}if(!d){DD();return Jl;}if(!b&&c==Z(a))return a;return HJ(a.r,b,c-b|0);}
function BL(a,b,c){var d,e,f,g;d=X();e=Z(a)-Z(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Z(b)){L(d,c);f=f+(Z(b)-1|0)|0;break a;}if(Bi(a,f+g|0)!=Bi(b,g))break;g=g+1|0;}Bl(d,Bi(a,f));}f=f+1|0;}L(d,Cs(a,f,Z(a)));return R(d);}
function DF(b){DD();if(b===null)b=C(8);return b;}
function BF(a,b){var c;if(a===b)return 1;if(!(b instanceof BK))return 0;if(Z(b)!=Z(a))return 0;c=0;while(c<Z(b)){if(Bi(a,c)!=Bi(b,c))return 0;c=c+1|0;}return 1;}
function G_(a){var b,c,d,e;a:{if(!a.S){b=a.r.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.S=(31*a.S|0)+e|0;d=d+1|0;}}}return a.S;}
function G7(){var b,c;b=BD(0);Jk=b;c=new BK;DD();c.r=b;Jl=c;Jm=new Fg;}
var B_=D(Cd);
var Cg=D(B_);
var FZ=D(Cg);
var Dv=D();
function BV(){Dv.call(this);this.bh=0;}
var Jn=null;var Jo=null;function G0(a){var b=new BV();Fi(b,a);return b;}
function Fi(a,b){a.bh=b;}
function CF(b){return (Ei(Is(20),b,10)).Z();}
function Fc(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;if(b===null){b=new BG;V(b,C(9));I(b);}c=Z(b);if(0==c){b=new BG;V(b,C(10));I(b);}a:{d=0;switch(Bi(b,0)){case 43:break;case 45:d=1;e=1;break a;default:e=0;break a;}e=1;}f=0;if(e==c){b=new BG;Q(b);I(b);}b:{c:{while(e<c){g=e+1|0;h=Bi(b,e);if(Jp===null){if(Jq===null)Jq=F0();i=(Jq.value!==null?$rt_str(Jq.value):null);j=new E6;k=i.r.data;l=BD(k.length);m=l.data;e=0;n=m.length;while(e<n){m[e]=k[e];e=e+1|0;}j.cO=l;n=F8(j);k=Iy(n*2|0);l=k.data;o=0;p=0;q=0;r=0;while
(r<n){p=p+Fx(j)|0;q=q+Fx(j)|0;s=o+1|0;l[o]=p;o=s+1|0;l[s]=q;r=r+1|0;}Jp=k;}k=Jp.data;n=0;o=(k.length/2|0)-1|0;d:{while(o>=n){p=(n+o|0)/2|0;e=p*2|0;q=D3(h,k[e]);if(q>0)n=p+1|0;else{if(q>=0){n=k[e+1|0];break d;}o=p-1|0;}}n=(-1);}if(n<0){i=new BG;b=DF(Cs(b,0,c));j=X();L(L(j,C(11)),b);V(i,R(j));I(i);}if(n>=10){i=new BG;b=DF(Cs(b,0,c));j=X();L(L(Y(L(j,C(12)),10),C(13)),b);V(i,R(j));I(i);}f=(10*f|0)+n|0;if(f<0){if(g!=c)break b;if(f!=(-2147483648))break b;if(!d)break b;f=(-2147483648);break c;}e=g;}if(d)f= -f|0;}return f;}i
=new BG;b=DF(Cs(b,0,c));j=X();L(L(j,C(14)),b);V(i,R(j));I(i);}
function Bc(b){var c,d;if(b>=(-128)&&b<=127){a:{if(Jo===null){Jo=U(BV,256);c=0;while(true){d=Jo.data;if(c>=d.length)break a;d[c]=G0(c-128|0);c=c+1|0;}}}return Jo.data[b+128|0];}return G0(b);}
function DT(a){return a.bh;}
function Fr(){Jn=M($rt_intcls());}
function C5(){var a=this;B.call(a);a.h=null;a.g=0;}
function Is(a){var b=new C5();FD(b,a);return b;}
function FD(a,b){a.h=BD(b);}
function Ei(a,b,c){return F5(a,a.g,b,c);}
function F5(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)CA(a,b,b+1|0);else{CA(a,b,b+2|0);f=a.h.data;g=b+1|0;f[b]=45;b=g;}a.h.data[b]=Dx(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=G4(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;CA(a,b,b+i|0);if(e)e=b;else{f=a.h.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.h.data;b=e+1|0;f[e]=Dx($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function Ex(a,b){var c,d,e,f,g;c=a.h.data.length;if(c>=b)return;d=c>=1073741823?2147483647:CG(b,CG(c*2|0,5));e=a.h.data;f=BD(d);g=f.data;b=Cx(d,e.length);c=0;while(c<b){g[c]=e[c];c=c+1|0;}a.h=f;}
function R(a){return HJ(a.h,0,a.g);}
function CA(a,b,c){var d,e,f,g;d=a.g;e=d-b|0;a.bH((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.h.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.g=a.g+(c-b|0)|0;}
var C$=D(0);
var Fp=D(C5);
function X(){var a=new Fp();Hy(a);return a;}
function Hy(a){FD(a,16);}
function L(a,b){var c;c=a.g;if(b===null)b=C(8);E$(a,c,b);return a;}
function Ba(a,b){E$(a,a.g,b);return a;}
function Y(a,b){Ei(a,b,10);return a;}
function Bl(a,b){var c;c=a.g;CA(a,c,c+1|0);a.h.data[c]=b;return a;}
function Hu(a){return R(a);}
function HT(a,b){Ex(a,b);}
function E$(a,b,c){var d,e,f;if(b>=0&&b<=a.g){a:{if(c===null)c=C(8);else if(ER(c))break a;Ex(a,a.g+Z(c)|0);d=a.g-1|0;while(d>=b){a.h.data[d+Z(c)|0]=a.h.data[d];d=d+(-1)|0;}a.g=a.g+Z(c)|0;d=0;while(d<Z(c)){e=a.h.data;f=b+1|0;e[b]=Bi(c,d);d=d+1|0;b=f;}}return a;}c=new Dj;Q(c);I(c);}
var B3=D(Cg);
var FV=D(B3);
function Jr(a){var b=new FV();HE(b,a);return b;}
function HE(a,b){V(a,b);}
var FL=D(B3);
function Js(a){var b=new FL();HO(b,a);return b;}
function HO(a,b){V(a,b);}
var Bk=D(0);
var DJ=D(0);
var DO=D(0);
var Br=D(0);
var Fy=D(0);
var Eh=D(0);
function By(){var a=this;B.call(a);a.m=0;a.n=0;}
var Jg=null;var Jt=null;var Ju=null;var Jv=null;function BR(a,b){var c=new By();Gi(c,a,b);return c;}
function DX(b){var c;c=b%6|0;if(c>=0)b=c%6|0;else{if(c<0)c= -c|0;b=(6-(c%6|0)|0)%6|0;}return b;}
function E(b,c){return BR(b,c);}
function Gi(a,b,c){a.m=b;a.n=c;}
function Bu(a,b){return BR(a.m+b.m|0,a.n+b.n|0);}
function DV(a,b){return BR(a.m-b.m|0,a.n-b.n|0);}
function EY(a){var b,c,d;b=a.m;c=a.n;d=X();Y(Bl(Y(d,b),44),c);return R(d);}
function Fv(){Jg=BR(0,0);Jt=BR(2,0);Ju=BR(0,2);Jv=BR(2,2);}
var BS=D(0);
function Fo(){var a=this;B.call(a);a.cF=0;a.M=0;a.ce=0;a.cH=null;}
function G2(a,b,c,d){var e=new Fo();HF(e,a,b,c,d);return e;}
function HF(a,b,c,d,e){a.cF=b;a.M=c;a.ce=d;a.cH=e;}
function D0(a){var b,c;Bx(BH(),C(15));b=a.cF;if(!b){Cu();c=(Bo(Jw,a.M)).t;}else if(b==1){Cu();c=(Bo(Jw,a.M)).y;}else if(b!=2){Cu();Bo(Jw,a.M);c=C(16);}else{Cu();Bo(Jw,a.M);c=C(17);}return E5(G3(a.ce,a.cH),c);}
function Gc(){B.call(this);this.ee=null;}
function FM(){var a=this;B.call(a);a.bX=0;a.bk=0;a.cI=0;a.cf=null;}
function W(a,b,c,d){var e=new FM();H3(e,a,b,c,d);return e;}
function H3(a,b,c,d,e){a.bX=b;a.bk=c;a.cI=d;a.cf=e;}
function P(a){var b,c;b=a.bX;if(b==10){D4();c=(CQ(Jx,a.bk)).be;}else if(b!=11){D4();c=(CQ(Jx,a.bk)).bn;}else{D4();c=(CQ(Jx,a.bk)).bv;}return E5(G3(a.cI,a.cf),c);}
function FG(){var a=this;B.call(a);a.ec=0;a.e6=0;a.fi=0;a.eY=null;}
function FB(){var a=this;B.call(a);a.fn=0;a.ea=0;a.e7=null;}
var ED=D();
var Jy=null;function BH(){var b;if(Jy===null){b=new Ee;b.c6=Jz;b.bf=X();b.c7=BD(32);b.dW=0;GV();b.cW=JA;Jy=b;}return Jy;}
function Ik(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Dk(b)&&(e+f|0)<=Dk(d)){Do(b,c,d,e,f);return;}b=new Bf;Q(b);I(b);}
function Do(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
var Gv=D();
var E9=D(0);
var EH=D(0);
var Ez=D(0);
var Ek=D(0);
var EF=D(0);
var ES=D(0);
var EM=D(0);
var EW=D(0);
var FN=D();
function Hg(a,b){b=a.bw(b);EI();return b===null?null:b instanceof $rt_objcls()&&b instanceof Bz?Dy(b):b;}
function GN(a,b,c){a.eE($rt_str(b),C9(c,"handleEvent"));}
function Ib(a,b,c){a.et($rt_str(b),C9(c,"handleEvent"));}
function Hd(a,b,c,d){a.eN($rt_str(b),C9(c,"handleEvent"),d?1:0);}
function Hj(a,b){return !!a.eL(b);}
function HI(a){return a.fj();}
function GK(a,b,c,d){a.fv($rt_str(b),C9(c,"handleEvent"),d?1:0);}
var EL=D(0);
var Fg=D();
var Bf=D(O);
var FE=D();
function Dk(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(JB());}return b.data.length;}
function Hp(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Cn=D(O);
var CD=D(O);
var BQ=D();
var JC=null;var Jp=null;var JD=null;var Jq=null;function Em(b){return (b&64512)!=55296?0:1;}
function Ed(b){return (b&64512)!=56320?0:1;}
function Dx(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FJ(){JC=M($rt_charcls());JD=U(BQ,128);}
function F0(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
var Bt=D(O);
function If(a){var b=new Bt();H6(b,a);return b;}
function H6(a,b){V(a,b);}
var BG=D(Bt);
function Bz(){B.call(this);this.cD=null;}
var JE=null;var JF=null;var JG=null;var JH=null;var JI=null;var JJ=null;function EI(){EI=N(Bz);HM();}
function DZ(a){var b=new Bz();Fu(b,a);return b;}
function Fu(a,b){EI();a.cD=b;}
function Dy(b){EI();if(b!==null)return b.cD;return null;}
function DU(b){var c,d;EI();if(b===null)return null;if(b instanceof $rt_objcls())b=b;else a:{b=b;if(b===null)b=null;else{b:{c=b;if(JF!==null){d=$rt_str(typeof c);if(!BF(d,C(18))&&!BF(d,C(19))){if(BF(d,C(20))){b=JG.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=DZ(c);d=b;JG.set(c,new $rt_globals.WeakRef(d));En(JI,d,c);break a;}if(!BF(d,C(21)))break b;else{b=JH.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b
=DZ(c);d=b;JH.set(c,new $rt_globals.WeakRef(d));En(JJ,d,c);break a;}}b=JF.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=DZ(c);JF.set(c,new $rt_globals.WeakRef(b));break a;}}b=DZ(c);}}return b;}
function HM(){JE=new $rt_globals.WeakMap();JF=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();JG=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();JH=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();JI=JG===null?null:new $rt_globals.FinalizationRegistry(Fq(new EU,"accept"));JJ=JH===null?null:new $rt_globals.FinalizationRegistry(Fq(new EV,"accept"));}
function En(b,c,d){return b.register(c,d);}
var F6=D();
var FH=D();
var Gs=D();
var Dz=D(0);
var EU=D();
function HG(a,b){var c;b=DU(b);c=JG;b=Dy(b);c.delete(b);}
var FY=D();
var EV=D();
function GM(a,b){var c;b=DU(b);c=JH;b=Dy(b);c.delete(b);}
var Gt=D();
var F$=D();
function E6(){var a=this;B.call(a);a.cO=null;a.cP=0;}
var FT=D();
function F8(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.cO.data;f=b.cP;b.cP=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+G4(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Fx(b){var c,d;c=F8(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Gw=D();
var Dj=D(Bf);
function S(){var a=this;B.call(a);a.dM=null;a.c_=0;}
function Bm(a,b,c){a.dM=b;a.c_=c;}
function Cf(){S.call(this);this.bQ=null;}
var Jw=null;var JK=null;function Cu(){Cu=N(Cf);GC();}
function Bo(a,b){var c,d,e,f,g,h,i;c=a.bQ;d=c.j;if(b<d)return K(c,b);c=K(c,d-1|0);e=b+1|0;while(d<e){f=new Dw;f.cN=c;f.bU=c.bU+1|0;g=c.t;h=c.y;f.t=BL(BL(C(22),C(23),g),C(24),h);i=c.t;h=c.y;f.y=BL(BL(C(25),C(23),i),C(24),h);F(a.bQ,f);d=d+1|0;c=f;}return c;}
function GC(){var b,c,d,e;b=new Cf;Cu();Bm(b,C(26),0);c=H();b.bQ=c;d=new Dw;d.bU=0;d.t=C(27);d.y=C(28);d.cN=null;F(c,d);Jw=b;e=U(Cf,1);e.data[0]=b;JK=e;}
function Gr(){var a=this;B.call(a);a.bq=0;a.u=0;a.bI=null;a.w=null;a.dA=null;a.bm=0;}
function G3(a,b){var c=new Gr();HS(c,a,b);return c;}
function HS(a,b,c){a.bq=b;a.u=b;a.bI=c;a.w=c;a.dA=C(27);a.bm=(-1);}
function E5(a,b){var c,d,e,f,g,h,i,j;if(b===null)return GA(a.bm,a.bq,a.u,a.bI,a.w,U(C3,0));a:{c=Z(b);d=U(C3,c);if(c>0){e=d.data;f=Bi(b,0);e[0]=H2(Gy(f),EB(a.u,f),a.w);g=1;while(true){if(g>=Z(b))break a;h=Bi(b,g);i=EB(a.u,f);j=a.u;c=D3(f,68);if(!c)j=j+(-1)|0;f=D3(f,88);if(!f)j=j+1|0;a.u=DX(j);a.w=Bu(a.w,f&&c?(h==68?BP(i,E((-8),(-4))):h!=88?BP(i,E((-2),(-4))):BP(i,E((-6),(-6)))):BP(i,E(2,4)));e[g]=H2(Gy(h),EB(a.u,h),a.w);g=g+1|0;f=h;}}}return GA(a.bm,a.bq,a.u,a.bI,a.w,d);}
function Ce(){S.call(this);this.bu=null;}
var Jx=null;var JL=null;function D4(){D4=N(Ce);He();}
function CQ(a,b){var c,d,e,f,g,h,i,j,k;c=a.bu;d=c.j;if(b<d)return K(c,b);c=K(c,d-1|0);e=b+1|0;while(d<e){f=new CV;f.b7=c;g=c.L+1|0;f.L=g;b=g-1|0;h=c.be;Cu();c=(Bo(Jw,b)).t;i=(Bo(Jw,b)).y;f.be=BL(BL(BL(C(29),C(23),c),C(24),i),C(30),h);b=f.L;f.bv=(Bo(Jw,b)).t;b=f.L;j=(Bo(Jw,b)).t;k=(Bo(Jw,b)).y;c=X();L(L(L(c,j),k),j);f.bn=R(c);F(a.bu,f);d=d+1|0;c=f;}return c;}
function He(){var b,c,d,e;b=new Ce;D4();Bm(b,C(26),0);c=H();b.bu=c;d=new CV;d.L=0;d.be=C(27);d.bv=C(27);d.bn=C(27);d.b7=null;F(c,d);Jx=b;e=U(Ce,1);e.data[0]=b;JL=e;}
function B5(){var a=this;S.call(a);a.X=null;a.N=null;}
var Jf=null;var JM=null;function FK(){FK=N(B5);G5();}
function DG(a,b,c){return K(a.N,c-20|0);}
function Gx(){var b;FK();b=U(B5,1);b.data[0]=Jf;return b;}
function G5(){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=new B5;FK();Bm(b,C(26),0);c=H();b.X=c;d=Hr();e=d.f;f=Bc(20);Bs();Bd(e,f,Cj(Jc,20));Bd(d.f,Bc(21),Cj(Jc,21));Bd(d.f,Bc(22),Cj(Jc,22));g=d.f;e=Bc(23);Bw();Bd(g,e,BY(Jd,23));Bd(d.f,Bc(24),BY(Jd,24));g=d.f;e=Bc(25);Cc();Bd(g,e,Ch(Je,25));Bd(d.f,Bc(26),Ch(Je,26));F(c,d);b.N=H();c=H();h=0;while(h<6){d=new C2;g=H();f=H();G(f,(Bb(Jd,25,0,Jg)).b);G(f,(Bb(Jd,26,0,E(30,30))).b);G(f,(Bb(Jd,26,1,E((-28),34))).b);BA();G(f,T(JN,P(W(12,1,0,E(50,70)))));G(f,T(JN,P(W(12,1,3,E((-6),
24)))));F(g,f);i=1;while(i<6){F(g,Bq(i,Jg,f));i=i+1|0;}EE(d,1,20,h,K(g,h),null);F(c,d);h=h+1|0;}F(b.N,c);c=H();j=0;while(j<6){f=new C2;k=H();l=H();G(l,(Bb(Jd,23,0,Jg)).b);G(l,(Bb(Jd,25,5,E((-52),4))).b);G(l,(Bb(Jd,25,3,E(64,68))).b);G(l,(Bb(Jd,25,1,E(12,(-48)))).b);BA();G(l,T(JN,P(W(12,1,1,E((-8),2)))));G(l,T(JN,P(W(12,1,3,E(14,(-2))))));G(l,T(JN,P(W(121,1,5,E(18,24)))));F(k,l);m=1;while(m<6){F(k,Bq(m,Jg,l));m=m+1|0;}EE(f,1,21,j,K(k,j),null);F(c,f);j=j+1|0;}F(b.N,c);d=H();n=0;while(n<6){F(d,Iv(1,21,n,K(Hx(),
n),null));n=n+1|0;}F(b.N,d);Jf=b;JM=Gx();}
function BU(){S.call(this);this.B=null;}
var Jc=null;var JO=null;function Bs(){Bs=N(BU);HP();}
function Cm(a,b,c){return K(K(a.B,b-20|0),c);}
function Bn(a,b,c,d){if(b!=20&&b!=21&&b!=22)return B1(20,c,d);return B1(b,c,d);}
function Cj(a,b){return K(a.B,b-20|0);}
function HP(){var b,c,d,e,f,g,h;b=new BU;Bs();Bm(b,C(26),0);b.B=H();c=H();d=0;while(d<6){e=new Be;BN();Bv(e,20,d,K(JP,d),null);F(c,e);d=d+1|0;}F(b.B,c);c=H();d=0;while(d<6){e=new Be;BN();Bv(e,21,d,K(JQ,d),null);F(c,e);d=d+1|0;}F(b.B,c);e=H();f=0;while(f<6){g=new Be;BN();Bv(g,22,f,K(JR,f),null);F(e,g);f=f+1|0;}F(b.B,e);Jc=b;h=U(BU,1);h.data[0]=b;JO=h;}
var CH=D(0);
var Ff=D(0);
function Be(){var a=this;B.call(a);a.bB=0;a.bS=0;a.Y=null;a.dt=null;}
var JS=null;var JP=null;var JT=null;var JQ=null;var JU=null;var JR=null;function BN(){BN=N(Be);H7();}
function JV(a,b,c,d){var e=new Be();Bv(e,a,b,c,d);return e;}
function Bv(a,b,c,d,e){BN();a.bB=b;a.bS=c;a.Y=d;a.dt=e;}
function GY(a){return a.bS;}
function GQ(a){return a.bB;}
function CJ(a,b){var c,d,e,f,g,h,i;c=a.Y.j;d=U(Df,c);e=d.data;f=0;while(f<c){g=K(a.Y,f);h=Da(g);i=Bu(g.k,b);e[f]=GE(D1(Dh(g)),h,i);f=f+1|0;}i=new C1;c=a.bB;h=a.bS;b=Jg;Eo(i,c,h,h,b,b,d);return i;}
function B1(b,c,d){var e,f;BN();if(b<23){e=new Cr;Bs();Dq(e,Cm(Jc,b,c),d);return e;}if(b>=25){f=new Cr;Cc();Dq(f,C7(Je,b,c),d);return f;}e=new Cr;Bw();Dq(e,CM(Jd,b,c),d);return e;}
function GI(a,b){return CJ(a,b);}
function H7(){var b,c,d,e,f;b=U(BW,2);c=b.data;BA();c[0]=BT(JN,1,0,Jg);c[1]=BT(JN,1,3,E((-8),2));JS=B0(b);d=new DL;BM(d);e=0;while(e<6){f=Jg;BN();F(d,Bq(e,f,JS));e=e+1|0;}JP=d;JT=B0(Ev(BW,[BT(JN,1,1,Jg),BT(JN,1,3,E((-2),2)),BT(JN,1,5,E((-4),(-2)))]));d=new DM;BM(d);e=0;while(e<6){f=Jg;BN();F(d,Bq(e,f,JT));e=e+1|0;}JQ=d;JU=B0(U(BW,0));d=new DK;BM(d);e=0;while(e<6){f=Jg;BN();F(d,Bq(e,f,JU));e=e+1|0;}JR=d;}
function B2(){S.call(this);this.F=null;}
var Jd=null;var JW=null;function Bw(){Bw=N(B2);Hb();}
function CM(a,b,c){if(b<23){Bs();return Cm(Jc,b,c);}if(b>=25){Cc();return C7(Je,b,c);}return K(K(a.F,b-23|0),c);}
function Bb(a,b,c,d){if(b!=20&&b!=21&&b!=22){if(b!=23&&b!=24)return B1(b,c,d);return B1(b,c,d);}return B1(b,c,d);}
function BY(a,b){if(b<23){Bs();return Cj(Jc,b);}if(b>=25){Cc();return Ch(Je,b);}return K(a.F,b-23|0);}
function Hb(){var b,c,d,e,f,g,h,i,j,k,l;b=new B2;Bw();Bm(b,C(26),0);b.F=H();c=H();d=0;while(d<6){e=new Ds;f=H();g=H();Bs();G(g,(Bn(Jc,20,0,Jg)).b);G(g,(Bn(Jc,20,2,E(16,8))).b);G(g,(Bn(Jc,20,4,E(8,16))).b);BA();G(g,T(JN,P(W(10,1,4,Jg))));G(g,T(JN,P(W(10,1,0,E(16,8)))));G(g,T(JN,P(W(10,1,2,E(8,16)))));G(g,(Bn(Jc,21,0,E(10,8))).b);F(f,g);h=1;while(h<6){F(f,Bq(h,Jg,g));h=h+1|0;}Bv(e,23,d,K(f,d),null);F(c,e);d=d+1|0;}F(b.F,c);c=H();h=0;while(h<6){i=new Ds;j=H();f=HR();F(j,f);k=1;while(k<6){F(j,Bq(k,Jg,f));k=k+1|
0;}Bv(i,24,h,K(j,h),null);F(c,i);h=h+1|0;}F(b.F,c);Jd=b;l=U(B2,1);l.data[0]=b;JW=l;}
var Ds=D(Be);
function HR(){var b;b=H();Bs();G(b,(Bn(Jc,20,3,E(0,0))).b);G(b,(Bn(Jc,20,5,E(30,(-12)))).b);G(b,(Bn(Jc,20,1,E(42,30))).b);BA();G(b,T(JN,P(W(10,1,4,E(8,(-2))))));G(b,T(JN,P(W(10,1,0,E(32,(-2))))));G(b,T(JN,P(W(10,1,2,E(32,22)))));G(b,(Bn(Jc,21,0,E(18,6))).b);G(b,(Bn(Jc,21,0,E(26,(-2)))).b);G(b,(Bn(Jc,21,0,E(34,14))).b);G(b,T(JN,P(W(10,1,0,E(24,6)))));G(b,T(JN,P(W(10,1,2,E(24,6)))));G(b,T(JN,P(W(10,1,4,E(24,6)))));return b;}
function B$(){S.call(this);this.P=null;}
var Je=null;var JX=null;function Cc(){Cc=N(B$);GS();}
function C7(a,b,c){if(b<23){Bs();return Cm(Jc,b,c);}if(b<25){Bw();return CM(Jd,b,c);}return K(K(a.P,b-25|0),c);}
function Ch(a,b){if(b<23){Bs();return Cj(Jc,b);}if(b<25){Bw();return BY(Jd,b);}return K(a.P,b-25|0);}
function GS(){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=new B$;Cc();Bm(b,C(26),0);b.P=H();c=H();d=0;while(d<6){e=new Dr;f=H();g=H();Bw();G(g,(Bb(Jd,23,0,Jg)).b);G(g,(Bb(Jd,24,1,E((-8),8))).b);G(g,(Bb(Jd,24,0,E(10,56))).b);G(g,(Bb(Jd,23,1,E(36,78))).b);BA();G(g,T(JN,P(W(11,1,5,E(18,24)))));G(g,T(JN,P(W(11,1,4,E(26,46)))));G(g,T(JN,P(W(11,1,1,E(18,48)))));G(g,T(JN,P(W(11,1,2,E(26,70)))));G(g,(Bb(Jd,20,0,E(26,46))).b);F(f,g);h=1;while(h<6){F(f,Bq(h,Jg,g));h=h+1|0;}Bv(e,25,d,K(f,d),null);F(c,e);d=d+1|0;}i=H();j=0;while(j
<6){k=new Dr;l=H();e=H();Bw();G(e,(Bb(Jd,24,0,Jg)).b);G(e,(Bb(Jd,23,1,E(0,(-24)))).b);G(e,(Bb(Jd,23,1,E(46,(-4)))).b);G(e,(Bb(Jd,23,1,E(26,22))).b);BA();G(e,T(JN,P(W(11,1,0,E(40,14)))));G(e,T(JN,P(W(11,1,2,E(16,14)))));G(e,T(JN,P(W(11,1,4,E(16,(-10))))));F(l,e);m=1;while(m<6){F(l,Bq(m,Jg,e));m=m+1|0;}Bv(k,26,j,K(l,j),null);F(i,k);j=j+1|0;}F(b.P,c);F(b.P,i);Je=b;n=U(B$,1);n.data[0]=b;JX=n;}
var Dr=D(Be);
var EX=D(0);
var D_=D(0);
var EO=D(0);
var B9=D();
function C4(){B9.call(this);this.c6=null;}
function Ee(){var a=this;C4.call(a);a.dW=0;a.bG=0;a.bf=null;a.c7=null;a.cW=null;}
function Ej(a,b,c,d){var e,$$je;e=a.c6;if(e===null)a.bG=1;if(!(a.bG?0:1))return;a:{try{Ge(e,b,c,d);break a;}catch($$e){$$je=HN($$e);if($$je instanceof EJ){}else{throw $$e;}}a.bG=1;}}
function Bx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;Bl(Ba(a.bf,b),10);b=a.bf;c=b.g;d=a.c7;if(c>d.data.length)d=BD(c);e=0;f=0;if(e>c){b=new Bf;V(b,C(31));I(b);}while(e<c){g=d.data;h=f+1|0;i=b.h.data;j=e+1|0;g[f]=i[e];f=h;e=j;}i=d.data;e=c-0|0;k=new EC;j=i.length;h=0+e|0;D2(k,j);k.i=0;k.s=h;k.cc=0;k.d3=0;k.c1=d;d=E0(CG(16,Cx(e,1024)));e=d.data.length;b=new Et;h=0+e|0;D2(b,e);HC();b.d_=JY;b.cL=0;b.cv=d;b.i=0;b.s=h;b.de=0;b.cd=0;l=a.cW;m=new Fd;i=E0(1);g=i.data;g[0]=63;Hk();n=JZ;m.bJ=n;m.bL=n;f=g.length;if(f&&f>=
m.bZ){m.dw=l;m.cu=i.cZ();m.dH=2.0;m.bZ=4.0;m.cb=BD(512);m.cE=E0(512);l=J0;if(l===null){l=new Bt;V(l,C(32));I(l);}m.bJ=l;m.bL=l;while(m.bc!=3){m.bc=2;a:{while(true){try{l=FX(m,k,b);}catch($$e){$$je=HN($$e);if($$je instanceof O){b=$$je;l=new Ew;FP(l,b);I(l);}else{throw $$e;}}if(l.J?0:1){e=BC(k);if(e<=0)break a;l=C_(e);}else if(C6(l))break;n=!Er(l)?m.bJ:m.bL;b:{if(n!==J0){if(n===J1)break b;else break a;}e=BC(b);i=m.cu;c=i.data.length;if(e<c){l=J2;break a;}Eu(b,i,0,c);}c=k.i;if(!Gk(l)){b=new Cw;Q(b);I(b);}DI(k,
c+l.cK|0);}}e=C6(l);Ej(a,d,0,b.i);Ey(b);if(!e){while(true){e=m.bc;if(e!=2&&e!=4)break;l=J3;if(l===l)m.bc=3;f=C6(l);Ej(a,d,0,b.i);Ey(b);if(!f){a.bf.g=0;return;}}b=new CZ;Q(b);I(b);}}b=new CZ;Q(b);I(b);}I(If(C(33)));}
function CL(){B9.call(this);this.dk=null;}
var Dg=D(CL);
var Jz=null;function Ge(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Gd(){var b;b=new Dg;b.dk=E0(1);Jz=b;}
var EZ=D(0);
function C0(){var a=this;B.call(a);a.db=null;a.dr=null;}
function Gp(b){var c,d;if(ER(b))I(FC(b));if(!Gq(Bi(b,0)))I(FC(b));c=1;while(c<Z(b)){a:{d=Bi(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Gq(d))break a;else I(FC(b));}}c=c+1|0;}}
function Gq(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var DB=D(C0);
var JA=null;function GV(){GV=N(DB);GJ();}
function GJ(){var b,c,d,e,f;b=new DB;GV();c=U(BK,0);d=c.data;Gp(C(34));e=d.length;f=0;while(f<e){Gp(d[f]);f=f+1|0;}b.db=C(34);b.dr=c.cZ();JA=b;}
var D6=D(0);
var Db=D(0);
var CN=D();
function G(a,b){var c,d;c=0;d=Cq(b);while(Cv(d)){if(!F(a,Cz(d)))continue;c=1;}return c;}
var E3=D(0);
var DW=D(0);
function B6(){CN.call(this);this.U=0;}
function Cq(a){var b;b=new El;b.cG=a;b.cp=a.U;b.cs=a.ct();b.ca=(-1);return b;}
var Ci=D(0);
var Di=D(0);
function Bh(){var a=this;B6.call(a);a.D=null;a.j=0;}
function H(){var a=new Bh();BM(a);return a;}
function BM(a){a.D=U(B,10);}
function FI(a,b){var c,d,e,f,g;c=a.D.data.length;if(c<b){d=c>=1073741823?2147483647:CG(b,CG(c*2|0,5));e=a.D;f=CS(De(e));if(f===null){f=new Cn;Q(f);I(f);}if(f===M($rt_voidcls())){f=new Bt;Q(f);I(f);}if(d<0){f=new Fh;Q(f);I(f);}e=e.data;g=Hp(f.I,d);b=Cx(d,e.length);d=0;while(d<b){g.data[d]=e[d];d=d+1|0;}a.D=g;}}
function K(a,b){var c;if(b>=0&&b<a.j)return a.D.data[b];c=new Bf;Q(c);I(c);}
function Hi(a){return a.j;}
function F(a,b){var c,d;FI(a,a.j+1|0);c=a.D.data;d=a.j;a.j=d+1|0;c[d]=b;a.U=a.U+1|0;return 1;}
function Dw(){var a=this;B.call(a);a.bU=0;a.t=null;a.y=null;a.cN=null;}
var E1=D(0);
function CV(){var a=this;B.call(a);a.L=0;a.be=null;a.bv=null;a.bn=null;a.b7=null;}
function Fk(){var a=this;B.call(a);a.b0=0;a.f=null;a.dC=null;}
function Hr(){var a=new Fk();GW(a);return a;}
function GW(a){var b,c,d;b=new EQ;c=F3(7);b.A=0;b.p=U(Ct,c);b.c0=0.75;ET(b);d=null;a.b0=0;a.f=b;a.dC=d;}
function EP(a,b,c){var d,e,f,g,h,i;d=BH();e=a.f.A;f=a.b0;g=X();Y(Bl(Y(Bl(Y(Bl(Y(L(g,C(35)),b),32),c),32),e),32),f);Bx(d,R(g));d=a.f;h=Bc(b);if(h===null)d=E8(d);else{i=DT(h);d=D7(d,h,i&(d.p.data.length-1|0),i);}return K(d===null?null:d.W,c);}
function C2(){var a=this;B.call(a);a.dE=0;a.cj=0;a.b_=0;a.by=null;a.d8=null;a.dV=null;}
function Iv(a,b,c,d,e){var f=new C2();EE(f,a,b,c,d,e);return f;}
function Hx(){var b,c,d;b=H();c=H();Bw();G(c,(Bb(Jd,26,0,Jg)).b);F(b,c);d=1;while(d<6){F(b,Bq(d,Jg,c));d=d+1|0;}return b;}
function EE(a,b,c,d,e,f){a.dE=b;a.cj=c;a.b_=d;a.by=e;a.dV=f;a.d8=H();}
function H8(a,b){var c,d,e,f,g,h,i;c=a.by.j;d=U(Df,c);e=d.data;f=0;while(f<c){g=K(a.by,f);h=Da(g);i=Bu(g.k,b);e[f]=GE(D1(Dh(g)),h,i);f=f+1|0;}i=new C1;c=a.cj;h=a.b_;b=Jg;Eo(i,c,h,h,b,b,d);return i;}
var CO=D(0);
function D1(b){if(BF(C(36),b))return 0;if(BF(C(37),b))return 1;if(BF(C(38),b))return 3;Bx(BH(),C(39));return 3;}
var CW=D(0);
var BW=D(0);
function Bq(b,c,d){var e,f,g,h;e=H();f=Cq(d);while(Cv(f)){g=Cz(f);h=Bu(BP(b,DV(g.k,c)),c);BA();F(e,BT(JN,D1(Dh(g)),(Da(g)+b|0)%6|0,h));}return e;}
var B8=D(S);
var JN=null;var J4=null;function BA(){BA=N(B8);Hq();}
function T(a,b){var c,d,e,f,g,h;c=b.bV.data;d=H();e=c.length;f=0;while(f<e){g=c[f];h=g.bO;if(!h)F(d,G1(g.H,g.R));else if(h==1)F(d,HH(g.H,g.R));else if(h==3)F(d,Gj(g.H,g.R));f=f+1|0;}return d;}
function BT(a,b,c,d){b=b%6|0;c=c%6|0;if(!b)return G1(c,d);if(b==1)return HH(c,d);if(b!=3)return Gj(c,d);return Gj(c,d);}
function Hq(){var b,c;b=new B8;BA();Bm(b,C(26),0);JN=b;c=U(B8,1);c.data[0]=b;J4=c;}
var FW=D();
function B0(b){var c,d;if(b===null){c=new Cn;V(c,C(27));I(c);}d=new Ea;d.bK=b;return d;}
var DL=D(Bh);
var DM=D(Bh);
var DK=D(Bh);
var Fz=D();
function Ea(){B6.call(this);this.bK=null;}
function Gz(a,b){return a.bK.data[b];}
function Hc(a){return a.bK.data.length;}
var DY=D(0);
var Dn=D();
function EQ(){var a=this;Dn.call(a);a.A=0;a.p=null;a.bj=0;a.c0=0.0;a.bF=0;}
function F3(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function ET(a){a.bF=a.p.data.length*a.c0|0;}
function D7(a,b,c,d){var e,f;e=a.p.data[c];while(e!==null){if(e.bt==d){f=e.bR;if(b!==f&&!(b===f?1:f instanceof BV&&f.bh==b.bh?1:0)?0:1)break;}e=e.Q;}return e;}
function E8(a){var b;b=a.p.data[0];while(b!==null&&b.bR!==null){b=b.Q;}return b;}
function Bd(a,b,c){var d,e,f;if(b===null){d=E8(a);if(d===null){a.bj=a.bj+1|0;d=EN(a,null,0,0);e=a.A+1|0;a.A=e;if(e>a.bF)E2(a);}}else{e=DT(b);f=e&(a.p.data.length-1|0);d=D7(a,b,f,e);if(d===null){a.bj=a.bj+1|0;d=EN(a,b,f,e);e=a.A+1|0;a.A=e;if(e>a.bF)E2(a);}}b=d.W;d.W=c;return b;}
function EN(a,b,c,d){var e,f,g;e=new Ct;f=null;e.bR=b;e.W=f;e.bt=d;g=a.p.data;e.Q=g[c];g[c]=e;return e;}
function E2(a){var b,c,d,e,f,g,h,i;b=a.p.data.length;b=F3(!b?1:b<<1);c=U(Ct,b);d=c.data;e=0;f=b-1|0;while(true){g=a.p.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.bt&f;i=h.Q;h.Q=d[b];d[b]=h;h=i;}e=e+1|0;}a.p=c;ET(a);}
function Dp(){B.call(this);this.ch=null;}
var J5=null;function F7(){F7=N(Dp);H4();}
function BP(b,c){var d;F7();switch(b%6|0){case 0:break;case 1:b=c.m;return E(b-c.n|0,b);case 2:d=c.n;return E( -d|0,c.m-d|0);case 3:return BR((-1)*c.m|0,(-1)*c.n|0);case 4:b= -c.m|0;return E(b+c.n|0,b);default:b=c.n;return E(b,b-c.m|0);}return c;}
function Dc(b,c,d){var e;F7();e=H();d=Cq(d);while(Cv(d)){F(e,Bu(BP(b,DV(Cz(d),c)),c));}return e;}
function H4(){var b,c;b=new Dp;Hw();c=J6;F7();if(c!==null)b.ch=c;else{Bx(BH(),C(40));b.ch=J6;}J5=b;}
function Gu(){Bt.call(this);this.dL=null;}
function FC(a){var b=new Gu();GX(b,a);return b;}
function GX(a,b){Q(a);a.dL=b;}
var DP=D(BI);
function CP(){var a=this;B.call(a);a.dd=0;a.cQ=null;}
var J6=null;function Hw(){Hw=N(CP);H0();}
function H0(){var b,c;b=new CP;c=Jg;Hw();b.dd=0;if(c!==null)b.cQ=c;else{Bx(BH(),C(41));b.cQ=Jg;}J6=b;}
var E7=D(0);
function El(){var a=this;B.call(a);a.bA=0;a.cp=0;a.cs=0;a.ca=0;a.cG=null;}
function Cv(a){return a.bA>=a.cs?0:1;}
function Cz(a){var b,c,d;b=a.cp;c=a.cG;if(b<c.U){c=new Ec;Q(c);I(c);}d=a.bA;a.ca=d;a.bA=d+1|0;return c.bw(d);}
var Co=D(0);
function BE(){var a=this;B.call(a);a.l=null;a.k=null;a.bi=null;}
function Da(a){return a.l.bT;}
function Dh(a){return a.l.bb();}
function HB(a){return a.k;}
var DS=D(BE);
function G1(a,b){var c=new DS();G8(c,a,b);return c;}
function G8(a,b,c){var d;Ha();d=J7;if(b<0)b= -b|0;b=b%6|0;a.l=K(d.bM,b);a.k=c;a.bi=null;}
function GO(a,b){var c,d;c=new DS;d=a.l;b=Bu(a.k,b);c.l=d;c.k=b;return c;}
var EK=D(BE);
function HH(a,b){var c=new EK();GB(c,a,b);return c;}
function GB(a,b,c){var d;H_();d=J8;if(b<0)b= -b|0;b=b%6|0;a.l=K(d.bC,b);a.k=c;a.bi=null;}
function Hh(a,b){var c,d;c=new EK;d=a.l;b=Bu(a.k,b);c.l=d;c.k=b;return c;}
var E_=D(BE);
function Gj(a,b){var c=new E_();H1(c,a,b);return c;}
function H1(a,b,c){var d;G9();d=J9;if(b<0)b= -b|0;b=b%6|0;a.l=K(d.bN,b);a.k=c;a.bi=null;}
function HA(a,b){var c,d;c=new E_;d=a.l;b=Bu(a.k,b);c.l=d;c.k=b;c.bi=null;return c;}
var DE=D(0);
function FU(){var a=this;B.call(a);a.dG=0;a.d6=0;a.dz=null;a.d0=null;a.bV=null;a.d$=0;}
function GA(a,b,c,d,e,f){var g=new FU();Hs(g,a,b,c,d,e,f);return g;}
function Hs(a,b,c,d,e,f,g){a.d$=b;a.dG=c;a.d6=d;a.dz=e;a.d0=f;a.bV=g;}
function Hf(a){var b,c,d,e,f,g;b=X();c=a.bV.data;d=c.length;e=0;while(e<d){f=c[e];g=X();Ba(g,CF(f.bO));Ba(g,C(42));Ba(g,CF(f.H));Ba(g,C(42));Ba(g,EY(f.R));Ba(g,C(42));Ba(g,C(43));Ba(b,R(g));e=e+1|0;}return R(b);}
function C3(){var a=this;B.call(a);a.bO=0;a.H=0;a.R=null;}
function H2(a,b,c){var d=new C3();GP(d,a,b,c);return d;}
function Gy(b){if(b!=68&&b!=88)return 1;return 3;}
function EB(b,c){if(c==88)b=b+5|0;if(c==68)b=b+3|0;return DX(b);}
function GP(a,b,c,d){a.bO=b;a.H=c;a.R=d;}
var DN=D(0);
function Dm(){var a=this;B.call(a);a.bR=null;a.W=null;}
function Ct(){var a=this;Dm.call(a);a.bt=0;a.Q=null;}
function Ca(){S.call(this);this.bM=null;}
var J7=null;var J$=null;function Ha(){Ha=N(Ca);H5();}
function H5(){var b,c,d,e,f,g,h;b=new Ca;Ha();Bm(b,C(26),0);b.bM=H();c=0;while(c<(D$()).j){d=null;e=J_;e.C=1;e.z=K(D$(),c);e=DA(e);f=b.bM;g=new Cp;C8(g,c,e,d);F(f,g);c=c+1|0;}J7=b;h=U(Ca,1);h.data[0]=b;J$=h;}
function B7(){S.call(this);this.bC=null;}
var J8=null;var Ka=null;function H_(){H_=N(B7);GG();}
function GG(){var b,c,d,e,f,g,h;b=new B7;H_();Bm(b,C(26),0);b.bC=H();c=0;while(c<(EA()).j){d=null;e=J_;e.C=1;e.z=K(EA(),c);e=DA(e);f=b.bC;g=new Cy;C8(g,c,e,d);F(f,g);c=c+1|0;}J8=b;h=U(B7,1);h.data[0]=b;Ka=h;}
function BX(){S.call(this);this.bN=null;}
var J9=null;var Kb=null;function G9(){G9=N(BX);HQ();}
function HQ(){var b,c,d,e,f,g,h;b=new BX;G9();Bm(b,C(26),0);b.bN=H();c=0;while(c<(Ep()).j){d=null;e=J_;e.C=1;e.z=K(Ep(),c);e=DA(e);f=b.bN;g=new CI;C8(g,c,e,d);F(f,g);c=c+1|0;}J9=b;h=U(BX,1);h.data[0]=b;Kb=h;}
var Eg=D(0);
var Ef=D(0);
function Cr(){var a=this;B.call(a);a.dR=null;a.dK=null;a.b=null;a.d1=null;}
function Kc(a,b){var c=new Cr();Dq(c,a,b);return c;}
function Dq(a,b,c){var d;a.dR=b;a.dK=c;a.d1=null;a.b=H();b=Cq(b.Y);while(Cv(b)){d=Cz(b);F(a.b,d.bl(c));}}
function B4(){var a=this;B.call(a);a.cC=0;a.i=0;a.s=0;a.ba=0;}
function D2(a,b){a.ba=(-1);a.cC=b;a.s=b;}
function BC(a){return a.s-a.i|0;}
function BO(a){return a.i>=a.s?0:1;}
var Fb=D(0);
var CX=D(B4);
function DI(a,b){var c,d,e;if(b>=0&&b<=a.s){a.i=b;if(b<a.ba)a.ba=0;return a;}c=new Bt;d=a.s;e=X();Bl(Y(L(Y(L(e,C(44)),b),C(45)),d),93);V(c,R(e));I(c);}
var F2=D();
function Cx(b,c){if(b<c)c=b;return c;}
function CG(b,c){if(b>c)c=b;return c;}
function Dt(){var a=this;B4.call(a);a.cL=0;a.cv=null;a.d_=null;}
function Eu(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.cd){e=new E4;Q(e);I(e);}if(BC(a)<d){e=new Es;Q(e);I(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bf;j=X();Y(L(Y(L(j,C(46)),h),C(47)),g);V(i,R(j));I(i);}if(d<0){e=new Bf;i=X();L(Y(L(i,C(48)),d),C(49));V(e,R(i));I(e);}h=a.i;k=h+a.cL|0;l=0;while(l<d){b=a.cv.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.i=h+d|0;return a;}}b=b.data;e=new Bf;d=b.length;i=X();Bl(Y(L(Y(L(i,C(50)),c),C(45)),d),41);V(e,R(i));I(e);}
function Ey(a){a.i=0;a.s=a.cC;a.ba=(-1);return a;}
function Ck(){B.call(this);this.dn=null;}
var J1=null;var J0=null;var JZ=null;function Hk(){Hk=N(Ck);GH();}
function F1(a){var b=new Ck();Gn(b,a);return b;}
function Gn(a,b){Hk();a.dn=b;}
function GH(){J1=F1(C(51));J0=F1(C(52));JZ=F1(C(53));}
var CR=D(CX);
function EC(){var a=this;CR.call(a);a.d3=0;a.cc=0;a.c1=null;}
function CK(){var a=this;B.call(a);a.dw=null;a.cu=null;a.dH=0.0;a.bZ=0.0;a.bJ=null;a.bL=null;a.bc=0;}
function CU(){var a=this;B.call(a);a.J=0;a.cK=0;}
var J3=null;var J2=null;function F4(a,b){var c=new CU();Go(c,a,b);return c;}
function Go(a,b,c){a.J=b;a.cK=c;}
function C6(a){return a.J!=1?0:1;}
function Gk(a){var b;b=a.J!=2?0:1;return !b&&!Er(a)?0:1;}
function Er(a){return a.J!=3?0:1;}
function C_(b){return F4(2,b);}
function Fm(){J3=F4(0,0);J2=F4(1,0);}
function Et(){var a=this;Dt.call(a);a.de=0;a.cd=0;}
function Du(){var a=this;B.call(a);a.dF=0;a.c3=null;}
var J_=null;var Kd=null;function HX(a,b){var c=new Du();Gf(c,a,b);return c;}
function Gf(a,b,c){a.dF=b;if(c!==null)a.c3=c;else a.c3=H();}
function Fs(){var b;b=new EG;b.C=0;b.z=H();J_=b;Kd=HX(0,H());}
function BJ(){var a=this;B.call(a);a.bT=0;a.dc=null;a.di=null;}
function C8(a,b,c,d){a.bT=b;a.dc=c;a.di=d;}
function G$(a){return a.bT;}
var Cp=D(BJ);
var Ke=null;var Kf=null;function Hm(){Hm=N(Cp);HK();}
function HD(a){return C(36);}
function D$(){Hm();return Kf;}
function HK(){var b,c,d;Ke=B0(Ev(By,[Jg,E(1,(-1)),E(0,(-2)),E(0,(-3)),E(2,(-2)),E(3,(-3)),E(4,(-2)),E(5,(-2)),E(6,0),E(5,1),E(4,2),E(2,1),E(2,2),E(1,2)]));b=new DR;BM(b);c=0;while(c<6){d=Jg;Hm();F(b,Dc(c,d,Ke));c=c+1|0;}Kf=b;}
var Cy=D(BJ);
var Kg=null;var Kh=null;function GT(){GT=N(Cy);Ho();}
function HL(a){return C(37);}
function EA(){GT();return Kh;}
function Ho(){var b,c,d;Kg=B0(Ev(By,[Jg,E(1,2),E(0,2),E((-1),1),E((-2),2),E((-4),1),E((-6),0),E((-7),(-2)),E((-6),(-2)),E((-6),(-3)),E((-4),(-2)),E((-3),(-3)),E((-2),(-2)),E((-2),(-1))]));b=new D8;BM(b);c=0;while(c<6){d=Jg;GT();F(b,Dc(c,d,Kg));c=c+1|0;}Kh=b;}
var CI=D(BJ);
var Ki=null;var Kj=null;function Hv(){Hv=N(CI);GD();}
function HZ(a){return C(38);}
function Ep(){Hv();return Kj;}
function GD(){var b,c,d;Ki=B0(Ev(By,[Jg,E(1,2),E(0,2),E(0,3),E((-2),2),E((-3),0),E((-4),0),E((-5),(-1)),E((-4),(-2)),E((-2),(-1)),E((-2),(-2)),E((-1),(-2)),E(0,(-2)),E(1,(-1))]));b=new Fa;BM(b);c=0;while(c<6){d=Jg;Hv();F(b,Dc(c,d,Ki));c=c+1|0;}Kj=b;}
function EG(){var a=this;B.call(a);a.C=0;a.z=null;}
function DA(a){var b;b=HX(a.C,a.z);a.C=0;a.z=H();return b;}
function Dd(){B.call(this);this.dQ=null;}
var JY=null;var Kk=null;function HC(){HC=N(Dd);HV();}
function GF(a){var b=new Dd();Fj(b,a);return b;}
function Fj(a,b){HC();a.dQ=b;}
function HV(){JY=GF(C(54));Kk=GF(C(55));}
var DR=D(Bh);
var D8=D(Bh);
var Fa=D(Bh);
function Df(){var a=this;B.call(a);a.c2=0;a.cg=0;a.bY=null;}
function GE(a,b,c){var d=new Df();GZ(d,a,b,c);return d;}
function GZ(a,b,c,d){a.c2=b;a.cg=c;a.bY=d;}
function C1(){var a=this;B.call(a);a.dP=0;a.c8=0;a.d7=0;a.dN=null;a.d5=null;a.cw=null;}
function Kl(a,b,c,d,e,f){var g=new C1();Eo(g,a,b,c,d,e,f);return g;}
function Eo(a,b,c,d,e,f,g){a.dP=b;a.c8=c;a.d7=d;a.dN=e;a.d5=f;a.cw=g;}
function HY(a){var b,c,d,e,f,g;b=X();c=a.cw.data;d=c.length;e=0;while(e<d){f=c[e];g=X();Ba(g,CF(f.c2));Ba(g,C(42));Ba(g,CF(f.cg));Ba(g,C(42));Ba(g,EY(f.bY));Ba(g,C(42));Ba(g,C(43));Ba(b,R(g));e=e+1|0;}return R(b);}
function DH(){var a=this;CK.call(a);a.cb=null;a.cE=null;}
function FX(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.cb;e=0;f=0;g=a.cE;a:{b:{while(true){if((e+32|0)>f&&BO(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=BC(b)+j|0;h=i.length;f=Cx(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new Bf;b=X();Y(L(Y(L(b,C(56)),k),C(47)),h);V(l,R(b));I(l);}if(BC(b)<e)break;if(e<0){b=new Bf;c=X();L(Y(L(c,C(48)),e),C(49));V(b,R(c));I(b);}h=b.i;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.c1.data[n+b.cc|0];m=m+1|0;j=o;n=k;}b.i=h+e|0;e=0;}if(!BO(c))
{l=!BO(b)&&e>=f?J3:J2;break a;}i=g.data;k=Cx(BC(c),i.length);p=new Eq;p.b9=b;p.cB=c;l=Gm(a,d,e,f,g,0,k,p);e=p.b8;j=p.cJ;if(l===null){if(!BO(b)&&e>=f)l=J3;else if(!BO(c)&&e>=f)l=J2;}Eu(c,g,0,j);if(l!==null)break a;}b=new D9;Q(b);I(b);}p=new Bf;l=X();Bl(Y(L(Y(L(l,C(50)),j),C(45)),h),41);V(p,R(l));I(p);}DI(b,b.i-(f-e|0)|0);return l;}
var Fd=D(DH);
function Gm(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(CT(h,2))break a;i=J2;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!Em(l)&&!Ed(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(CT(h,3))break a;i=J2;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Em(l))
{i=C_(1);break a;}if(j>=d){if(BO(h.b9))break a;i=J3;break a;}c=j+1|0;n=k[j];if(!Ed(n)){j=c+(-2)|0;i=C_(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(CT(h,4))break a;i=J2;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.b8=j;h.cJ=f;return i;}
var EJ=D(BI);
var Ec=D(O);
var Fh=D(O);
var Fw=D();
var CZ=D(O);
var Ew=D(B_);
var Cw=D(O);
function Eq(){var a=this;B.call(a);a.b9=null;a.cB=null;a.b8=0;a.cJ=0;}
function CT(a,b){return BC(a.cB)<b?0:1;}
var E4=D(Cw);
var Es=D(O);
var D9=D(O);
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,0,Fn,0,B,[],0,3,0,0,0,D5,0,B,[],3,3,0,0,0,DQ,0,B,[],3,3,0,0,0,Eb,0,B,[D5,DQ],0,3,0,0,0,Gl,0,B,[],4,0,0,0,0,F_,0,B,[],4,3,0,0,0,Cd,0,B,[],0,3,0,0,0,BI,0,Cd,[],0,3,0,0,0,O,0,BI,[],0,3,0,0,0,Ga,0,O,[],0,3,0,0,0,BB,0,B,[],3,3,0,0,0,Bp,0,B,[],3,3,0,0,0,CE,0,B,[],3,3,0,0,0,BK,0,B,[BB,Bp,CE],0,3,0,DD,0,B_,0,Cd,[],0,3,0,0,0,Cg,0,B_,[],0,3,0,0,0,FZ,0,Cg,[],0,3,0,0,0,Dv,0,B,[BB],1,3,0,0,0,BV,0,Dv,[Bp],0,3,0,0,0,C5,0,B,[BB,CE],0,0,0,0,["bH",IN(Ex),"Z",IM(R)],C$,0,B,[],3,3,0,0,0,Fp,0,C5,[C$],
0,3,0,0,["Z",IM(Hu),"bH",IN(HT)],B3,0,Cg,[],0,3,0,0,0,FV,0,B3,[],0,3,0,0,0,FL,0,B3,[],0,3,0,0,0,Bk,0,B,[],3,3,0,0,0,DJ,0,B,[Bk],3,3,0,0,0,DO,0,B,[DJ],3,3,0,0,0,Br,0,B,[Bk],3,3,0,0,0,Fy,0,B,[DO,Br],3,3,0,0,0,Eh,0,B,[],3,3,0,0,0,By,0,B,[Bp,Eh],0,3,0,0,0,BS,0,B,[],3,3,0,0,0,Fo,0,B,[BS],0,3,0,0,0,Gc,0,B,[],0,3,0,0,0,FM,0,B,[BS],0,3,0,0,0,FG,0,B,[BS],0,3,0,0,0,FB,0,B,[BS],0,3,0,0,0,ED,0,B,[],4,3,0,0,0,Gv,0,B,[],4,3,0,0,0,E9,0,B,[Br],3,3,0,0,0,EH,0,B,[Br],3,3,0,0,0,Ez,0,B,[Br],3,3,0,0,0,Ek,0,B,[Br],3,3,0,0,0,EF,0,
B,[Br],3,3,0,0,0,ES,0,B,[Br,E9,EH,Ez,Ek,EF],3,3,0,0,0,EM,0,B,[],3,3,0,0,0,EW,0,B,[Bk],3,3,0,0,0,FN,0,B,[Bk,ES,EM,EW],1,3,0,0,["e0",IN(Hg),"fA",IO(GN),"e1",IO(Ib),"em",IP(Hd),"eI",IN(Hj),"eQ",IM(HI),"ff",IP(GK)]]);
$rt_metadata([EL,0,B,[],3,3,0,0,0,Fg,0,B,[EL],0,3,0,0,0,Bf,0,O,[],0,3,0,0,0,FE,0,B,[],4,3,0,0,0,Cn,0,O,[],0,3,0,0,0,CD,0,O,[],0,3,0,0,0,BQ,0,B,[Bp],0,3,0,0,0,Bt,0,O,[],0,3,0,0,0,BG,0,Bt,[],0,3,0,0,0,Bz,0,B,[],4,3,0,EI,0,F6,0,B,[Bk],1,3,0,0,0,FH,0,B,[Bk],1,3,0,0,0,Gs,0,B,[Bk],1,3,0,0,0,Dz,0,B,[Bk],3,3,0,0,0,EU,0,B,[Dz],0,3,0,0,["d2",IN(HG)],FY,0,B,[Bk],1,3,0,0,0,EV,0,B,[Dz],0,3,0,0,["d2",IN(GM)],Gt,0,B,[],4,0,0,0,0,F$,0,B,[],4,3,0,0,0,E6,0,B,[],0,3,0,0,0,FT,0,B,[],4,3,0,0,0,Gw,0,B,[],4,3,0,0,0,Dj,0,Bf,[],0,3,
0,0,0,S,0,B,[Bp,BB],1,3,0,0,0,Cf,0,S,[],12,3,0,Cu,0,Gr,0,B,[BS],0,3,0,0,0,Ce,0,S,[],12,3,0,D4,0,B5,0,S,[],12,3,0,FK,0,BU,0,S,[],12,3,0,Bs,0,CH,0,B,[],3,3,0,0,0,Ff,0,B,[CH],3,3,0,0,0,Be,0,B,[Ff],0,3,0,BN,["b4",IN(GI)],B2,0,S,[],12,3,0,Bw,0,Ds,0,Be,[],0,3,0,0,0,B$,0,S,[],12,3,0,Cc,0,Dr,0,Be,[],0,3,0,0,0,EX,0,B,[],3,3,0,0,0,D_,0,B,[EX],3,3,0,0,0,EO,0,B,[],3,3,0,0,0,B9,0,B,[D_,EO],1,3,0,0,0,C4,0,B9,[],0,3,0,0,0,Ee,0,C4,[],0,3,0,0,0,CL,0,B9,[],1,3,0,0,0,Dg,0,CL,[],0,3,0,0,0,EZ,0,B,[],3,3,0,0,0,C0,0,B,[Bp],1,3,0,
0,0,DB,0,C0,[],0,3,0,GV,0,D6,0,B,[],3,3,0,0,0,Db,0,B,[D6],3,3,0,0,0,CN,0,B,[Db],1,3,0,0,0]);
$rt_metadata([E3,0,B,[Db],3,3,0,0,0,DW,0,B,[E3],3,3,0,0,0,B6,0,CN,[DW],1,3,0,0,0,Ci,0,B,[],3,3,0,0,0,Di,0,B,[],3,3,0,0,0,Bh,0,B6,[Ci,BB,Di],0,3,0,0,["bw",IN(K),"ct",IM(Hi)],Dw,0,B,[EZ],0,3,0,0,0,E1,0,B,[],3,3,0,0,0,CV,0,B,[E1],0,3,0,0,0,Fk,0,B,[],0,3,0,0,0,C2,0,B,[CH],0,3,0,0,["b4",IN(H8)],CO,0,B,[],3,3,0,0,0,CW,0,B,[],3,3,0,0,0,BW,0,B,[CO,CW],3,3,0,0,0,B8,0,S,[],12,3,0,BA,0,FW,0,B,[],0,3,0,0,0,DL,0,Bh,[],0,0,0,0,0,DM,0,Bh,[],0,0,0,0,0,DK,0,Bh,[],0,0,0,0,0,Fz,0,B,[],4,3,0,0,0,Ea,0,B6,[Di],0,0,0,0,["bw",IN(Gz),
"ct",IM(Hc)],DY,0,B,[],3,3,0,0,0,Dn,0,B,[DY],1,3,0,0,0,EQ,0,Dn,[Ci,BB],0,3,0,0,0,Dp,0,B,[],0,3,0,F7,0,Gu,0,Bt,[],0,3,0,0,0,DP,0,BI,[],0,3,0,0,0,CP,0,B,[],0,3,0,Hw,0,E7,0,B,[],3,3,0,0,0,El,0,B,[E7],0,0,0,0,0,Co,0,B,[],3,3,0,0,0,BE,0,B,[BW,Co],1,3,0,0,0,DS,0,BE,[],0,3,0,0,["bl",IN(GO)],EK,0,BE,[],0,3,0,0,["bl",IN(Hh)],E_,0,BE,[],0,3,0,0,["bl",IN(HA)],DE,0,B,[],3,3,0,0,0,FU,0,B,[DE],0,3,0,0,["ck",IM(Hf)],C3,0,B,[Co],0,3,0,0,0,DN,0,B,[],3,3,0,0,0,Dm,0,B,[DN,Ci],0,0,0,0,0,Ct,0,Dm,[],0,0,0,0,0,Ca,0,S,[],12,3,0,Ha,
0,B7,0,S,[],12,3,0,H_,0,BX,0,S,[],12,3,0,G9,0,Eg,0,B,[CH,CW],3,3,0,0,0,Ef,0,B,[Eg],3,3,0,0,0,Cr,0,B,[Ef],0,3,0,0,0,B4,0,B,[],1,3,0,0,0,Fb,0,B,[],3,3,0,0,0,CX,0,B4,[Bp,C$,CE,Fb],1,3,0,0,0]);
$rt_metadata([F2,0,B,[],4,3,0,0,0,Dt,0,B4,[Bp],1,3,0,0,0,Ck,0,B,[],0,3,0,Hk,0,CR,0,CX,[],1,0,0,0,0,EC,0,CR,[],0,0,0,0,0,CK,0,B,[],1,3,0,0,0,CU,0,B,[],0,3,0,0,0,Et,0,Dt,[],0,0,0,0,0,Du,0,B,[],0,3,0,0,0,BJ,0,B,[CO],1,3,0,0,0,Cp,0,BJ,[],0,3,0,Hm,["bb",IM(HD)],Cy,0,BJ,[],0,3,0,GT,["bb",IM(HL)],CI,0,BJ,[],0,3,0,Hv,["bb",IM(HZ)],EG,0,B,[],4,3,0,0,0,Dd,0,B,[],4,3,0,HC,0,DR,0,Bh,[],0,0,0,0,0,D8,0,Bh,[],0,0,0,0,0,Fa,0,Bh,[],0,0,0,0,0,Df,0,B,[Co],0,3,0,0,0,C1,0,B,[DE],0,3,0,0,["ck",IM(HY)],DH,0,CK,[],1,3,0,0,0,Fd,0,DH,
[],0,3,0,0,0,EJ,0,BI,[],0,3,0,0,0,Ec,0,O,[],0,3,0,0,0,Fh,0,O,[],0,3,0,0,0,Fw,0,B,[],4,3,0,0,0,CZ,0,O,[],0,3,0,0,0,Ew,0,B_,[],0,3,0,0,0,Cw,0,O,[],0,3,0,0,0,Eq,0,B,[],0,3,0,0,0,E4,0,Cw,[],0,3,0,0,0,Es,0,O,[],0,3,0,0,0,D9,0,O,[],0,3,0,0,0]);
function $rt_array(cls,data){this.gh=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Error in MetaTileDescriptorSupplier ","SupertileDescriptor","SupertileDescriptor 2","[]","0]","Either src or dest is null","null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","SystemTileDescriptorSupplier called to supply","Xa","aD","object","function","string","number",
"zizizXazizaDziziz","z","i","aDzizizXa","INSTANCE","","a","ziziN","N","Index out of bounds","Action must be non-null","Replacement preconditions do not hold","UTF-8","SuperBlueprintLevel.getBlueprint ","Turtle","FTurtle","FHat","TileBlueprint.getTypeNr has invalid type","HexTransformer got data null","HexPlacementData got rotCenter null",",","\n","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT",
"BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst "]);
BK.prototype.toString=function(){return $rt_ustr(this);};
BK.prototype.valueOf=BK.prototype.toString;B.prototype.toString=function(){return $rt_ustr(Hz(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(Il);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=FN.prototype;c.removeEventListener=c.em;c.dispatchEvent=c.eI;c.get=c.e0;c.addEventListener=c.ff;Object.defineProperty(c,"length",{get:c.eQ});c=EU.prototype;c.accept=c.d2;c=EV.prototype;c.accept=c.d2;})();
}));

//# sourceMappingURL=classes.js.map