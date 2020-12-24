const Interceptor = require('./core/apicore.js');


class FaceNormal extends Interceptor {
	static obfuscatedClassName = "bm";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, FaceNormal.obfuscatedClassName);
	}

	getY(){
		return  super.getField(FaceNormal.obfuscatedClassName,"ae", ['int', 1015527781]);
	}
	getZ(){
		return  super.getField(FaceNormal.obfuscatedClassName,"ai", ['int', 193487211]);
	}
	getX(){
		return  super.getField(FaceNormal.obfuscatedClassName,"ak", ['int', 184882347]);
	}

	static onMethod845(todo){
		super.onMethodExecution(FaceNormal.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod847(todo){
		super.onMethodExecution(FaceNormal.obfuscatedClassName,"ao", todo, []);
	}
	static onMethod848(todo){
		super.onMethodExecution(FaceNormal.obfuscatedClassName,"ba", todo, []);
	}
}
module.exports = FaceNormal;
