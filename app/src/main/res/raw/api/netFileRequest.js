const MusicTrack = require('./musicTrack.js');
const DualNode = require('./dualNode.js');
const Archive = require('./archive.js');


class NetFileRequest extends DualNode {
	static obfuscatedClassName = "kr";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, NetFileRequest.obfuscatedClassName);
	}

	static getMusicTrack(){
		return new MusicTrack(super.getField(NetFileRequest.obfuscatedClassName,"aq", []));
	}
	getCrc(){
		return  super.getField(NetFileRequest.obfuscatedClassName,"ae", ['int', 1568566659]);
	}
	getPadding(){
		return  super.getField(NetFileRequest.obfuscatedClassName,"ai", []);
	}
	getArchive(){
		return new Archive(super.getField(NetFileRequest.obfuscatedClassName,"ak", []));
	}

}
module.exports = NetFileRequest;
