const class366 = require('./class366.js');
const Node = require('./node.js');
const IterableNodeDeque = require('./iterableNodeDeque.js');
const class399 = require('./class399.js');


class HealthBar extends Node {
	static obfuscatedClassName = "it";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, HealthBar.obfuscatedClassName);
	}

	static getField6179(){
		return new class399(super.getField(HealthBar.obfuscatedClassName,"ut", []));
	}
	static getByteArrayPool_alternativeSizes(){
		return  super.getField(HealthBar.obfuscatedClassName,"aj", []);
	}
	getField6180(){
		return new class366(super.getField(HealthBar.obfuscatedClassName,"ai", []));
	}
	getUpdates(){
		return new IterableNodeDeque(super.getField(HealthBar.obfuscatedClassName,"ax", []));
	}

	static onGet(todo){
		super.onMethodExecution(HealthBar.obfuscatedClassName,"ae", todo, []);
	}
	static onIsEmpty(todo){
		super.onMethodExecution(HealthBar.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod11232(todo){
		super.onMethodExecution(HealthBar.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = HealthBar;
