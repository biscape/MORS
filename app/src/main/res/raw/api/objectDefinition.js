const IterableNodeHashTable = require('./iterableNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');
const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const ModelData = require('./modelData.js');


class ObjectDefinition extends DualNode {
	static obfuscatedClassName = "de";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ObjectDefinition.obfuscatedClassName);
	}

	static getObjectDefinition_archive(){
		return new AbstractArchive(super.getField(ObjectDefinition.obfuscatedClassName,"ae", []));
	}
	static getField6866(){
		return new EvictingDualNodeHashTable(super.getField(ObjectDefinition.obfuscatedClassName,"ah", []));
	}
	static getObjectDefinition_cachedModels(){
		return new EvictingDualNodeHashTable(super.getField(ObjectDefinition.obfuscatedClassName,"aj", []));
	}
	static getField6870(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"al", []);
	}
	static getObjectDefinition_cachedEntities(){
		return new EvictingDualNodeHashTable(super.getField(ObjectDefinition.obfuscatedClassName,"as", []));
	}
	static getField6873(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"hq", ['int', 961174599]);
	}
	static getField6874(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"hs", ['int', 562544571]);
	}
	static getField6867(){
		return new AbstractArchive(super.getField(ObjectDefinition.obfuscatedClassName,"ai", []));
	}
	static getField6869(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"ak", []);
	}
	static getObjectDefinition_cached(){
		return new EvictingDualNodeHashTable(super.getField(ObjectDefinition.obfuscatedClassName,"ax", []));
	}
	getId(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"aa", ['int', 361750757]);
	}
	getField6877(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"ac", ['int', 2048568147]);
	}
	getModels(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"af", []);
	}
	getField6880(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"ag", []);
	}
	getField6881(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"am", []);
	}
	getField6882(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"an", []);
	}
	getField6883(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"ao", ['int', 1214406849]);
	}
	getField6884(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"ap", ['int', 733133117]);
	}
	getField6885(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"aq", []);
	}
	getField6886(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"ar", ['int', 1893373295]);
	}
	getField6888(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"au", ['int', 1904196879]);
	}
	getField6890(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"aw", []);
	}
	getField6891(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"ay", []);
	}
	getField6892(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"az", []);
	}
	getField6893(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"ba", ['int', 909637585]);
	}
	getField6894(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bb", ['int', 1076189071]);
	}
	getField6896(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bd", ['int', 530669737]);
	}
	getField6897(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"be", []);
	}
	getField6899(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bg", []);
	}
	getField6900(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bh", []);
	}
	getField6902(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bj", ['int', 937989983]);
	}
	getField6905(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bm", []);
	}
	getField6906(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bn", ['int', 416055785]);
	}
	getField6907(){
		return new IterableNodeHashTable(super.getField(ObjectDefinition.obfuscatedClassName,"bo", []));
	}
	getField6908(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bp", ['int', 1526028445]);
	}
	getField6909(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bq", []);
	}
	getField6910(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"br", ['int', 202334613]);
	}
	getField6912(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bt", ['int', 944130853]);
	}
	getField6916(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bx", ['int', 15718927]);
	}
	getField6917(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"by", []);
	}
	getNonFlatShading(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"ad", []);
	}
	getField6887(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"at", ['int', 1720484895]);
	}
	getField6889(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"av", ['int', 1483725117]);
	}
	getField6895(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bc", ['int', 1669991957]);
	}
	getField6901(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bi", ['int', 1464330499]);
	}
	getField6904(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bl", ['int', 1701684345]);
	}
	getField6911(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bs", []);
	}
	getField6913(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bu", ['int', 1586242851]);
	}
	getTransforms(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bv", []);
	}
	getField6918(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bz", ['int', 626986557]);
	}
	getField6876(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"ab", []);
	}
	getMapIconId(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bf", ['int', 1171719155]);
	}
	getField6915(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bw", ['int', 1800195549]);
	}
	getField6903(){
		return  super.getField(ObjectDefinition.obfuscatedClassName,"bk", ['int', 1771138669]);
	}

	static onMethod12880(todo){
		super.onMethodExecution(ObjectDefinition.obfuscatedClassName,"af", todo, []);
	}
	static onMethod12882(todo){
		super.onMethodExecution(ObjectDefinition.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod12884(todo){
		super.onMethodExecution(ObjectDefinition.obfuscatedClassName,"aj", todo, []);
	}
	static onGetModel(todo){
		super.onMethodExecution(ObjectDefinition.obfuscatedClassName,"al", todo, []);
	}
	static onMethod12888(todo){
		super.onMethodExecution(ObjectDefinition.obfuscatedClassName,"aq", todo, []);
	}
	static onMethod12893(todo){
		super.onMethodExecution(ObjectDefinition.obfuscatedClassName,"aw", todo, []);
	}
	static onMethod12883(todo){
		super.onMethodExecution(ObjectDefinition.obfuscatedClassName,"ai", todo, []);
	}
	static onDecodeNext(todo){
		super.onMethodExecution(ObjectDefinition.obfuscatedClassName,"ax", todo, []);
	}
	static onGetModelDynamic(todo){
		super.onMethodExecution(ObjectDefinition.obfuscatedClassName,"ab", todo, []);
	}
}
module.exports = ObjectDefinition;
