const Entity = require('./entity.js');


class TileItem extends Entity {
	static obfuscatedClassName = "jp";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, TileItem.obfuscatedClassName);
	}

	getField7614(){
		return  super.getField(TileItem.obfuscatedClassName,"ae", ['int', 1346917971]);
	}
	getId(){
		return  super.getField(TileItem.obfuscatedClassName,"ak", ['int', 1433895037]);
	}

	static onGetModel(todo){
		super.onMethodExecution(TileItem.obfuscatedClassName,"ag", todo, []);
	}
	static onMethod14481(todo){
		super.onMethodExecution(TileItem.obfuscatedClassName,"ar", todo, []);
	}
}
module.exports = TileItem;
