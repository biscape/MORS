const Bounds = require('./bounds.js');
const AbstractArchive = require('./abstractArchive.js');
const Interceptor = require('./core/apicore.js');


class class290 extends Interceptor {
	static obfuscatedClassName = "eq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class290.obfuscatedClassName);
	}

	static getField5976(){
		return new class290(super.getField(class290.obfuscatedClassName,"ae", []));
	}
	static getField5983(){
		return new Bounds(super.getField(class290.obfuscatedClassName,"cz", []));
	}
	static getField5984(){
		return  super.getField(class290.obfuscatedClassName,"kf", ['int', 186781477]);
	}
	static getField5977(){
		return new class290(super.getField(class290.obfuscatedClassName,"ai", []));
	}
	static getSOLID(){
		return new class290(super.getField(class290.obfuscatedClassName,"ak", []));
	}
	static getField5975(){
		return new AbstractArchive(super.getField(class290.obfuscatedClassName,"ab", []));
	}
	getField5986(){
		return  super.getField(class290.obfuscatedClassName,"ah", ['int', 142873857]);
	}
	getField5987(){
		return  super.getField(class290.obfuscatedClassName,"ax", ['int', 2116682791]);
	}

	static onVmethod12178(todo){
		super.onMethodExecution(class290.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod10698(todo){
		super.onMethodExecution(class290.obfuscatedClassName,"am", todo, []);
	}
	static onMethod10699(todo){
		super.onMethodExecution(class290.obfuscatedClassName,"dg", todo, []);
	}
}
module.exports = class290;
