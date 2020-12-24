const Node = require('./node.js');


class Buffer extends Node {
	static obfuscatedClassName = "mi";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Buffer.obfuscatedClassName);
	}

	static getCrc32Table(){
		return  super.getField(Buffer.obfuscatedClassName,"ah", []);
	}
	static getCrc64Table(){
		return  super.getField(Buffer.obfuscatedClassName,"aj", []);
	}
	getArray(){
		return  super.getField(Buffer.obfuscatedClassName,"ai", []);
	}
	getOffset(){
		return  super.getField(Buffer.obfuscatedClassName,"ax", ['int', 1792371615]);
	}

	static onWriteLong(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"aa", todo, []);
	}
	static onMethod11635(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"ac", todo, []);
	}
	static onMethod11637(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"ag", todo, []);
	}
	static onMethod11638(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod11640(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod11641(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"al", todo, []);
	}
	static onMethod11645(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"aq", todo, []);
	}
	static onWriteSmartByteShort(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"ar", todo, []);
	}
	static onMethod11647(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"as", todo, []);
	}
	static onMethod11649(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"au", todo, []);
	}
	static onMethod11653(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"ay", todo, []);
	}
	static onMethod11658(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bd", todo, []);
	}
	static onMethod11659(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"be", todo, []);
	}
	static onMethod11661(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bg", todo, []);
	}
	static onMethod11662(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bh", todo, []);
	}
	static onMethod11664(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bj", todo, []);
	}
	static onMethod11667(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bm", todo, []);
	}
	static onMethod11670(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bp", todo, []);
	}
	static onMethod11671(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bq", todo, []);
	}
	static onMethod11672(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"br", todo, []);
	}
	static onMethod11674(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bt", todo, []);
	}
	static onMethod11678(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bx", todo, []);
	}
	static onMethod11636(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"ad", todo, []);
	}
	static onReleaseArray(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"ai", todo, []);
	}
	static onWriteVarInt(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"at", todo, []);
	}
	static onMethod11650(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"av", todo, []);
	}
	static onMethod11652(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod11657(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bc", todo, []);
	}
	static onMethod11663(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bi", todo, []);
	}
	static onMethod11675(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bu", todo, []);
	}
	static onMethod11676(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bv", todo, []);
	}
	static onMethod11680(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bz", todo, []);
	}
	static onMethod11683(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"cd", todo, []);
	}
	static onMethod11692(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"cn", todo, []);
	}
	static onReadStringCp1252NullTerminatedOrNull(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bf", todo, []);
	}
	static onMethod11665(todo){
		super.onMethodExecution(Buffer.obfuscatedClassName,"bk", todo, []);
	}
}
module.exports = Buffer;
