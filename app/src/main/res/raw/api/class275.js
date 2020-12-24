const IndexedSprite = require('./indexedSprite.js');
const Widget = require('./widget.js');
const Interceptor = require('./core/apicore.js');
const class244 = require('./class244.js');


class class275 extends Interceptor {
	static obfuscatedClassName = "cn";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class275.obfuscatedClassName);
	}

	static getField5005(){
		return new class244(super.getField(class275.obfuscatedClassName,"dt", []));
	}
	static getField5008(){
		return new Widget(super.getField(class275.obfuscatedClassName,"ky", []));
	}
	static getField5004(){
		return new IndexedSprite(super.getField(class275.obfuscatedClassName,"av", []));
	}
	getField5009(){
		return  super.getField(class275.obfuscatedClassName,"ae", ['int', 1526915595]);
	}
	getField5010(){
		return  super.getField(class275.obfuscatedClassName,"ah", ['int', 169833383]);
	}
	getField5013(){
		return  super.getField(class275.obfuscatedClassName,"as", ['int', 2001259739]);
	}
	getField5011(){
		return  super.getField(class275.obfuscatedClassName,"ai", ['int', 1932999929]);
	}
	getField5012(){
		return  super.getField(class275.obfuscatedClassName,"ak", ['int', 379056637]);
	}
	getField5014(){
		return  super.getField(class275.obfuscatedClassName,"ax", ['int', 32024227]);
	}

	static onVmethod10367(todo){
		super.onMethodExecution(class275.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod8386(todo){
		super.onMethodExecution(class275.obfuscatedClassName,"aj", todo, []);
	}
	static onVmethod10380(todo){
		super.onMethodExecution(class275.obfuscatedClassName,"as", todo, []);
	}
	static onExpandBounds(todo){
		super.onMethodExecution(class275.obfuscatedClassName,"ak", todo, []);
	}
	static onVmethod10384(todo){
		super.onMethodExecution(class275.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod8377(todo){
		super.onMethodExecution(class275.obfuscatedClassName,"as", todo, []);
	}
	static onSprite_drawTransOverlay(todo){
		super.onMethodExecution(class275.obfuscatedClassName,"bf", todo, []);
	}
}
module.exports = class275;
