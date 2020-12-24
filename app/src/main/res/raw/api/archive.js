const ArchiveDisk = require('./archiveDisk.js');
const AbstractArchive = require('./abstractArchive.js');


class Archive extends AbstractArchive {
	static obfuscatedClassName = "kv";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Archive.obfuscatedClassName);
	}

	static getField6304(){
		return new CRC32(super.getField(Archive.obfuscatedClassName,"bg", []));
	}
	getIndex(){
		return  super.getField(Archive.obfuscatedClassName,"ac", ['int', 1018224035]);
	}
	getMasterDisk(){
		return new ArchiveDisk(super.getField(Archive.obfuscatedClassName,"ag", []));
	}
	getField6308(){
		return  super.getField(Archive.obfuscatedClassName,"au", []);
	}
	getField6310(){
		return  super.getField(Archive.obfuscatedClassName,"bh", ['int', 1296278953]);
	}
	getIndexVersion(){
		return  super.getField(Archive.obfuscatedClassName,"bj", ['int', 285411775]);
	}
	getField6313(){
		return  super.getField(Archive.obfuscatedClassName,"bp", []);
	}
	getArchiveDisk(){
		return new ArchiveDisk(super.getField(Archive.obfuscatedClassName,"ad", []));
	}
	getValidGroups(){
		return  super.getField(Archive.obfuscatedClassName,"bi", []);
	}
	getIndexCrc(){
		return  super.getField(Archive.obfuscatedClassName,"bf", ['int', 166622549]);
	}

	static onGroupLoadPercent(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"aa", todo, []);
	}
	static onWriteShortLE(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"ae", todo, []);
	}
	static onLoadGroup(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"am", todo, []);
	}
	static onMethod11538(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"dm", todo, []);
	}
	static onMethod11559(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"eu", todo, []);
	}
	static onMethod11535(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"da", todo, []);
	}
	static onMethod11536(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"de", todo, []);
	}
	static onWrite(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"dh", todo, []);
	}
	static onLoadIndex(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"dy", todo, []);
	}
	static onMethod11544(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"ee", todo, []);
	}
	static onMethod11552(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"em", todo, []);
	}
	static onMethod11560(todo){
		super.onMethodExecution(Archive.obfuscatedClassName,"ev", todo, []);
	}
}
module.exports = Archive;
