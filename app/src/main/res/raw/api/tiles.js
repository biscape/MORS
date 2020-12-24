const Interceptor = require('./core/apicore.js');
const Archive = require('./archive.js');


class Tiles extends Interceptor {
	static obfuscatedClassName = "iu";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Tiles.obfuscatedClassName);
	}

	static getField3453(){
		return  super.getField(Tiles.obfuscatedClassName,"ac", ['int', 251187833]);
	}
	static getField3455(){
		return  super.getField(Tiles.obfuscatedClassName,"ae", []);
	}
	static getField3456(){
		return  super.getField(Tiles.obfuscatedClassName,"af", []);
	}
	static getField3457(){
		return  super.getField(Tiles.obfuscatedClassName,"ag", []);
	}
	static getField3458(){
		return  super.getField(Tiles.obfuscatedClassName,"ah", []);
	}
	static getField3460(){
		return  super.getField(Tiles.obfuscatedClassName,"aj", []);
	}
	static getField3462(){
		return  super.getField(Tiles.obfuscatedClassName,"ao", []);
	}
	static getField3463(){
		return  super.getField(Tiles.obfuscatedClassName,"aq", []);
	}
	static getField3464(){
		return  super.getField(Tiles.obfuscatedClassName,"as", []);
	}
	static getField3466(){
		return  super.getField(Tiles.obfuscatedClassName,"au", ['int', 6693225]);
	}
	static getField3469(){
		return  super.getField(Tiles.obfuscatedClassName,"az", []);
	}
	static getField3472(){
		return new Archive(super.getField(Tiles.obfuscatedClassName,"dj", []));
	}
	static getField3454(){
		return  super.getField(Tiles.obfuscatedClassName,"ad", []);
	}
	static getField3459(){
		return  super.getField(Tiles.obfuscatedClassName,"ai", ['int', 524657975]);
	}
	static getTiles_heights(){
		return  super.getField(Tiles.obfuscatedClassName,"ak", []);
	}
	static getField3465(){
		return  super.getField(Tiles.obfuscatedClassName,"at", []);
	}
	static getField3467(){
		return  super.getField(Tiles.obfuscatedClassName,"av", []);
	}
	static getField3468(){
		return  super.getField(Tiles.obfuscatedClassName,"ax", []);
	}

	static onMethod5611(todo){
		super.onMethodExecution(Tiles.obfuscatedClassName,"fv", todo, []);
	}
	static onMethod5561(todo){
		super.onMethodExecution(Tiles.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = Tiles;
