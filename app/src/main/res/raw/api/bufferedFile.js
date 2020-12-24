const Interceptor = require('./core/apicore.js');
const AccessFile = require('./accessFile.js');


class BufferedFile extends Interceptor {
	static obfuscatedClassName = "on";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, BufferedFile.obfuscatedClassName);
	}

	getOffset(){
		return  super.getField(BufferedFile.obfuscatedClassName,"aa", ['long', 4944290969483101515]);
	}
	getAccessFile(){
		return new AccessFile(super.getField(BufferedFile.obfuscatedClassName,"ae", []));
	}
	getLength(){
		return  super.getField(BufferedFile.obfuscatedClassName,"af", []);
	}
	getField4058(){
		return  super.getField(BufferedFile.obfuscatedClassName,"ah", ['int', 1582484277]);
	}
	getField4060(){
		return  super.getField(BufferedFile.obfuscatedClassName,"aj", ['long', 72232622539353471]);
	}
	getField4061(){
		return  super.getField(BufferedFile.obfuscatedClassName,"al", ['int', 540506055]);
	}
	getField4062(){
		return  super.getField(BufferedFile.obfuscatedClassName,"aq", ['long', 7540196508297526685]);
	}
	getWriteBuffer(){
		return  super.getField(BufferedFile.obfuscatedClassName,"as", []);
	}
	getReadBuffer(){
		return  super.getField(BufferedFile.obfuscatedClassName,"ai", []);
	}
	getField4064(){
		return  super.getField(BufferedFile.obfuscatedClassName,"ax", ['long', 1208324497238159515]);
	}
	getFileLength(){
		return  super.getField(BufferedFile.obfuscatedClassName,"ab", ['long', 3828855703856405811]);
	}

	static onSeek(todo){
		super.onMethodExecution(BufferedFile.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod7053(todo){
		super.onMethodExecution(BufferedFile.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod7055(todo){
		super.onMethodExecution(BufferedFile.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod7057(todo){
		super.onMethodExecution(BufferedFile.obfuscatedClassName,"al", todo, []);
	}
	static onMethod7064(todo){
		super.onMethodExecution(BufferedFile.obfuscatedClassName,"as", todo, []);
	}
	static onLength(todo){
		super.onMethodExecution(BufferedFile.obfuscatedClassName,"ai", todo, []);
	}
	static onLoad(todo){
		super.onMethodExecution(BufferedFile.obfuscatedClassName,"ak", todo, []);
	}
	static onReadFully(todo){
		super.onMethodExecution(BufferedFile.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = BufferedFile;
