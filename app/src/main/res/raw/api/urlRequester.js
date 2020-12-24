const Interceptor = require('./core/apicore.js');


class UrlRequester extends Interceptor {
	static obfuscatedClassName = "jn";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, UrlRequester.obfuscatedClassName);
	}

	getIsClosed(){
		return  super.getField(UrlRequester.obfuscatedClassName,"ae", []);
	}
	getRequests(){
		return new Queue(super.getField(UrlRequester.obfuscatedClassName,"ai", []));
	}
	getThread(){
		return new Thread(super.getField(UrlRequester.obfuscatedClassName,"ak", []));
	}

	static onRequest(todo){
		super.onMethodExecution(UrlRequester.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod5983(todo){
		super.onMethodExecution(UrlRequester.obfuscatedClassName,"ai", todo, []);
	}
	static onClose(todo){
		super.onMethodExecution(UrlRequester.obfuscatedClassName,"ax", todo, []);
	}
	static onRun(todo){
		super.onMethodExecution(UrlRequester.obfuscatedClassName,"", todo, []);
	}
}
module.exports = UrlRequester;
