const PcmPlayer = require('./pcmPlayer.js');
const Interceptor = require('./core/apicore.js');


class class28 extends Interceptor {
	static obfuscatedClassName = "bo";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class28.obfuscatedClassName);
	}

	static getField494(){
		return new PcmPlayer(super.getField(class28.obfuscatedClassName,"pd", []));
	}

	static onMethod854(todo){
		super.onMethodExecution(class28.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod855(todo){
		super.onMethodExecution(class28.obfuscatedClassName,"gq", todo, []);
	}
}
module.exports = class28;
