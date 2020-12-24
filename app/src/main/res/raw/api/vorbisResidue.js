const Interceptor = require('./core/apicore.js');


class VorbisResidue extends Interceptor {
	static obfuscatedClassName = "hf";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, VorbisResidue.obfuscatedClassName);
	}

	getBegin(){
		return  super.getField(VorbisResidue.obfuscatedClassName,"ae", []);
	}
	getClassifications(){
		return  super.getField(VorbisResidue.obfuscatedClassName,"ah", []);
	}
	getCascade(){
		return  super.getField(VorbisResidue.obfuscatedClassName,"aj", []);
	}
	getClassbook(){
		return  super.getField(VorbisResidue.obfuscatedClassName,"as", []);
	}
	getEnd(){
		return  super.getField(VorbisResidue.obfuscatedClassName,"ai", []);
	}
	getResidueType(){
		return  super.getField(VorbisResidue.obfuscatedClassName,"ak", []);
	}
	getPartitionSize(){
		return  super.getField(VorbisResidue.obfuscatedClassName,"ax", []);
	}

	static onMethod5042(todo){
		super.onMethodExecution(VorbisResidue.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = VorbisResidue;
