const BufferedFile = require('./bufferedFile.js');
const Interceptor = require('./core/apicore.js');


class FontName extends Interceptor {
	static obfuscatedClassName = "lf";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, FontName.obfuscatedClassName);
	}

	static getFontName_plain12(){
		return new FontName(super.getField(FontName.obfuscatedClassName,"ae", []));
	}
	static getFontName_verdana13(){
		return new FontName(super.getField(FontName.obfuscatedClassName,"ah", []));
	}
	static getJagexCache_idxFiles(){
		return  super.getField(FontName.obfuscatedClassName,"am", []);
	}
	static getFontName_verdana15(){
		return new FontName(super.getField(FontName.obfuscatedClassName,"as", []));
	}
	static getFontName_bold12(){
		return new FontName(super.getField(FontName.obfuscatedClassName,"ai", []));
	}
	static getFontName_plain11(){
		return new FontName(super.getField(FontName.obfuscatedClassName,"ak", []));
	}
	static getFontName_verdana11(){
		return new FontName(super.getField(FontName.obfuscatedClassName,"ax", []));
	}
	getName(){
		return  super.getField(FontName.obfuscatedClassName,"aj", []);
	}

	static onMethod6386(todo){
		super.onMethodExecution(FontName.obfuscatedClassName,"ac", todo, []);
	}
	static onMethod6387(todo){
		super.onMethodExecution(FontName.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod6390(todo){
		super.onMethodExecution(FontName.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod6391(todo){
		super.onMethodExecution(FontName.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod6392(todo){
		super.onMethodExecution(FontName.obfuscatedClassName,"at", todo, []);
	}
	static onMethod6393(todo){
		super.onMethodExecution(FontName.obfuscatedClassName,"bk", todo, []);
	}
}
module.exports = FontName;
