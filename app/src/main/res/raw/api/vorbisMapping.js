const Interceptor = require('./core/apicore.js');


class VorbisMapping extends Interceptor {
	static obfuscatedClassName = "gn";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, VorbisMapping.obfuscatedClassName);
	}

	getMappingMux(){
		return  super.getField(VorbisMapping.obfuscatedClassName,"ae", []);
	}
	getSubmapFloor(){
		return  super.getField(VorbisMapping.obfuscatedClassName,"ai", []);
	}
	getSubmaps(){
		return  super.getField(VorbisMapping.obfuscatedClassName,"ak", []);
	}
	getSubmapResidue(){
		return  super.getField(VorbisMapping.obfuscatedClassName,"ax", []);
	}

}
module.exports = VorbisMapping;
