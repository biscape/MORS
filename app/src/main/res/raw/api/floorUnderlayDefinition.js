const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class FloorUnderlayDefinition extends DualNode {
	static obfuscatedClassName = "dw";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, FloorUnderlayDefinition.obfuscatedClassName);
	}

	static getField7062(){
		return  super.getField(FloorUnderlayDefinition.obfuscatedClassName,"ae", []);
	}
	static getField7063(){
		return new FloorUnderlayDefinition(super.getField(FloorUnderlayDefinition.obfuscatedClassName,"ai", []));
	}
	static getField7064(){
		return new AbstractArchive(super.getField(FloorUnderlayDefinition.obfuscatedClassName,"ak", []));
	}
	getHue(){
		return  super.getField(FloorUnderlayDefinition.obfuscatedClassName,"ah", ['int', 1682871565]);
	}
	getLightness(){
		return  super.getField(FloorUnderlayDefinition.obfuscatedClassName,"aj", ['int', 240644261]);
	}
	getHueMultiplier(){
		return  super.getField(FloorUnderlayDefinition.obfuscatedClassName,"al", ['int', 1691485369]);
	}
	getSaturation(){
		return  super.getField(FloorUnderlayDefinition.obfuscatedClassName,"as", ['int', 1147005773]);
	}
	getRgb(){
		return  super.getField(FloorUnderlayDefinition.obfuscatedClassName,"ax", ['int', 1100305707]);
	}

	static onDecodeNext(todo){
		super.onMethodExecution(FloorUnderlayDefinition.obfuscatedClassName,"ah", todo, []);
	}
	static onSetHsl(todo){
		super.onMethodExecution(FloorUnderlayDefinition.obfuscatedClassName,"as", todo, []);
	}
	static onMethod13195(todo){
		super.onMethodExecution(FloorUnderlayDefinition.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod13201(todo){
		super.onMethodExecution(FloorUnderlayDefinition.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod13192(todo){
		super.onMethodExecution(FloorUnderlayDefinition.obfuscatedClassName,"bk", todo, []);
	}
}
module.exports = FloorUnderlayDefinition;
