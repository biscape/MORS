const class139 = require('./class139.js');
const Interceptor = require('./core/apicore.js');


class UrlRequest extends Interceptor {
	static obfuscatedClassName = "jk";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, UrlRequest.obfuscatedClassName);
	}

	getField3575(){
		return new class139(super.getField(UrlRequest.obfuscatedClassName,"ae", []));
	}
	getIsDone0(){
		return  super.getField(UrlRequest.obfuscatedClassName,"ai", []);
	}
	getField3577(){
		return new URL(super.getField(UrlRequest.obfuscatedClassName,"ak", []));
	}
	getResponse0(){
		return  super.getField(UrlRequest.obfuscatedClassName,"ax", []);
	}

	static onIsDone(todo){
		super.onMethodExecution(UrlRequest.obfuscatedClassName,"ae", todo, []);
	}
	static onGetResponse(todo){
		super.onMethodExecution(UrlRequest.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod5946(todo){
		super.onMethodExecution(UrlRequest.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = UrlRequest;
