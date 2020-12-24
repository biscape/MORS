const Interceptor = require('./core/apicore.js');


class BufferedSource extends Interceptor {
	static obfuscatedClassName = "nx";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, BufferedSource.obfuscatedClassName);
	}

	getInputStream(){
		return new InputStream(super.getField(BufferedSource.obfuscatedClassName,"ae", []));
	}
	getPosition(){
		return  super.getField(BufferedSource.obfuscatedClassName,"ah", []);
	}
	getException(){
		return new IOException(super.getField(BufferedSource.obfuscatedClassName,"aj", []));
	}
	getLimit(){
		return  super.getField(BufferedSource.obfuscatedClassName,"as", []);
	}
	getCapacity(){
		return  super.getField(BufferedSource.obfuscatedClassName,"ai", []);
	}
	getThread(){
		return new Thread(super.getField(BufferedSource.obfuscatedClassName,"ak", []));
	}
	getBuffer(){
		return  super.getField(BufferedSource.obfuscatedClassName,"ax", []);
	}

	static onMethod6946(todo){
		super.onMethodExecution(BufferedSource.obfuscatedClassName,"ae", todo, []);
	}
	static onReadUnsignedByte(todo){
		super.onMethodExecution(BufferedSource.obfuscatedClassName,"ah", todo, []);
	}
	static onClose(todo){
		super.onMethodExecution(BufferedSource.obfuscatedClassName,"aj", todo, []);
	}
	static onRead(todo){
		super.onMethodExecution(BufferedSource.obfuscatedClassName,"as", todo, []);
	}
	static onAvailable(todo){
		super.onMethodExecution(BufferedSource.obfuscatedClassName,"ax", todo, []);
	}
	static onRun(todo){
		super.onMethodExecution(BufferedSource.obfuscatedClassName,"", todo, []);
	}
}
module.exports = BufferedSource;
