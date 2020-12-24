const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const Interceptor = require('./core/apicore.js');


class class6 extends Interceptor {
	static obfuscatedClassName = "aj";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class6.obfuscatedClassName);
	}

	static getField51(){
		return  super.getField(class6.obfuscatedClassName,"af", []);
	}
	static getField52(){
		return  super.getField(class6.obfuscatedClassName,"al", []);
	}
	static getField53(){
		return new EvictingDualNodeHashTable(super.getField(class6.obfuscatedClassName,"aq", []));
	}
	getField57(){
		return  super.getField(class6.obfuscatedClassName,"ae", []);
	}
	getField58(){
		return  super.getField(class6.obfuscatedClassName,"ah", ['long', 5732508569861192211]);
	}
	getField61(){
		return  super.getField(class6.obfuscatedClassName,"as", ['long', 5670691871189865799]);
	}
	getField59(){
		return  super.getField(class6.obfuscatedClassName,"ai", []);
	}
	getField60(){
		return  super.getField(class6.obfuscatedClassName,"ak", []);
	}
	getField62(){
		return  super.getField(class6.obfuscatedClassName,"ax", ['int', 351804519]);
	}

	static onMethod90(todo){
		super.onMethodExecution(class6.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod92(todo){
		super.onMethodExecution(class6.obfuscatedClassName,"al", todo, []);
	}
	static onMethod74(todo){
		super.onMethodExecution(class6.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod72(todo){
		super.onMethodExecution(class6.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod75(todo){
		super.onMethodExecution(class6.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod79(todo){
		super.onMethodExecution(class6.obfuscatedClassName,"bf", todo, []);
	}
}
module.exports = class6;
