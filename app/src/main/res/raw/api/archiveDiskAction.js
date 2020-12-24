const Node = require('./node.js');
const Archive = require('./archive.js');
const ArchiveDisk = require('./archiveDisk.js');
const AbstractArchive = require('./abstractArchive.js');


class ArchiveDiskAction extends Node {
	static obfuscatedClassName = "kb";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ArchiveDiskAction.obfuscatedClassName);
	}

	static getWidget_fontsArchive(){
		return new AbstractArchive(super.getField(ArchiveDiskAction.obfuscatedClassName,"aq", []));
	}
	getData(){
		return  super.getField(ArchiveDiskAction.obfuscatedClassName,"ae", []);
	}
	getArchiveDisk(){
		return new ArchiveDisk(super.getField(ArchiveDiskAction.obfuscatedClassName,"ai", []));
	}
	getType(){
		return  super.getField(ArchiveDiskAction.obfuscatedClassName,"ak", ['int', 116491315]);
	}
	getArchive(){
		return new Archive(super.getField(ArchiveDiskAction.obfuscatedClassName,"ax", []));
	}

}
module.exports = ArchiveDiskAction;
