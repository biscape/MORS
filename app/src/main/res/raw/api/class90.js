const UrlRequester = require('./urlRequester.js');
const Interceptor = require('./core/apicore.js');


class class90 extends Interceptor {
	static obfuscatedClassName = "gh";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class90.obfuscatedClassName);
	}

	static getMusicTrackGroupId(){
		return  super.getField(class90.obfuscatedClassName,"aj", ['int', 433328471]);
	}
	static getField2701(){
		return new UrlRequester(super.getField(class90.obfuscatedClassName,"ft", []));
	}

	static onSpotAnimationDefinition_get(todo){
		super.onMethodExecution(class90.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod4802(todo){
		super.onMethodExecution(class90.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod4804(todo){
		super.onMethodExecution(class90.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod4803(todo){
		super.onMethodExecution(class90.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod4805(todo){
		super.onMethodExecution(class90.obfuscatedClassName,"dv", todo, []);
	}
}
module.exports = class90;
