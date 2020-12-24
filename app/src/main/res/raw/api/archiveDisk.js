const BufferedFile = require('./bufferedFile.js');
const Interceptor = require('./core/apicore.js');


class ArchiveDisk extends Interceptor {
	static obfuscatedClassName = "ny";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ArchiveDisk.obfuscatedClassName);
	}

	static getField4020(){
		return  super.getField(ArchiveDisk.obfuscatedClassName,"ak", []);
	}
	getDatFile(){
		return new BufferedFile(super.getField(ArchiveDisk.obfuscatedClassName,"ae", []));
	}
	getMaxEntrySize(){
		return  super.getField(ArchiveDisk.obfuscatedClassName,"ah", ['int', 2003787325]);
	}
	getIdxFile(){
		return new BufferedFile(super.getField(ArchiveDisk.obfuscatedClassName,"ai", []));
	}
	getArchive(){
		return  super.getField(ArchiveDisk.obfuscatedClassName,"ax", ['int', 1252491855]);
	}

	static onWrite(todo){
		super.onMethodExecution(ArchiveDisk.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod6969(todo){
		super.onMethodExecution(ArchiveDisk.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod6971(todo){
		super.onMethodExecution(ArchiveDisk.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = ArchiveDisk;
