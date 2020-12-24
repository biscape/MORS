const NodeDeque = require('./nodeDeque.js');
const Interceptor = require('./core/apicore.js');
const IndexedSprite = require('./indexedSprite.js');
const AbstractArchive = require('./abstractArchive.js');
const Texture = require('./texture.js');


class TextureProvider extends Interceptor {
	static obfuscatedClassName = "cg";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, TextureProvider.obfuscatedClassName);
	}

	static getField4719(){
		return new IndexedSprite(super.getField(TextureProvider.obfuscatedClassName,"uk", []));
	}
	getDeque(){
		return new NodeDeque(super.getField(TextureProvider.obfuscatedClassName,"ae", []));
	}
	getBrightness(){
		return  super.getField(TextureProvider.obfuscatedClassName,"ah", []);
	}
	getArchive(){
		return new AbstractArchive(super.getField(TextureProvider.obfuscatedClassName,"aj", []));
	}
	getTextureSize(){
		return  super.getField(TextureProvider.obfuscatedClassName,"as", ['int', 2144624039]);
	}
	getCapacity(){
		return  super.getField(TextureProvider.obfuscatedClassName,"ai", ['int', 803123433]);
	}
	getTextures(){
		return  super.getField(TextureProvider.obfuscatedClassName,"ak", []);
	}
	getRemaining(){
		return  super.getField(TextureProvider.obfuscatedClassName,"ax", ['int', 1014848425]);
	}

	static onMethod7790(todo){
		super.onMethodExecution(TextureProvider.obfuscatedClassName,"ac", todo, []);
	}
	static onVmethod7792(todo){
		super.onMethodExecution(TextureProvider.obfuscatedClassName,"ae", todo, []);
	}
	static onVmethod7795(todo){
		super.onMethodExecution(TextureProvider.obfuscatedClassName,"ah", todo, []);
	}
	static onVmethod7797(todo){
		super.onMethodExecution(TextureProvider.obfuscatedClassName,"aj", todo, []);
	}
	static onVmethod7806(todo){
		super.onMethodExecution(TextureProvider.obfuscatedClassName,"as", todo, []);
	}
	static onGetTexturePixels(todo){
		super.onMethodExecution(TextureProvider.obfuscatedClassName,"ai", todo, []);
	}
	static onVmethod7798(todo){
		super.onMethodExecution(TextureProvider.obfuscatedClassName,"ak", todo, []);
	}
	static onGetAverageTextureRGB(todo){
		super.onMethodExecution(TextureProvider.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod7818(todo){
		super.onMethodExecution(TextureProvider.obfuscatedClassName,"bi", todo, []);
	}
	static onCalculateTag(todo){
		super.onMethodExecution(TextureProvider.obfuscatedClassName,"an", todo, []);
	}
}
module.exports = TextureProvider;
