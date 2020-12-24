const Interceptor = require('./core/apicore.js');


class Varps extends Interceptor {
	static obfuscatedClassName = "ah";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Varps.obfuscatedClassName);
	}

	static getVarps_temp(){
		return  super.getField(Varps.obfuscatedClassName,"ae", []);
	}
	static getVarps_main(){
		return  super.getField(Varps.obfuscatedClassName,"ai", []);
	}
	static getVarps_masks(){
		return  super.getField(Varps.obfuscatedClassName,"ak", []);
	}

	static onMethod65(todo){
		super.onMethodExecution(Varps.obfuscatedClassName,"as", todo, []);
	}
	static onMethod68(todo){
		super.onMethodExecution(Varps.obfuscatedClassName,"bm", todo, []);
	}
}
module.exports = Varps;
