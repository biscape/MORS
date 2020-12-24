const Interceptor = require('./core/apicore.js');


class Task extends Interceptor {
	static obfuscatedClassName = "mt";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Task.obfuscatedClassName);
	}

	getResult(){
		return  super.getField(Task.obfuscatedClassName,"aa", []);
	}
	getStatus(){
		return  super.getField(Task.obfuscatedClassName,"ah", []);
	}
	getIntArgument(){
		return  super.getField(Task.obfuscatedClassName,"aj", []);
	}
	getObjectArgument(){
		return  super.getField(Task.obfuscatedClassName,"al", []);
	}
	getType(){
		return  super.getField(Task.obfuscatedClassName,"as", ['int', 1549141807]);
	}
	getNext(){
		return new Task(super.getField(Task.obfuscatedClassName,"ak", []));
	}

}
module.exports = Task;
