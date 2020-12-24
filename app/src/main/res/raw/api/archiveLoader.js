const Interceptor = require('./core/apicore.js');
const Archive = require('./archive.js');


class ArchiveLoader extends Interceptor {
	static obfuscatedClassName = "io";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ArchiveLoader.obfuscatedClassName);
	}

	getArchive(){
		return new Archive(super.getField(ArchiveLoader.obfuscatedClassName,"ae", []));
	}
	getField3433(){
		return  super.getField(ArchiveLoader.obfuscatedClassName,"ai", ['int', 792528405]);
	}
	getField3434(){
		return  super.getField(ArchiveLoader.obfuscatedClassName,"ax", ['int', 937126421]);
	}

	static onMethod5527(todo){
		super.onMethodExecution(ArchiveLoader.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = ArchiveLoader;
