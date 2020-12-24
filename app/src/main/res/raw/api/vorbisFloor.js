const Interceptor = require('./core/apicore.js');


class VorbisFloor extends Interceptor {
	static obfuscatedClassName = "gi";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, VorbisFloor.obfuscatedClassName);
	}

	static getVorbisFloor_decibelStatics(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"ae", []);
	}
	static getField2705(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"af", []);
	}
	static getField2707(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"aq", []);
	}
	static getField2706(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"ak", []);
	}
	static getField2703(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"ab", []);
	}
	getSubclassBooks(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"aa", []);
	}
	getPartitionClassList(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"ah", []);
	}
	getClassSubClasses(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"aj", []);
	}
	getClassMasterbooks(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"al", []);
	}
	getClassDimensions(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"as", []);
	}
	getField2710(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"ai", []);
	}
	getMultiplier(){
		return  super.getField(VorbisFloor.obfuscatedClassName,"ax", []);
	}

	static onVarbisFloor_sort(todo){
		super.onMethodExecution(VorbisFloor.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod4818(todo){
		super.onMethodExecution(VorbisFloor.obfuscatedClassName,"aj", todo, []);
	}
	static onReadSubmapFloor(todo){
		super.onMethodExecution(VorbisFloor.obfuscatedClassName,"as", todo, []);
	}
	static onMethod4817(todo){
		super.onMethodExecution(VorbisFloor.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod4829(todo){
		super.onMethodExecution(VorbisFloor.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod4809(todo){
		super.onMethodExecution(VorbisFloor.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod4811(todo){
		super.onMethodExecution(VorbisFloor.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = VorbisFloor;
