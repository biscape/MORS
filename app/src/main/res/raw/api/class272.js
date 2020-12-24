const WorldMapArea = require('./worldMapArea.js');
const LoginScreenAnimation = require('./loginScreenAnimation.js');


class class272 extends WorldMapArea {
	static obfuscatedClassName = "cd";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class272.obfuscatedClassName);
	}

	static getField4713(){
		return  super.getField(class272.obfuscatedClassName,"tj", ['int', 2077772055]);
	}
	static getField4710(){
		return new LoginScreenAnimation(super.getField(class272.obfuscatedClassName,"au", []));
	}
	getField4714(){
		return  super.getField(class272.obfuscatedClassName,"ae", []);
	}
	getField4715(){
		return  super.getField(class272.obfuscatedClassName,"ai", []);
	}
	getField4716(){
		return  super.getField(class272.obfuscatedClassName,"ak", []);
	}

	static onMethod7782(todo){
		super.onMethodExecution(class272.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod7784(todo){
		super.onMethodExecution(class272.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod7781(todo){
		super.onMethodExecution(class272.obfuscatedClassName,"gv", todo, []);
	}
}
module.exports = class272;
