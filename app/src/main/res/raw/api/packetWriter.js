const PacketBuffer = require('./packetBuffer.js');
const Buffer = require('./buffer.js');
const AbstractSocket = require('./abstractSocket.js');
const IterableNodeDeque = require('./iterableNodeDeque.js');
const ServerPacket = require('./serverPacket.js');
const class189 = require('./class189.js');
const Interceptor = require('./core/apicore.js');


class PacketWriter extends Interceptor {
	static obfuscatedClassName = "je";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, PacketWriter.obfuscatedClassName);
	}

	getField3491(){
		return  super.getField(PacketWriter.obfuscatedClassName,"aa", []);
	}
	getPacketBufferNodes(){
		return new IterableNodeDeque(super.getField(PacketWriter.obfuscatedClassName,"ae", []));
	}
	getPendingWrites(){
		return  super.getField(PacketWriter.obfuscatedClassName,"af", ['int', 737319873]);
	}
	getField3495(){
		return new class189(super.getField(PacketWriter.obfuscatedClassName,"ah", []));
	}
	getField3497(){
		return new ServerPacket(super.getField(PacketWriter.obfuscatedClassName,"aj", []));
	}
	getField3499(){
		return  super.getField(PacketWriter.obfuscatedClassName,"al", []);
	}
	getPacketBuffer(){
		return new PacketBuffer(super.getField(PacketWriter.obfuscatedClassName,"as", []));
	}
	getBufferSize(){
		return  super.getField(PacketWriter.obfuscatedClassName,"ai", ['int', 510527141]);
	}
	getSocket(){
		return new AbstractSocket(super.getField(PacketWriter.obfuscatedClassName,"ak", []));
	}
	getBuffer(){
		return new Buffer(super.getField(PacketWriter.obfuscatedClassName,"ax", []));
	}
	getField3492(){
		return  super.getField(PacketWriter.obfuscatedClassName,"ab", []);
	}

	static onFlush(todo){
		super.onMethodExecution(PacketWriter.obfuscatedClassName,"ae", todo, []);
	}
	static onClose(todo){
		super.onMethodExecution(PacketWriter.obfuscatedClassName,"ah", todo, []);
	}
	static onGetSocket(todo){
		super.onMethodExecution(PacketWriter.obfuscatedClassName,"aj", todo, []);
	}
	static onSetSocket(todo){
		super.onMethodExecution(PacketWriter.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = PacketWriter;
