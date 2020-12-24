const Interceptor = require('./core/apicore.js');
const Entity = require('./entity.js');


class BoundaryObject extends Interceptor {
	static obfuscatedClassName = "bh";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, BoundaryObject.obfuscatedClassName);
	}

	static getField441(){
		return  super.getField(BoundaryObject.obfuscatedClassName,"am", []);
	}
	getFlags(){
		return  super.getField(BoundaryObject.obfuscatedClassName,"aa", ['int', 1240323061]);
	}
	getField445(){
		return  super.getField(BoundaryObject.obfuscatedClassName,"ae", ['int', 1944157225]);
	}
	getOrientationB(){
		return  super.getField(BoundaryObject.obfuscatedClassName,"ah", ['int', 2100634499]);
	}
	getEntity2(){
		return new Entity(super.getField(BoundaryObject.obfuscatedClassName,"aj", []));
	}
	getTag(){
		return  super.getField(BoundaryObject.obfuscatedClassName,"al", ['long', 7449342511925629921]);
	}
	getEntity1(){
		return new Entity(super.getField(BoundaryObject.obfuscatedClassName,"as", []));
	}
	getField447(){
		return  super.getField(BoundaryObject.obfuscatedClassName,"ai", ['int', 961544192]);
	}
	getTileHeight(){
		return  super.getField(BoundaryObject.obfuscatedClassName,"ak", ['int', 210694353]);
	}
	getOrientationA(){
		return  super.getField(BoundaryObject.obfuscatedClassName,"ax", ['int', 1778939813]);
	}

	static onMethod842(todo){
		super.onMethodExecution(BoundaryObject.obfuscatedClassName,"au", todo, []);
	}
	static onMethod844(todo){
		super.onMethodExecution(BoundaryObject.obfuscatedClassName,"bg", todo, []);
	}
}
module.exports = BoundaryObject;
