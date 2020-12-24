const Interceptor = require('./core/apicore.js');


class Language extends Interceptor {
	static obfuscatedClassName = "le";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Language.obfuscatedClassName);
	}

	static getLanguage_DE(){
		return new Language(super.getField(Language.obfuscatedClassName,"ae", []));
	}
	static getLanguage_valuesOrdered(){
		return  super.getField(Language.obfuscatedClassName,"af", []);
	}
	static getLanguage_NL(){
		return new Language(super.getField(Language.obfuscatedClassName,"ah", []));
	}
	static getLanguage_ES_MX(){
		return new Language(super.getField(Language.obfuscatedClassName,"aj", []));
	}
	static getLanguage_ES(){
		return new Language(super.getField(Language.obfuscatedClassName,"as", []));
	}
	static getLanguage_FR(){
		return new Language(super.getField(Language.obfuscatedClassName,"ai", []));
	}
	static getLanguage_EN(){
		return new Language(super.getField(Language.obfuscatedClassName,"ak", []));
	}
	static getLanguage_PT(){
		return new Language(super.getField(Language.obfuscatedClassName,"ax", []));
	}
	getLanguage(){
		return  super.getField(Language.obfuscatedClassName,"aa", []);
	}
	getField6324(){
		return  super.getField(Language.obfuscatedClassName,"al", []);
	}
	getId(){
		return  super.getField(Language.obfuscatedClassName,"ab", ['int', 1704975315]);
	}

	static onGetLanguage(todo){
		super.onMethodExecution(Language.obfuscatedClassName,"ai", todo, []);
	}
	static onVmethod12178(todo){
		super.onMethodExecution(Language.obfuscatedClassName,"ak", todo, []);
	}
	static onToString(todo){
		super.onMethodExecution(Language.obfuscatedClassName,"", todo, []);
	}
	static onMethod11566(todo){
		super.onMethodExecution(Language.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod11567(todo){
		super.onMethodExecution(Language.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod11572(todo){
		super.onMethodExecution(Language.obfuscatedClassName,"ao", todo, []);
	}
	static onMethod11568(todo){
		super.onMethodExecution(Language.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod11574(todo){
		super.onMethodExecution(Language.obfuscatedClassName,"at", todo, []);
	}
	static onMethod11575(todo){
		super.onMethodExecution(Language.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = Language;
