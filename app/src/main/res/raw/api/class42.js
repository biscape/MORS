const WorldMapLabelSize = require('./worldMapLabelSize.js');
const Interceptor = require('./core/apicore.js');


class class42 extends Interceptor {
	static obfuscatedClassName = "cm";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class42.obfuscatedClassName);
	}

	getField618(){
		return  super.getField(class42.obfuscatedClassName,"ae", ['int', 36805883]);
	}
	getField619(){
		return  super.getField(class42.obfuscatedClassName,"ai", ['int', 130073727]);
	}
	getField620(){
		return  super.getField(class42.obfuscatedClassName,"ak", []);
	}
	getField621(){
		return new WorldMapLabelSize(super.getField(class42.obfuscatedClassName,"ax", []));
	}

}
module.exports = class42;
