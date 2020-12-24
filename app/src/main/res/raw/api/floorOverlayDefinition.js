const AbstractArchive = require('./abstractArchive.js');
const DualNode = require('./dualNode.js');


class FloorOverlayDefinition extends DualNode {
	static obfuscatedClassName = "ee";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, FloorOverlayDefinition.obfuscatedClassName);
	}

	static getField7099(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"ae", []);
	}
	static getField7104(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"ed", ['int', 1548482689]);
	}
	static getField7100(){
		return new FloorOverlayDefinition(super.getField(FloorOverlayDefinition.obfuscatedClassName,"ai", []));
	}
	static getField7101(){
		return new AbstractArchive(super.getField(FloorOverlayDefinition.obfuscatedClassName,"ak", []));
	}
	getSaturation(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"aa", ['int', 1172920153]);
	}
	getSecondaryHue(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"af", []);
	}
	getField7110(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"ah", ['int', 1850661179]);
	}
	getSecondaryRgb(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"aj", ['int', 1711480841]);
	}
	getHue(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"al", ['int', 630350417]);
	}
	getSecondaryLightness(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"am", ['int', 1522628021]);
	}
	getSecondarySaturation(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"aq", ['int', 271504941]);
	}
	getField7115(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"as", []);
	}
	getPrimaryRgb(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"ax", ['int', 1932888053]);
	}
	getLightness(){
		return  super.getField(FloorOverlayDefinition.obfuscatedClassName,"ab", ['int', 854920883]);
	}

	static onMethod13270(todo){
		super.onMethodExecution(FloorOverlayDefinition.obfuscatedClassName,"ah", todo, []);
	}
	static onSetHsl(todo){
		super.onMethodExecution(FloorOverlayDefinition.obfuscatedClassName,"as", todo, []);
	}
	static onPostDecode(todo){
		super.onMethodExecution(FloorOverlayDefinition.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod13279(todo){
		super.onMethodExecution(FloorOverlayDefinition.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod13266(todo){
		super.onMethodExecution(FloorOverlayDefinition.obfuscatedClassName,"br", todo, []);
	}
	static onMethod13265(todo){
		super.onMethodExecution(FloorOverlayDefinition.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = FloorOverlayDefinition;
