const Interceptor = require('./core/apicore.js');


class WorldMapLabelSize extends Interceptor {
	static obfuscatedClassName = "cx";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapLabelSize.obfuscatedClassName);
	}

	static getWorldMapLabelSize_medium(){
		return new WorldMapLabelSize(super.getField(WorldMapLabelSize.obfuscatedClassName,"ae", []));
	}
	static getWorldMapLabelSize_large(){
		return new WorldMapLabelSize(super.getField(WorldMapLabelSize.obfuscatedClassName,"ai", []));
	}
	static getWorldMapLabelSize_small(){
		return new WorldMapLabelSize(super.getField(WorldMapLabelSize.obfuscatedClassName,"ak", []));
	}
	getField2343(){
		return  super.getField(WorldMapLabelSize.obfuscatedClassName,"ah", ['int', 1476070109]);
	}
	getField2344(){
		return  super.getField(WorldMapLabelSize.obfuscatedClassName,"as", ['int', 941052287]);
	}
	getField2345(){
		return  super.getField(WorldMapLabelSize.obfuscatedClassName,"ax", ['int', 2111981081]);
	}

	static onMethod3707(todo){
		super.onMethodExecution(WorldMapLabelSize.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod3698(todo){
		super.onMethodExecution(WorldMapLabelSize.obfuscatedClassName,"ac", todo, []);
	}
	static onMethod3706(todo){
		super.onMethodExecution(WorldMapLabelSize.obfuscatedClassName,"bp", todo, []);
	}
	static onMethod3699(todo){
		super.onMethodExecution(WorldMapLabelSize.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod3700(todo){
		super.onMethodExecution(WorldMapLabelSize.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod3702(todo){
		super.onMethodExecution(WorldMapLabelSize.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = WorldMapLabelSize;
