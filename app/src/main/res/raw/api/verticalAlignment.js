const IndexedSprite = require('./indexedSprite.js');
const Interceptor = require('./core/apicore.js');


class VerticalAlignment extends Interceptor {
	static obfuscatedClassName = "dm";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, VerticalAlignment.obfuscatedClassName);
	}

	static getField5931(){
		return new IndexedSprite(super.getField(VerticalAlignment.obfuscatedClassName,"ac", []));
	}
	static getVerticalAlignment_centered(){
		return new VerticalAlignment(super.getField(VerticalAlignment.obfuscatedClassName,"ae", []));
	}
	static getField5936(){
		return new IndexedSprite(super.getField(VerticalAlignment.obfuscatedClassName,"ay", []));
	}
	static getField5933(){
		return new VerticalAlignment(super.getField(VerticalAlignment.obfuscatedClassName,"ai", []));
	}
	static getField5934(){
		return new VerticalAlignment(super.getField(VerticalAlignment.obfuscatedClassName,"ak", []));
	}
	getField5939(){
		return  super.getField(VerticalAlignment.obfuscatedClassName,"ah", ['int', 1994282973]);
	}
	getField5940(){
		return  super.getField(VerticalAlignment.obfuscatedClassName,"ax", ['int', 556663445]);
	}

	static onVmethod12178(todo){
		super.onMethodExecution(VerticalAlignment.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod10455(todo){
		super.onMethodExecution(VerticalAlignment.obfuscatedClassName,"bb", todo, []);
	}
}
module.exports = VerticalAlignment;
