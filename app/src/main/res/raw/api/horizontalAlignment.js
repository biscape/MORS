const Interceptor = require('./core/apicore.js');


class HorizontalAlignment extends Interceptor {
	static obfuscatedClassName = "dl";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, HorizontalAlignment.obfuscatedClassName);
	}

	static getHorizontalAlignment_centered(){
		return new HorizontalAlignment(super.getField(HorizontalAlignment.obfuscatedClassName,"ae", []));
	}
	static getField5922(){
		return new HorizontalAlignment(super.getField(HorizontalAlignment.obfuscatedClassName,"ai", []));
	}
	static getField5923(){
		return new HorizontalAlignment(super.getField(HorizontalAlignment.obfuscatedClassName,"ak", []));
	}
	getField5928(){
		return  super.getField(HorizontalAlignment.obfuscatedClassName,"ah", ['int', 303759621]);
	}
	getField5929(){
		return  super.getField(HorizontalAlignment.obfuscatedClassName,"ax", ['int', 472757749]);
	}

	static onVmethod12178(todo){
		super.onMethodExecution(HorizontalAlignment.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod10448(todo){
		super.onMethodExecution(HorizontalAlignment.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod10444(todo){
		super.onMethodExecution(HorizontalAlignment.obfuscatedClassName,"ab", todo, []);
	}
	static onMethod10449(todo){
		super.onMethodExecution(HorizontalAlignment.obfuscatedClassName,"db", todo, []);
	}
}
module.exports = HorizontalAlignment;
