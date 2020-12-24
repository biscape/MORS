const class384 = require('./class384.js');
const Varcs = require('./varcs.js');
const class63 = require('./class63.js');
const class34 = require('./class34.js');


class class287 extends class63 {
	static obfuscatedClassName = "el";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class287.obfuscatedClassName);
	}

	static getField5955(){
		return  super.getField(class287.obfuscatedClassName,"gv", []);
	}
	getField5956(){
		return new Varcs(super.getField(class287.obfuscatedClassName,"ae", []));
	}
	getField5957(){
		return new class34(super.getField(class287.obfuscatedClassName,"ak", []));
	}

	static onVmethod10628(todo){
		super.onMethodExecution(class287.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod10638(todo){
		super.onMethodExecution(class287.obfuscatedClassName,"ao", todo, []);
	}
	static onMethod10639(todo){
		super.onMethodExecution(class287.obfuscatedClassName,"ap", todo, []);
	}
	static onMethod10641(todo){
		super.onMethodExecution(class287.obfuscatedClassName,"ar", todo, []);
	}
	static onMethod10646(todo){
		super.onMethodExecution(class287.obfuscatedClassName,"aw", todo, []);
	}
	static onVmethod10632(todo){
		super.onMethodExecution(class287.obfuscatedClassName,"ai", todo, []);
	}
	static onVmethod10634(todo){
		super.onMethodExecution(class287.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod10621(todo){
		super.onMethodExecution(class287.obfuscatedClassName,"af", todo, []);
	}
	static onMethod10622(todo){
		super.onMethodExecution(class287.obfuscatedClassName,"az", todo, []);
	}
	static onMethod10623(todo){
		super.onMethodExecution(class287.obfuscatedClassName,"fl", todo, []);
	}
}
module.exports = class287;
