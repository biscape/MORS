const Coord = require('./coord.js');
const Interceptor = require('./core/apicore.js');


class WorldMapArea extends Interceptor {
	static obfuscatedClassName = "ds";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapArea.obfuscatedClassName);
	}

	getField2395(){
		return new Coord(super.getField(WorldMapArea.obfuscatedClassName,"aa", []));
	}
	getField2397(){
		return  super.getField(WorldMapArea.obfuscatedClassName,"af", ['int', 982807091]);
	}
	getInternalName(){
		return  super.getField(WorldMapArea.obfuscatedClassName,"ah", []);
	}
	getField2399(){
		return  super.getField(WorldMapArea.obfuscatedClassName,"aj", ['int', 19893611]);
	}
	getField2400(){
		return  super.getField(WorldMapArea.obfuscatedClassName,"al", ['int', 996925815]);
	}
	getField2401(){
		return  super.getField(WorldMapArea.obfuscatedClassName,"am", ['int', 1327147737]);
	}
	getIsMain(){
		return  super.getField(WorldMapArea.obfuscatedClassName,"an", []);
	}
	getField2403(){
		return  super.getField(WorldMapArea.obfuscatedClassName,"aq", ['int', 1267080443]);
	}
	getField2404(){
		return  super.getField(WorldMapArea.obfuscatedClassName,"as", []);
	}
	getSections(){
		return new LinkedList(super.getField(WorldMapArea.obfuscatedClassName,"ay", []));
	}
	getField2405(){
		return  super.getField(WorldMapArea.obfuscatedClassName,"ax", ['int', 2067726281]);
	}
	getField2396(){
		return  super.getField(WorldMapArea.obfuscatedClassName,"ab", ['int', 29196757]);
	}

	static onPosition(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"aa", todo, []);
	}
	static onSetBounds(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"af", todo, []);
	}
	static onMethod3766(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"ag", todo, []);
	}
	static onMethod3767(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"ah", todo, []);
	}
	static onGetIsMain(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"am", todo, []);
	}
	static onGetOrigin(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"an", todo, []);
	}
	static onMethod3772(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"ao", todo, []);
	}
	static onMethod3773(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"ap", todo, []);
	}
	static onMethod3775(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"ar", todo, []);
	}
	static onMethod3776(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"as", todo, []);
	}
	static onMethod3780(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"aw", todo, []);
	}
	static onMethod3782(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"az", todo, []);
	}
	static onMethod3764(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"ad", todo, []);
	}
	static onMethod3777(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"at", todo, []);
	}
	static onMethod3779(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"av", todo, []);
	}
	static onMethod3760(todo){
		super.onMethodExecution(WorldMapArea.obfuscatedClassName,"am", todo, []);
	}
}
module.exports = WorldMapArea;
