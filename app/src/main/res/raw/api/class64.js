const Scene = require('./scene.js');
const Interceptor = require('./core/apicore.js');


class class64 extends Interceptor {
	static obfuscatedClassName = "ey";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class64.obfuscatedClassName);
	}

	static getField2460(){
		return new Scene(super.getField(class64.obfuscatedClassName,"gf", []));
	}
	getField2462(){
		return new Comparator(super.getField(class64.obfuscatedClassName,"ak", []));
	}

	static onMethod4020(todo){
		super.onMethodExecution(class64.obfuscatedClassName,"ae", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(class64.obfuscatedClassName,"", todo, []);
	}
	static onMethod4019(todo){
		super.onMethodExecution(class64.obfuscatedClassName,"aw", todo, []);
	}
}
module.exports = class64;
