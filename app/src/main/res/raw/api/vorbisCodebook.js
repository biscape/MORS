const Interceptor = require('./core/apicore.js');


class VorbisCodebook extends Interceptor {
	static obfuscatedClassName = "gj";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, VorbisCodebook.obfuscatedClassName);
	}

	getEntries(){
		return  super.getField(VorbisCodebook.obfuscatedClassName,"ae", []);
	}
	getField2716(){
		return  super.getField(VorbisCodebook.obfuscatedClassName,"ah", []);
	}
	getKeys(){
		return  super.getField(VorbisCodebook.obfuscatedClassName,"as", []);
	}
	getLengthMap(){
		return  super.getField(VorbisCodebook.obfuscatedClassName,"ai", []);
	}
	getDimensions(){
		return  super.getField(VorbisCodebook.obfuscatedClassName,"ak", []);
	}
	getField2720(){
		return  super.getField(VorbisCodebook.obfuscatedClassName,"ax", []);
	}

	static onMethod4836(todo){
		super.onMethodExecution(VorbisCodebook.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod4838(todo){
		super.onMethodExecution(VorbisCodebook.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod4843(todo){
		super.onMethodExecution(VorbisCodebook.obfuscatedClassName,"ax", todo, []);
	}
	static onMapType1QuantValues(todo){
		super.onMethodExecution(VorbisCodebook.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = VorbisCodebook;
