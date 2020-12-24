const Interceptor = require('./core/apicore.js');


class TilePaint extends Interceptor {
	static obfuscatedClassName = "bp";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, TilePaint.obfuscatedClassName);
	}

	getSeColor(){
		return  super.getField(TilePaint.obfuscatedClassName,"ae", ['int', 1867990029]);
	}
	getTexture(){
		return  super.getField(TilePaint.obfuscatedClassName,"ah", ['int', 418445531]);
	}
	getRgb(){
		return  super.getField(TilePaint.obfuscatedClassName,"aj", ['int', 1192227169]);
	}
	getIsFlat(){
		return  super.getField(TilePaint.obfuscatedClassName,"as", []);
	}
	getNeColor(){
		return  super.getField(TilePaint.obfuscatedClassName,"ai", ['int', 836469279]);
	}
	getSwColor(){
		return  super.getField(TilePaint.obfuscatedClassName,"ak", ['int', 2105427509]);
	}
	getNwColor(){
		return  super.getField(TilePaint.obfuscatedClassName,"ax", ['int', 1585032513]);
	}

	static onMethod857(todo){
		super.onMethodExecution(TilePaint.obfuscatedClassName,"ad", todo, []);
	}
	static onMethod860(todo){
		super.onMethodExecution(TilePaint.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod856(todo){
		super.onMethodExecution(TilePaint.obfuscatedClassName,"ab", todo, []);
	}
}
module.exports = TilePaint;
