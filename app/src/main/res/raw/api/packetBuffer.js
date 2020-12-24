const class189 = require('./class189.js');
const Buffer = require('./buffer.js');


class PacketBuffer extends Buffer {
	static obfuscatedClassName = "mj";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, PacketBuffer.obfuscatedClassName);
	}

	static getField7279(){
		return  super.getField(PacketBuffer.obfuscatedClassName,"ab", []);
	}
	getIsaacCipher(){
		return new class189(super.getField(PacketBuffer.obfuscatedClassName,"aa", []));
	}

	static onMethod13790(todo){
		super.onMethodExecution(PacketBuffer.obfuscatedClassName,"jv", todo, []);
	}
	static onSetIsaacCipher(todo){
		super.onMethodExecution(PacketBuffer.obfuscatedClassName,"jw", todo, []);
	}
	static onMethod13784(todo){
		super.onMethodExecution(PacketBuffer.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = PacketBuffer;
