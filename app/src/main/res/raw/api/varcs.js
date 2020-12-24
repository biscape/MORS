const SoundCache = require('./soundCache.js');
const Interceptor = require('./core/apicore.js');


class Varcs extends Interceptor {
	static obfuscatedClassName = "ac";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Varcs.obfuscatedClassName);
	}

	static getSoundCache(){
		return new SoundCache(super.getField(Varcs.obfuscatedClassName,"am", []));
	}
	getUnwrittenChanges(){
		return  super.getField(Varcs.obfuscatedClassName,"aa", []);
	}
	getField11(){
		return  super.getField(Varcs.obfuscatedClassName,"ae", ['int', 1055486469]);
	}
	getField12(){
		return  super.getField(Varcs.obfuscatedClassName,"ah", ['int', 1612943373]);
	}
	getField14(){
		return  super.getField(Varcs.obfuscatedClassName,"aj", ['int', 739421965]);
	}
	getField16(){
		return  super.getField(Varcs.obfuscatedClassName,"al", ['int', 593627]);
	}
	getField17(){
		return  super.getField(Varcs.obfuscatedClassName,"as", ['int', 1775943503]);
	}
	getField13(){
		return  super.getField(Varcs.obfuscatedClassName,"ai", []);
	}
	getField15(){
		return  super.getField(Varcs.obfuscatedClassName,"ak", ['int', 812891165]);
	}
	getField18(){
		return  super.getField(Varcs.obfuscatedClassName,"ax", ['int', 701234401]);
	}
	getField10(){
		return  super.getField(Varcs.obfuscatedClassName,"ab", ['long', 5885618562700523205]);
	}

	static onMethod14(todo){
		super.onMethodExecution(Varcs.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod16(todo){
		super.onMethodExecution(Varcs.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod18(todo){
		super.onMethodExecution(Varcs.obfuscatedClassName,"aj", todo, []);
	}
	static onGetInt(todo){
		super.onMethodExecution(Varcs.obfuscatedClassName,"as", todo, []);
	}
	static onMethod17(todo){
		super.onMethodExecution(Varcs.obfuscatedClassName,"ai", todo, []);
	}
	static onSetInt(todo){
		super.onMethodExecution(Varcs.obfuscatedClassName,"ak", todo, []);
	}
	static onTryWrite(todo){
		super.onMethodExecution(Varcs.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod5(todo){
		super.onMethodExecution(Varcs.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod9(todo){
		super.onMethodExecution(Varcs.obfuscatedClassName,"as", todo, []);
	}
}
module.exports = Varcs;
