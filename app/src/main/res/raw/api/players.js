const Buffer = require('./buffer.js');
const Interceptor = require('./core/apicore.js');


class Players extends Interceptor {
	static obfuscatedClassName = "hs";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Players.obfuscatedClassName);
	}

	static getPlayers_emptyIndices(){
		return  super.getField(Players.obfuscatedClassName,"aa", []);
	}
	static getPlayers_orientations(){
		return  super.getField(Players.obfuscatedClassName,"af", []);
	}
	static getField3300(){
		return  super.getField(Players.obfuscatedClassName,"ah", []);
	}
	static getPlayers_indices(){
		return  super.getField(Players.obfuscatedClassName,"aj", []);
	}
	static getPlayers_emptyIdxCount(){
		return  super.getField(Players.obfuscatedClassName,"al", []);
	}
	static getPlayers_pendingUpdateCount(){
		return  super.getField(Players.obfuscatedClassName,"am", []);
	}
	static getPlayers_pendingUpdateIndices(){
		return  super.getField(Players.obfuscatedClassName,"an", []);
	}
	static getPlayers_targetIndices(){
		return  super.getField(Players.obfuscatedClassName,"aq", []);
	}
	static getPlayers_count(){
		return  super.getField(Players.obfuscatedClassName,"as", []);
	}
	static getField3311(){
		return new Buffer(super.getField(Players.obfuscatedClassName,"ay", []));
	}
	static getField3301(){
		return  super.getField(Players.obfuscatedClassName,"ai", []);
	}
	static getField3310(){
		return  super.getField(Players.obfuscatedClassName,"ax", []);
	}
	static getPlayers_regions(){
		return  super.getField(Players.obfuscatedClassName,"ab", []);
	}

	static onMethod5238(todo){
		super.onMethodExecution(Players.obfuscatedClassName,"ae", todo, []);
	}
}
module.exports = Players;
