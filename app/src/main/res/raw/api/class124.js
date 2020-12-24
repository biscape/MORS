const IndexedSprite = require('./indexedSprite.js');
const Calendar = require('./calendar.js');
const Interceptor = require('./core/apicore.js');
const class135 = require('./class135.js');


class class124 extends Interceptor {
	static obfuscatedClassName = "im";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class124.obfuscatedClassName);
	}

	static getField3411(){
		return  super.getField(class124.obfuscatedClassName,"aa", []);
	}
	static getField3413(){
		return  super.getField(class124.obfuscatedClassName,"af", []);
	}
	static getField3416(){
		return  super.getField(class124.obfuscatedClassName,"aj", []);
	}
	static getField3418(){
		return  super.getField(class124.obfuscatedClassName,"al", []);
	}
	static getField3419(){
		return  super.getField(class124.obfuscatedClassName,"am", []);
	}
	static getField3420(){
		return  super.getField(class124.obfuscatedClassName,"an", []);
	}
	static getField3421(){
		return  super.getField(class124.obfuscatedClassName,"ap", []);
	}
	static getField3422(){
		return new Calendar(super.getField(class124.obfuscatedClassName,"ar", []));
	}
	static getField3425(){
		return  super.getField(class124.obfuscatedClassName,"au", []);
	}
	static getField3427(){
		return  super.getField(class124.obfuscatedClassName,"az", []);
	}
	static getField3424(){
		return  super.getField(class124.obfuscatedClassName,"at", []);
	}
	static getField3426(){
		return  super.getField(class124.obfuscatedClassName,"av", []);
	}
	static getField3428(){
		return  super.getField(class124.obfuscatedClassName,"eh", []);
	}

	static onMethod5423(todo){
		super.onMethodExecution(class124.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = class124;
