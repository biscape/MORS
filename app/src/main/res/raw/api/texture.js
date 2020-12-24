const Node = require('./node.js');


class Texture extends Node {
	static obfuscatedClassName = "bv";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Texture.obfuscatedClassName);
	}

	static getField4660(){
		return  super.getField(Texture.obfuscatedClassName,"ar", []);
	}
	getField4662(){
		return  super.getField(Texture.obfuscatedClassName,"aa", []);
	}
	getField4664(){
		return  super.getField(Texture.obfuscatedClassName,"af", []);
	}
	getAverageRGB(){
		return  super.getField(Texture.obfuscatedClassName,"ah", []);
	}
	getFileIds(){
		return  super.getField(Texture.obfuscatedClassName,"aj", []);
	}
	getField4667(){
		return  super.getField(Texture.obfuscatedClassName,"al", []);
	}
	getField4668(){
		return  super.getField(Texture.obfuscatedClassName,"am", []);
	}
	getField4669(){
		return  super.getField(Texture.obfuscatedClassName,"an", []);
	}
	getField4670(){
		return  super.getField(Texture.obfuscatedClassName,"aq", []);
	}
	getField4671(){
		return  super.getField(Texture.obfuscatedClassName,"as", []);
	}
	getIsLoaded(){
		return  super.getField(Texture.obfuscatedClassName,"aw", []);
	}
	getPixels(){
		return  super.getField(Texture.obfuscatedClassName,"ay", []);
	}
	getField4663(){
		return  super.getField(Texture.obfuscatedClassName,"ab", []);
	}

	static onReset(todo){
		super.onMethodExecution(Texture.obfuscatedClassName,"ae", todo, []);
	}
	static onAnimate(todo){
		super.onMethodExecution(Texture.obfuscatedClassName,"ai", todo, []);
	}
	static onLoad(todo){
		super.onMethodExecution(Texture.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = Texture;
