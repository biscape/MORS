const Interceptor = require('./core/apicore.js');


class ModeWhere extends Interceptor {
	static obfuscatedClassName = "lo";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ModeWhere.obfuscatedClassName);
	}

	static getField6358(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"aa", []));
	}
	static getField6360(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"ae", []));
	}
	static getField6361(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"af", []));
	}
	static getField6362(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"ah", []));
	}
	static getField6364(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"aj", []));
	}
	static getField6366(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"al", []));
	}
	static getField6367(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"am", []));
	}
	static getField6369(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"aq", []));
	}
	static getField6370(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"as", []));
	}
	static getField6363(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"ai", []));
	}
	static getField6365(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"ak", []));
	}
	static getField6371(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"ax", []));
	}
	static getField6359(){
		return new ModeWhere(super.getField(ModeWhere.obfuscatedClassName,"ab", []));
	}
	getField6373(){
		return  super.getField(ModeWhere.obfuscatedClassName,"an", ['int', 1301557313]);
	}
	getField6374(){
		return new Set(super.getField(ModeWhere.obfuscatedClassName,"ay", []));
	}

	static onVmethod12178(todo){
		super.onMethodExecution(ModeWhere.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod11610(todo){
		super.onMethodExecution(ModeWhere.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod11617(todo){
		super.onMethodExecution(ModeWhere.obfuscatedClassName,"ff", todo, []);
	}
	static onMethod11613(todo){
		super.onMethodExecution(ModeWhere.obfuscatedClassName,"ak", todo, []);
	}
	static onFindItemDefinitions(todo){
		super.onMethodExecution(ModeWhere.obfuscatedClassName,"bu", todo, []);
	}
	static onMethod11616(todo){
		super.onMethodExecution(ModeWhere.obfuscatedClassName,"df", todo, []);
	}
}
module.exports = ModeWhere;
