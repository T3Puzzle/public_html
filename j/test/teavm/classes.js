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
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.dw=f;}
function $rt_cls(cls){return GN(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return JW(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.u.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return JN(t);}
function $rt_throwableCause(t){return JQ(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Kf());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return Kg(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var P=$rt_throw;var Ia=$rt_compare;var Kh=$rt_nullCheck;var Q=$rt_cls;var V=$rt_createArray;var JZ=$rt_isInstance;var Ki=$rt_nativeThread;var Kj=$rt_suspending;var Kk=$rt_resuming;var Kl=$rt_invalidPointer;var D=$rt_s;var U=$rt_eraseClinit;var Is=$rt_imul;var Hq=$rt_wrapException;var Km=$rt_checkBounds;var Kn=$rt_checkUpperBound;var Ko=$rt_checkLowerBound;var Kp=$rt_wrapFunction0;var Kq=$rt_wrapFunction1;var Kr=$rt_wrapFunction2;var Ks=$rt_wrapFunction3;var Kt=$rt_wrapFunction4;var E=$rt_classWithoutFields;var Cq
=$rt_createArrayFromData;var Ku=$rt_createCharArrayFromData;var Kv=$rt_createByteArrayFromData;var Kw=$rt_createShortArrayFromData;var Kx=$rt_createIntArrayFromData;var Ky=$rt_createBooleanArrayFromData;var Kz=$rt_createFloatArrayFromData;var KA=$rt_createDoubleArrayFromData;var KB=$rt_createLongArrayFromData;var KC=$rt_createBooleanArray;var FE=$rt_createByteArray;var KD=$rt_createShortArray;var BM=$rt_createCharArray;var Kb=$rt_createIntArray;var KE=$rt_createLongArray;var KF=$rt_createFloatArray;var KG=$rt_createDoubleArray;var Ia
=$rt_compare;var KH=$rt_castToClass;var KI=$rt_castToInterface;var KJ=$rt_equalDoubles;var KK=Long_toNumber;var KL=Long_fromInt;var KM=Long_fromNumber;var KN=Long_create;var KO=Long_ZERO;var KP=Long_hi;var KQ=Long_lo;
function B(){this.$id$=0;}
function B9(a){return GN(a.constructor);}
function I5(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=D(0);else{if(!d)f=32;else{g=0;f=d>>>16|0;if(f)g=16;else f=d;h=f>>>8|0;if(!h)h=f;else g=g|8;i=h>>>4|0;if(!i)i=h;else g=g|4;f=i>>>2|0;if(!f)f=i;else g=g|2;if(f>>>1|0)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=BM(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){i=f+1|0;l[f]=D0((d>>>j|0)&15,16);j=j-4|0;f=i;}e=JW(k);}b=Bb();S(S(b,D(1)),e);return X(b);}
function Jw(a){var b,c,d;if(!JZ(a,CF)&&a.constructor.$meta.item===null){b=new Em;Be(b);P(b);}b=H3(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var F$=E();
function J1(b){var c,d,e,f,g,h;Gh();Gp();GF();Hp();Hl();F8();Gi();c=$rt_globals.window.document;d=D$($rt_str(c.getElementById("h_type").textContent));e=D$($rt_str(c.getElementById("h_level").textContent));f=C(0,0);C(0,0);if(d<10)f=Ey(Iq(d,e,0,f));else if(d<20)f=K(M(d,e,0,f));else if(e){Bw();f=(O(KR,e,d,0)).cn(f);}else if(d<23){BK();f=C2(CK(KS,d,0),f);}else if(d<25){BH();f=C2(C7(KT,d,0),f);}else if(d>=27){BI(BP(),D(2));f=null;}else{C1();f=C2(Dx(KU,d,0),f);}if(f===null)f=Ey(Iq(1,1,0,KV));g=f.V();h=D(3);if(Bd(g)
>0){f=Bb();S(S(Br(f,91),g),D(4));h=X(f);}f=c.getElementById("h_textformat");h=$rt_ustr(h);f.textContent=h;}
var EE=E(0);
var En=E(0);
function EN(){B.call(this);this.Q=null;}
function GN(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new EN;c.Q=b;d=c;b.classObject=d;}return c;}
function CU(a){return a.Q.$meta.primitive?1:0;}
function CJ(a){return GN(a.Q.$meta.item);}
var Hy=E();
function Gg(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Dz(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Hc=E();
function H3(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function GP(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(GP(d[e],c))return 1;e=e+1|0;}return 0;}
function CB(){var a=this;B.call(a);a.ds=null;a.dn=null;a.bY=0;a.b$=0;}
function KW(a){var b=new CB();Bi(b,a);return b;}
function KX(a){var b=new CB();GM(b,a);return b;}
function Bi(a,b){a.bY=1;a.b$=1;a.ds=b;}
function GM(a,b){a.bY=1;a.b$=1;a.dn=b;}
function Ic(a){return a;}
function JN(a){return a.ds;}
function JQ(a){var b;b=a.dn;if(b===a)b=null;return b;}
var B0=E(CB);
function KY(){var a=new B0();Be(a);return a;}
function Be(a){a.bY=1;a.b$=1;}
var Bc=E(B0);
function Kg(a){var b=new Bc();IR(b,a);return b;}
function IR(a,b){Bi(a,b);}
var Hg=E(Bc);
var BV=E(0);
var BG=E(0);
var CY=E(0);
function BQ(){var a=this;B.call(a);a.u=null;a.be=0;}
var KZ=null;var K0=null;var K1=null;function C3(){C3=U(BQ);Iv();}
function JW(a){var b=new BQ();EI(b,a);return b;}
function Je(a,b,c){var d=new BQ();FU(d,a,b,c);return d;}
function EI(a,b){C3();FU(a,b,0,b.data.length);}
function FU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;C3();e=BM(d);a.u=e;if(b===null){f=new CL;Bi(f,D(5));P(f);}if(c>=0&&d>=0&&(c+d|0)<=DO(b)&&(0+d|0)<=DO(e)){a:{b:{c:{if(b!==e){g=CJ(B9(b));f=CJ(B9(e));if(g!==null&&f!==null){if(g===f)break c;if(!CU(g)&&!CU(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;m=k[j];n=f.Q;if(!(m!==null&&!(typeof m.constructor.$meta==='undefined'?1:0)&&GP(m.constructor,n)?1:0)){DS(b,c,e,0,i);g=new CW;Be(g);P(g);}i=i+1|0;j=l;}DS(b,c,e,0,d);break a;}if(!CU(g))break b;if(CU(f))break c;else break b;}g
=new CW;Be(g);P(g);}}DS(b,c,e,0,d);break a;}g=new CW;Be(g);P(g);}return;}g=new Bp;Be(g);P(g);}
function Bl(a,b){var c,d;if(b>=0){c=a.u.data;if(b<c.length)return c[b];}d=new DN;Be(d);P(d);}
function Bd(a){return a.u.data.length;}
function Fu(a){return a.u.data.length?0:1;}
function CP(a,b,c){var d,e;d=Ia(b,c);if(d>0){e=new Bp;Be(e);P(e);}if(!d){C3();return K0;}if(!b&&c==Bd(a))return a;return Je(a.u,b,c-b|0);}
function C5(a,b){var c,d,e;c=Bd(a)-Bd(b)|0;d=0;while(d<=c){e=0;while(true){if(e>=Bd(b))return 1;if(Bl(a,d+e|0)!=Bl(b,e))break;e=e+1|0;}d=d+1|0;}return 0;}
function By(a,b,c){var d,e,f,g;d=Bb();e=Bd(a)-Bd(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Bd(b)){S(d,c);f=f+(Bd(b)-1|0)|0;break a;}if(Bl(a,f+g|0)!=Bl(b,g))break;g=g+1|0;}Br(d,Bl(a,f));}f=f+1|0;}S(d,CP(a,f,Bd(a)));return X(d);}
function D9(b){C3();if(b===null)b=D(6);return b;}
function BZ(a,b){var c;if(a===b)return 1;if(!(b instanceof BQ))return 0;if(Bd(b)!=Bd(a))return 0;c=0;while(c<Bd(b)){if(Bl(a,c)!=Bl(b,c))return 0;c=c+1|0;}return 1;}
function IB(a){var b,c,d,e;a:{if(!a.be){b=a.u.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.be=(31*a.be|0)+e|0;d=d+1|0;}}}return a.be;}
function Iv(){var b,c;b=BM(0);KZ=b;c=new BQ;C3();c.u=b;K0=c;K1=new FW;}
var Cy=E(CB);
var CE=E(Cy);
var G0=E(CE);
var DZ=E();
function Ch(){DZ.call(this);this.bt=0;}
var K2=null;var K3=null;function Im(a){var b=new Ch();FY(b,a);return b;}
function FY(a,b){a.bt=b;}
function BO(b){return (EU(J8(20),b,10)).U();}
function D$(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;if(b===null){b=new BN;Bi(b,D(7));P(b);}c=Bd(b);if(0==c){b=new BN;Bi(b,D(8));P(b);}a:{d=0;switch(Bl(b,0)){case 43:break;case 45:d=1;e=1;break a;default:e=0;break a;}e=1;}f=0;if(e==c){b=new BN;Be(b);P(b);}b:{c:{while(e<c){g=e+1|0;h=Bl(b,e);if(K4===null){if(K5===null)K5=G1();i=(K5.value!==null?$rt_str(K5.value):null);j=new FK;k=i.u.data;l=BM(k.length);m=l.data;e=0;n=m.length;while(e<n){m[e]=k[e];e=e+1|0;}j.di=l;n=G_(j);k=Kb(n*2|0);l=k.data;o=0;p=0;q=0;r=0;while
(r<n){p=p+Gu(j)|0;q=q+Gu(j)|0;s=o+1|0;l[o]=p;o=s+1|0;l[s]=q;r=r+1|0;}K4=k;}k=K4.data;n=0;o=(k.length/2|0)-1|0;d:{while(o>=n){p=(n+o|0)/2|0;e=p*2|0;q=Ia(h,k[e]);if(q>0)n=p+1|0;else{if(q>=0){n=k[e+1|0];break d;}o=p-1|0;}}n=(-1);}if(n<0){i=new BN;b=D9(CP(b,0,c));j=Bb();S(S(j,D(9)),b);Bi(i,X(j));P(i);}if(n>=10){i=new BN;b=D9(CP(b,0,c));j=Bb();S(S(Bk(S(j,D(10)),10),D(11)),b);Bi(i,X(j));P(i);}f=(10*f|0)+n|0;if(f<0){if(g!=c)break b;if(f!=(-2147483648))break b;if(!d)break b;f=(-2147483648);break c;}e=g;}if(d)f= -f|
0;}return f;}i=new BN;b=D9(CP(b,0,c));j=Bb();S(S(j,D(12)),b);Bi(i,X(j));P(i);}
function Y(b){var c,d;if(b>=(-128)&&b<=127){a:{if(K3===null){K3=V(Ch,256);c=0;while(true){d=K3.data;if(c>=d.length)break a;d[c]=Im(c-128|0);c=c+1|0;}}}return K3.data[b+128|0];}return Im(b);}
function F9(a){return a.bt;}
function Jf(a,b){if(a===b)return 1;return b instanceof Ch&&b.bt==a.bt?1:0;}
function Gh(){K2=Q($rt_intcls());}
function Du(){var a=this;B.call(a);a.m=null;a.l=0;}
function J8(a){var b=new Du();Gz(b,a);return b;}
function Gz(a,b){a.m=BM(b);}
function EU(a,b,c){return G8(a,a.l,b,c);}
function G8(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)CT(a,b,b+1|0);else{CT(a,b,b+2|0);f=a.m.data;g=b+1|0;f[b]=45;b=g;}a.m.data[b]=D0(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Is(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;CT(a,b,b+i|0);if(e)e=b;else{f=a.m.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.m.data;b=e+1|0;f[e]=D0($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function E_(a,b){var c,d,e,f,g;c=a.m.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Ca(b,Ca(c*2|0,5));e=a.m.data;f=BM(d);g=f.data;b=B5(d,e.length);c=0;while(c<b){g[c]=e[c];c=c+1|0;}a.m=f;}
function X(a){return Je(a.m,0,a.l);}
function CT(a,b,c){var d,e,f,g;d=a.l;e=d-b|0;a.b2((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.m.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.l=a.l+(c-b|0)|0;}
var DA=E(0);
var Gf=E(Du);
function Bb(){var a=new Gf();I4(a);return a;}
function I4(a){Gz(a,16);}
function S(a,b){var c;c=a.l;if(b===null)b=D(6);FO(a,c,b);return a;}
function T(a,b){FO(a,a.l,b);return a;}
function Bk(a,b){EU(a,b,10);return a;}
function Br(a,b){var c;c=a.l;CT(a,c,c+1|0);a.m.data[c]=b;return a;}
function I0(a){return X(a);}
function Jt(a,b){E_(a,b);}
function FO(a,b,c){var d,e,f;if(b>=0&&b<=a.l){a:{if(c===null)c=D(6);else if(Fu(c))break a;E_(a,a.l+Bd(c)|0);d=a.l-1|0;while(d>=b){a.m.data[d+Bd(c)|0]=a.m.data[d];d=d+(-1)|0;}a.l=a.l+Bd(c)|0;d=0;while(d<Bd(c)){e=a.m.data;f=b+1|0;e[b]=Bl(c,d);d=d+1|0;b=f;}}return a;}c=new DN;Be(c);P(c);}
var Cn=E(CE);
var GU=E(Cn);
function K6(a){var b=new GU();I_(b,a);return b;}
function I_(a,b){Bi(a,b);}
var GI=E(Cn);
function K7(a){var b=new GI();Jl(b,a);return b;}
function Jl(a,b){Bi(a,b);}
var Bz=E(0);
var Ed=E(0);
var El=E(0);
var BJ=E(0);
var Gv=E(0);
var ET=E(0);
function Bo(){var a=this;B.call(a);a.j=0;a.k=0;}
var KV=null;var K8=null;var K9=null;var K$=null;function Cc(a,b){var c=new Bo();Hu(c,a,b);return c;}
function Ev(b){var c;c=b%6|0;if(c>=0)b=c%6|0;else{if(c<0)c= -c|0;b=(6-(c%6|0)|0)%6|0;}return b;}
function C(b,c){return Cc(b,c);}
function Dp(b){var c,d,e,f,g;if(b!==null&&b.x()){c=(b.h(0)).j;d=(b.h(0)).k;e=1;f=c;g=d;while(e<b.x()){f=B5(f,(b.h(e)).j);c=Ca(c,(b.h(e)).j);g=B5(g,(b.h(e)).k);d=Ca(d,(b.h(e)).k);e=e+1|0;}return Cr(f,g,c-f|0,d-g|0);}return Cr(0,0,1,1);}
function Hu(a,b,c){a.j=b;a.k=c;}
function BF(a,b){return Cc(a.j+b.j|0,a.k+b.k|0);}
function Er(a,b){return Cc(a.j-b.j|0,a.k-b.k|0);}
function DY(a){var b,c,d;b=a.j;c=a.k;d=Bb();Bk(Br(Bk(d,b),44),c);return X(d);}
function Gp(){KV=Cc(0,0);K8=Cc(2,0);K9=Cc(0,2);K$=Cc(2,2);}
function GO(){var a=this;B.call(a);a.fo=0;a.gD=0;a.go=0;a.fE=null;}
function Hk(){B.call(this);this.e0=null;}
var Fe=E();
var K_=null;function BP(){var b;if(K_===null){b=new ER;b.dE=La;b.br=Bb();b.dG=BM(32);b.ey=0;Ie();b.dt=Lb;K_=b;}return K_;}
function J0(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=DO(b)&&(e+f|0)<=DO(d)){DS(b,c,d,e,f);return;}b=new Bp;Be(b);P(b);}
function DS(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
var HL=E();
var FN=E(0);
var Fj=E(0);
var Fc=E(0);
var EX=E(0);
var Fg=E(0);
var Fv=E(0);
var Fp=E(0);
var FA=E(0);
var GK=E();
function IJ(a,b){b=a.h(b);Fk();return b===null?null:b instanceof $rt_objcls()&&b instanceof BR?D2(b):b;}
function H5(a,b,c){a.ft($rt_str(b),Dz(c,"handleEvent"));}
function JR(a,b,c){a.fd($rt_str(b),Dz(c,"handleEvent"));}
function IG(a,b,c,d){a.fD($rt_str(b),Dz(c,"handleEvent"),d?1:0);}
function IO(a,b){return !!a.fB(b);}
function Jd(a){return a.gh();}
function H2(a,b,c,d){a.gz($rt_str(b),Dz(c,"handleEvent"),d?1:0);}
var Fn=E(0);
var FW=E();
var Bp=E(Bc);
var GA=E();
function DO(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Lc());}return b.data.length;}
function Hi(b,c){if(b===null){b=new CL;Be(b);P(b);}if(b===Q($rt_voidcls())){b=new BL;Be(b);P(b);}if(c>=0)return IW(b.Q,c);b=new FX;Be(b);P(b);}
function IW(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var CL=E(Bc);
var CW=E(Bc);
var Cb=E();
var Ld=null;var K4=null;var Le=null;var K5=null;function E1(b){return (b&64512)!=55296?0:1;}
function EP(b){return (b&64512)!=56320?0:1;}
function D0(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GF(){Ld=Q($rt_charcls());Le=V(Cb,128);}
function G1(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
var BL=E(Bc);
function JV(a){var b=new BL();JI(b,a);return b;}
function JI(a,b){Bi(a,b);}
var BN=E(BL);
function BR(){B.call(this);this.c7=null;}
var Lf=null;var Lg=null;var Lh=null;var Li=null;var Lj=null;var Lk=null;function Fk(){Fk=U(BR);Jj();}
function Ex(a){var b=new BR();Gk(b,a);return b;}
function Gk(a,b){Fk();a.c7=b;}
function D2(b){Fk();if(b!==null)return b.c7;return null;}
function Eq(b){var c,d;Fk();if(b===null)return null;if(b instanceof $rt_objcls())b=b;else a:{b=b;if(b===null)b=null;else{b:{c=b;if(Lg!==null){d=$rt_str(typeof c);if(!BZ(d,D(13))&&!BZ(d,D(14))){if(BZ(d,D(15))){b=Lh.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=Ex(c);d=b;Lh.set(c,new $rt_globals.WeakRef(d));E2(Lj,d,c);break a;}if(!BZ(d,D(16)))break b;else{b=Li.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b
=Ex(c);d=b;Li.set(c,new $rt_globals.WeakRef(d));E2(Lk,d,c);break a;}}b=Lg.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=Ex(c);Lg.set(c,new $rt_globals.WeakRef(b));break a;}}b=Ex(c);}}return b;}
function Jj(){Lf=new $rt_globals.WeakMap();Lg=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();Lh=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();Li=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();Lj=Lh===null?null:new $rt_globals.FinalizationRegistry(Gg(new Fy,"accept"));Lk=Li===null?null:new $rt_globals.FinalizationRegistry(Gg(new Fz,"accept"));}
function E2(b,c,d){return b.register(c,d);}
var G$=E();
var GD=E();
var HH=E();
var D3=E(0);
var Fy=E();
function Jb(a,b){var c;b=Eq(b);c=Lh;b=D2(b);c.delete(b);}
var GZ=E();
var Fz=E();
function H4(a,b){var c;b=Eq(b);c=Li;b=D2(b);c.delete(b);}
var HJ=E();
var Hb=E();
function FK(){var a=this;B.call(a);a.di=null;a.dk=0;}
var GR=E();
function G_(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.di.data;f=b.dk;b.dk=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Is(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Gu(b){var c,d;c=G_(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var HM=E();
var DN=E(Bp);
var B4=E(0);
function Gb(){var a=this;B.call(a);a.c9=0;a.dc=0;a.bL=0;a.bX=null;}
function Iq(a,b,c,d){var e=new Gb();Ja(e,a,b,c,d);return e;}
function Ja(a,b,c,d,e){a.c9=b;a.dc=c;a.bL=d;a.bX=e;}
function Ey(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;BI(BP(),D(17));Gt();b=I7(B$(Ll,a.dc-1|0),1);c=a.c9;d=!c?b.q:c==1?b.t:c!=2?D(18):D(19);if(!C5(d,D(0))&&!C5(d,D(20)))return FJ(Ir(a.bL,a.bX),d);c=a.bL;e=a.bX;f=Bd(d);g=I();h=0;i=0;if(f<=0){f=c;j=e;}else{k=Bl(d,i);if(G9(k)){l=Bb();Br(l,k);h=G6(X(l));i=1;k=Bl(d,i);}H(g,Jh(Ea(k),Cw(c,k),e,h));m=f-1|0;f=c;j=e;while(i<m){i=i+1|0;n=Bl(d,i);if(G9(n)){l=Bb();Br(l,n);h=G6(X(l));i=i+1|0;n=Bl(d,i);}o=Cw(f,k);f=G7(f,k);j=BF(j,k!=88&&k!=68?(n==68?BC(o,C((-8),(-4))):n!=88?BC(o,
C((-2),(-4))):BC(o,C((-6),(-6)))):BC(o,C(2,4)));H(g,Jh(Ea(n),Cw(f,n),j,h));k=n;}}b=V(B6,0);l=b.data;h=g.r;p=l.length;if(p<h)b=Hi(CJ(B9(b)),h);else while(h<p){l[h]=null;h=h+1|0;}k=0;g=BT(g);while(BU(g)){l=b.data;p=k+1|0;l[k]=BY(g);k=p;}return F0((-1),c,f,e,j,b);}
function GJ(){var a=this;B.call(a);a.cg=0;a.bv=0;a.c_=0;a.cE=null;}
function M(a,b,c,d){var e=new GJ();JE(e,a,b,c,d);return e;}
function JE(a,b,c,d,e){a.cg=b;a.bv=c;a.c_=d;a.cE=e;}
function K(a){var b,c;b=a.cg;if(b==10){ED();c=(C_(Lm,a.bv)).bq;}else if(b!=11){ED();c=(C_(Lm,a.bv)).bx;}else{ED();c=(C_(Lm,a.bv)).bK;}return FJ(Ir(a.c_,a.cE),c);}
function GC(){var a=this;B.call(a);a.eW=0;a.f1=0;a.gg=0;a.fS=null;}
function Gx(){var a=this;B.call(a);a.gm=0;a.eT=0;a.f2=null;}
function Bg(){var a=this;B.call(a);a.el=null;a.dM=0;}
function BB(a,b,c){a.el=b;a.dM=c;}
function CD(){Bg.call(this);this.b_=null;}
var Ll=null;var Ln=null;function Gt(){Gt=U(CD);HR();}
function B$(a,b){var c,d,e;c=a.b_;d=c.r;if(b<d)return J(c,b);c=J(c,d-1|0);b=b+1|0;while(d<b){e=I7(c,0);H(a.b_,e);d=d+1|0;c=e;}return c;}
function HR(){var b,c,d,e;b=new CD;Gt();BB(b,D(21),0);c=I();b.b_=c;d=new FC;d.cd=0;d.q=D(22);d.t=D(23);d.dh=null;d.cD=0;H(c,d);Ll=b;e=V(CD,1);e.data[0]=b;Ln=e;}
var FD=E(0);
function FC(){var a=this;B.call(a);a.cd=0;a.q=null;a.t=null;a.dh=null;a.cD=0;}
function I7(a,b){var c=new FC();Ix(c,a,b);return c;}
function Ix(a,b,c){var d,e,f,g;a.cD=c;a.dh=b;a.cd=b.cd+1|0;if(!c){d=b.q;e=b.t;a.q=By(By(D(24),D(25),d),D(26),e);e=b.q;f=b.t;a.t=By(By(D(27),D(25),e),D(26),f);}else{d=b.q;e=b.t;g=d!==D(22)?D(28):D(29);a.q=By(By(g,D(25),d),D(26),e);e=b.q;f=b.t;a.t=By(By(e!==D(22)?D(30):D(31),D(25),e),D(26),f);}}
function Gn(){var a=this;B.call(a);a.eX=0;a.gt=0;a.gi=null;a.f_=null;a.e8=null;a.gw=0;}
function G9(b){var c,d;C3();c=new BQ;d=BM(1);d.data[0]=b;EI(c,d);return C5(D(32),c);}
function G6(b){var c,$$je;a:{try{c=D$(b);}catch($$e){$$je=Hq($$e);if($$je instanceof BN){break a;}else{throw $$e;}}return c;}return (-1);}
function HG(){var a=this;B.call(a);a.bC=0;a.w=0;a.b3=null;a.E=null;a.ea=null;a.bw=0;}
function Ir(a,b){var c=new HG();Jr(c,a,b);return c;}
function Jr(a,b,c){a.bC=b;a.w=b;a.b3=c;a.E=c;a.ea=D(22);a.bw=(-1);}
function FJ(a,b){var c,d,e,f,g,h,i;if(b===null)return F0(a.bw,a.bC,a.w,a.b3,a.E,V(B6,0));a:{c=Bd(b);d=V(B6,c);if(c>0){e=d.data;f=Bl(b,0);e[0]=JD(Ea(f),Cw(a.w,f),a.E);g=1;while(true){if(g>=Bd(b))break a;h=Bl(b,g);i=Cw(a.w,f);a.w=G7(a.w,f);a.E=BF(a.E,f!=88&&f!=68?(h==68?BC(i,C((-8),(-4))):h!=88?BC(i,C((-2),(-4))):BC(i,C((-6),(-6)))):BC(i,C(2,4)));e[g]=JD(Ea(h),Cw(a.w,h),a.E);g=g+1|0;f=h;}}}return F0(a.bw,a.bC,a.w,a.b3,a.E,d);}
function CC(){Bg.call(this);this.bJ=null;}
var Lm=null;var Lo=null;function ED(){ED=U(CC);IH();}
function C_(a,b){var c,d,e,f,g,h,i,j,k;c=a.bJ;d=c.r;if(b<d)return J(c,b);c=J(c,d-1|0);e=b+1|0;while(d<e){f=new De;f.cs=c;g=c.X+1|0;f.X=g;b=g-1|0;h=c.bq;Gt();c=(B$(Ll,b)).q;i=(B$(Ll,b)).t;f.bq=By(By(By(D(33),D(25),c),D(26),i),D(34),h);b=f.X;f.bK=(B$(Ll,b)).q;b=f.X;j=(B$(Ll,b)).q;k=(B$(Ll,b)).t;c=Bb();S(S(S(c,j),k),j);f.bx=X(c);f.df=0;H(a.bJ,f);d=d+1|0;c=f;}return c;}
function IH(){var b,c,d,e;b=new CC;ED();BB(b,D(21),0);c=I();b.bJ=c;d=new De;d.X=0;d.bq=D(22);d.bK=D(22);d.bx=D(22);d.cs=null;d.df=0;H(c,d);Lm=b;e=V(CC,1);e.data[0]=b;Lo=e;}
function B8(){Bg.call(this);this.K=null;}
var KR=null;var Lp=null;var Lq=null;function Bw(){Bw=U(B8);It();}
function Ff(a,b){var c,d,e,f,g,h,i,j,k;Bw();c=Lp.data;d=0;e=c.length;Gl(b);f=0;a:{while(!f){b:{while(d<e){g=d+1|0;f=Bu(b,c[d]);if(!(f?0:1)){d=g;break b;}d=g;}}if(!(d>=e?0:1))break a;}}if(!f){BI(BP(),D(35));return null;}if(FB(a.K,b)===null?0:1)return Cp(a.K,b);if(Bu(b,Lr)){h=EQ();Ba(a.K,b,h);return h;}if(Bu(b,Lr)){BI(BP(),D(36));i=Lr;}else{d=b.z;i=d?FT(b.C,d-1|0):FT(b.C-1|0,2);}Ff(a,i);if(Bu(b,Lr))i=EQ();else if(Bu(b,Z(0,1))){i=BS(Z(0,1));h=i.f;j=Y(23);BH();Ba(h,j,Dj(KT,23));Ba(i.f,Y(24),Dj(KT,24));}else if(Bu(b,
Z(0,2))){i=BS(Z(0,2));h=i.f;j=Y(25);C1();Ba(h,j,D5(KU,25));Ba(i.f,Y(26),D5(KU,26));}else if(Bu(b,Z(1,0)))i=Ga();else if(!Bu(b,Z(1,1))){if(Bu(b,Z(1,2))){i=BS(Z(1,2));Ba(i.f,Y(25),HW());Ba(i.f,Y(26),Ho());}else i=Bu(b,Z(2,0))?H9():Bu(b,Z(2,1))?Ip():!Bu(b,Z(2,2))?null:IN();}else{i=BS(Z(1,1));h=i.f;j=Y(23);k=I();e=0;while(e<6){H(k,Bv(1,23,e,J(F2(),e),Bf(J(F2(),e)),null));e=e+1|0;}Ba(h,j,k);h=i.f;j=Y(24);k=I();e=0;while(e<6){H(k,Bv(1,24,e,J(GV(),e),Bf(J(GV(),e)),null));e=e+1|0;}Ba(h,j,k);}Ba(a.K,b,i);return i;}
function O(a,b,c,d){var e,f,g,h;if(b<0)b= -b|0;e=d>=0?d%6|0:( -d|0)%6|0;Bw();f=Z(b,c!=25&&c!=26?(c!=23&&c!=24?0:1):2);if(Ff(a,f)!==null)return Ft(Cp(a.K,f),c,e);g=BP();f=Fo(f);h=Bb();S(S(h,D(37)),f);BI(g,X(h));return Ft(Ga(),20,0);}
function It(){var b,c,d;b=new B8;Bw();BB(b,D(21),0);c=JJ();b.K=c;Ba(c,Lr,EQ());KR=b;d=V(B8,1);d.data[0]=b;Lq=d;Lp=Cq(Dc,[Lr,Z(0,1),Z(0,2),Z(1,0),Z(1,1),Z(1,2),Z(2,0),Z(2,1),Z(2,2)]);}
function Cg(){Bg.call(this);this.L=null;}
var KS=null;var Ls=null;function BK(){BK=U(Cg);Jo();}
function CK(a,b,c){return (J(a.L,b-20|0)).h(c);}
function BD(a,b,c,d){if(b!=20&&b!=21&&b!=22)return Cl(20,c,d);return Cl(b,c,d);}
function CG(a,b){return J(a.L,b-20|0);}
function Jo(){var b,c,d,e,f,g,h,i;b=new Cg;BK();BB(b,D(21),0);b.L=I();c=I();d=0;while(d<6){e=new Bh;BA();B_(e,20,d,J(Lt,d),J(Lu,d),Bf(J(Lu,d)),null);H(c,e);d=d+1|0;}H(b.L,c);c=I();d=0;while(d<6){f=new Bh;BA();B_(f,21,d,J(Lv,d),J(Lw,d),Bf(J(Lw,d)),null);H(c,f);d=d+1|0;}H(b.L,c);e=I();g=0;while(g<6){h=new Bh;BA();B_(h,22,g,J(Lx,g),J(Ly,g),Bf(J(Ly,g)),null);H(e,h);g=g+1|0;}H(b.L,e);KS=b;i=V(Cg,1);i.data[0]=b;Ls=i;}
var CZ=E(0);
var FV=E(0);
function Bh(){var a=this;B.call(a);a.bT=0;a.cb=0;a.bk=null;a.dp=null;a.d5=null;a.bz=null;}
var Lz=null;var Lu=null;var LA=null;var Lt=null;var LB=null;var Lw=null;var LC=null;var LD=null;var Lv=null;var Ly=null;var LE=null;var Lx=null;function BA(){BA=U(Bh);JL();}
function LF(a,b,c,d,e,f){var g=new Bh();B_(g,a,b,c,d,e,f);return g;}
function Bf(b){var c,d;BA();if(F_(b))return Cr(0,0,1,1);c=(b.h(0)).y;if(c===null)c=Cr(0,0,1,1);d=1;while(d<b.x()){c=(b.h(d)).y!==null?(b.h(d)).y:Cr(0,0,1,1);d=d+1|0;}return c;}
function B_(a,b,c,d,e,f,g){BA();a.bT=b;a.cb=c;a.bk=e;a.bz=f;a.d5=g;}
function Ij(a){return a.cb;}
function Jn(a){return a.bz;}
function GS(a){var b;b=a.dp;if(!(b!==null&&!b.bO()))H(I(),KV);return a.dp;}
function H7(a){return a.bT;}
function C2(a,b){var c,d,e,f,g,h,i,j,k;c=a.bk.x();d=V(DH,c);e=d.data;f=0;while(f<c){g=a.bk.h(f);h=DD(g);i=BF(g.o,b);e[f]=JK(Ez(DK(g)),h,i,g.R);f=f+1|0;}j=new Do;k=a.bT;c=a.cb;b=KV;E3(j,k,c,c,b,b,d);return j;}
function Cl(b,c,d){var e,f;BA();if(b<23){e=new CO;BK();DU(e,CK(KS,b,c),d);return e;}if(b>=25){f=new CO;C1();DU(f,Dx(KU,b,c),d);return f;}e=new CO;BH();DU(e,C7(KT,b,c),d);return e;}
function H0(a,b){return C2(a,b);}
function JL(){var b,c,d,e,f;b=V(Ci,2);c=b.data;Bm();c[0]=Cf(LG,1,0,KV);c[1]=Cf(LG,1,3,C((-8),2));Lz=Bt(b);d=new Ei;Bs(d);e=0;while(e<6){f=KV;BA();H(d,F(20,Bj(e,f,Lz)));e=e+1|0;}Lu=d;LA=Bt(Cq(Bo,[KV,C((-8),2)]));d=new Ej;Bs(d);e=0;while(e<6){f=KV;BA();H(d,BE(e,f,LA));e=e+1|0;}Lt=d;LB=Bt(Cq(Ci,[Cf(LG,1,1,KV),Cf(LG,1,3,C((-2),2)),Cf(LG,1,5,C((-4),(-2)))]));d=new Ee;Bs(d);e=0;while(e<6){f=KV;BA();H(d,F(21,Bj(e,f,LB)));e=e+1|0;}Lw=d;LC=Bt(V(Ci,0));LD=Bt(Cq(Bo,[KV,C((-2),2),C((-4),(-2))]));d=new Ef;Bs(d);e=0;while
(e<6){f=KV;BA();H(d,BE(e,f,LD));e=e+1|0;}Lv=d;d=new Eg;Bs(d);e=0;while(e<6){f=KV;BA();H(d,Bj(e,f,LC));e=e+1|0;}Ly=d;b=V(Bo,1);b.data[0]=KV;LE=Bt(b);d=new Eh;Bs(d);e=0;while(e<6){BA();H(d,LE);e=e+1|0;}Lx=d;}
function Cm(){Bg.call(this);this.O=null;}
var KT=null;var LH=null;function BH(){BH=U(Cm);ID();}
function C7(a,b,c){if(b<23){BK();return CK(KS,b,c);}if(b>=25){C1();return Dx(KU,b,c);}return (J(a.O,b-23|0)).h(c);}
function Bn(a,b,c,d){if(b!=20&&b!=21&&b!=22){if(b!=23&&b!=24)return Cl(b,c,d);return Cl(b,c,d);}return Cl(b,c,d);}
function Dj(a,b){if(b<23){BK();return CG(KS,b);}if(b>=25){C1();return D5(KU,b);}return J(a.O,b-23|0);}
function ID(){var b,c,d,e,f,g,h;b=new Cm;BH();BB(b,D(21),0);b.O=I();c=I();d=0;while(d<6){e=new B2;Cd();D1(e,23,d,J(LI,d),J(Fw(),d),Bf(J(Fw(),d)),null);H(c,e);d=d+1|0;}H(b.O,c);e=I();f=0;while(f<6){g=new B2;Cd();D1(g,24,f,J(LJ,f),J(Fh(),f),Bf(J(Fh(),f)),null);H(e,g);f=f+1|0;}H(b.O,e);KT=b;h=V(Cm,1);h.data[0]=b;LH=h;}
var B2=E(Bh);
var LK=null;var LI=null;var LL=null;var LJ=null;function Cd(){Cd=U(B2);Js();}
function LM(a,b,c,d,e,f){var g=new B2();D1(g,a,b,c,d,e,f);return g;}
function D1(a,b,c,d,e,f,g){Cd();B_(a,b,c,d,e,f,g);}
function Fw(){var b,c,d;Cd();b=I();c=I();BK();G(c,F(20,(BD(KS,20,0,KV)).e));G(c,F(20,(BD(KS,20,2,C(16,8))).e));G(c,F(20,(BD(KS,20,4,C(8,16))).e));Bm();G(c,F(10,L(LG,K(M(10,1,4,KV)))));G(c,F(10,L(LG,K(M(10,1,0,C(16,8))))));G(c,F(10,L(LG,K(M(10,1,2,C(8,16))))));G(c,F(21,(BD(KS,21,0,C(10,8))).e));H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function Hw(){var b;Cd();b=I();BK();G(b,F(20,(BD(KS,20,3,C(0,0))).e));G(b,F(20,(BD(KS,20,5,C(30,(-12)))).e));G(b,F(20,(BD(KS,20,1,C(42,30))).e));Bm();G(b,F(10,L(LG,K(M(10,1,4,C(8,(-2)))))));G(b,F(10,L(LG,K(M(10,1,0,C(32,(-2)))))));G(b,F(10,L(LG,K(M(10,1,2,C(32,22))))));G(b,F(21,(BD(KS,21,0,C(18,6))).e));G(b,F(21,(BD(KS,21,0,C(26,(-2)))).e));G(b,F(21,(BD(KS,21,0,C(34,14))).e));G(b,F(10,L(LG,K(M(10,1,0,C(24,6))))));G(b,F(10,L(LG,K(M(10,1,2,C(24,6))))));G(b,F(10,L(LG,K(M(10,1,4,C(24,6))))));return b;}
function Fh(){var b,c,d;Cd();b=I();c=Hw();H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function Js(){var b,c,d,e,f;b=V(Bo,3);c=b.data;d=KV;c[0]=d;c[1]=d;c[2]=d;LK=Bt(b);d=new EB;Bs(d);e=0;while(e<6){f=KV;Cd();H(d,BE(e,f,LK));e=e+1|0;}LI=d;b=V(Bo,3);c=b.data;d=KV;c[0]=d;c[1]=d;c[2]=d;LL=Bt(b);d=new EC;Bs(d);e=0;while(e<6){f=KV;Cd();H(d,BE(e,f,LL));e=e+1|0;}LJ=d;}
function Cx(){Bg.call(this);this.bb=null;}
var KU=null;var LN=null;function C1(){C1=U(Cx);H_();}
function Dx(a,b,c){if(b<23){BK();return CK(KS,b,c);}if(b<25){BH();return C7(KT,b,c);}return (J(a.bb,b-25|0)).h(c);}
function D5(a,b){if(b<23){BK();return CG(KS,b);}if(b<25){BH();return Dj(KT,b);}return J(a.bb,b-25|0);}
function H_(){var b,c,d,e,f,g,h,i;b=new Cx;C1();BB(b,D(21),0);b.bb=I();c=I();d=0;while(d<6){e=new B1;Ce();Dq(e,25,d,J(LO,d),J(EG(),d),Bf(J(EG(),d)),null);H(c,e);d=d+1|0;}f=I();g=0;while(g<6){h=new B1;Ce();Dq(h,26,g,J(LP,g),J(E5(),g),Bf(J(E5(),g)),null);H(f,h);g=g+1|0;}H(b.bb,c);H(b.bb,f);KU=b;i=V(Cx,1);i.data[0]=b;LN=i;}
var B1=E(Bh);
var LQ=null;var LO=null;var LR=null;var LP=null;function Ce(){Ce=U(B1);HP();}
function LS(a,b,c,d,e,f){var g=new B1();Dq(g,a,b,c,d,e,f);return g;}
function Dq(a,b,c,d,e,f,g){Ce();B_(a,b,c,d,e,f,g);}
function Gd(){var b;Ce();b=I();BH();G(b,F(23,(Bn(KT,23,0,KV)).e));G(b,F(24,(Bn(KT,24,1,C((-8),8))).e));G(b,F(24,(Bn(KT,24,0,C(10,56))).e));G(b,F(23,(Bn(KT,23,1,C(36,78))).e));Bm();G(b,F(11,L(LG,K(M(11,1,5,C(18,24))))));G(b,F(11,L(LG,K(M(11,1,4,C(26,46))))));G(b,F(11,L(LG,K(M(11,1,1,C(18,48))))));G(b,F(11,L(LG,K(M(11,1,2,C(26,70))))));G(b,F(20,(Bn(KT,20,0,C(26,46))).e));return b;}
function EG(){var b,c,d;Ce();b=I();c=Gd();H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function E5(){var b,c,d;Ce();b=I();c=I();BH();G(c,F(24,(Bn(KT,24,0,KV)).e));G(c,F(23,(Bn(KT,23,1,C(0,(-24)))).e));G(c,F(23,(Bn(KT,23,1,C(46,(-4)))).e));G(c,F(23,(Bn(KT,23,1,C(26,22))).e));Bm();G(c,F(11,L(LG,K(M(11,1,0,C(40,14))))));G(c,F(11,L(LG,K(M(11,1,2,C(16,14))))));G(c,F(11,L(LG,K(M(11,1,4,C(16,(-10)))))));H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function HP(){var b,c,d,e,f;b=V(Bo,3);c=b.data;d=KV;c[0]=d;c[1]=d;c[2]=d;LQ=Bt(b);d=new Es;Bs(d);e=0;while(e<6){f=KV;Ce();H(d,BE(e,f,LQ));e=e+1|0;}LO=d;b=V(Bo,3);c=b.data;d=KV;c[0]=d;c[1]=d;c[2]=d;LR=Bt(b);d=new Et;Bs(d);e=0;while(e<6){f=KV;Ce();H(d,BE(e,f,LR));e=e+1|0;}LP=d;}
var DX=E(0);
var EL=E(0);
var Fs=E(0);
var Cv=E();
function Ds(){Cv.call(this);this.dE=null;}
function ER(){var a=this;Ds.call(a);a.ey=0;a.b1=0;a.br=null;a.dG=null;a.dt=null;}
function EV(a,b,c,d){var e,$$je;e=a.dE;if(e===null)a.b1=1;if(!(a.b1?0:1))return;a:{try{Hm(e,b,c,d);break a;}catch($$e){$$je=Hq($$e);if($$je instanceof Fl){}else{throw $$e;}}a.b1=1;}}
function BI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;Br(T(a.br,b),10);b=a.br;c=b.l;d=a.dG;if(c>d.data.length)d=BM(c);e=0;f=0;if(e>c){b=new Bp;Bi(b,D(38));P(b);}while(e<c){g=d.data;h=f+1|0;i=b.m.data;j=e+1|0;g[f]=i[e];f=h;e=j;}i=d.data;e=c-0|0;k=new Fd;j=i.length;h=0+e|0;EA(k,j);k.n=0;k.v=h;k.cA=0;k.eG=0;k.dy=d;d=FE(Ca(16,B5(e,1024)));e=d.data.length;b=new E8;h=0+e|0;EA(b,e);I9();b.eR=LT;b.de=0;b.c0=d;b.n=0;b.v=h;b.dQ=0;b.cB=0;l=a.dt;m=new FS;i=FE(1);g=i.data;g[0]=63;IQ();n=LU;m.b4=n;m.b6=n;f=g.length;if(f&&f>=
m.ci){m.d8=l;m.cX=i.dw();m.eh=2.0;m.ci=4.0;m.cz=BM(512);m.c8=FE(512);l=LV;if(l===null){l=new BL;Bi(l,D(39));P(l);}m.b4=l;m.b6=l;while(m.bo!=3){m.bo=2;a:{while(true){try{l=GX(m,k,b);}catch($$e){$$je=Hq($$e);if($$je instanceof Bc){b=$$je;l=new E$;GM(l,b);P(l);}else{throw $$e;}}if(l.S?0:1){e=BW(k);if(e<=0)break a;l=DB(e);}else if(Dv(l))break;n=!E6(l)?m.b4:m.b6;b:{if(n!==LV){if(n===LW)break b;else break a;}e=BW(b);i=m.cX;c=i.data.length;if(e<c){l=LX;break a;}E9(b,i,0,c);}c=k.n;if(!Hx(l)){b=new CR;Be(b);P(b);}Ec(k,
c+l.db|0);}}e=Dv(l);EV(a,d,0,b.n);Fa(b);if(!e){while(true){e=m.bo;if(e!=2&&e!=4)break;l=LY;if(l===l)m.bo=3;f=Dv(l);EV(a,d,0,b.n);Fa(b);if(!f){a.br.l=0;return;}}b=new Dk;Be(b);P(b);}}b=new Dk;Be(b);P(b);}P(JV(D(40)));}
function C6(){Cv.call(this);this.dW=null;}
var DI=E(C6);
var La=null;function Hm(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Hl(){var b;b=new DI;b.dW=FE(1);La=b;}
function Dl(){var a=this;B.call(a);a.dN=null;a.d3=null;}
function HE(b){var c,d;if(Fu(b))P(Gy(b));if(!HF(Bl(b,0)))P(Gy(b));c=1;while(c<Bd(b)){a:{d=Bl(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(HF(d))break a;else P(Gy(b));}}c=c+1|0;}}
function HF(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var D6=E(Dl);
var Lb=null;function Ie(){Ie=U(D6);H1();}
function H1(){var b,c,d,e,f;b=new D6;Ie();c=V(BQ,0);d=c.data;HE(D(41));e=d.length;f=0;while(f<e){HE(d[f]);f=f+1|0;}b.dN=D(41);b.d3=c.dw();Lb=b;}
function Dc(){var a=this;B.call(a);a.C=0;a.z=0;}
var Lr=null;function FT(a,b){var c=new Dc();Gc(c,a,b);return c;}
function Z(b,c){return FT(b,c);}
function Gc(a,b,c){a.C=b;a.z=c;}
function IT(a){var b,c,d,e;b=V(B,2).data;b[0]=Y(a.z);b[1]=Y(a.C);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e!==null?F9(e):0)|0;d=d+1|0;}return c;}
function Bu(a,b){var c;if(a===b)return 1;if(b!==null&&B9(a)===B9(b)){c=b;return a.z==c.z&&a.C==c.C?1:0;}return 0;}
function Fo(a){var b,c,d;b=a.C;c=a.z;d=Bb();Br(Bk(Br(Bk(Br(d,40),b),44),c),41);return X(d);}
function Hp(){Lr=FT(0,0);}
var EF=E(0);
var DE=E(0);
var C8=E();
function F_(a){return a.x()?0:1;}
function G(a,b){var c,d;c=0;d=BT(b);while(BU(d)){if(!H(a,BY(d)))continue;c=1;}return c;}
var FH=E(0);
var Eu=E(0);
function Cs(){C8.call(this);this.bh=0;}
function BT(a){var b;b=new EZ;b.c$=a;b.cS=a.bh;b.cW=a.x();b.cy=(-1);return b;}
var CF=E(0);
var DL=E(0);
function W(){var a=this;Cs.call(a);a.N=null;a.r=0;}
function I(){var a=new W();Bs(a);return a;}
function Bs(a){a.N=V(B,10);}
function GE(a,b){var c,d,e,f,g;c=a.N.data.length;if(c<b){d=c>=1073741823?2147483647:Ca(b,Ca(c*2|0,5));e=a.N;f=e.data;g=Hi(CJ(B9(e)),d);b=B5(d,f.length);d=0;while(d<b){g.data[d]=f[d];d=d+1|0;}a.N=g;}}
function J(a,b){var c;if(b>=0&&b<a.r)return a.N.data[b];c=new Bp;Be(c);P(c);}
function IM(a){return a.r;}
function H(a,b){var c,d;GE(a,a.r+1|0);c=a.N.data;d=a.r;a.r=d+1|0;c[d]=b;a.bh=a.bh+1|0;return 1;}
var FF=E(0);
function De(){var a=this;B.call(a);a.X=0;a.bq=null;a.bK=null;a.bx=null;a.cs=null;a.df=0;}
var Ew=E(0);
var DR=E();
function Hj(){var a=this;DR.call(a);a.T=0;a.s=null;a.bu=0;a.dx=0.0;a.b0=0;}
function JJ(){var a=new Hj();HS(a);return a;}
function HS(a){var b;b=G4(16);a.T=0;a.s=V(CQ,b);a.dx=0.75;Fx(a);}
function G4(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fx(a){a.b0=a.s.data.length*a.dx|0;}
function Cp(a,b){var c;c=FB(a,b);if(c===null)return null;return c.bj;}
function FB(a,b){var c,d;if(b===null)c=FM(a);else{d=b.bf();c=EH(a,b,d&(a.s.data.length-1|0),d);}return c;}
function EH(a,b,c,d){var e,f;e=a.s.data[c];while(e!==null){if(e.bI==d){f=e.ca;if(b!==f&&!b.bP(f)?0:1)break;}e=e.bc;}return e;}
function FM(a){var b;b=a.s.data[0];while(b!==null&&b.ca!==null){b=b.bc;}return b;}
function Ba(a,b,c){var d,e,f;if(b===null){d=FM(a);if(d===null){a.bu=a.bu+1|0;d=Fq(a,null,0,0);e=a.T+1|0;a.T=e;if(e>a.b0)FG(a);}}else{e=b.bf();f=e&(a.s.data.length-1|0);d=EH(a,b,f,e);if(d===null){a.bu=a.bu+1|0;d=Fq(a,b,f,e);e=a.T+1|0;a.T=e;if(e>a.b0)FG(a);}}b=d.bj;d.bj=c;return b;}
function Fq(a,b,c,d){var e,f,g;e=new CQ;f=null;e.ca=b;e.bj=f;e.bI=d;g=a.s.data;e.bc=g[c];g[c]=e;return e;}
function FG(a){var b,c,d,e,f,g,h,i;b=a.s.data.length;b=G4(!b?1:b<<1);c=V(CQ,b);d=c.data;e=0;f=b-1|0;while(true){g=a.s.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.bI&f;i=h.bc;h.bc=d[b];d[b]=h;h=i;}e=e+1|0;}a.s=c;Fx(a);}
function F4(){var a=this;B.call(a);a.b7=null;a.f=null;a.ec=null;}
function BS(a){var b=new F4();I3(b,a);return b;}
function EQ(){var b,c,d;b=BS(Z(0,0));c=b.f;d=Y(20);BK();Ba(c,d,CG(KS,20));Ba(b.f,Y(21),CG(KS,21));Ba(b.f,Y(22),CG(KS,22));return b;}
function Ga(){var b,c,d,e,f;b=BS(Z(1,0));Ba(b.f,Y(20),DC());Ba(b.f,Y(21),He());c=b.f;d=Y(22);e=I();f=0;while(f<6){H(e,Bv(1,22,f,J(FZ(),f),Bf(J(FZ(),f)),null));f=f+1|0;}Ba(c,d,e);return b;}
function H9(){var b,c,d,e,f,g,h;b=BS(Z(2,0));c=b.f;d=Y(20);e=I();f=0;while(f<6){H(e,Bv(2,20,f,J(HB(),f),Bf(J(HB(),f)),null));f=f+1|0;}Ba(c,d,e);c=b.f;d=Y(21);g=I();h=0;while(h<6){H(g,Bv(2,21,h,J(Hd(),h),Bf(J(Hd(),h)),null));h=h+1|0;}Ba(c,d,g);Ba(b.f,Y(22),Ho());return b;}
function Ip(){var b,c,d,e,f,g;b=BS(Z(2,1));c=b.f;d=Y(23);e=I();f=0;while(f<6){H(e,Bv(2,23,f,J(Go(),f),Bf(J(Go(),f)),null));f=f+1|0;}Ba(c,d,e);c=b.f;d=Y(24);g=I();f=0;while(f<6){H(g,Bv(2,24,f,J(HI(),f),Bf(J(HI(),f)),null));f=f+1|0;}Ba(c,d,g);return b;}
function IN(){var b,c,d,e,f,g;b=BS(Z(2,2));c=b.f;d=Y(25);e=I();f=0;while(f<6){H(e,Bv(2,25,f,J(Ge(),f),Bf(J(Ge(),f)),null));f=f+1|0;}Ba(c,d,e);c=b.f;d=Y(26);g=I();f=0;while(f<6){H(g,Bv(2,26,f,J(HD(),f),Bf(J(HD(),f)),null));f=f+1|0;}Ba(c,d,g);return b;}
function I3(a,b){var c,d;c=JJ();d=null;a.b7=b;a.f=c;a.ec=d;}
function Df(a){return a.b7.z;}
function Ft(a,b,c){var d,e,f;if(b<23&&!Df(a))return (Cp(a.f,Y(b))).h(c);if(b<25&&Df(a)==1)return (Cp(a.f,Y(b))).h(c);if(b<27&&Df(a)==2)return (Cp(a.f,Y(b))).h(c);d=BP();e=Fo(a.b7);f=Bb();S(Br(Bk(S(f,D(42)),b),32),e);BI(d,X(f));return null;}
var C9=E(0);
function Ez(b){if(BZ(D(43),b))return 0;if(BZ(D(44),b))return 1;if(BZ(D(45),b))return 3;BI(BP(),D(46));return 3;}
var Dg=E(0);
var DG=E(0);
var Ci=E(0);
function Bj(b,c,d){var e,f,g,h;e=I();f=BT(d);while(BU(f)){g=BY(f);h=BF(BC(b,Er(g.o,c)),c);Bm();H(e,Cf(LG,Ez(DK(g)),(DD(g)+b|0)%6|0,h));}return e;}
var Cu=E(Bg);
var LG=null;var LZ=null;function Bm(){Bm=U(Cu);IX();}
function L(a,b){var c,d,e,f,g,h;c=b.ce.data;d=I();e=c.length;f=0;while(f<e){g=c[f];h=g.ba;if(!h)H(d,Io(g.B,g.I));else if(h==1)H(d,Jc(g.B,g.I));else if(h==3)H(d,Hv(g.B,g.I));f=f+1|0;}return d;}
function Cf(a,b,c,d){b=b%6|0;c=c%6|0;if(!b)return Io(c,d);if(b==1)return Jc(c,d);if(b!=3)return Hv(c,d);return Hv(c,d);}
function IX(){var b,c;b=new Cu;Bm();BB(b,D(21),0);LG=b;c=V(Cu,1);c.data[0]=b;LZ=c;}
var GW=E();
function Bt(b){var c;Gl(b);c=new EM;c.b5=b;return c;}
var Ei=E(W);
var Ej=E(W);
var Ee=E(W);
var Ef=E(W);
var Eg=E(W);
var Eh=E(W);
function F7(){var a=this;B.call(a);a.bF=0;a.bE=0;a.bZ=0;a.bM=0;}
function Cr(a,b,c,d){var e=new F7();In(e,a,b,c,d);return e;}
function In(a,b,c,d,e){a.bF=b;a.bE=c;a.bZ=d;a.bM=e;}
var Gw=E();
function Gl(b){if(b!==null)return b;b=new CL;Bi(b,D(22));P(b);}
function EM(){Cs.call(this);this.b5=null;}
function HO(a,b){return a.b5.data[b];}
function IE(a){return a.b5.data.length;}
var Ht=E();
function F(b,c){var d;d=BT(c);while(BU(d)){(BY(d)).R=b;}return c;}
function F3(){var b,c,d;b=I();c=I();BH();G(c,F(25,(Bn(KT,25,0,KV)).e));G(c,F(26,(Bn(KT,26,0,C(30,30))).e));G(c,F(26,(Bn(KT,26,1,C((-28),34))).e));Bm();G(c,F(12,L(LG,K(M(12,1,0,C(50,70))))));G(c,F(12,L(LG,K(M(12,1,3,C((-6),24))))));H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function Gs(){var b,c,d;b=I();c=I();BH();G(c,F(23,(Bn(KT,23,0,KV)).e));G(c,F(25,(Bn(KT,25,5,C((-52),4))).e));G(c,F(25,(Bn(KT,25,3,C(64,68))).e));G(c,F(25,(Bn(KT,25,1,C(12,(-48)))).e));Bm();G(c,F(12,L(LG,K(M(12,1,1,C((-8),2))))));G(c,F(12,L(LG,K(M(12,1,3,C(14,(-2)))))));G(c,F(12,L(LG,K(M(12,1,5,C(18,24))))));H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function FZ(){var b,c,d;b=I();c=I();BH();G(c,F(26,(Bn(KT,26,0,KV)).e));H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function F2(){var b,c,d;b=I();c=I();G(c,F(20,(N(J(DC(),0),C((-92),(-40)))).c));G(c,F(20,(N(J(DC(),2),C(128,46))).c));G(c,F(20,(N(J(DC(),4),C(42,180))).c));Bm();G(c,F(10,L(LG,K(M(10,2,4,C(0,0))))));G(c,F(10,L(LG,K(M(10,2,2,C((-10),88))))));G(c,F(10,L(LG,K(M(10,2,0,C(88,98))))));G(c,F(21,(N(J(He(),0),C(18,54))).c));H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function IF(){var b;b=I();Bw();G(b,F(22,(N(O(KR,1,22,0),KV)).c));G(b,F(21,(N(O(KR,1,21,0),C(18,(-66)))).c));G(b,F(21,(N(O(KR,1,21,0),C(80,64))).c));G(b,F(21,(N(O(KR,1,21,0),C((-50),(-4)))).c));G(b,F(20,(N(O(KR,1,20,0),C((-160),(-98)))).c));G(b,F(20,(N(O(KR,1,20,4),C(104,190))).c));G(b,F(20,(N(O(KR,1,20,2),C(128,(-74)))).c));Bm();G(b,F(10,L(LG,K(M(10,2,4,C(62,10))))));G(b,F(10,L(LG,K(M(10,2,2,C((-10),(-32)))))));G(b,F(10,L(LG,K(M(10,2,0,C(20,40))))));G(b,F(10,L(LG,K(M(10,2,4,C((-68),(-58)))))));G(b,F(10,L(LG,
K(M(10,2,2,C(52,98))))));G(b,F(10,L(LG,K(M(10,2,0,C(88,(-22)))))));return b;}
function GV(){var b,c,d;b=I();c=IF();H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function Jm(){var b;b=I();Bw();G(b,F(24,(N(O(KR,1,24,0),KV)).c));G(b,F(24,(N(O(KR,1,24,1),C((-44),170))).c));G(b,F(23,(N(O(KR,1,23,1),C(234,(-36)))).c));G(b,F(23,(N(O(KR,1,23,0),C((-226),148))).c));G(b,F(20,(N(O(KR,1,20,1),C(24,78))).c));Bm();G(b,F(11,L(LG,K(M(11,2,5,C(76,170))))));G(b,F(11,L(LG,K(M(11,2,2,C((-78),30))))));G(b,F(11,L(LG,K(M(11,2,0,C(150,108))))));G(b,F(11,L(LG,K(M(11,2,3,C((-152),92))))));return b;}
function GY(){var b,c,d;b=I();c=Jm();H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function HN(){var b,c,d;b=I();c=I();Bw();G(c,F(24,(N(O(KR,1,24,0),KV)).c));G(c,F(23,(N(O(KR,1,23,1),C(234,(-36)))).c));G(c,F(23,(N(O(KR,1,23,1),C(76,170))).c));G(c,F(23,(N(O(KR,1,23,1),C((-130),(-194)))).c));Bm();G(c,F(11,L(LG,K(M(11,2,0,C(150,108))))));G(c,F(11,L(LG,K(M(11,2,2,C((-78),30))))));G(c,F(11,L(LG,K(M(11,2,4,C(0,(-120)))))));H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function HB(){var b,c,d;b=I();c=I();Bw();G(c,F(25,(N(O(KR,1,25,5),KV)).c));G(c,F(26,(N(O(KR,1,26,0),C(328,8))).c));G(c,F(26,(N(O(KR,1,26,1),C((-170),164))).c));Bm();G(c,F(12,L(LG,K(M(12,2,0,C(320,322))))));G(c,F(12,L(LG,K(M(12,2,3,C((-120),(-120)))))));H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function Hd(){var b,c,d;b=I();c=I();Bw();G(c,F(23,(N(O(KR,1,23,0),KV)).c));G(c,F(25,(N(O(KR,1,25,5),C(194,64))).c));G(c,F(25,(N(O(KR,1,25,1),C(24,228))).c));G(c,F(25,(N(O(KR,1,25,3),C((-140),(-106)))).c));Bm();G(c,F(12,L(LG,K(M(12,2,1,C((-140),14))))));G(c,F(12,L(LG,K(M(12,2,3,C(74,(-56)))))));G(c,F(12,L(LG,K(M(12,2,5,C(144,228))))));H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function HX(){var b;b=I();Bw();G(b,F(21,(N(O(KR,2,21,0),C((-200),(-200)))).c));G(b,F(20,(N(O(KR,2,20,0),C((-1030),(-672)))).c));G(b,F(20,(N(O(KR,2,20,4),C(148,718))).c));G(b,F(20,(N(O(KR,2,20,2),C(360,(-460)))).c));Bm();G(b,F(10,L(LG,K(M(10,3,4,C((-338),(-626)))))));G(b,F(10,L(LG,K(M(10,3,2,C((-498),26))))));G(b,F(10,L(LG,K(M(10,3,0,C(314,186))))));return b;}
function Go(){var b,c,d;b=I();c=HX();H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function Ii(){var b;b=I();Bw();G(b,F(22,(N(O(KR,2,22,0),KV)).c));G(b,F(21,(N(O(KR,2,21,0),C(14,(-560)))).c));G(b,F(21,(N(O(KR,2,21,0),C(502,464))).c));G(b,F(21,(N(O(KR,2,21,0),C((-522),(-72)))).c));G(b,F(20,(N(O(KR,2,20,0),C((-1352),(-544)))).c));G(b,F(20,(N(O(KR,2,20,4),C(850,1382))).c));G(b,F(20,(N(O(KR,2,20,2),C(574,(-820)))).c));Bm();G(b,F(10,L(LG,K(M(10,3,4,C(364,38))))));G(b,F(10,L(LG,K(M(10,3,2,C((-284),(-334)))))));G(b,F(10,L(LG,K(M(10,3,0,C((-8),314))))));G(b,F(10,L(LG,K(M(10,3,4,C((-660),(-498)))))));G(b,
F(10,L(LG,K(M(10,3,2,C(204,690))))));G(b,F(10,L(LG,K(M(10,3,0,C(528,(-174)))))));return b;}
function Il(){var b;b=I();Bw();G(b,F(24,(N(O(KR,2,24,0),KV)).c));G(b,F(24,(N(O(KR,2,24,1),C((-388),1462))).c));G(b,F(23,(N(O(KR,2,23,1),C(1430,54))).c));G(b,F(23,(N(O(KR,2,23,0),C((-1566),1750))).c));G(b,F(20,(N(O(KR,2,20,1),C((-172),646))).c));Bm();G(b,F(11,L(LG,K(M(11,3,5,C(474,1338))))));G(b,F(11,L(LG,K(M(11,3,2,C((-820),154))))));G(b,F(11,L(LG,K(M(11,3,0,C(1016,850))))));G(b,F(11,L(LG,K(M(11,3,3,C((-1362),642))))));return b;}
function IL(){var b;b=I();Bw();G(b,F(24,(N(O(KR,2,24,1),C((-388),1462))).c));G(b,F(23,(N(O(KR,2,23,0),C((-1566),1750))).c));G(b,F(23,(N(O(KR,2,23,0),C(1300,2994))).c));G(b,F(23,(N(O(KR,2,23,0),C((-322),128))).c));Bm();G(b,F(11,L(LG,K(M(11,3,3,C((-1362),642))))));G(b,F(11,L(LG,K(M(11,3,2,C((-1844),(-382)))))));G(b,F(11,L(LG,K(M(11,3,4,C(1498,1880))))));return b;}
function HI(){var b,c,d;b=I();c=Ii();H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function Ge(){var b,c,d;b=I();c=Il();H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function HD(){var b,c,d;b=I();c=IL();H(b,c);d=1;while(d<6){H(b,Bj(d,KV,c));d=d+1|0;}return b;}
function DT(){B.call(this);this.cH=null;}
var L0=null;function DM(){DM=U(DT);JF();}
function BC(b,c){var d;DM();switch(b%6|0){case 0:break;case 1:b=c.j;return C(b-c.k|0,b);case 2:d=c.k;return C( -d|0,c.j-d|0);case 3:return Cc((-1)*c.j|0,(-1)*c.k|0);case 4:b= -c.j|0;return C(b+c.k|0,b);default:b=c.k;return C(b,b-c.j|0);}return c;}
function BE(b,c,d){var e;DM();e=I();d=BT(d);while(BU(d)){H(e,BF(BC(b,Er(BY(d),c)),c));}return e;}
function Eb(b,c){var d,e;DM();a:{d=I();if(b!==null&&!b.bO()){b=b.eJ();while(true){if(!b.eM())break a;e=b.ew();if(e instanceof Bo)H(d,e.dT(c));}}}return d;}
function Fb(b,c){DM();return Cr(b.bF+c.j|0,b.bE+c.k|0,b.bZ,b.bM);}
function JF(){var b,c;b=new DT;I2();c=L1;DM();if(c!==null)b.cH=c;else{BI(BP(),D(47));b.cH=L1;}L0=b;}
var EB=E(W);
var EC=E(W);
var Es=E(W);
var Et=E(W);
function C$(){var a=this;B.call(a);a.dP=0;a.dl=null;}
var L1=null;function I2(){I2=U(C$);JA();}
function JA(){var b,c;b=new C$;c=KV;I2();b.dP=0;if(c!==null)b.dl=c;else{BI(BP(),D(48));b.dl=KV;}L1=b;}
function HK(){BL.call(this);this.ek=null;}
function Gy(a){var b=new HK();Ih(b,a);return b;}
function Ih(a,b){Be(a);a.ek=b;}
var Em=E(B0);
var FL=E(0);
function EZ(){var a=this;B.call(a);a.bS=0;a.cS=0;a.cW=0;a.cy=0;a.c$=null;}
function BU(a){return a.bS>=a.cW?0:1;}
function BY(a){var b,c,d;b=a.cS;c=a.c$;if(b<c.bh){c=new EO;Be(c);P(c);}d=a.bS;a.cy=d;a.bS=d+1|0;return c.h(d);}
var CM=E(0);
function BX(){var a=this;B.call(a);a.p=null;a.o=null;a.y=null;a.R=0;}
function CX(a){var b,c;b=a.p.bG;c=a.o;return Cr(b.bF+c.j|0,b.bE+c.k|0,b.bZ,b.bM);}
function DD(a){return a.p.cc;}
function Id(a){return a.y;}
function DK(a){return a.p.bn();}
function I8(a){return a.o;}
function If(a,b){a.R=b;}
function Ig(a){return a.R;}
var Ep=E(BX);
function Io(a,b){var c=new Ep();Iw(c,a,b);return c;}
function Iw(a,b,c){var d;IC();d=L2;if(b<0)b= -b|0;b=b%6|0;a.p=J(d.b8,b);a.o=c;a.y=CX(a);}
function H6(a,b){var c,d;c=new Ep;d=a.p;b=BF(a.o,b);c.p=d;c.o=b;return c;}
var Fm=E(BX);
function Jc(a,b){var c=new Fm();HQ(c,a,b);return c;}
function HQ(a,b,c){var d;JP();d=L3;if(b<0)b= -b|0;b=b%6|0;a.p=J(d.bU,b);a.o=c;a.y=CX(a);}
function IK(a,b){var c,d;c=new Fm;d=a.p;b=BF(a.o,b);c.p=d;c.o=b;return c;}
var FP=E(BX);
function Hv(a,b){var c=new FP();JB(c,a,b);return c;}
function JB(a,b,c){var d;Iz();d=L4;if(b<0)b= -b|0;b=b%6|0;a.p=J(d.b9,b);a.o=c;a.y=CX(a);}
function I6(a,b){var c,d;c=new FP;d=a.p;b=BF(a.o,b);c.p=d;c.o=b;c.y=CX(c);return c;}
var D8=E(0);
function GT(){var a=this;B.call(a);a.eg=0;a.eL=0;a.d_=null;a.eD=null;a.ce=null;a.eQ=0;}
function F0(a,b,c,d,e,f){var g=new GT();IY(g,a,b,c,d,e,f);return g;}
function IY(a,b,c,d,e,f,g){a.eQ=b;a.eg=c;a.eL=d;a.d_=e;a.eD=f;a.ce=g;}
function II(a){var b,c,d,e;b=Bb();c=a.ce.data;d=c.length;e=0;while(e<d){T(b,c[e].V());e=e+1|0;}return X(b);}
function B6(){var a=this;B.call(a);a.ba=0;a.B=0;a.I=null;}
function JD(a,b,c){var d=new B6();Gm(d,a,b,c);return d;}
function Ea(b){if(b!=68&&b!=88)return 1;return 3;}
function Cw(b,c){if(c==88)b=b+5|0;if(c==68)b=b+3|0;return Ev(b);}
function G7(b,c){if(c==68)b=b+(-1)|0;if(c==88)b=b+1|0;return Ev(b);}
function Gm(a,b,c,d){a.ba=b;a.B=c;a.I=d;}
function IP(a){return a.ba;}
function H$(a){return a.B;}
function HU(a){return a.I;}
function Jp(a){var b;b=Bb();T(b,BO(a.ba));T(b,D(49));T(b,BO(a.B));T(b,D(49));T(b,DY(a.I));T(b,D(49));T(b,D(50));return X(b);}
function Hf(){B6.call(this);this.cr=0;}
function Jh(a,b,c,d){var e=new Hf();JC(e,a,b,c,d);return e;}
function JC(a,b,c,d,e){Gm(a,b,c,d);a.cr=e;}
function Jk(a){var b;b=Bb();T(b,BO(a.ba));T(b,D(49));T(b,BO(a.B));T(b,D(49));T(b,DY(a.I));T(b,D(49));T(b,BO(a.cr));T(b,D(49));T(b,D(50));return X(b);}
var Ek=E(0);
function DQ(){var a=this;B.call(a);a.ca=null;a.bj=null;}
function CQ(){var a=this;DQ.call(a);a.bI=0;a.bc=null;}
function GH(){var a=this;B.call(a);a.ee=0;a.cL=0;a.cx=0;a.Y=null;a.eO=null;a.ex=null;a.eq=null;}
function Bv(a,b,c,d,e,f){var g=new GH();Ik(g,a,b,c,d,e,f);return g;}
function DC(){var b,c;b=I();c=0;while(c<6){H(b,Bv(1,20,c,J(F3(),c),Bf(J(F3(),c)),null));c=c+1|0;}return b;}
function He(){var b,c;b=I();c=0;while(c<6){H(b,Bv(1,21,c,J(Gs(),c),Bf(J(Gs(),c)),null));c=c+1|0;}return b;}
function HW(){var b,c;b=I();c=0;while(c<6){H(b,Bv(1,25,c,J(GY(),c),Bf(J(GY(),c)),null));c=c+1|0;}return b;}
function Ho(){var b,c;b=I();c=0;while(c<6){H(b,Bv(1,26,c,J(HN(),c),Bf(J(HN(),c)),null));c=c+1|0;}return b;}
function Ik(a,b,c,d,e,f,g){a.ee=b;a.cL=c;a.cx=d;a.Y=e;a.eq=f;a.ex=g;a.eO=I();}
function N(b,c){var d;d=new Fr;b=b;d.cQ=b;d.bm=c;d.eK=Fb(Bf(b.Y),d.bm);d.c=I();b=BT(d.cQ.Y);while(BU(b)){c=BY(b);H(d.c,c.bd(d.bm));}d.dX=Eb(null,d.bm);return d;}
function JM(a,b){var c,d,e,f,g,h,i,j,k;c=a.Y.x();d=V(DH,c);e=d.data;f=0;while(f<c){g=a.Y.h(f);h=g.R;i=DD(g);j=BF(g.o,b);e[f]=JK(Ez(DK(g)),i,j,h);f=f+1|0;}k=new Do;h=a.cL;c=a.cx;b=KV;E3(k,h,c,c,b,b,d);return k;}
function Cz(){Bg.call(this);this.b8=null;}
var L2=null;var L5=null;function IC(){IC=U(Cz);JG();}
function JG(){var b,c,d,e,f,g,h;b=new Cz;IC();BB(b,D(21),0);b.b8=I();c=0;while(c<(Dm()).r){d=Dp(J(Dm(),c));e=L6;e.M=1;e.J=J(Dm(),c);e=D4(e);f=b.b8;g=new CN;Dn(g,c,e,d);H(f,g);c=c+1|0;}L2=b;h=V(Cz,1);h.data[0]=b;L5=h;}
function Ct(){Bg.call(this);this.bU=null;}
var L3=null;var L7=null;function JP(){JP=U(Ct);HY();}
function HY(){var b,c,d,e,f,g,h;b=new Ct;JP();BB(b,D(21),0);b.bU=I();c=0;while(c<(DJ()).r){d=Dp(J(DJ(),c));e=L6;e.M=1;e.J=J(DJ(),c);e=D4(e);f=b.bU;g=new CS;Dn(g,c,e,d);H(f,g);c=c+1|0;}L3=b;h=V(Ct,1);h.data[0]=b;L7=h;}
function Cj(){Bg.call(this);this.b9=null;}
var L4=null;var L8=null;function Iz(){Iz=U(Cj);Jq();}
function Jq(){var b,c,d,e,f,g,h;b=new Cj;Iz();BB(b,D(21),0);b.b9=I();c=0;while(c<(Dw()).r){d=Dp(J(Dw(),c));e=L6;e.M=1;e.J=J(Dw(),c);e=D4(e);f=b.b9;g=new C0;Dn(g,c,e,d);H(f,g);c=c+1|0;}L4=b;h=V(Cj,1);h.data[0]=b;L8=h;}
var G3=E();
function B5(b,c){if(b<c)c=b;return c;}
function Ca(b,c){if(b>c)c=b;return c;}
var Dr=E(0);
var ES=E(0);
function CO(){var a=this;B.call(a);a.es=null;a.ej=null;a.e=null;a.eE=null;a.en=null;}
function L9(a,b){var c=new CO();DU(c,a,b);return c;}
function DU(a,b,c){var d,e;a.es=b;a.ej=c;a.eE=Fb(b.bz,c);a.e=I();d=BT(b.bk);while(BU(d)){e=BY(d);H(a.e,e.bd(c));}a.en=Eb(GS(b),c);}
function Co(){var a=this;B.call(a);a.c6=0;a.n=0;a.v=0;a.bl=0;}
function EA(a,b){a.bl=(-1);a.c6=b;a.v=b;}
function BW(a){return a.v-a.n|0;}
function B7(a){return a.n>=a.v?0:1;}
var FR=E(0);
var Dh=E(Co);
function Ec(a,b){var c,d,e;if(b>=0&&b<=a.v){a.n=b;if(b<a.bl)a.bl=0;return a;}c=new BL;d=a.v;e=Bb();Br(Bk(S(Bk(S(e,D(51)),b),D(52)),d),93);Bi(c,X(e));P(c);}
function DV(){var a=this;Co.call(a);a.de=0;a.c0=null;a.eR=null;}
function E9(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.cB){e=new FI;Be(e);P(e);}if(BW(a)<d){e=new E7;Be(e);P(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bp;j=Bb();Bk(S(Bk(S(j,D(53)),h),D(54)),g);Bi(i,X(j));P(i);}if(d<0){e=new Bp;i=Bb();S(Bk(S(i,D(55)),d),D(56));Bi(e,X(i));P(e);}h=a.n;k=h+a.de|0;l=0;while(l<d){b=a.c0.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.n=h+d|0;return a;}}b=b.data;e=new Bp;d=b.length;i=Bb();Br(Bk(S(Bk(S(i,D(57)),c),D(52)),d),41);Bi(e,X(i));P(e);}
function Fa(a){a.n=0;a.v=a.c6;a.bl=(-1);return a;}
function CH(){B.call(this);this.d0=null;}
var LW=null;var LV=null;var LU=null;function IQ(){IQ=U(CH);HZ();}
function G2(a){var b=new CH();HA(b,a);return b;}
function HA(a,b){IQ();a.d0=b;}
function HZ(){LW=G2(D(58));LV=G2(D(59));LU=G2(D(60));}
var Da=E(Dh);
function Fd(){var a=this;Da.call(a);a.eG=0;a.cA=0;a.dy=null;}
function C4(){var a=this;B.call(a);a.d8=null;a.cX=null;a.eh=0.0;a.ci=0.0;a.b4=null;a.b6=null;a.bo=0;}
function Dd(){var a=this;B.call(a);a.S=0;a.db=0;}
var LY=null;var LX=null;function G5(a,b){var c=new Dd();HC(c,a,b);return c;}
function HC(a,b,c){a.S=b;a.db=c;}
function Dv(a){return a.S!=1?0:1;}
function Hx(a){var b;b=a.S!=2?0:1;return !b&&!E6(a)?0:1;}
function E6(a){return a.S!=3?0:1;}
function DB(b){return G5(2,b);}
function F8(){LY=G5(0,0);LX=G5(1,0);}
function E8(){var a=this;DV.call(a);a.dQ=0;a.cB=0;}
function B3(){var a=this;B.call(a);a.cc=0;a.dO=null;a.bG=null;}
function Dn(a,b,c,d){a.cc=b;a.dO=c;a.bG=d;}
function JH(a){return a.bG;}
function IA(a){return a.cc;}
var CN=E(B3);
var L$=null;var L_=null;function IS(){IS=U(CN);Jg();}
function I$(a){return D(43);}
function Dm(){IS();return L_;}
function Jg(){var b,c,d;L$=Bt(Cq(Bo,[KV,C(1,(-1)),C(0,(-2)),C(0,(-3)),C(2,(-2)),C(3,(-3)),C(4,(-2)),C(5,(-2)),C(6,0),C(5,1),C(4,2),C(2,1),C(2,2),C(1,2)]));b=new Eo;Bs(b);c=0;while(c<6){d=KV;IS();H(b,BE(c,d,L$));c=c+1|0;}L_=b;}
function DW(){var a=this;B.call(a);a.ef=0;a.dB=null;}
var L6=null;var Ma=null;function Jx(a,b){var c=new DW();Hn(c,a,b);return c;}
function Hn(a,b,c){a.ef=b;if(c!==null)a.dB=c;else a.dB=I();}
function Gi(){var b;b=new Fi;b.M=0;b.J=I();L6=b;Ma=Jx(0,I());}
var CS=E(B3);
var Mb=null;var Mc=null;function Ib(){Ib=U(CS);IV();}
function Ji(a){return D(44);}
function DJ(){Ib();return Mc;}
function IV(){var b,c,d;Mb=Bt(Cq(Bo,[KV,C(1,2),C(0,2),C((-1),1),C((-2),2),C((-4),1),C((-6),0),C((-7),(-2)),C((-6),(-2)),C((-6),(-3)),C((-4),(-2)),C((-3),(-3)),C((-2),(-2)),C((-2),(-1))]));b=new EJ;Bs(b);c=0;while(c<6){d=KV;Ib();H(b,BE(c,d,Mb));c=c+1|0;}Mc=b;}
var C0=E(B3);
var Md=null;var Me=null;function I1(){I1=U(C0);HT();}
function Jz(a){return D(45);}
function Dw(){I1();return Me;}
function HT(){var b,c,d;Md=Bt(Cq(Bo,[KV,C(1,2),C(0,2),C(0,3),C((-2),2),C((-3),0),C((-4),0),C((-5),(-1)),C((-4),(-2)),C((-2),(-1)),C((-2),(-2)),C((-1),(-2)),C(0,(-2)),C(1,(-1))]));b=new FQ;Bs(b);c=0;while(c<6){d=KV;I1();H(b,BE(c,d,Md));c=c+1|0;}Me=b;}
function Fi(){var a=this;B.call(a);a.M=0;a.J=null;}
function D4(a){var b;b=Jx(a.M,a.J);a.M=0;a.J=I();return b;}
function DF(){B.call(this);this.er=null;}
var LT=null;var Mf=null;function I9(){I9=U(DF);Jv();}
function HV(a){var b=new DF();F1(b,a);return b;}
function F1(a,b){I9();a.er=b;}
function Jv(){LT=HV(D(61));Mf=HV(D(62));}
var Eo=E(W);
var EJ=E(W);
var FQ=E(W);
var Dy=E(0);
function F6(){B.call(this);this.eU=null;}
var EW=E(0);
function DH(){var a=this;B.call(a);a.dz=0;a.cF=0;a.ch=null;a.cq=0;}
function JK(a,b,c,d){var e=new DH();Iy(e,a,b,c,d);return e;}
function Iy(a,b,c,d,e){a.cq=e;a.dz=b;a.cF=c;a.ch=d;}
function Do(){var a=this;B.call(a);a.ep=0;a.dJ=0;a.eN=0;a.em=null;a.eI=null;a.c1=null;}
function Mg(a,b,c,d,e,f){var g=new Do();E3(g,a,b,c,d,e,f);return g;}
function E3(a,b,c,d,e,f,g){a.ep=b;a.dJ=c;a.eN=d;a.em=e;a.eI=f;a.c1=g;}
function Jy(a){var b,c,d,e,f,g;b=Bb();c=a.c1.data;d=c.length;e=0;while(e<d){f=c[e];g=Bb();T(g,BO(f.dz));T(g,D(49));T(g,BO(f.cF));T(g,D(49));T(g,DY(f.ch));T(g,D(49));T(g,BO(f.cq));T(g,D(49));T(g,D(50));T(b,X(g));e=e+1|0;}return X(b);}
function D_(){var a=this;C4.call(a);a.cz=null;a.c8=null;}
function GX(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.cz;e=0;f=0;g=a.c8;a:{b:{while(true){if((e+32|0)>f&&B7(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=BW(b)+j|0;h=i.length;f=B5(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new Bp;b=Bb();Bk(S(Bk(S(b,D(63)),k),D(54)),h);Bi(l,X(b));P(l);}if(BW(b)<e)break;if(e<0){b=new Bp;c=Bb();S(Bk(S(c,D(55)),e),D(56));Bi(b,X(c));P(b);}h=b.n;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.dy.data[n+b.cA|0];m=m+1|0;j=o;n=k;}b.n=h+e|0;e=0;}if(!B7(c))
{l=!B7(b)&&e>=f?LY:LX;break a;}i=g.data;k=B5(BW(c),i.length);p=new E4;p.cv=b;p.c5=c;l=Hz(a,d,e,f,g,0,k,p);e=p.cu;j=p.da;if(l===null){if(!B7(b)&&e>=f)l=LY;else if(!B7(c)&&e>=f)l=LX;}E9(c,g,0,j);if(l!==null)break a;}b=new EK;Be(b);P(b);}p=new Bp;l=Bb();Br(Bk(S(Bk(S(l,D(57)),j),D(52)),h),41);Bi(p,X(l));P(p);}Ec(b,b.n-(f-e|0)|0);return l;}
var FS=E(D_);
function Hz(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Db(h,2))break a;i=LX;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!E1(l)&&!EP(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(Db(h,3))break a;i=LX;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!E1(l))
{i=DB(1);break a;}if(j>=d){if(B7(h.cv))break a;i=LY;break a;}c=j+1|0;n=k[j];if(!EP(n)){j=c+(-2)|0;i=DB(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Db(h,4))break a;i=LX;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.cu=j;h.da=f;return i;}
var Fl=E(B0);
var EO=E(Bc);
var EY=E(0);
var E0=E(0);
var Dt=E();
function Gq(){var a=this;Dt.call(a);a.f3=null;a.fJ=0;a.gr=0;a.gB=0;}
var FX=E(Bc);
function Fr(){var a=this;B.call(a);a.cQ=null;a.bm=null;a.eK=null;a.c=null;a.dX=null;}
function GG(){var a=this;B.call(a);a.gl=0;a.fF=null;}
var Gr=E();
var Dk=E(Bc);
var E$=E(Cy);
var CR=E(Bc);
function E4(){var a=this;B.call(a);a.cv=null;a.c5=null;a.cu=0;a.da=0;}
function Db(a,b){return BW(a.c5)<b?0:1;}
var FI=E(CR);
var E7=E(Bc);
var EK=E(Bc);
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,0,F$,0,B,[],0,3,0,0,0,EE,0,B,[],3,3,0,0,0,En,0,B,[],3,3,0,0,0,EN,0,B,[EE,En],0,3,0,0,0,Hy,0,B,[],4,0,0,0,0,Hc,0,B,[],4,3,0,0,0,CB,0,B,[],0,3,0,0,0,B0,0,CB,[],0,3,0,0,0,Bc,0,B0,[],0,3,0,0,0,Hg,0,Bc,[],0,3,0,0,0,BV,0,B,[],3,3,0,0,0,BG,0,B,[],3,3,0,0,0,CY,0,B,[],3,3,0,0,0,BQ,0,B,[BV,BG,CY],0,3,0,C3,0,Cy,0,CB,[],0,3,0,0,0,CE,0,Cy,[],0,3,0,0,0,G0,0,CE,[],0,3,0,0,0,DZ,0,B,[BV],1,3,0,0,0,Ch,0,DZ,[BG],0,3,0,0,["bf",Kp(F9),"bP",Kq(Jf)],Du,0,B,[BV,CY],0,0,0,0,["b2",Kq(E_),"U",Kp(X)],DA,
0,B,[],3,3,0,0,0,Gf,0,Du,[DA],0,3,0,0,["U",Kp(I0),"b2",Kq(Jt)],Cn,0,CE,[],0,3,0,0,0,GU,0,Cn,[],0,3,0,0,0,GI,0,Cn,[],0,3,0,0,0,Bz,0,B,[],3,3,0,0,0,Ed,0,B,[Bz],3,3,0,0,0,El,0,B,[Ed],3,3,0,0,0,BJ,0,B,[Bz],3,3,0,0,0,Gv,0,B,[El,BJ],3,3,0,0,0,ET,0,B,[],3,3,0,0,0,Bo,0,B,[BG,ET],0,3,0,0,0,GO,0,B,[],0,3,0,0,0,Hk,0,B,[],0,3,0,0,0,Fe,0,B,[],4,3,0,0,0,HL,0,B,[],4,3,0,0,0,FN,0,B,[BJ],3,3,0,0,0,Fj,0,B,[BJ],3,3,0,0,0,Fc,0,B,[BJ],3,3,0,0,0,EX,0,B,[BJ],3,3,0,0,0,Fg,0,B,[BJ],3,3,0,0,0,Fv,0,B,[BJ,FN,Fj,Fc,EX,Fg],3,3,0,0,0,Fp,
0,B,[],3,3,0,0,0,FA,0,B,[Bz],3,3,0,0,0,GK,0,B,[Bz,Fv,Fp,FA],1,3,0,0,["fV",Kq(IJ),"gE",Kr(H5),"fW",Kr(JR),"e9",Ks(IG),"fy",Kq(IO),"fH",Kp(Jd),"gc",Ks(H2)],Fn,0,B,[],3,3,0,0,0,FW,0,B,[Fn],0,3,0,0,0,Bp,0,Bc,[],0,3,0,0,0,GA,0,B,[],4,3,0,0,0]);
$rt_metadata([CL,0,Bc,[],0,3,0,0,0,CW,0,Bc,[],0,3,0,0,0,Cb,0,B,[BG],0,3,0,0,0,BL,0,Bc,[],0,3,0,0,0,BN,0,BL,[],0,3,0,0,0,BR,0,B,[],4,3,0,Fk,0,G$,0,B,[Bz],1,3,0,0,0,GD,0,B,[Bz],1,3,0,0,0,HH,0,B,[Bz],1,3,0,0,0,D3,0,B,[Bz],3,3,0,0,0,Fy,0,B,[D3],0,3,0,0,["eF",Kq(Jb)],GZ,0,B,[Bz],1,3,0,0,0,Fz,0,B,[D3],0,3,0,0,["eF",Kq(H4)],HJ,0,B,[],4,0,0,0,0,Hb,0,B,[],4,3,0,0,0,FK,0,B,[],0,3,0,0,0,GR,0,B,[],4,3,0,0,0,HM,0,B,[],4,3,0,0,0,DN,0,Bp,[],0,3,0,0,0,B4,0,B,[],3,3,0,0,0,Gb,0,B,[B4],0,3,0,0,0,GJ,0,B,[B4],0,3,0,0,0,GC,0,B,[B4],
0,3,0,0,0,Gx,0,B,[B4],0,3,0,0,0,Bg,0,B,[BG,BV],1,3,0,0,0,CD,0,Bg,[],12,3,0,Gt,0,FD,0,B,[],3,3,0,0,0,FC,0,B,[FD],0,3,0,0,0,Gn,0,B,[B4],0,3,0,0,0,HG,0,B,[B4],0,3,0,0,0,CC,0,Bg,[],12,3,0,ED,0,B8,0,Bg,[],12,3,0,Bw,0,Cg,0,Bg,[],12,3,0,BK,0,CZ,0,B,[],3,3,0,0,0,FV,0,B,[CZ],3,3,0,0,0,Bh,0,B,[FV],0,3,0,BA,["cn",Kq(H0)],Cm,0,Bg,[],12,3,0,BH,0,B2,0,Bh,[],0,3,0,Cd,0,Cx,0,Bg,[],12,3,0,C1,0,B1,0,Bh,[],0,3,0,Ce,0,DX,0,B,[],3,3,0,0,0,EL,0,B,[DX],3,3,0,0,0,Fs,0,B,[],3,3,0,0,0,Cv,0,B,[EL,Fs],1,3,0,0,0,Ds,0,Cv,[],0,3,0,0,0,ER,
0,Ds,[],0,3,0,0,0,C6,0,Cv,[],1,3,0,0,0,DI,0,C6,[],0,3,0,0,0,Dl,0,B,[BG],1,3,0,0,0,D6,0,Dl,[],0,3,0,Ie,0]);
$rt_metadata([Dc,0,B,[],0,3,0,0,["bf",Kp(IT),"bP",Kq(Bu)],EF,0,B,[],3,3,0,0,0,DE,0,B,[EF],3,3,0,0,0,C8,0,B,[DE],1,3,0,0,0,FH,0,B,[DE],3,3,0,0,0,Eu,0,B,[FH],3,3,0,0,0,Cs,0,C8,[Eu],1,3,0,0,0,CF,0,B,[],3,3,0,0,0,DL,0,B,[],3,3,0,0,0,W,0,Cs,[CF,BV,DL],0,3,0,0,["h",Kq(J),"x",Kp(IM)],FF,0,B,[],3,3,0,0,0,De,0,B,[FF],0,3,0,0,0,Ew,0,B,[],3,3,0,0,0,DR,0,B,[Ew],1,3,0,0,0,Hj,0,DR,[CF,BV],0,3,0,0,0,F4,0,B,[],0,3,0,0,0,C9,0,B,[],3,3,0,0,0,Dg,0,B,[],3,3,0,0,0,DG,0,B,[],3,3,0,0,0,Ci,0,B,[C9,Dg,DG],3,3,0,0,0,Cu,0,Bg,[],12,3,
0,Bm,0,GW,0,B,[],0,3,0,0,0,Ei,0,W,[],0,0,0,0,0,Ej,0,W,[],0,0,0,0,0,Ee,0,W,[],0,0,0,0,0,Ef,0,W,[],0,0,0,0,0,Eg,0,W,[],0,0,0,0,0,Eh,0,W,[],0,0,0,0,0,F7,0,B,[],0,3,0,0,0,Gw,0,B,[],4,3,0,0,0,EM,0,Cs,[DL],0,0,0,0,["h",Kq(HO),"x",Kp(IE)],Ht,0,B,[],0,3,0,0,0,DT,0,B,[],0,3,0,DM,0,EB,0,W,[],0,0,0,0,0,EC,0,W,[],0,0,0,0,0,Es,0,W,[],0,0,0,0,0,Et,0,W,[],0,0,0,0,0,C$,0,B,[],0,3,0,I2,0,HK,0,BL,[],0,3,0,0,0,Em,0,B0,[],0,3,0,0,0,FL,0,B,[],3,3,0,0,0,EZ,0,B,[FL],0,0,0,0,0,CM,0,B,[],3,3,0,0,0,BX,0,B,[Ci,CM],1,3,0,0,0,Ep,0,BX,[],
0,3,0,0,["bd",Kq(H6)],Fm,0,BX,[],0,3,0,0,["bd",Kq(IK)],FP,0,BX,[],0,3,0,0,["bd",Kq(I6)],D8,0,B,[],3,3,0,0,0,GT,0,B,[D8],0,3,0,0,["V",Kp(II)],B6,0,B,[CM],0,3,0,0,["V",Kp(Jp)]]);
$rt_metadata([Hf,0,B6,[DG],0,3,0,0,["V",Kp(Jk)],Ek,0,B,[],3,3,0,0,0,DQ,0,B,[Ek,CF],0,0,0,0,0,CQ,0,DQ,[],0,0,0,0,0,GH,0,B,[CZ],0,3,0,0,["cn",Kq(JM)],Cz,0,Bg,[],12,3,0,IC,0,Ct,0,Bg,[],12,3,0,JP,0,Cj,0,Bg,[],12,3,0,Iz,0,G3,0,B,[],4,3,0,0,0,Dr,0,B,[CZ,Dg],3,3,0,0,0,ES,0,B,[Dr],3,3,0,0,0,CO,0,B,[ES],0,3,0,0,0,Co,0,B,[],1,3,0,0,0,FR,0,B,[],3,3,0,0,0,Dh,0,Co,[BG,DA,CY,FR],1,3,0,0,0,DV,0,Co,[BG],1,3,0,0,0,CH,0,B,[],0,3,0,IQ,0,Da,0,Dh,[],1,0,0,0,0,Fd,0,Da,[],0,0,0,0,0,C4,0,B,[],1,3,0,0,0,Dd,0,B,[],0,3,0,0,0,E8,0,DV,
[],0,0,0,0,0,B3,0,B,[C9],1,3,0,0,0,CN,0,B3,[],0,3,0,IS,["bn",Kp(I$)],DW,0,B,[],0,3,0,0,0,CS,0,B3,[],0,3,0,Ib,["bn",Kp(Ji)],C0,0,B3,[],0,3,0,I1,["bn",Kp(Jz)],Fi,0,B,[],4,3,0,0,0,DF,0,B,[],4,3,0,I9,0,Eo,0,W,[],0,0,0,0,0,EJ,0,W,[],0,0,0,0,0,FQ,0,W,[],0,0,0,0,0,Dy,0,B,[],3,3,0,0,0,F6,0,B,[Dy],0,3,0,0,0,EW,0,B,[CM],3,3,0,0,0,DH,0,B,[EW],0,3,0,0,0,Do,0,B,[D8],0,3,0,0,["V",Kp(Jy)],D_,0,C4,[],1,3,0,0,0,FS,0,D_,[],0,3,0,0,0,Fl,0,B0,[],0,3,0,0,0,EO,0,Bc,[],0,3,0,0,0,EY,0,B,[DX],3,3,0,0,0,E0,0,B,[EY],3,3,0,0,0,Dt,0,B,
[E0],1,3,0,0,0,Gq,0,Dt,[],0,3,0,0,0,FX,0,Bc,[],0,3,0,0,0,Fr,0,B,[Dr],0,3,0,0,0,GG,0,B,[Dy],0,3,0,0,0,Gr,0,B,[],4,3,0,0,0,Dk,0,Bc,[],0,3,0,0,0]);
$rt_metadata([E$,0,Cy,[],0,3,0,0,0,CR,0,Bc,[],0,3,0,0,0,E4,0,B,[],0,3,0,0,0,FI,0,CR,[],0,3,0,0,0,E7,0,Bc,[],0,3,0,0,0,EK,0,Bc,[],0,3,0,0,0]);
function $rt_array(cls,data){this.hY=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Error in MetaTileDescriptorSupplier ","[]","0]","Either src or dest is null","null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","object","function","string","number","SystemTileDescriptorSupplier called to supply","Xa","aD","1","INSTANCE","","a","zizizXazizaDziziz",
"z","i","aDzizizXa","0z1i0z1i0z3Xa0z1i0z2aD0z1i0z1i0z","z1iz1iz3Xaz1iz2aDz1iz1iz","2aD0z1i0z1i0z3Xa","2aDz1iz1iz3Xa","01234","ziziN","N","A pair is requested, which is not implemented","Pair.prev called from LAST","SuperSystemDispenser has no such blueprint ","Index out of bounds","Action must be non-null","Replacement preconditions do not hold","UTF-8","Illegal request for Superblueprint ","Turtle","FTurtle","FHat","TileBlueprint.getTypeNr has invalid type","HexTransformer got data null","HexPlacementData got rotCenter null",
",","\n","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst "]);
BQ.prototype.toString=function(){return $rt_ustr(this);};
BQ.prototype.valueOf=BQ.prototype.toString;B.prototype.toString=function(){return $rt_ustr(I5(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(J1);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=GK.prototype;c.removeEventListener=c.e9;c.dispatchEvent=c.fy;c.get=c.fV;c.addEventListener=c.gc;Object.defineProperty(c,"length",{get:c.fH});c=Fy.prototype;c.accept=c.eF;c=Fz.prototype;c.accept=c.eF;})();
}));

//# sourceMappingURL=classes.js.map