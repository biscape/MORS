const Interceptor = require('./core/apicore.js');
const Archive = require('./archive.js');


class VertexNormal extends Interceptor {
	static obfuscatedClassName = "bt";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, VertexNormal.obfuscatedClassName);
	}

	static getField517(){
		return new Archive(super.getField(VertexNormal.obfuscatedClassName,"dx", []));
	}
	static getField518(){
		return  super.getField(VertexNormal.obfuscatedClassName,"fn", []);
	}
	getY(){
		return  super.getField(VertexNormal.obfuscatedClassName,"ae", []);
	}
	getZ(){
		return  super.getField(VertexNormal.obfuscatedClassName,"ai", []);
	}
	getX(){
		return  super.getField(VertexNormal.obfuscatedClassName,"ak", []);
	}
	getMagnitude(){
		return  super.getField(VertexNormal.obfuscatedClassName,"ax", ['int', 394341099]);
	}

	static onMethod881(todo){
		super.onMethodExecution(VertexNormal.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = VertexNormal;
