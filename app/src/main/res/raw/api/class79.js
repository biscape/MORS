const class71 = require('./class71.js');
const Widget = require('./widget.js');
const Interceptor = require('./core/apicore.js');


class class79 extends Interceptor {
	static obfuscatedClassName = "ft";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class79.obfuscatedClassName);
	}

	static getWidget_interfaceComponents(){
		return  super.getField(class79.obfuscatedClassName,"aj", []);
	}
	getField2602(){
		return  super.getField(class79.obfuscatedClassName,"ae", ['int', 1195070171]);
	}
	getField2603(){
		return  super.getField(class79.obfuscatedClassName,"ah", ['int', 734771277]);
	}
	getField2606(){
		return  super.getField(class79.obfuscatedClassName,"as", ['long', 8516787836643484963]);
	}
	getField2604(){
		return  super.getField(class79.obfuscatedClassName,"ai", ['int', 549736697]);
	}
	getField2605(){
		return new class71(super.getField(class79.obfuscatedClassName,"ak", []));
	}
	getField2607(){
		return  super.getField(class79.obfuscatedClassName,"ax", ['int', 527303683]);
	}

	static onMethod4572(todo){
		super.onMethodExecution(class79.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod4566(todo){
		super.onMethodExecution(class79.obfuscatedClassName,"ba", todo, []);
	}
	static onMethod4567(todo){
		super.onMethodExecution(class79.obfuscatedClassName,"dk", todo, []);
	}
}
module.exports = class79;
