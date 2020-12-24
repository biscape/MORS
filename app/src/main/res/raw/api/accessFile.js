const Interceptor = require('./core/apicore.js');


class AccessFile extends Interceptor {
	static obfuscatedClassName = "oe";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, AccessFile.obfuscatedClassName);
	}

	static getField4029(){
		return  super.getField(AccessFile.obfuscatedClassName,"al", []);
	}
	getMaxSize(){
		return  super.getField(AccessFile.obfuscatedClassName,"ae", ['long', 3361502469651855975]);
	}
	getOffset(){
		return  super.getField(AccessFile.obfuscatedClassName,"ai", ['long', 1799911431146103653]);
	}
	getFile(){
		return new RandomAccessFile(super.getField(AccessFile.obfuscatedClassName,"ak", []));
	}

	static onWrite(todo){
		super.onMethodExecution(AccessFile.obfuscatedClassName,"ae", todo, []);
	}
	static onLength(todo){
		super.onMethodExecution(AccessFile.obfuscatedClassName,"ah", todo, []);
	}
	static onRead(todo){
		super.onMethodExecution(AccessFile.obfuscatedClassName,"as", todo, []);
	}
	static onClose(todo){
		super.onMethodExecution(AccessFile.obfuscatedClassName,"ai", todo, []);
	}
	static onSeek(todo){
		super.onMethodExecution(AccessFile.obfuscatedClassName,"ak", todo, []);
	}
	static onCloseSync(todo){
		super.onMethodExecution(AccessFile.obfuscatedClassName,"ax", todo, []);
	}
	static onFinalize(todo){
		super.onMethodExecution(AccessFile.obfuscatedClassName,"", todo, []);
	}
}
module.exports = AccessFile;
