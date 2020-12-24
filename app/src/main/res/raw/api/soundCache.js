const NodeHashTable = require('./nodeHashTable.js');
const AbstractArchive = require('./abstractArchive.js');
const Interceptor = require('./core/apicore.js');
const Archive = require('./archive.js');


class SoundCache extends Interceptor {
	static obfuscatedClassName = "hu";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, SoundCache.obfuscatedClassName);
	}

	static getField3312(){
		return new Archive(super.getField(SoundCache.obfuscatedClassName,"ds", []));
	}
	getMusicSampleIndex(){
		return new AbstractArchive(super.getField(SoundCache.obfuscatedClassName,"ae", []));
	}
	getMusicSamples(){
		return new NodeHashTable(super.getField(SoundCache.obfuscatedClassName,"ai", []));
	}
	getSoundEffectIndex(){
		return new AbstractArchive(super.getField(SoundCache.obfuscatedClassName,"ak", []));
	}
	getRawSounds(){
		return new NodeHashTable(super.getField(SoundCache.obfuscatedClassName,"ax", []));
	}

	static onGetMusicSample0(todo){
		super.onMethodExecution(SoundCache.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod5261(todo){
		super.onMethodExecution(SoundCache.obfuscatedClassName,"ai", todo, []);
	}
	static onGetSoundEffect0(todo){
		super.onMethodExecution(SoundCache.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod5266(todo){
		super.onMethodExecution(SoundCache.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod5255(todo){
		super.onMethodExecution(SoundCache.obfuscatedClassName,"ab", todo, []);
	}
}
module.exports = SoundCache;
