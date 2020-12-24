const Interceptor = require('./core/apicore.js');


class Coord extends Interceptor {
	static obfuscatedClassName = "af";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Coord.obfuscatedClassName);
	}

	static getField19(){
		return  super.getField(Coord.obfuscatedClassName,"an", ['int', 1834907755]);
	}
	getX(){
		return  super.getField(Coord.obfuscatedClassName,"ae", ['int', 974813367]);
	}
	getY(){
		return  super.getField(Coord.obfuscatedClassName,"ai", ['int', 708825123]);
	}
	getPlane(){
		return  super.getField(Coord.obfuscatedClassName,"ak", ['int', 1624535951]);
	}

	static onMethod42(todo){
		super.onMethodExecution(Coord.obfuscatedClassName,"ae", todo, []);
	}
	static onToString(todo){
		super.onMethodExecution(Coord.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod47(todo){
		super.onMethodExecution(Coord.obfuscatedClassName,"ak", todo, []);
	}
	static onEqualsCoord(todo){
		super.onMethodExecution(Coord.obfuscatedClassName,"equals", todo, []);
	}
	static onPacked(todo){
		super.onMethodExecution(Coord.obfuscatedClassName,"hashCode", todo, []);
	}
	static onToString(todo){
		super.onMethodExecution(Coord.obfuscatedClassName,"", todo, []);
	}
	static onMethod38(todo){
		super.onMethodExecution(Coord.obfuscatedClassName,"am", todo, []);
	}
	static onMethod39(todo){
		super.onMethodExecution(Coord.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = Coord;
