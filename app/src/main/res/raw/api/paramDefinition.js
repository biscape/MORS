const class144 = require('./class144.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');
const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');


class ParamDefinition extends DualNode {
	static obfuscatedClassName = "dz";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ParamDefinition.obfuscatedClassName);
	}

	static getParamDefinition_cached(){
		return new EvictingDualNodeHashTable(super.getField(ParamDefinition.obfuscatedClassName,"ae", []));
	}
	static getField7083(){
		return new class144(super.getField(ParamDefinition.obfuscatedClassName,"ni", []));
	}
	static getParamDefinition_archive(){
		return new AbstractArchive(super.getField(ParamDefinition.obfuscatedClassName,"ak", []));
	}
	static getField7082(){
		return  super.getField(ParamDefinition.obfuscatedClassName,"hl", ['int', 129041221]);
	}
	getField7084(){
		return  super.getField(ParamDefinition.obfuscatedClassName,"ah", []);
	}
	getAutoDisable(){
		return  super.getField(ParamDefinition.obfuscatedClassName,"as", []);
	}
	getField7085(){
		return new char(super.getField(ParamDefinition.obfuscatedClassName,"ai", []));
	}
	getField7087(){
		return  super.getField(ParamDefinition.obfuscatedClassName,"ax", ['int', 972476921]);
	}

	static onDecodeNext(todo){
		super.onMethodExecution(ParamDefinition.obfuscatedClassName,"ah", todo, []);
	}
	static onPostDecode(todo){
		super.onMethodExecution(ParamDefinition.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod13233(todo){
		super.onMethodExecution(ParamDefinition.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod13221(todo){
		super.onMethodExecution(ParamDefinition.obfuscatedClassName,"au", todo, []);
	}
	static onMethod13223(todo){
		super.onMethodExecution(ParamDefinition.obfuscatedClassName,"bj", todo, []);
	}
	static onMethod13222(todo){
		super.onMethodExecution(ParamDefinition.obfuscatedClassName,"av", todo, []);
	}
}
module.exports = ParamDefinition;
