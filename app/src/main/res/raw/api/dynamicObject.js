const SequenceDefinition = require('./sequenceDefinition.js');
const IndexedSprite = require('./indexedSprite.js');
const Entity = require('./entity.js');


class DynamicObject extends Entity {
	static obfuscatedClassName = "ir";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, DynamicObject.obfuscatedClassName);
	}

	static getField7578(){
		return  super.getField(DynamicObject.obfuscatedClassName,"gp", []);
	}
	getCycleStart(){
		return  super.getField(DynamicObject.obfuscatedClassName,"aa", ['int', 1117444727]);
	}
	getType(){
		return  super.getField(DynamicObject.obfuscatedClassName,"ae", ['int', 19333225]);
	}
	getX(){
		return  super.getField(DynamicObject.obfuscatedClassName,"ah", ['int', 1348200215]);
	}
	getSequenceDefinition(){
		return new SequenceDefinition(super.getField(DynamicObject.obfuscatedClassName,"aj", []));
	}
	getFrame(){
		return  super.getField(DynamicObject.obfuscatedClassName,"al", ['int', 390776059]);
	}
	getY(){
		return  super.getField(DynamicObject.obfuscatedClassName,"as", ['int', 383429483]);
	}
	getOrientation(){
		return  super.getField(DynamicObject.obfuscatedClassName,"ai", ['int', 867300873]);
	}
	getId(){
		return  super.getField(DynamicObject.obfuscatedClassName,"ak", ['int', 1549722249]);
	}
	getPlane(){
		return  super.getField(DynamicObject.obfuscatedClassName,"ax", ['int', 732666163]);
	}

	static onGetModel(todo){
		super.onMethodExecution(DynamicObject.obfuscatedClassName,"ag", todo, []);
	}
}
module.exports = DynamicObject;
