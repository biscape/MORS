const Interceptor = require('./core/apicore.js');


class BufferedSink extends Interceptor {
	static obfuscatedClassName = "nc";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, BufferedSink.obfuscatedClassName);
	}

	getOutputStream(){
		return new OutputStream(super.getField(BufferedSink.obfuscatedClassName,"ae", []));
	}
	getPosition(){
		return  super.getField(BufferedSink.obfuscatedClassName,"ah", []);
	}
	getException(){
		return new IOException(super.getField(BufferedSink.obfuscatedClassName,"aj", []));
	}
	getClosed(){
		return  super.getField(BufferedSink.obfuscatedClassName,"al", []);
	}
	getLimit(){
		return  super.getField(BufferedSink.obfuscatedClassName,"as", []);
	}
	getCapacity(){
		return  super.getField(BufferedSink.obfuscatedClassName,"ai", []);
	}
	getThread(){
		return new Thread(super.getField(BufferedSink.obfuscatedClassName,"ak", []));
	}
	getBuffer(){
		return  super.getField(BufferedSink.obfuscatedClassName,"ax", []);
	}

	static onIsClosed(todo){
		super.onMethodExecution(BufferedSink.obfuscatedClassName,"ae", todo, []);
	}
	static onClose(todo){
		super.onMethodExecution(BufferedSink.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod6782(todo){
		super.onMethodExecution(BufferedSink.obfuscatedClassName,"ai", todo, []);
	}
	static onWrite(todo){
		super.onMethodExecution(BufferedSink.obfuscatedClassName,"ax", todo, []);
	}
	static onRun(todo){
		super.onMethodExecution(BufferedSink.obfuscatedClassName,"", todo, []);
	}
}
module.exports = BufferedSink;
