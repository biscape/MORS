const SequenceDefinition = require('./sequenceDefinition.js');
const Entity = require('./entity.js');


class GraphicsObject extends Entity {
	static obfuscatedClassName = "id";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, GraphicsObject.obfuscatedClassName);
	}

	static getField7506(){
		return  super.getField(GraphicsObject.obfuscatedClassName,"cs", []);
	}
	getFrameCycle(){
		return  super.getField(GraphicsObject.obfuscatedClassName,"aa", ['int', 909198041]);
	}
	getField7509(){
		return  super.getField(GraphicsObject.obfuscatedClassName,"ae", ['int', 1096875687]);
	}
	getField7510(){
		return  super.getField(GraphicsObject.obfuscatedClassName,"ah", ['int', 1503783665]);
	}
	getField7512(){
		return new SequenceDefinition(super.getField(GraphicsObject.obfuscatedClassName,"aj", []));
	}
	getFrame(){
		return  super.getField(GraphicsObject.obfuscatedClassName,"al", ['int', 2052446501]);
	}
	getField7515(){
		return  super.getField(GraphicsObject.obfuscatedClassName,"as", ['int', 2069835057]);
	}
	getField7511(){
		return  super.getField(GraphicsObject.obfuscatedClassName,"ai", ['int', 1359558703]);
	}
	getId(){
		return  super.getField(GraphicsObject.obfuscatedClassName,"ak", ['int', 2088471079]);
	}
	getField7516(){
		return  super.getField(GraphicsObject.obfuscatedClassName,"ax", ['int', 185432075]);
	}
	getIsFinished(){
		return  super.getField(GraphicsObject.obfuscatedClassName,"ab", []);
	}

	static onGetModel(todo){
		super.onMethodExecution(GraphicsObject.obfuscatedClassName,"ag", todo, []);
	}
	static onAdvance(todo){
		super.onMethodExecution(GraphicsObject.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod14439(todo){
		super.onMethodExecution(GraphicsObject.obfuscatedClassName,"as", todo, []);
	}
	static onMethod14440(todo){
		super.onMethodExecution(GraphicsObject.obfuscatedClassName,"as", todo, []);
	}
}
module.exports = GraphicsObject;
