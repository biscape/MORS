const AbstractSocket = require('./abstractSocket.js');
const BufferedSink = require('./bufferedSink.js');
const BufferedSource = require('./bufferedSource.js');


class BufferedNetSocket extends AbstractSocket {
	static obfuscatedClassName = "nl";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, BufferedNetSocket.obfuscatedClassName);
	}

	getSource(){
		return new BufferedSource(super.getField(BufferedNetSocket.obfuscatedClassName,"ae", []));
	}
	getSink(){
		return new BufferedSink(super.getField(BufferedNetSocket.obfuscatedClassName,"ai", []));
	}
	getSocket(){
		return new Socket(super.getField(BufferedNetSocket.obfuscatedClassName,"ak", []));
	}

	static onClose(todo){
		super.onMethodExecution(BufferedNetSocket.obfuscatedClassName,"ae", todo, []);
	}
	static onWrite(todo){
		super.onMethodExecution(BufferedNetSocket.obfuscatedClassName,"al", todo, []);
	}
	static onRead(todo){
		super.onMethodExecution(BufferedNetSocket.obfuscatedClassName,"as", todo, []);
	}
	static onVmethod12077(todo){
		super.onMethodExecution(BufferedNetSocket.obfuscatedClassName,"ai", todo, []);
	}
	static onAvailable(todo){
		super.onMethodExecution(BufferedNetSocket.obfuscatedClassName,"ax", todo, []);
	}
	static onFinalize(todo){
		super.onMethodExecution(BufferedNetSocket.obfuscatedClassName,"", todo, []);
	}
}
module.exports = BufferedNetSocket;
