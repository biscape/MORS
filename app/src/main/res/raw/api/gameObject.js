const Interceptor = require('./core/apicore.js');
const Entity = require('./entity.js');


class GameObject extends Interceptor {
	static obfuscatedClassName = "co";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, GameObject.obfuscatedClassName);
	}

	getStartY(){
		return  super.getField(GameObject.obfuscatedClassName,"aa", ['int', 26151483]);
	}
	getHeight(){
		return  super.getField(GameObject.obfuscatedClassName,"ae", ['int', 1547503933]);
	}
	getField627(){
		return  super.getField(GameObject.obfuscatedClassName,"af", ['int', 662542809]);
	}
	getEntity(){
		return new Entity(super.getField(GameObject.obfuscatedClassName,"ah", []));
	}
	getStartX(){
		return  super.getField(GameObject.obfuscatedClassName,"aj", ['int', 826306239]);
	}
	getEndX(){
		return  super.getField(GameObject.obfuscatedClassName,"al", ['int', 1228405173]);
	}
	getTag(){
		return  super.getField(GameObject.obfuscatedClassName,"am", ['long', 7419227802727307225]);
	}
	getFlags(){
		return  super.getField(GameObject.obfuscatedClassName,"an", ['int', 137947079]);
	}
	getField635(){
		return  super.getField(GameObject.obfuscatedClassName,"aq", ['int', 920348767]);
	}
	getOrientation(){
		return  super.getField(GameObject.obfuscatedClassName,"as", ['int', 861553185]);
	}
	getCenterX(){
		return  super.getField(GameObject.obfuscatedClassName,"ai", ['int', 1333871279]);
	}
	getPlane(){
		return  super.getField(GameObject.obfuscatedClassName,"ak", ['int', 460680859]);
	}
	getCenterY(){
		return  super.getField(GameObject.obfuscatedClassName,"ax", ['int', 744337485]);
	}
	getEndY(){
		return  super.getField(GameObject.obfuscatedClassName,"ab", ['int', 1782140815]);
	}

	static onMethod1220(todo){
		super.onMethodExecution(GameObject.obfuscatedClassName,"as", todo, []);
	}
	static onMethod1221(todo){
		super.onMethodExecution(GameObject.obfuscatedClassName,"as", todo, []);
	}
}
module.exports = GameObject;
