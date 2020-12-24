const NodeDeque = require('./nodeDeque.js');
const Interceptor = require('./core/apicore.js');


class ArchiveDiskActionHandler extends Interceptor {
	static obfuscatedClassName = "kw";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ArchiveDiskActionHandler.obfuscatedClassName);
	}

	static getArchiveDiskActionHandler_requestQueue(){
		return new ArchiveDiskActionHandler(super.getField(ArchiveDiskActionHandler.obfuscatedClassName,"ak", []));
	}
	getField3748(){
		return new NodeDeque(super.getField(ArchiveDiskActionHandler.obfuscatedClassName,"ae", []));
	}
	getField3749(){
		return new Thread(super.getField(ArchiveDiskActionHandler.obfuscatedClassName,"ah", []));
	}
	getField3750(){
		return new NodeDeque(super.getField(ArchiveDiskActionHandler.obfuscatedClassName,"ai", []));
	}
	getField3751(){
		return  super.getField(ArchiveDiskActionHandler.obfuscatedClassName,"ax", ['int', 850567073]);
	}

	static onMethod6337(todo){
		super.onMethodExecution(ArchiveDiskActionHandler.obfuscatedClassName,"aa", todo, []);
	}
	static onMethod6340(todo){
		super.onMethodExecution(ArchiveDiskActionHandler.obfuscatedClassName,"af", todo, []);
	}
	static onMethod6343(todo){
		super.onMethodExecution(ArchiveDiskActionHandler.obfuscatedClassName,"al", todo, []);
	}
	static onMethod6344(todo){
		super.onMethodExecution(ArchiveDiskActionHandler.obfuscatedClassName,"am", todo, []);
	}
	static onMethod6345(todo){
		super.onMethodExecution(ArchiveDiskActionHandler.obfuscatedClassName,"an", todo, []);
	}
	static onMethod6346(todo){
		super.onMethodExecution(ArchiveDiskActionHandler.obfuscatedClassName,"aq", todo, []);
	}
	static onMethod6347(todo){
		super.onMethodExecution(ArchiveDiskActionHandler.obfuscatedClassName,"as", todo, []);
	}
	static onMethod6350(todo){
		super.onMethodExecution(ArchiveDiskActionHandler.obfuscatedClassName,"aw", todo, []);
	}
	static onMethod6351(todo){
		super.onMethodExecution(ArchiveDiskActionHandler.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod6338(todo){
		super.onMethodExecution(ArchiveDiskActionHandler.obfuscatedClassName,"ab", todo, []);
	}
	static onRun(todo){
		super.onMethodExecution(ArchiveDiskActionHandler.obfuscatedClassName,"", todo, []);
	}
}
module.exports = ArchiveDiskActionHandler;
