const Interceptor = require('./core/apicore.js');


class AudioFilter extends Interceptor {
	static obfuscatedClassName = "ho";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, AudioFilter.obfuscatedClassName);
	}

	static getForwardMultiplier(){
		return  super.getField(AudioFilter.obfuscatedClassName,"aa", []);
	}
	static getField3269(){
		return  super.getField(AudioFilter.obfuscatedClassName,"aj", []);
	}
	static getField3270(){
		return  super.getField(AudioFilter.obfuscatedClassName,"al", []);
	}
	static getField3272(){
		return  super.getField(AudioFilter.obfuscatedClassName,"as", []);
	}
	getField3273(){
		return  super.getField(AudioFilter.obfuscatedClassName,"ah", []);
	}
	getField3274(){
		return  super.getField(AudioFilter.obfuscatedClassName,"ai", []);
	}
	getPairs(){
		return  super.getField(AudioFilter.obfuscatedClassName,"ak", []);
	}
	getField3276(){
		return  super.getField(AudioFilter.obfuscatedClassName,"ax", []);
	}

	static onMethod5113(todo){
		super.onMethodExecution(AudioFilter.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod5114(todo){
		super.onMethodExecution(AudioFilter.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod5116(todo){
		super.onMethodExecution(AudioFilter.obfuscatedClassName,"ak", todo, []);
	}
	static onCompute(todo){
		super.onMethodExecution(AudioFilter.obfuscatedClassName,"ax", todo, []);
	}
	static onNormalize(todo){
		super.onMethodExecution(AudioFilter.obfuscatedClassName,"ae", todo, []);
	}
}
module.exports = AudioFilter;
