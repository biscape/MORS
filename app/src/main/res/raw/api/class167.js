const IndexedSprite = require('./indexedSprite.js');
const Interceptor = require('./core/apicore.js');
const AbstractArchive = require('./abstractArchive.js');


class class167 extends Interceptor {
	static obfuscatedClassName = "lg";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class167.obfuscatedClassName);
	}

	static getMusicSamplesArchive(){
		return new AbstractArchive(super.getField(class167.obfuscatedClassName,"ae", []));
	}
	static getMusicTrackBoolean(){
		return  super.getField(class167.obfuscatedClassName,"af", []);
	}
	static getMusicPlayerStatus(){
		return  super.getField(class167.obfuscatedClassName,"ah", ['int', 113965787]);
	}
	static getField3780(){
		return new IndexedSprite(super.getField(class167.obfuscatedClassName,"an", []));
	}
	static getMusicTrackArchive(){
		return new AbstractArchive(super.getField(class167.obfuscatedClassName,"as", []));
	}
	static getSoundEffectsArchive(){
		return new AbstractArchive(super.getField(class167.obfuscatedClassName,"ai", []));
	}
	static getMusicPatchesArchive(){
		return new AbstractArchive(super.getField(class167.obfuscatedClassName,"ak", []));
	}

}
module.exports = class167;
