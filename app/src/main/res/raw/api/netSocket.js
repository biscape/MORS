const Task = require('./task.js');
const AbstractSocket = require('./abstractSocket.js');
const TaskHandler = require('./taskHandler.js');


class NetSocket extends AbstractSocket {
	static obfuscatedClassName = "mn";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, NetSocket.obfuscatedClassName);
	}

	getOutOffset(){
		return  super.getField(NetSocket.obfuscatedClassName,"aa", ['int', 226500025]);
	}
	getOutputStream(){
		return new OutputStream(super.getField(NetSocket.obfuscatedClassName,"ae", []));
	}
	getBufferLength(){
		return  super.getField(NetSocket.obfuscatedClassName,"af", ['int', 1177047165]);
	}
	getTaskHandler(){
		return new TaskHandler(super.getField(NetSocket.obfuscatedClassName,"ah", []));
	}
	getOutBuffer(){
		return  super.getField(NetSocket.obfuscatedClassName,"aj", []);
	}
	getOutLength(){
		return  super.getField(NetSocket.obfuscatedClassName,"al", ['int', 82931947]);
	}
	getMaxPacketLength(){
		return  super.getField(NetSocket.obfuscatedClassName,"aq", ['int', 294297879]);
	}
	getTask(){
		return new Task(super.getField(NetSocket.obfuscatedClassName,"as", []));
	}
	getSocket(){
		return new Socket(super.getField(NetSocket.obfuscatedClassName,"ai", []));
	}
	getInputStream(){
		return new InputStream(super.getField(NetSocket.obfuscatedClassName,"ak", []));
	}
	getIsClosed(){
		return  super.getField(NetSocket.obfuscatedClassName,"ax", []);
	}
	getField6386(){
		return  super.getField(NetSocket.obfuscatedClassName,"ab", []);
	}

	static onClose(todo){
		super.onMethodExecution(NetSocket.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod11873(todo){
		super.onMethodExecution(NetSocket.obfuscatedClassName,"aj", todo, []);
	}
	static onWrite(todo){
		super.onMethodExecution(NetSocket.obfuscatedClassName,"al", todo, []);
	}
	static onRead(todo){
		super.onMethodExecution(NetSocket.obfuscatedClassName,"as", todo, []);
	}
	static onVmethod12077(todo){
		super.onMethodExecution(NetSocket.obfuscatedClassName,"ai", todo, []);
	}
	static onAvailable(todo){
		super.onMethodExecution(NetSocket.obfuscatedClassName,"ax", todo, []);
	}
	static onFinalize(todo){
		super.onMethodExecution(NetSocket.obfuscatedClassName,"", todo, []);
	}
	static onRun(todo){
		super.onMethodExecution(NetSocket.obfuscatedClassName,"", todo, []);
	}
}
module.exports = NetSocket;
