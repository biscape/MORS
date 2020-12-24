const WorldMap = require('./worldMap.js');
const Interceptor = require('./core/apicore.js');


class class10 extends Interceptor {
	static obfuscatedClassName = "ao";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class10.obfuscatedClassName);
	}

	static getField251(){
		return new WorldMap(super.getField(class10.obfuscatedClassName,"ru", []));
	}
	static getField245(){
		return  super.getField(class10.obfuscatedClassName,"aa", []);
	}
	getField252(){
		return  super.getField(class10.obfuscatedClassName,"ah", ['int', 867263633]);
	}
	getField253(){
		return  super.getField(class10.obfuscatedClassName,"ax", []);
	}

	static onMethod276(todo){
		super.onMethodExecution(class10.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod280(todo){
		super.onMethodExecution(class10.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod275(todo){
		super.onMethodExecution(class10.obfuscatedClassName,"fr", todo, []);
	}
}
module.exports = class10;
