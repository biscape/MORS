const Bounds = require('./bounds.js');
const class61 = require('./class61.js');


class class289 extends class61 {
	static obfuscatedClassName = "ep";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class289.obfuscatedClassName);
	}

	static getField5970(){
		return new Bounds(super.getField(class289.obfuscatedClassName,"fe", []));
	}
	getField5972(){
		return  super.getField(class289.obfuscatedClassName,"ah", ['int', 1670222699]);
	}
	getField5973(){
		return  super.getField(class289.obfuscatedClassName,"aj", ['int', 1817933741]);
	}
	getField5974(){
		return  super.getField(class289.obfuscatedClassName,"as", ['int', 1933413917]);
	}

	static onMethod10693(todo){
		super.onMethodExecution(class289.obfuscatedClassName,"bw", todo, []);
	}
	static onMethod10686(todo){
		super.onMethodExecution(class289.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod10684(todo){
		super.onMethodExecution(class289.obfuscatedClassName,"ab", todo, []);
	}
}
module.exports = class289;
