const Interceptor = require('./core/apicore.js');


class class87 extends Interceptor {
	static obfuscatedClassName = "gd";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class87.obfuscatedClassName);
	}

	static getField2660(){
		return new Collection(super.getField(class87.obfuscatedClassName,"ry", []));
	}
	static getMusicTrackFileId(){
		return  super.getField(class87.obfuscatedClassName,"al", ['int', 1432702841]);
	}

	static onMethod4760(todo){
		super.onMethodExecution(class87.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = class87;
