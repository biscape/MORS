const class384 = require('./class384.js');
const Interceptor = require('./core/apicore.js');


class GameBuild extends Interceptor {
	static obfuscatedClassName = "fd";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, GameBuild.obfuscatedClassName);
	}

	static getBUILDLIVE(){
		return new GameBuild(super.getField(GameBuild.obfuscatedClassName,"ae", []));
	}
	static getRC(){
		return new GameBuild(super.getField(GameBuild.obfuscatedClassName,"ai", []));
	}
	static getLIVE(){
		return new GameBuild(super.getField(GameBuild.obfuscatedClassName,"ak", []));
	}
	static getWIP(){
		return new GameBuild(super.getField(GameBuild.obfuscatedClassName,"ax", []));
	}
	static getField2491(){
		return  super.getField(GameBuild.obfuscatedClassName,"ge", []);
	}
	static getField2490(){
		return  super.getField(GameBuild.obfuscatedClassName,"bk", ['int', 2026339885]);
	}
	getName(){
		return  super.getField(GameBuild.obfuscatedClassName,"ah", []);
	}
	getBuildId(){
		return  super.getField(GameBuild.obfuscatedClassName,"as", ['int', 506924087]);
	}

}
module.exports = GameBuild;
