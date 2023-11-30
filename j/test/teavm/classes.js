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
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.c1=f;}
function $rt_cls(cls){return FT(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return It(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.r.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return Ik(t);}
function $rt_throwableCause(t){return In(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(IO());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return IP(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var D8=$rt_compare;var IQ=$rt_nullCheck;var M=$rt_cls;var U=$rt_createArray;var Iw=$rt_isInstance;var IR=$rt_nativeThread;var IS=$rt_suspending;var IT=$rt_resuming;var IU=$rt_invalidPointer;var C=$rt_s;var N=$rt_eraseClinit;var He=$rt_imul;var H0=$rt_wrapException;var IV=$rt_checkBounds;var IW=$rt_checkUpperBound;var IX=$rt_checkLowerBound;var IY=$rt_wrapFunction0;var IZ=$rt_wrapFunction1;var I0=$rt_wrapFunction2;var I1=$rt_wrapFunction3;var I2=$rt_wrapFunction4;var D=$rt_classWithoutFields;var Ey
=$rt_createArrayFromData;var I3=$rt_createCharArrayFromData;var I4=$rt_createByteArrayFromData;var I5=$rt_createShortArrayFromData;var I6=$rt_createIntArrayFromData;var I7=$rt_createBooleanArrayFromData;var I8=$rt_createFloatArrayFromData;var I9=$rt_createDoubleArrayFromData;var I$=$rt_createLongArrayFromData;var I_=$rt_createBooleanArray;var E2=$rt_createByteArray;var Ja=$rt_createShortArray;var BE=$rt_createCharArray;var IK=$rt_createIntArray;var Jb=$rt_createLongArray;var Jc=$rt_createFloatArray;var Jd=$rt_createDoubleArray;var D8
=$rt_compare;var Je=$rt_castToClass;var Jf=$rt_castToInterface;var Jg=$rt_equalDoubles;var Jh=Long_toNumber;var Ji=Long_fromInt;var Jj=Long_fromNumber;var Jk=Long_create;var Jl=Long_ZERO;var Jm=Long_hi;var Jn=Long_lo;
function B(){this.$id$=0;}
function Di(a){return FT(a.constructor);}
function HM(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=C(0);else{if(!d)f=32;else{g=0;f=d>>>16|0;if(f)g=16;else f=d;h=f>>>8|0;if(!h)h=f;else g=g|8;i=h>>>4|0;if(!i)i=h;else g=g|4;f=i>>>2|0;if(!f)f=i;else g=g|2;if(f>>>1|0)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=BE(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){i=f+1|0;l[f]=DC((d>>>j|0)&15,16);j=j-4|0;f=i;}e=It(k);}b=X();L(L(b,C(1)),e);return R(b);}
function H9(a){var b,c,d;if(!Iw(a,Cl)&&a.constructor.$meta.item===null){b=new DU;Q(b);J(b);}b=GU(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var Fp=D();
function Iy(b){var c,d,e,f,g,h,i,j,k;Ft();Fx();FM();Gk();Fo();Fu();c=$rt_globals.window.document;d=Fe($rt_str(c.getElementById("h_type").textContent));e=Fe($rt_str(c.getElementById("h_level").textContent));f=E(0,0);if(d<10)g=D5(Hb(d,e,0,f));else if(d<20)g=P(W(d,e,0,f));else if(!e){if(d<23){Bu();g=CL(Cp(Jo,d,0),f);}else if(d<25){Bn();g=CL(CO(Jp,d,0),f);}else if(d>=27){By(BJ(),C(2));g=null;}else{Cf();g=CL(C_(Jq,d,0),f);}}else{By(BJ(),C(3));G_();h=Jr;if(e<0)e= -e|0;g=h.Y;i=g.g;if(e<i)g=ER(F(g,e),d,0);else{F(g,
i-1|0);while(i<=e){j=HF();Bd(j.f,Bc(20),DL(Jr,1,20));Bd(j.f,Bc(21),DL(Jr,1,21));Bd(j.f,Bc(22),DL(Jr,1,22));g=j.f;k=Bc(23);Bn();Bd(g,k,B1(Jp,23));Bd(j.f,Bc(24),B1(Jp,24));g=j.f;k=Bc(25);Cf();Bd(g,k,Ck(Jq,25));Bd(j.f,Bc(26),Ck(Jq,26));G(h.Y,j);i=i+1|0;}g=ER(F(h.Y,e),d,0);}By(BJ(),C(4));g=g.b7(f);}if(g===null)g=D5(Hb(1,1,0,Js));k=g.co();g=C(5);if(Z(k)>0){g=X();L(L(Bl(g,91),k),C(6));g=R(g);}k=c.getElementById("h_textformat");g=$rt_ustr(g);k.textContent=g;}
var D$=D(0);
var DV=D(0);
function Ef(){B.call(this);this.I=null;}
function FT(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Ef;c.I=b;d=c;b.classObject=d;}return c;}
function CD(a){return a.I.$meta.primitive?1:0;}
function CV(a){return FT(a.I.$meta.item);}
var Gv=D();
function Fs(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Db(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Gf=D();
function GU(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function FU(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(FU(d[e],c))return 1;e=e+1|0;}return 0;}
function Cg(){var a=this;B.call(a);a.cX=null;a.cU=null;a.bH=0;a.bS=0;}
function Jt(a){var b=new Cg();V(b,a);return b;}
function Ju(a){var b=new Cg();FS(b,a);return b;}
function V(a,b){a.bH=1;a.bS=1;a.cX=b;}
function FS(a,b){a.bH=1;a.bS=1;a.cU=b;}
function G3(a){return a;}
function Ik(a){return a.cX;}
function In(a){var b;b=a.cU;if(b===a)b=null;return b;}
var BK=D(Cg);
function Jv(){var a=new BK();Q(a);return a;}
function Q(a){a.bH=1;a.bS=1;}
var O=D(BK);
function IP(a){var b=new O();Hy(b,a);return b;}
function Hy(a,b){V(a,b);}
var Gh=D(O);
var BC=D(0);
var Br=D(0);
var CH=D(0);
function BM(){var a=this;B.call(a);a.r=null;a.T=0;}
var Jw=null;var Jx=null;var Jy=null;function DI(){DI=N(BM);Hh();}
function It(a){var b=new BM();FD(b,a);return b;}
function HW(a,b,c){var d=new BM();Fg(d,a,b,c);return d;}
function FD(a,b){DI();Fg(a,b,0,b.data.length);}
function Fg(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;DI();e=BE(d);a.r=e;if(b===null){f=new Cq;V(f,C(7));J(f);}if(c>=0&&d>=0&&(c+d|0)<=Dp(b)&&(0+d|0)<=Dp(e)){a:{b:{c:{if(b!==e){g=CV(Di(b));f=CV(Di(e));if(g!==null&&f!==null){if(g===f)break c;if(!CD(g)&&!CD(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;m=k[j];n=f.I;if(!(m!==null&&!(typeof m.constructor.$meta==='undefined'?1:0)&&FU(m.constructor,n)?1:0)){Dt(b,c,e,0,i);g=new CF;Q(g);J(g);}i=i+1|0;j=l;}Dt(b,c,e,0,d);break a;}if(!CD(g))break b;if(CD(f))break c;else break b;}g
=new CF;Q(g);J(g);}}Dt(b,c,e,0,d);break a;}g=new CF;Q(g);J(g);}return;}g=new Bf;Q(g);J(g);}
function Bi(a,b){var c,d;if(b>=0){c=a.r.data;if(b<c.length)return c[b];}d=new Do;Q(d);J(d);}
function Z(a){return a.r.data.length;}
function ET(a){return a.r.data.length?0:1;}
function Cv(a,b,c){var d,e;d=D8(b,c);if(d>0){e=new Bf;Q(e);J(e);}if(!d){DI();return Jx;}if(!b&&c==Z(a))return a;return HW(a.r,b,c-b|0);}
function BN(a,b,c){var d,e,f,g;d=X();e=Z(a)-Z(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Z(b)){L(d,c);f=f+(Z(b)-1|0)|0;break a;}if(Bi(a,f+g|0)!=Bi(b,g))break;g=g+1|0;}Bl(d,Bi(a,f));}f=f+1|0;}L(d,Cv(a,f,Z(a)));return R(d);}
function DK(b){DI();if(b===null)b=C(8);return b;}
function BH(a,b){var c;if(a===b)return 1;if(!(b instanceof BM))return 0;if(Z(b)!=Z(a))return 0;c=0;while(c<Z(b)){if(Bi(a,c)!=Bi(b,c))return 0;c=c+1|0;}return 1;}
function Hl(a){var b,c,d,e;a:{if(!a.T){b=a.r.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.T=(31*a.T|0)+e|0;d=d+1|0;}}}return a.T;}
function Hh(){var b,c;b=BE(0);Jw=b;c=new BM;DI();c.r=b;Jx=c;Jy=new Fi;}
var Cc=D(Cg);
var Cj=D(Cc);
var F3=D(Cj);
var DA=D();
function BY(){DA.call(this);this.bi=0;}
var Jz=null;var JA=null;function G$(a){var b=new BY();Fk(b,a);return b;}
function Fk(a,b){a.bi=b;}
function CI(b){return (Em(IF(20),b,10)).ba();}
function Fe(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;if(b===null){b=new BI;V(b,C(9));J(b);}c=Z(b);if(0==c){b=new BI;V(b,C(10));J(b);}a:{d=0;switch(Bi(b,0)){case 43:break;case 45:d=1;e=1;break a;default:e=0;break a;}e=1;}f=0;if(e==c){b=new BI;Q(b);J(b);}b:{c:{while(e<c){g=e+1|0;h=Bi(b,e);if(JB===null){if(JC===null)JC=F4();i=(JC.value!==null?$rt_str(JC.value):null);j=new E8;k=i.r.data;l=BE(k.length);m=l.data;e=0;n=m.length;while(e<n){m[e]=k[e];e=e+1|0;}j.cQ=l;n=Gb(j);k=IK(n*2|0);l=k.data;o=0;p=0;q=0;r=0;while
(r<n){p=p+Fz(j)|0;q=q+Fz(j)|0;s=o+1|0;l[o]=p;o=s+1|0;l[s]=q;r=r+1|0;}JB=k;}k=JB.data;n=0;o=(k.length/2|0)-1|0;d:{while(o>=n){p=(n+o|0)/2|0;e=p*2|0;q=D8(h,k[e]);if(q>0)n=p+1|0;else{if(q>=0){n=k[e+1|0];break d;}o=p-1|0;}}n=(-1);}if(n<0){i=new BI;b=DK(Cv(b,0,c));j=X();L(L(j,C(11)),b);V(i,R(j));J(i);}if(n>=10){i=new BI;b=DK(Cv(b,0,c));j=X();L(L(Y(L(j,C(12)),10),C(13)),b);V(i,R(j));J(i);}f=(10*f|0)+n|0;if(f<0){if(g!=c)break b;if(f!=(-2147483648))break b;if(!d)break b;f=(-2147483648);break c;}e=g;}if(d)f= -f|0;}return f;}i
=new BI;b=DK(Cv(b,0,c));j=X();L(L(j,C(14)),b);V(i,R(j));J(i);}
function Bc(b){var c,d;if(b>=(-128)&&b<=127){a:{if(JA===null){JA=U(BY,256);c=0;while(true){d=JA.data;if(c>=d.length)break a;d[c]=G$(c-128|0);c=c+1|0;}}}return JA.data[b+128|0];}return G$(b);}
function DY(a){return a.bi;}
function Ft(){Jz=M($rt_intcls());}
function C8(){var a=this;B.call(a);a.i=null;a.h=0;}
function IF(a){var b=new C8();FG(b,a);return b;}
function FG(a,b){a.i=BE(b);}
function Em(a,b,c){return F$(a,a.h,b,c);}
function F$(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)CC(a,b,b+1|0);else{CC(a,b,b+2|0);f=a.i.data;g=b+1|0;f[b]=45;b=g;}a.i.data[b]=DC(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=He(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;CC(a,b,b+i|0);if(e)e=b;else{f=a.i.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.i.data;b=e+1|0;f[e]=DC($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function EA(a,b){var c,d,e,f,g;c=a.i.data.length;if(c>=b)return;d=c>=1073741823?2147483647:BR(b,BR(c*2|0,5));e=a.i.data;f=BE(d);g=f.data;b=BP(d,e.length);c=0;while(c<b){g[c]=e[c];c=c+1|0;}a.i=f;}
function R(a){return HW(a.i,0,a.h);}
function CC(a,b,c){var d,e,f,g;d=a.h;e=d-b|0;a.bK((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.i.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.h=a.h+(c-b|0)|0;}
var Dc=D(0);
var Fr=D(C8);
function X(){var a=new Fr();HL(a);return a;}
function HL(a){FG(a,16);}
function L(a,b){var c;c=a.h;if(b===null)b=C(8);Fa(a,c,b);return a;}
function Ba(a,b){Fa(a,a.h,b);return a;}
function Y(a,b){Em(a,b,10);return a;}
function Bl(a,b){var c;c=a.h;CC(a,c,c+1|0);a.i.data[c]=b;return a;}
function HI(a){return R(a);}
function H6(a,b){EA(a,b);}
function Fa(a,b,c){var d,e,f;if(b>=0&&b<=a.h){a:{if(c===null)c=C(8);else if(ET(c))break a;EA(a,a.h+Z(c)|0);d=a.h-1|0;while(d>=b){a.i.data[d+Z(c)|0]=a.i.data[d];d=d+(-1)|0;}a.h=a.h+Z(c)|0;d=0;while(d<Z(c)){e=a.i.data;f=b+1|0;e[b]=Bi(c,d);d=d+1|0;b=f;}}return a;}c=new Do;Q(c);J(c);}
var B6=D(Cj);
var FZ=D(B6);
function JD(a){var b=new FZ();HR(b,a);return b;}
function HR(a,b){V(a,b);}
var FO=D(B6);
function JE(a){var b=new FO();H1(b,a);return b;}
function H1(a,b){V(a,b);}
var Bk=D(0);
var DO=D(0);
var DT=D(0);
var Bt=D(0);
var FB=D(0);
var El=D(0);
function Bz(){var a=this;B.call(a);a.j=0;a.k=0;}
var Js=null;var JF=null;var JG=null;var JH=null;function BU(a,b){var c=new Bz();Gs(c,a,b);return c;}
function D2(b){var c;c=b%6|0;if(c>=0)b=c%6|0;else{if(c<0)c= -c|0;b=(6-(c%6|0)|0)%6|0;}return b;}
function E(b,c){return BU(b,c);}
function CU(b){var c,d,e,f,g;if(b!==null&&b.g){c=(F(b,0)).j;d=(F(b,0)).k;e=1;f=c;g=d;while(e<b.g){f=BP(f,(F(b,e)).j);c=BR(c,(F(b,e)).j);g=BP(g,(F(b,e)).k);d=BR(d,(F(b,e)).k);e=e+1|0;}return null;}return null;}
function Gs(a,b,c){a.j=b;a.k=c;}
function Bw(a,b){return BU(a.j+b.j|0,a.k+b.k|0);}
function D0(a,b){return BU(a.j-b.j|0,a.k-b.k|0);}
function E0(a){var b,c,d;b=a.j;c=a.k;d=X();Y(Bl(Y(d,b),44),c);return R(d);}
function Fx(){Js=BU(0,0);JF=BU(2,0);JG=BU(0,2);JH=BU(2,2);}
var BV=D(0);
function Fq(){var a=this;B.call(a);a.cH=0;a.M=0;a.ci=0;a.cJ=null;}
function Hb(a,b,c,d){var e=new Fq();HS(e,a,b,c,d);return e;}
function HS(a,b,c,d,e){a.cH=b;a.M=c;a.ci=d;a.cJ=e;}
function D5(a){var b,c;By(BJ(),C(15));b=a.cH;if(!b){Cx();c=(Bq(JI,a.M)).t;}else if(b==1){Cx();c=(Bq(JI,a.M)).z;}else if(b!=2){Cx();Bq(JI,a.M);c=C(16);}else{Cx();Bq(JI,a.M);c=C(17);}return E7(Hd(a.ci,a.cJ),c);}
function Gj(){B.call(this);this.ej=null;}
function FP(){var a=this;B.call(a);a.b0=0;a.bk=0;a.cK=0;a.cj=null;}
function W(a,b,c,d){var e=new FP();Ie(e,a,b,c,d);return e;}
function Ie(a,b,c,d,e){a.b0=b;a.bk=c;a.cK=d;a.cj=e;}
function P(a){var b,c;b=a.b0;if(b==10){D9();c=(CS(JJ,a.bk)).bf;}else if(b!=11){D9();c=(CS(JJ,a.bk)).bn;}else{D9();c=(CS(JJ,a.bk)).bw;}return E7(Hd(a.cK,a.cj),c);}
function FJ(){var a=this;B.call(a);a.eg=0;a.e9=0;a.fl=0;a.e1=null;}
function FE(){var a=this;B.call(a);a.fq=0;a.ed=0;a.e$=null;}
var EF=D();
var JK=null;function BJ(){var b;if(JK===null){b=new Ei;b.c8=JL;b.bg=X();b.c9=BE(32);b.dZ=0;G5();b.cY=JM;JK=b;}return JK;}
function Ix(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Dp(b)&&(e+f|0)<=Dp(d)){Dt(b,c,d,e,f);return;}b=new Bf;Q(b);J(b);}
function Dt(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
var GF=D();
var E_=D(0);
var EJ=D(0);
var EC=D(0);
var Eo=D(0);
var EG=D(0);
var EU=D(0);
var EO=D(0);
var EY=D(0);
var FQ=D();
function Hs(a,b){b=a.bx(b);EK();return b===null?null:b instanceof $rt_objcls()&&b instanceof BA?DD(b):b;}
function GW(a,b,c){a.eI($rt_str(b),Db(c,"handleEvent"));}
function Io(a,b,c){a.ex($rt_str(b),Db(c,"handleEvent"));}
function Hp(a,b,c,d){a.eR($rt_str(b),Db(c,"handleEvent"),d?1:0);}
function Hw(a,b){return !!a.eP(b);}
function HV(a){return a.fm();}
function GT(a,b,c,d){a.fz($rt_str(b),Db(c,"handleEvent"),d?1:0);}
var EN=D(0);
var Fi=D();
var Bf=D(O);
var FH=D();
function Dp(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(JN());}return b.data.length;}
function HD(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Cq=D(O);
var CF=D(O);
var BT=D();
var JO=null;var JB=null;var JP=null;var JC=null;function Eq(b){return (b&64512)!=55296?0:1;}
function Eh(b){return (b&64512)!=56320?0:1;}
function DC(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FM(){JO=M($rt_charcls());JP=U(BT,128);}
function F4(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
var Bv=D(O);
function Is(a){var b=new Bv();Ih(b,a);return b;}
function Ih(a,b){V(a,b);}
var BI=D(Bv);
function BA(){B.call(this);this.cF=null;}
var JQ=null;var JR=null;var JS=null;var JT=null;var JU=null;var JV=null;function EK(){EK=N(BA);HZ();}
function D4(a){var b=new BA();Fw(b,a);return b;}
function Fw(a,b){EK();a.cF=b;}
function DD(b){EK();if(b!==null)return b.cF;return null;}
function DZ(b){var c,d;EK();if(b===null)return null;if(b instanceof $rt_objcls())b=b;else a:{b=b;if(b===null)b=null;else{b:{c=b;if(JR!==null){d=$rt_str(typeof c);if(!BH(d,C(18))&&!BH(d,C(19))){if(BH(d,C(20))){b=JS.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=D4(c);d=b;JS.set(c,new $rt_globals.WeakRef(d));Er(JU,d,c);break a;}if(!BH(d,C(21)))break b;else{b=JT.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b
=D4(c);d=b;JT.set(c,new $rt_globals.WeakRef(d));Er(JV,d,c);break a;}}b=JR.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=D4(c);JR.set(c,new $rt_globals.WeakRef(b));break a;}}b=D4(c);}}return b;}
function HZ(){JQ=new $rt_globals.WeakMap();JR=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();JS=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();JT=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();JU=JS===null?null:new $rt_globals.FinalizationRegistry(Fs(new EW,"accept"));JV=JT===null?null:new $rt_globals.FinalizationRegistry(Fs(new EX,"accept"));}
function Er(b,c,d){return b.register(c,d);}
var Ga=D();
var FK=D();
var GC=D();
var DE=D(0);
var EW=D();
function HT(a,b){var c;b=DZ(b);c=JS;b=DD(b);c.delete(b);}
var F2=D();
var EX=D();
function GV(a,b){var c;b=DZ(b);c=JT;b=DD(b);c.delete(b);}
var GD=D();
var Ge=D();
function E8(){var a=this;B.call(a);a.cQ=null;a.cR=0;}
var FX=D();
function Gb(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.cQ.data;f=b.cR;b.cR=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+He(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Fz(b){var c,d;c=Gb(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var GG=D();
var Do=D(Bf);
function S(){var a=this;B.call(a);a.dO=null;a.dc=0;}
function Bm(a,b,c){a.dO=b;a.dc=c;}
function Ci(){S.call(this);this.bT=null;}
var JI=null;var JW=null;function Cx(){Cx=N(Ci);GL();}
function Bq(a,b){var c,d,e,f,g,h,i;c=a.bT;d=c.g;if(b<d)return F(c,b);c=F(c,d-1|0);e=b+1|0;while(d<e){f=new DB;f.cP=c;f.bX=c.bX+1|0;g=c.t;h=c.z;f.t=BN(BN(C(22),C(23),g),C(24),h);i=c.t;h=c.z;f.z=BN(BN(C(25),C(23),i),C(24),h);G(a.bT,f);d=d+1|0;c=f;}return c;}
function GL(){var b,c,d,e;b=new Ci;Cx();Bm(b,C(26),0);c=I();b.bT=c;d=new DB;d.bX=0;d.t=C(27);d.z=C(28);d.cP=null;G(c,d);JI=b;e=U(Ci,1);e.data[0]=b;JW=e;}
function GB(){var a=this;B.call(a);a.br=0;a.u=0;a.bL=null;a.w=null;a.dC=null;a.bm=0;}
function Hd(a,b){var c=new GB();H5(c,a,b);return c;}
function H5(a,b,c){a.br=b;a.u=b;a.bL=c;a.w=c;a.dC=C(27);a.bm=(-1);}
function E7(a,b){var c,d,e,f,g,h,i,j;if(b===null)return GJ(a.bm,a.br,a.u,a.bL,a.w,U(C6,0));a:{c=Z(b);d=U(C6,c);if(c>0){e=d.data;f=Bi(b,0);e[0]=Id(GH(f),ED(a.u,f),a.w);g=1;while(true){if(g>=Z(b))break a;h=Bi(b,g);i=ED(a.u,f);j=a.u;c=D8(f,68);if(!c)j=j+(-1)|0;f=D8(f,88);if(!f)j=j+1|0;a.u=D2(j);a.w=Bw(a.w,f&&c?(h==68?BS(i,E((-8),(-4))):h!=88?BS(i,E((-2),(-4))):BS(i,E((-6),(-6)))):BS(i,E(2,4)));e[g]=Id(GH(h),ED(a.u,h),a.w);g=g+1|0;f=h;}}}return GJ(a.bm,a.br,a.u,a.bL,a.w,d);}
function Ch(){S.call(this);this.bv=null;}
var JJ=null;var JX=null;function D9(){D9=N(Ch);Hq();}
function CS(a,b){var c,d,e,f,g,h,i,j,k;c=a.bv;d=c.g;if(b<d)return F(c,b);c=F(c,d-1|0);e=b+1|0;while(d<e){f=new CY;f.b$=c;g=c.L+1|0;f.L=g;b=g-1|0;h=c.bf;Cx();c=(Bq(JI,b)).t;i=(Bq(JI,b)).z;f.bf=BN(BN(BN(C(29),C(23),c),C(24),i),C(30),h);b=f.L;f.bw=(Bq(JI,b)).t;b=f.L;j=(Bq(JI,b)).t;k=(Bq(JI,b)).z;c=X();L(L(L(c,j),k),j);f.bn=R(c);G(a.bv,f);d=d+1|0;c=f;}return c;}
function Hq(){var b,c,d,e;b=new Ch;D9();Bm(b,C(26),0);c=I();b.bv=c;d=new CY;d.L=0;d.bf=C(27);d.bw=C(27);d.bn=C(27);d.b$=null;G(c,d);JJ=b;e=U(Ch,1);e.data[0]=b;JX=e;}
function B8(){var a=this;S.call(a);a.Y=null;a.N=null;}
var Jr=null;var JY=null;function G_(){G_=N(B8);Hf();}
function DL(a,b,c){return F(a.N,c-20|0);}
function Hf(){var b,c,d,e,f,g,h,i,j;b=new B8;G_();Bm(b,C(26),0);c=I();b.Y=c;d=HF();e=d.f;f=Bc(20);Bu();Bd(e,f,Cm(Jo,20));Bd(d.f,Bc(21),Cm(Jo,21));Bd(d.f,Bc(22),Cm(Jo,22));g=d.f;e=Bc(23);Bn();Bd(g,e,B1(Jp,23));Bd(d.f,Bc(24),B1(Jp,24));g=d.f;e=Bc(25);Cf();Bd(g,e,Ck(Jq,25));Bd(d.f,Bc(26),Ck(Jq,26));G(c,d);b.N=I();c=I();h=0;while(h<6){G(c,Gg(1,20,h,F(Go(),h),Bo(F(Go(),h)),null));h=h+1|0;}G(b.N,c);c=I();h=0;while(h<6){G(c,Gg(1,21,h,F(Gq(),h),Bo(F(Gq(),h)),null));h=h+1|0;}G(b.N,c);d=I();i=0;while(i<6){G(d,Gg(1,21,
i,F(Gd(),i),Bo(F(Gd(),i)),null));i=i+1|0;}G(b.N,d);Jr=b;j=U(B8,1);j.data[0]=b;JY=j;}
function BX(){S.call(this);this.C=null;}
var Jo=null;var JZ=null;function Bu(){Bu=N(BX);H2();}
function Cp(a,b,c){return F(F(a.C,b-20|0),c);}
function Bp(a,b,c,d){if(b!=20&&b!=21&&b!=22)return B4(20,c,d);return B4(b,c,d);}
function Cm(a,b){return F(a.C,b-20|0);}
function H2(){var b,c,d,e,f,g,h;b=new BX;Bu();Bm(b,C(26),0);b.C=I();c=I();d=0;while(d<6){e=new Be;BG();Bx(e,20,d,F(J0,d),Bo(F(J0,d)),null);G(c,e);d=d+1|0;}G(b.C,c);c=I();d=0;while(d<6){e=new Be;BG();Bx(e,21,d,F(J1,d),Bo(F(J1,d)),null);G(c,e);d=d+1|0;}G(b.C,c);e=I();f=0;while(f<6){g=new Be;BG();Bx(g,22,f,F(J2,f),Bo(F(J2,f)),null);G(e,g);f=f+1|0;}G(b.C,e);Jo=b;h=U(BX,1);h.data[0]=b;JZ=h;}
var CJ=D(0);
var Fh=D(0);
function Be(){var a=this;B.call(a);a.bD=0;a.bV=0;a.Z=null;a.dv=null;a.b8=null;}
var J3=null;var J0=null;var J4=null;var J1=null;var J5=null;var J2=null;function BG(){BG=N(Be);Ii();}
function J6(a,b,c,d,e){var f=new Be();Bx(f,a,b,c,d,e);return f;}
function Bo(b){var c,d,e;BG();if(b.g?0:1)return null;c=(F(b,0)).x;if(c===null)c=null;d=1;e=null;while(d<b.g){if((F(b,d)).x!==null)F(b,d);d=d+1|0;c=e;}return c;}
function Bx(a,b,c,d,e,f){BG();a.bD=b;a.bV=c;a.Z=d;a.b8=e;a.dv=f;}
function G8(a){return a.bV;}
function G4(a){return a.b8;}
function GZ(a){return a.bD;}
function CL(a,b){var c,d,e,f,g,h,i;c=a.Z.g;d=U(Dj,c);e=d.data;f=0;while(f<c){g=F(a.Z,f);h=De(g);i=Bw(g.m,b);e[f]=GN(D6(Dm(g)),h,i);f=f+1|0;}i=new C5;c=a.bD;h=a.bV;b=Js;Es(i,c,h,h,b,b,d);return i;}
function B4(b,c,d){var e,f;BG();if(b<23){e=new Cu;Bu();Dv(e,Cp(Jo,b,c),d);return e;}if(b>=25){f=new Cu;Cf();Dv(f,C_(Jq,b,c),d);return f;}e=new Cu;Bn();Dv(e,CO(Jp,b,c),d);return e;}
function GR(a,b){return CL(a,b);}
function Ii(){var b,c,d,e,f;b=U(BZ,2);c=b.data;BB();c[0]=BW(J7,1,0,Js);c[1]=BW(J7,1,3,E((-8),2));J3=B3(b);d=new DQ;BO(d);e=0;while(e<6){f=Js;BG();G(d,Bs(e,f,J3));e=e+1|0;}J0=d;J4=B3(Ey(BZ,[BW(J7,1,1,Js),BW(J7,1,3,E((-2),2)),BW(J7,1,5,E((-4),(-2)))]));d=new DR;BO(d);e=0;while(e<6){f=Js;BG();G(d,Bs(e,f,J4));e=e+1|0;}J1=d;J5=B3(U(BZ,0));d=new DP;BO(d);e=0;while(e<6){f=Js;BG();G(d,Bs(e,f,J5));e=e+1|0;}J2=d;}
function B5(){S.call(this);this.F=null;}
var Jp=null;var J8=null;function Bn(){Bn=N(B5);Hn();}
function CO(a,b,c){if(b<23){Bu();return Cp(Jo,b,c);}if(b>=25){Cf();return C_(Jq,b,c);}return F(F(a.F,b-23|0),c);}
function Bb(a,b,c,d){if(b!=20&&b!=21&&b!=22){if(b!=23&&b!=24)return B4(b,c,d);return B4(b,c,d);}return B4(b,c,d);}
function B1(a,b){if(b<23){Bu();return Cm(Jo,b);}if(b>=25){Cf();return Ck(Jq,b);}return F(a.F,b-23|0);}
function Hn(){var b,c,d,e,f,g,h;b=new B5;Bn();Bm(b,C(26),0);b.F=I();c=I();d=0;while(d<6){e=new Dx;Bx(e,23,d,F(Gm(),d),Bo(F(Gm(),d)),null);G(c,e);d=d+1|0;}G(b.F,c);f=I();g=0;while(g<6){e=new Dx;Bx(e,24,g,F(F_(),g),Bo(F(F_(),g)),null);G(f,e);g=g+1|0;}G(b.F,f);Jp=b;h=U(B5,1);h.data[0]=b;J8=h;}
var Dx=D(Be);
function Gm(){var b,c,d;b=I();c=I();Bu();H(c,(Bp(Jo,20,0,Js)).b);H(c,(Bp(Jo,20,2,E(16,8))).b);H(c,(Bp(Jo,20,4,E(8,16))).b);BB();H(c,T(J7,P(W(10,1,4,Js))));H(c,T(J7,P(W(10,1,0,E(16,8)))));H(c,T(J7,P(W(10,1,2,E(8,16)))));H(c,(Bp(Jo,21,0,E(10,8))).b);G(b,c);d=1;while(d<6){G(b,Bs(d,Js,c));d=d+1|0;}return b;}
function H4(){var b;b=I();Bu();H(b,(Bp(Jo,20,3,E(0,0))).b);H(b,(Bp(Jo,20,5,E(30,(-12)))).b);H(b,(Bp(Jo,20,1,E(42,30))).b);BB();H(b,T(J7,P(W(10,1,4,E(8,(-2))))));H(b,T(J7,P(W(10,1,0,E(32,(-2))))));H(b,T(J7,P(W(10,1,2,E(32,22)))));H(b,(Bp(Jo,21,0,E(18,6))).b);H(b,(Bp(Jo,21,0,E(26,(-2)))).b);H(b,(Bp(Jo,21,0,E(34,14))).b);H(b,T(J7,P(W(10,1,0,E(24,6)))));H(b,T(J7,P(W(10,1,2,E(24,6)))));H(b,T(J7,P(W(10,1,4,E(24,6)))));return b;}
function F_(){var b,c,d;b=I();c=H4();G(b,c);d=1;while(d<6){G(b,Bs(d,Js,c));d=d+1|0;}return b;}
function Cb(){S.call(this);this.P=null;}
var Jq=null;var J9=null;function Cf(){Cf=N(Cb);G1();}
function C_(a,b,c){if(b<23){Bu();return Cp(Jo,b,c);}if(b<25){Bn();return CO(Jp,b,c);}return F(F(a.P,b-25|0),c);}
function Ck(a,b){if(b<23){Bu();return Cm(Jo,b);}if(b<25){Bn();return B1(Jp,b);}return F(a.P,b-25|0);}
function G1(){var b,c,d,e,f,g,h,i;b=new Cb;Cf();Bm(b,C(26),0);b.P=I();c=I();d=0;while(d<6){e=new Dw;Bx(e,25,d,F(FA(),d),Bo(F(FA(),d)),null);G(c,e);d=d+1|0;}f=I();g=0;while(g<6){h=new Dw;Bx(h,26,g,F(FW(),g),Bo(F(FW(),g)),null);G(f,h);g=g+1|0;}G(b.P,c);G(b.P,f);Jq=b;i=U(Cb,1);i.data[0]=b;J9=i;}
var Dw=D(Be);
function FA(){var b,c,d;b=I();c=I();Bn();H(c,(Bb(Jp,23,0,Js)).b);H(c,(Bb(Jp,24,1,E((-8),8))).b);H(c,(Bb(Jp,24,0,E(10,56))).b);H(c,(Bb(Jp,23,1,E(36,78))).b);BB();H(c,T(J7,P(W(11,1,5,E(18,24)))));H(c,T(J7,P(W(11,1,4,E(26,46)))));H(c,T(J7,P(W(11,1,1,E(18,48)))));H(c,T(J7,P(W(11,1,2,E(26,70)))));H(c,(Bb(Jp,20,0,E(26,46))).b);G(b,c);d=1;while(d<6){G(b,Bs(d,Js,c));d=d+1|0;}return b;}
function FW(){var b,c,d;b=I();c=I();Bn();H(c,(Bb(Jp,24,0,Js)).b);H(c,(Bb(Jp,23,1,E(0,(-24)))).b);H(c,(Bb(Jp,23,1,E(46,(-4)))).b);H(c,(Bb(Jp,23,1,E(26,22))).b);BB();H(c,T(J7,P(W(11,1,0,E(40,14)))));H(c,T(J7,P(W(11,1,2,E(16,14)))));H(c,T(J7,P(W(11,1,4,E(16,(-10))))));G(b,c);d=1;while(d<6){G(b,Bs(d,Js,c));d=d+1|0;}return b;}
var EZ=D(0);
var Ed=D(0);
var EQ=D(0);
var Ca=D();
function C7(){Ca.call(this);this.c8=null;}
function Ei(){var a=this;C7.call(a);a.dZ=0;a.bJ=0;a.bg=null;a.c9=null;a.cY=null;}
function En(a,b,c,d){var e,$$je;e=a.c8;if(e===null)a.bJ=1;if(!(a.bJ?0:1))return;a:{try{Gl(e,b,c,d);break a;}catch($$e){$$je=H0($$e);if($$je instanceof EL){}else{throw $$e;}}a.bJ=1;}}
function By(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;Bl(Ba(a.bg,b),10);b=a.bg;c=b.h;d=a.c9;if(c>d.data.length)d=BE(c);e=0;f=0;if(e>c){b=new Bf;V(b,C(31));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.i.data;j=e+1|0;g[f]=i[e];f=h;e=j;}i=d.data;e=c-0|0;k=new EE;j=i.length;h=0+e|0;D7(k,j);k.l=0;k.s=h;k.cg=0;k.d6=0;k.c3=d;d=E2(BR(16,BP(e,1024)));e=d.data.length;b=new Ew;h=0+e|0;D7(b,e);HP();b.ec=J$;b.cN=0;b.cy=d;b.l=0;b.s=h;b.dh=0;b.ch=0;l=a.cY;m=new Ff;i=E2(1);g=i.data;g[0]=63;Hx();n=J_;m.bM=n;m.bO=n;f=g.length;if(f&&f>=
m.b2){m.dy=l;m.cx=i.c1();m.dJ=2.0;m.b2=4.0;m.cf=BE(512);m.cG=E2(512);l=Ka;if(l===null){l=new Bv;V(l,C(32));J(l);}m.bM=l;m.bO=l;while(m.bd!=3){m.bd=2;a:{while(true){try{l=F1(m,k,b);}catch($$e){$$je=H0($$e);if($$je instanceof O){b=$$je;l=new Ez;FS(l,b);J(l);}else{throw $$e;}}if(l.J?0:1){e=BD(k);if(e<=0)break a;l=Dd(e);}else if(C9(l))break;n=!Eu(l)?m.bM:m.bO;b:{if(n!==Ka){if(n===Kb)break b;else break a;}e=BD(b);i=m.cx;c=i.data.length;if(e<c){l=Kc;break a;}Ex(b,i,0,c);}c=k.l;if(!Gu(l)){b=new Cz;Q(b);J(b);}DN(k,
c+l.cM|0);}}e=C9(l);En(a,d,0,b.l);EB(b);if(!e){while(true){e=m.bd;if(e!=2&&e!=4)break;l=Kd;if(l===l)m.bd=3;f=C9(l);En(a,d,0,b.l);EB(b);if(!f){a.bg.h=0;return;}}b=new C2;Q(b);J(b);}}b=new C2;Q(b);J(b);}J(Is(C(33)));}
function CN(){Ca.call(this);this.dm=null;}
var Dk=D(CN);
var JL=null;function Gl(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Gk(){var b;b=new Dk;b.dm=E2(1);JL=b;}
var E1=D(0);
function C3(){var a=this;B.call(a);a.de=null;a.dt=null;}
function Gz(b){var c,d;if(ET(b))J(FF(b));if(!GA(Bi(b,0)))J(FF(b));c=1;while(c<Z(b)){a:{d=Bi(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(GA(d))break a;else J(FF(b));}}c=c+1|0;}}
function GA(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var DG=D(C3);
var JM=null;function G5(){G5=N(DG);GS();}
function GS(){var b,c,d,e,f;b=new DG;G5();c=U(BM,0);d=c.data;Gz(C(34));e=d.length;f=0;while(f<e){Gz(d[f]);f=f+1|0;}b.de=C(34);b.dt=c.c1();JM=b;}
var D_=D(0);
var Df=D(0);
var CP=D();
function H(a,b){var c,d;c=0;d=Ct(b);while(Cy(d)){if(!G(a,CB(d)))continue;c=1;}return c;}
var E5=D(0);
var D1=D(0);
function B9(){CP.call(this);this.V=0;}
function Ct(a){var b;b=new Ep;b.cI=a;b.cs=a.V;b.cv=a.cw();b.cd=(-1);return b;}
var Cl=D(0);
var Dn=D(0);
function Bh(){var a=this;B9.call(a);a.E=null;a.g=0;}
function I(){var a=new Bh();BO(a);return a;}
function BO(a){a.E=U(B,10);}
function FL(a,b){var c,d,e,f,g;c=a.E.data.length;if(c<b){d=c>=1073741823?2147483647:BR(b,BR(c*2|0,5));e=a.E;f=CV(Di(e));if(f===null){f=new Cq;Q(f);J(f);}if(f===M($rt_voidcls())){f=new Bv;Q(f);J(f);}if(d<0){f=new Fj;Q(f);J(f);}e=e.data;g=HD(f.I,d);b=BP(d,e.length);d=0;while(d<b){g.data[d]=e[d];d=d+1|0;}a.E=g;}}
function F(a,b){var c;if(b>=0&&b<a.g)return a.E.data[b];c=new Bf;Q(c);J(c);}
function Hv(a){return a.g;}
function G(a,b){var c,d;FL(a,a.g+1|0);c=a.E.data;d=a.g;a.g=d+1|0;c[d]=b;a.V=a.V+1|0;return 1;}
function DB(){var a=this;B.call(a);a.bX=0;a.t=null;a.z=null;a.cP=null;}
var E3=D(0);
function CY(){var a=this;B.call(a);a.L=0;a.bf=null;a.bw=null;a.bn=null;a.b$=null;}
function Fm(){var a=this;B.call(a);a.b3=0;a.f=null;a.dE=null;}
function HF(){var a=new Fm();G6(a);return a;}
function G6(a){var b,c,d;b=new ES;c=F8(7);b.B=0;b.p=U(Cw,c);b.c2=0.75;EV(b);d=null;a.b3=0;a.f=b;a.dE=d;}
function ER(a,b,c){var d,e,f,g,h,i;d=BJ();e=a.f.B;f=a.b3;g=X();Y(Bl(Y(Bl(Y(Bl(Y(L(g,C(35)),b),32),c),32),e),32),f);By(d,R(g));d=a.f;h=Bc(b);if(h===null)d=E$(d);else{i=DY(h);d=Ea(d,h,i&(d.p.data.length-1|0),i);}return F(d===null?null:d.X,c);}
function FN(){var a=this;B.call(a);a.dG=0;a.cn=0;a.cc=0;a.bz=null;a.d_=null;a.dY=null;a.dS=null;}
function Gg(a,b,c,d,e,f){var g=new FN();HC(g,a,b,c,d,e,f);return g;}
function Go(){var b,c,d;b=I();c=I();Bn();H(c,(Bb(Jp,25,0,Js)).b);H(c,(Bb(Jp,26,0,E(30,30))).b);H(c,(Bb(Jp,26,1,E((-28),34))).b);BB();H(c,T(J7,P(W(12,1,0,E(50,70)))));H(c,T(J7,P(W(12,1,3,E((-6),24)))));G(b,c);d=1;while(d<6){G(b,Bs(d,Js,c));d=d+1|0;}return b;}
function Gq(){var b,c,d;b=I();c=I();Bn();H(c,(Bb(Jp,23,0,Js)).b);H(c,(Bb(Jp,25,5,E((-52),4))).b);H(c,(Bb(Jp,25,3,E(64,68))).b);H(c,(Bb(Jp,25,1,E(12,(-48)))).b);BB();H(c,T(J7,P(W(12,1,1,E((-8),2)))));H(c,T(J7,P(W(12,1,3,E(14,(-2))))));H(c,T(J7,P(W(121,1,5,E(18,24)))));G(b,c);d=1;while(d<6){G(b,Bs(d,Js,c));d=d+1|0;}return b;}
function Gd(){var b,c,d;b=I();c=I();Bn();H(c,(Bb(Jp,26,0,Js)).b);G(b,c);d=1;while(d<6){G(b,Bs(d,Js,c));d=d+1|0;}return b;}
function HC(a,b,c,d,e,f,g){a.dG=b;a.cn=c;a.cc=d;a.bz=e;a.dS=f;a.dY=g;a.d_=I();}
function Ij(a,b){var c,d,e,f,g,h,i;c=a.bz.g;d=U(Dj,c);e=d.data;f=0;while(f<c){g=F(a.bz,f);h=De(g);i=Bw(g.m,b);e[f]=GN(D6(Dm(g)),h,i);f=f+1|0;}i=new C5;c=a.cn;h=a.cc;b=Js;Es(i,c,h,h,b,b,d);return i;}
var CQ=D(0);
function D6(b){if(BH(C(36),b))return 0;if(BH(C(37),b))return 1;if(BH(C(38),b))return 3;By(BJ(),C(39));return 3;}
var CZ=D(0);
var BZ=D(0);
function Bs(b,c,d){var e,f,g,h;e=I();f=Ct(d);while(Cy(f)){g=CB(f);h=Bw(BS(b,D0(g.m,c)),c);BB();G(e,BW(J7,D6(Dm(g)),(De(g)+b|0)%6|0,h));}return e;}
var B_=D(S);
var J7=null;var Ke=null;function BB(){BB=N(B_);HE();}
function T(a,b){var c,d,e,f,g,h;c=b.bY.data;d=I();e=c.length;f=0;while(f<e){g=c[f];h=g.bR;if(!h)G(d,Ha(g.H,g.S));else if(h==1)G(d,HU(g.H,g.S));else if(h==3)G(d,Gt(g.H,g.S));f=f+1|0;}return d;}
function BW(a,b,c,d){b=b%6|0;c=c%6|0;if(!b)return Ha(c,d);if(b==1)return HU(c,d);if(b!=3)return Gt(c,d);return Gt(c,d);}
function HE(){var b,c;b=new B_;BB();Bm(b,C(26),0);J7=b;c=U(B_,1);c.data[0]=b;Ke=c;}
var F0=D();
function B3(b){var c,d;if(b===null){c=new Cq;V(c,C(27));J(c);}d=new Ee;d.bN=b;return d;}
var DQ=D(Bh);
var DR=D(Bh);
var DP=D(Bh);
var F5=D();
var FC=D();
function Ee(){B9.call(this);this.bN=null;}
function GI(a,b){return a.bN.data[b];}
function Ho(a){return a.bN.data.length;}
var D3=D(0);
var Ds=D();
function ES(){var a=this;Ds.call(a);a.B=0;a.p=null;a.bj=0;a.c2=0.0;a.bI=0;}
function F8(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function EV(a){a.bI=a.p.data.length*a.c2|0;}
function Ea(a,b,c,d){var e,f;e=a.p.data[c];while(e!==null){if(e.bu==d){f=e.bU;if(b!==f&&!(b===f?1:f instanceof BY&&f.bi==b.bi?1:0)?0:1)break;}e=e.Q;}return e;}
function E$(a){var b;b=a.p.data[0];while(b!==null&&b.bU!==null){b=b.Q;}return b;}
function Bd(a,b,c){var d,e,f;if(b===null){d=E$(a);if(d===null){a.bj=a.bj+1|0;d=EP(a,null,0,0);e=a.B+1|0;a.B=e;if(e>a.bI)E4(a);}}else{e=DY(b);f=e&(a.p.data.length-1|0);d=Ea(a,b,f,e);if(d===null){a.bj=a.bj+1|0;d=EP(a,b,f,e);e=a.B+1|0;a.B=e;if(e>a.bI)E4(a);}}b=d.X;d.X=c;return b;}
function EP(a,b,c,d){var e,f,g;e=new Cw;f=null;e.bU=b;e.X=f;e.bu=d;g=a.p.data;e.Q=g[c];g[c]=e;return e;}
function E4(a){var b,c,d,e,f,g,h,i;b=a.p.data.length;b=F8(!b?1:b<<1);c=U(Cw,b);d=c.data;e=0;f=b-1|0;while(true){g=a.p.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.bu&f;i=h.Q;h.Q=d[b];d[b]=h;h=i;}e=e+1|0;}a.p=c;EV(a);}
function Du(){B.call(this);this.cl=null;}
var Kf=null;function EI(){EI=N(Du);If();}
function BS(b,c){var d;EI();switch(b%6|0){case 0:break;case 1:b=c.j;return E(b-c.k|0,b);case 2:d=c.k;return E( -d|0,c.j-d|0);case 3:return BU((-1)*c.j|0,(-1)*c.k|0);case 4:b= -c.j|0;return E(b+c.k|0,b);default:b=c.k;return E(b,b-c.j|0);}return c;}
function Dg(b,c,d){var e;EI();e=I();d=Ct(d);while(Cy(d)){G(e,Bw(BS(b,D0(CB(d),c)),c));}return e;}
function If(){var b,c;b=new Du;HK();c=Kg;EI();if(c!==null)b.cl=c;else{By(BJ(),C(40));b.cl=Kg;}Kf=b;}
function GE(){Bv.call(this);this.dN=null;}
function FF(a){var b=new GE();G7(b,a);return b;}
function G7(a,b){Q(a);a.dN=b;}
var DU=D(BK);
function CR(){var a=this;B.call(a);a.dg=0;a.cS=null;}
var Kg=null;function HK(){HK=N(CR);Ib();}
function Ib(){var b,c;b=new CR;c=Js;HK();b.dg=0;if(c!==null)b.cS=c;else{By(BJ(),C(41));b.cS=Js;}Kg=b;}
var E9=D(0);
function Ep(){var a=this;B.call(a);a.bC=0;a.cs=0;a.cv=0;a.cd=0;a.cI=null;}
function Cy(a){return a.bC>=a.cv?0:1;}
function CB(a){var b,c,d;b=a.cs;c=a.cI;if(b<c.V){c=new Eg;Q(c);J(c);}d=a.bC;a.cd=d;a.bC=d+1|0;return c.bx(d);}
var Cr=D(0);
function BF(){var a=this;B.call(a);a.n=null;a.m=null;a.x=null;}
function CG(a){return null;}
function De(a){return a.n.bW;}
function Ht(a){return a.x;}
function Dm(a){return a.n.bc();}
function HO(a){return a.m;}
var DX=D(BF);
function Ha(a,b){var c=new DX();Hi(c,a,b);return c;}
function Hi(a,b,c){var d;Hm();d=Kh;if(b<0)b= -b|0;b=b%6|0;a.n=F(d.bP,b);a.m=c;a.x=CG(a);}
function GX(a,b){var c,d;c=new DX;d=a.n;b=Bw(a.m,b);c.n=d;c.m=b;return c;}
var EM=D(BF);
function HU(a,b){var c=new EM();GK(c,a,b);return c;}
function GK(a,b,c){var d;Im();d=Ki;if(b<0)b= -b|0;b=b%6|0;a.n=F(d.bE,b);a.m=c;a.x=CG(a);}
function Hu(a,b){var c,d;c=new EM;d=a.n;b=Bw(a.m,b);c.n=d;c.m=b;return c;}
var Fb=D(BF);
function Gt(a,b){var c=new Fb();Ic(c,a,b);return c;}
function Ic(a,b,c){var d;Hj();d=Kj;if(b<0)b= -b|0;b=b%6|0;a.n=F(d.bQ,b);a.m=c;a.x=CG(a);}
function HN(a,b){var c,d;c=new Fb;d=a.n;b=Bw(a.m,b);c.n=d;c.m=b;c.x=CG(c);return c;}
var DJ=D(0);
function FY(){var a=this;B.call(a);a.dI=0;a.d9=0;a.dB=null;a.d3=null;a.bY=null;a.eb=0;}
function GJ(a,b,c,d,e,f){var g=new FY();HG(g,a,b,c,d,e,f);return g;}
function HG(a,b,c,d,e,f,g){a.eb=b;a.dI=c;a.d9=d;a.dB=e;a.d3=f;a.bY=g;}
function Hr(a){var b,c,d,e,f,g;b=X();c=a.bY.data;d=c.length;e=0;while(e<d){f=c[e];g=X();Ba(g,CI(f.bR));Ba(g,C(42));Ba(g,CI(f.H));Ba(g,C(42));Ba(g,E0(f.S));Ba(g,C(42));Ba(g,C(43));Ba(b,R(g));e=e+1|0;}return R(b);}
function C6(){var a=this;B.call(a);a.bR=0;a.H=0;a.S=null;}
function Id(a,b,c){var d=new C6();GY(d,a,b,c);return d;}
function GH(b){if(b!=68&&b!=88)return 1;return 3;}
function ED(b,c){if(c==88)b=b+5|0;if(c==68)b=b+3|0;return D2(b);}
function GY(a,b,c,d){a.bR=b;a.H=c;a.S=d;}
var DS=D(0);
function Dr(){var a=this;B.call(a);a.bU=null;a.X=null;}
function Cw(){var a=this;Dr.call(a);a.bu=0;a.Q=null;}
function Cd(){S.call(this);this.bP=null;}
var Kh=null;var Kk=null;function Hm(){Hm=N(Cd);Ig();}
function Ig(){var b,c,d,e,f,g,h;b=new Cd;Hm();Bm(b,C(26),0);b.bP=I();c=0;while(c<(C4()).g){d=CU(F(C4(),c));e=Kl;e.D=1;e.A=F(C4(),c);e=DF(e);f=b.bP;g=new Cs;Da(g,c,e,d);G(f,g);c=c+1|0;}Kh=b;h=U(Cd,1);h.data[0]=b;Kk=h;}
function B$(){S.call(this);this.bE=null;}
var Ki=null;var Km=null;function Im(){Im=N(B$);GP();}
function GP(){var b,c,d,e,f,g,h;b=new B$;Im();Bm(b,C(26),0);b.bE=I();c=0;while(c<(Dl()).g){d=CU(F(Dl(),c));e=Kl;e.D=1;e.A=F(Dl(),c);e=DF(e);f=b.bE;g=new CA;Da(g,c,e,d);G(f,g);c=c+1|0;}Ki=b;h=U(B$,1);h.data[0]=b;Km=h;}
function B0(){S.call(this);this.bQ=null;}
var Kj=null;var Kn=null;function Hj(){Hj=N(B0);H3();}
function H3(){var b,c,d,e,f,g,h;b=new B0;Hj();Bm(b,C(26),0);b.bQ=I();c=0;while(c<(C$()).g){d=CU(F(C$(),c));e=Kl;e.D=1;e.A=F(C$(),c);e=DF(e);f=b.bQ;g=new CK;Da(g,c,e,d);G(f,g);c=c+1|0;}Kj=b;h=U(B0,1);h.data[0]=b;Kn=h;}
var Ek=D(0);
var Ej=D(0);
function Cu(){var a=this;B.call(a);a.dU=null;a.dM=null;a.b=null;a.d4=null;}
function Ko(a,b){var c=new Cu();Dv(c,a,b);return c;}
function Dv(a,b,c){var d;a.dU=b;a.dM=c;EI();a.d4=null;a.b=I();b=Ct(b.Z);while(Cy(b)){d=CB(b);G(a.b,d.bl(c));}}
function B7(){var a=this;B.call(a);a.cE=0;a.l=0;a.s=0;a.bb=0;}
function D7(a,b){a.bb=(-1);a.cE=b;a.s=b;}
function BD(a){return a.s-a.l|0;}
function BQ(a){return a.l>=a.s?0:1;}
var Fd=D(0);
var C0=D(B7);
function DN(a,b){var c,d,e;if(b>=0&&b<=a.s){a.l=b;if(b<a.bb)a.bb=0;return a;}c=new Bv;d=a.s;e=X();Bl(Y(L(Y(L(e,C(44)),b),C(45)),d),93);V(c,R(e));J(c);}
var F7=D();
function BP(b,c){if(b<c)c=b;return c;}
function BR(b,c){if(b>c)c=b;return c;}
function Dy(){var a=this;B7.call(a);a.cN=0;a.cy=null;a.ec=null;}
function Ex(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.ch){e=new E6;Q(e);J(e);}if(BD(a)<d){e=new Ev;Q(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bf;j=X();Y(L(Y(L(j,C(46)),h),C(47)),g);V(i,R(j));J(i);}if(d<0){e=new Bf;i=X();L(Y(L(i,C(48)),d),C(49));V(e,R(i));J(e);}h=a.l;k=h+a.cN|0;l=0;while(l<d){b=a.cy.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.l=h+d|0;return a;}}b=b.data;e=new Bf;d=b.length;i=X();Bl(Y(L(Y(L(i,C(50)),c),C(45)),d),41);V(e,R(i));J(e);}
function EB(a){a.l=0;a.s=a.cE;a.bb=(-1);return a;}
function Cn(){B.call(this);this.dq=null;}
var Kb=null;var Ka=null;var J_=null;function Hx(){Hx=N(Cn);GQ();}
function F6(a){var b=new Cn();Gx(b,a);return b;}
function Gx(a,b){Hx();a.dq=b;}
function GQ(){Kb=F6(C(51));Ka=F6(C(52));J_=F6(C(53));}
var CT=D(C0);
function EE(){var a=this;CT.call(a);a.d6=0;a.cg=0;a.c3=null;}
function CM(){var a=this;B.call(a);a.dy=null;a.cx=null;a.dJ=0.0;a.b2=0.0;a.bM=null;a.bO=null;a.bd=0;}
function CX(){var a=this;B.call(a);a.J=0;a.cM=0;}
var Kd=null;var Kc=null;function F9(a,b){var c=new CX();Gy(c,a,b);return c;}
function Gy(a,b,c){a.J=b;a.cM=c;}
function C9(a){return a.J!=1?0:1;}
function Gu(a){var b;b=a.J!=2?0:1;return !b&&!Eu(a)?0:1;}
function Eu(a){return a.J!=3?0:1;}
function Dd(b){return F9(2,b);}
function Fo(){Kd=F9(0,0);Kc=F9(1,0);}
function Ew(){var a=this;Dy.call(a);a.dh=0;a.ch=0;}
function BL(){var a=this;B.call(a);a.bW=0;a.df=null;a.ce=null;}
function Da(a,b,c,d){a.bW=b;a.df=c;a.ce=d;}
function Hc(a){return a.ce;}
function Hk(a){return a.bW;}
var Cs=D(BL);
var Kp=null;var Kq=null;function Hz(){Hz=N(Cs);HX();}
function HQ(a){return C(36);}
function C4(){Hz();return Kq;}
function HX(){var b,c,d;Kp=B3(Ey(Bz,[Js,E(1,(-1)),E(0,(-2)),E(0,(-3)),E(2,(-2)),E(3,(-3)),E(4,(-2)),E(5,(-2)),E(6,0),E(5,1),E(4,2),E(2,1),E(2,2),E(1,2)]));b=new DW;BO(b);c=0;while(c<6){d=Js;Hz();G(b,Dg(c,d,Kp));c=c+1|0;}Kq=b;}
function Dz(){var a=this;B.call(a);a.dH=0;a.c5=null;}
var Kl=null;var Kr=null;function H$(a,b){var c=new Dz();Gn(c,a,b);return c;}
function Gn(a,b,c){a.dH=b;if(c!==null)a.c5=c;else a.c5=I();}
function Fu(){var b;b=new EH;b.D=0;b.A=I();Kl=b;Kr=H$(0,I());}
var CA=D(BL);
var Ks=null;var Kt=null;function G2(){G2=N(CA);HB();}
function HY(a){return C(37);}
function Dl(){G2();return Kt;}
function HB(){var b,c,d;Ks=B3(Ey(Bz,[Js,E(1,2),E(0,2),E((-1),1),E((-2),2),E((-4),1),E((-6),0),E((-7),(-2)),E((-6),(-2)),E((-6),(-3)),E((-4),(-2)),E((-3),(-3)),E((-2),(-2)),E((-2),(-1))]));b=new Eb;BO(b);c=0;while(c<6){d=Js;G2();G(b,Dg(c,d,Ks));c=c+1|0;}Kt=b;}
var CK=D(BL);
var Ku=null;var Kv=null;function HJ(){HJ=N(CK);GM();}
function Ia(a){return C(38);}
function C$(){HJ();return Kv;}
function GM(){var b,c,d;Ku=B3(Ey(Bz,[Js,E(1,2),E(0,2),E(0,3),E((-2),2),E((-3),0),E((-4),0),E((-5),(-1)),E((-4),(-2)),E((-2),(-1)),E((-2),(-2)),E((-1),(-2)),E(0,(-2)),E(1,(-1))]));b=new Fc;BO(b);c=0;while(c<6){d=Js;HJ();G(b,Dg(c,d,Ku));c=c+1|0;}Kv=b;}
function EH(){var a=this;B.call(a);a.D=0;a.A=null;}
function DF(a){var b;b=H$(a.D,a.A);a.D=0;a.A=I();return b;}
function Dh(){B.call(this);this.dT=null;}
var J$=null;var Kw=null;function HP(){HP=N(Dh);H8();}
function GO(a){var b=new Dh();Fl(b,a);return b;}
function Fl(a,b){HP();a.dT=b;}
function H8(){J$=GO(C(54));Kw=GO(C(55));}
var DW=D(Bh);
var Eb=D(Bh);
var Fc=D(Bh);
function Dj(){var a=this;B.call(a);a.c4=0;a.ck=0;a.b1=null;}
function GN(a,b,c){var d=new Dj();G9(d,a,b,c);return d;}
function G9(a,b,c,d){a.c4=b;a.ck=c;a.b1=d;}
function C5(){var a=this;B.call(a);a.dR=0;a.c_=0;a.d$=0;a.dP=null;a.d8=null;a.cz=null;}
function Kx(a,b,c,d,e,f){var g=new C5();Es(g,a,b,c,d,e,f);return g;}
function Es(a,b,c,d,e,f,g){a.dR=b;a.c_=c;a.d$=d;a.dP=e;a.d8=f;a.cz=g;}
function H_(a){var b,c,d,e,f,g;b=X();c=a.cz.data;d=c.length;e=0;while(e<d){f=c[e];g=X();Ba(g,CI(f.c4));Ba(g,C(42));Ba(g,CI(f.ck));Ba(g,C(42));Ba(g,E0(f.b1));Ba(g,C(42));Ba(g,C(43));Ba(b,R(g));e=e+1|0;}return R(b);}
function DM(){var a=this;CM.call(a);a.cf=null;a.cG=null;}
function F1(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.cf;e=0;f=0;g=a.cG;a:{b:{while(true){if((e+32|0)>f&&BQ(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=BD(b)+j|0;h=i.length;f=BP(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new Bf;b=X();Y(L(Y(L(b,C(56)),k),C(47)),h);V(l,R(b));J(l);}if(BD(b)<e)break;if(e<0){b=new Bf;c=X();L(Y(L(c,C(48)),e),C(49));V(b,R(c));J(b);}h=b.l;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.c3.data[n+b.cg|0];m=m+1|0;j=o;n=k;}b.l=h+e|0;e=0;}if(!BQ(c))
{l=!BQ(b)&&e>=f?Kd:Kc;break a;}i=g.data;k=BP(BD(c),i.length);p=new Et;p.ca=b;p.cD=c;l=Gw(a,d,e,f,g,0,k,p);e=p.b_;j=p.cL;if(l===null){if(!BQ(b)&&e>=f)l=Kd;else if(!BQ(c)&&e>=f)l=Kc;}Ex(c,g,0,j);if(l!==null)break a;}b=new Ec;Q(b);J(b);}p=new Bf;l=X();Bl(Y(L(Y(L(l,C(50)),j),C(45)),h),41);V(p,R(l));J(p);}DN(b,b.l-(f-e|0)|0);return l;}
var Ff=D(DM);
function Gw(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(CW(h,2))break a;i=Kc;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!Eq(l)&&!Eh(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(CW(h,3))break a;i=Kc;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Eq(l))
{i=Dd(1);break a;}if(j>=d){if(BQ(h.ca))break a;i=Kd;break a;}c=j+1|0;n=k[j];if(!Eh(n)){j=c+(-2)|0;i=Dd(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(CW(h,4))break a;i=Kc;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.b_=j;h.cL=f;return i;}
var EL=D(BK);
var Eg=D(O);
var Fj=D(O);
var Fy=D();
var C2=D(O);
var Ez=D(Cc);
var Cz=D(O);
function Et(){var a=this;B.call(a);a.ca=null;a.cD=null;a.b_=0;a.cL=0;}
function CW(a,b){return BD(a.cD)<b?0:1;}
var E6=D(Cz);
var Ev=D(O);
var Ec=D(O);
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,0,Fp,0,B,[],0,3,0,0,0,D$,0,B,[],3,3,0,0,0,DV,0,B,[],3,3,0,0,0,Ef,0,B,[D$,DV],0,3,0,0,0,Gv,0,B,[],4,0,0,0,0,Gf,0,B,[],4,3,0,0,0,Cg,0,B,[],0,3,0,0,0,BK,0,Cg,[],0,3,0,0,0,O,0,BK,[],0,3,0,0,0,Gh,0,O,[],0,3,0,0,0,BC,0,B,[],3,3,0,0,0,Br,0,B,[],3,3,0,0,0,CH,0,B,[],3,3,0,0,0,BM,0,B,[BC,Br,CH],0,3,0,DI,0,Cc,0,Cg,[],0,3,0,0,0,Cj,0,Cc,[],0,3,0,0,0,F3,0,Cj,[],0,3,0,0,0,DA,0,B,[BC],1,3,0,0,0,BY,0,DA,[Br],0,3,0,0,0,C8,0,B,[BC,CH],0,0,0,0,["bK",IZ(EA),"ba",IY(R)],Dc,0,B,[],3,3,0,0,0,Fr,0,C8,
[Dc],0,3,0,0,["ba",IY(HI),"bK",IZ(H6)],B6,0,Cj,[],0,3,0,0,0,FZ,0,B6,[],0,3,0,0,0,FO,0,B6,[],0,3,0,0,0,Bk,0,B,[],3,3,0,0,0,DO,0,B,[Bk],3,3,0,0,0,DT,0,B,[DO],3,3,0,0,0,Bt,0,B,[Bk],3,3,0,0,0,FB,0,B,[DT,Bt],3,3,0,0,0,El,0,B,[],3,3,0,0,0,Bz,0,B,[Br,El],0,3,0,0,0,BV,0,B,[],3,3,0,0,0,Fq,0,B,[BV],0,3,0,0,0,Gj,0,B,[],0,3,0,0,0,FP,0,B,[BV],0,3,0,0,0,FJ,0,B,[BV],0,3,0,0,0,FE,0,B,[BV],0,3,0,0,0,EF,0,B,[],4,3,0,0,0,GF,0,B,[],4,3,0,0,0,E_,0,B,[Bt],3,3,0,0,0,EJ,0,B,[Bt],3,3,0,0,0,EC,0,B,[Bt],3,3,0,0,0,Eo,0,B,[Bt],3,3,0,0,
0,EG,0,B,[Bt],3,3,0,0,0,EU,0,B,[Bt,E_,EJ,EC,Eo,EG],3,3,0,0,0,EO,0,B,[],3,3,0,0,0,EY,0,B,[Bk],3,3,0,0,0,FQ,0,B,[Bk,EU,EO,EY],1,3,0,0,["e3",IZ(Hs),"fE",I0(GW),"e4",I0(Io),"er",I1(Hp),"eM",IZ(Hw),"eU",IY(HV),"fi",I1(GT)]]);
$rt_metadata([EN,0,B,[],3,3,0,0,0,Fi,0,B,[EN],0,3,0,0,0,Bf,0,O,[],0,3,0,0,0,FH,0,B,[],4,3,0,0,0,Cq,0,O,[],0,3,0,0,0,CF,0,O,[],0,3,0,0,0,BT,0,B,[Br],0,3,0,0,0,Bv,0,O,[],0,3,0,0,0,BI,0,Bv,[],0,3,0,0,0,BA,0,B,[],4,3,0,EK,0,Ga,0,B,[Bk],1,3,0,0,0,FK,0,B,[Bk],1,3,0,0,0,GC,0,B,[Bk],1,3,0,0,0,DE,0,B,[Bk],3,3,0,0,0,EW,0,B,[DE],0,3,0,0,["d5",IZ(HT)],F2,0,B,[Bk],1,3,0,0,0,EX,0,B,[DE],0,3,0,0,["d5",IZ(GV)],GD,0,B,[],4,0,0,0,0,Ge,0,B,[],4,3,0,0,0,E8,0,B,[],0,3,0,0,0,FX,0,B,[],4,3,0,0,0,GG,0,B,[],4,3,0,0,0,Do,0,Bf,[],0,3,
0,0,0,S,0,B,[Br,BC],1,3,0,0,0,Ci,0,S,[],12,3,0,Cx,0,GB,0,B,[BV],0,3,0,0,0,Ch,0,S,[],12,3,0,D9,0,B8,0,S,[],12,3,0,G_,0,BX,0,S,[],12,3,0,Bu,0,CJ,0,B,[],3,3,0,0,0,Fh,0,B,[CJ],3,3,0,0,0,Be,0,B,[Fh],0,3,0,BG,["b7",IZ(GR)],B5,0,S,[],12,3,0,Bn,0,Dx,0,Be,[],0,3,0,0,0,Cb,0,S,[],12,3,0,Cf,0,Dw,0,Be,[],0,3,0,0,0,EZ,0,B,[],3,3,0,0,0,Ed,0,B,[EZ],3,3,0,0,0,EQ,0,B,[],3,3,0,0,0,Ca,0,B,[Ed,EQ],1,3,0,0,0,C7,0,Ca,[],0,3,0,0,0,Ei,0,C7,[],0,3,0,0,0,CN,0,Ca,[],1,3,0,0,0,Dk,0,CN,[],0,3,0,0,0,E1,0,B,[],3,3,0,0,0,C3,0,B,[Br],1,3,0,
0,0,DG,0,C3,[],0,3,0,G5,0,D_,0,B,[],3,3,0,0,0,Df,0,B,[D_],3,3,0,0,0,CP,0,B,[Df],1,3,0,0,0]);
$rt_metadata([E5,0,B,[Df],3,3,0,0,0,D1,0,B,[E5],3,3,0,0,0,B9,0,CP,[D1],1,3,0,0,0,Cl,0,B,[],3,3,0,0,0,Dn,0,B,[],3,3,0,0,0,Bh,0,B9,[Cl,BC,Dn],0,3,0,0,["bx",IZ(F),"cw",IY(Hv)],DB,0,B,[E1],0,3,0,0,0,E3,0,B,[],3,3,0,0,0,CY,0,B,[E3],0,3,0,0,0,Fm,0,B,[],0,3,0,0,0,FN,0,B,[CJ],0,3,0,0,["b7",IZ(Ij)],CQ,0,B,[],3,3,0,0,0,CZ,0,B,[],3,3,0,0,0,BZ,0,B,[CQ,CZ],3,3,0,0,0,B_,0,S,[],12,3,0,BB,0,F0,0,B,[],0,3,0,0,0,DQ,0,Bh,[],0,0,0,0,0,DR,0,Bh,[],0,0,0,0,0,DP,0,Bh,[],0,0,0,0,0,F5,0,B,[],0,3,0,0,0,FC,0,B,[],4,3,0,0,0,Ee,0,B9,[Dn],
0,0,0,0,["bx",IZ(GI),"cw",IY(Ho)],D3,0,B,[],3,3,0,0,0,Ds,0,B,[D3],1,3,0,0,0,ES,0,Ds,[Cl,BC],0,3,0,0,0,Du,0,B,[],0,3,0,EI,0,GE,0,Bv,[],0,3,0,0,0,DU,0,BK,[],0,3,0,0,0,CR,0,B,[],0,3,0,HK,0,E9,0,B,[],3,3,0,0,0,Ep,0,B,[E9],0,0,0,0,0,Cr,0,B,[],3,3,0,0,0,BF,0,B,[BZ,Cr],1,3,0,0,0,DX,0,BF,[],0,3,0,0,["bl",IZ(GX)],EM,0,BF,[],0,3,0,0,["bl",IZ(Hu)],Fb,0,BF,[],0,3,0,0,["bl",IZ(HN)],DJ,0,B,[],3,3,0,0,0,FY,0,B,[DJ],0,3,0,0,["co",IY(Hr)],C6,0,B,[Cr],0,3,0,0,0,DS,0,B,[],3,3,0,0,0,Dr,0,B,[DS,Cl],0,0,0,0,0,Cw,0,Dr,[],0,0,0,0,
0,Cd,0,S,[],12,3,0,Hm,0,B$,0,S,[],12,3,0,Im,0,B0,0,S,[],12,3,0,Hj,0,Ek,0,B,[CJ,CZ],3,3,0,0,0,Ej,0,B,[Ek],3,3,0,0,0,Cu,0,B,[Ej],0,3,0,0,0,B7,0,B,[],1,3,0,0,0,Fd,0,B,[],3,3,0,0,0]);
$rt_metadata([C0,0,B7,[Br,Dc,CH,Fd],1,3,0,0,0,F7,0,B,[],4,3,0,0,0,Dy,0,B7,[Br],1,3,0,0,0,Cn,0,B,[],0,3,0,Hx,0,CT,0,C0,[],1,0,0,0,0,EE,0,CT,[],0,0,0,0,0,CM,0,B,[],1,3,0,0,0,CX,0,B,[],0,3,0,0,0,Ew,0,Dy,[],0,0,0,0,0,BL,0,B,[CQ],1,3,0,0,0,Cs,0,BL,[],0,3,0,Hz,["bc",IY(HQ)],Dz,0,B,[],0,3,0,0,0,CA,0,BL,[],0,3,0,G2,["bc",IY(HY)],CK,0,BL,[],0,3,0,HJ,["bc",IY(Ia)],EH,0,B,[],4,3,0,0,0,Dh,0,B,[],4,3,0,HP,0,DW,0,Bh,[],0,0,0,0,0,Eb,0,Bh,[],0,0,0,0,0,Fc,0,Bh,[],0,0,0,0,0,Dj,0,B,[Cr],0,3,0,0,0,C5,0,B,[DJ],0,3,0,0,["co",IY(H_)],DM,
0,CM,[],1,3,0,0,0,Ff,0,DM,[],0,3,0,0,0,EL,0,BK,[],0,3,0,0,0,Eg,0,O,[],0,3,0,0,0,Fj,0,O,[],0,3,0,0,0,Fy,0,B,[],4,3,0,0,0,C2,0,O,[],0,3,0,0,0,Ez,0,Cc,[],0,3,0,0,0,Cz,0,O,[],0,3,0,0,0,Et,0,B,[],0,3,0,0,0,E6,0,Cz,[],0,3,0,0,0,Ev,0,O,[],0,3,0,0,0,Ec,0,O,[],0,3,0,0,0]);
function $rt_array(cls,data){this.gs=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Error in MetaTileDescriptorSupplier ","SupertileDescriptor","SupertileDescriptor 2","[]","0]","Either src or dest is null","null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","SystemTileDescriptorSupplier called to supply","Xa","aD","object","function","string","number",
"zizizXazizaDziziz","z","i","aDzizizXa","INSTANCE","","a","ziziN","N","Index out of bounds","Action must be non-null","Replacement preconditions do not hold","UTF-8","SuperBlueprintLevel.getBlueprint ","Turtle","FTurtle","FHat","TileBlueprint.getTypeNr has invalid type","HexTransformer got data null","HexPlacementData got rotCenter null",",","\n","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT",
"BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst "]);
BM.prototype.toString=function(){return $rt_ustr(this);};
BM.prototype.valueOf=BM.prototype.toString;B.prototype.toString=function(){return $rt_ustr(HM(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(Iy);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=FQ.prototype;c.removeEventListener=c.er;c.dispatchEvent=c.eM;c.get=c.e3;c.addEventListener=c.fi;Object.defineProperty(c,"length",{get:c.eU});c=EW.prototype;c.accept=c.d5;c=EX.prototype;c.accept=c.d5;})();
}));

//# sourceMappingURL=classes.js.map