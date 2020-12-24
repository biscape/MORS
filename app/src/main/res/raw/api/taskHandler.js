const Task = require('./task.js');
const Interceptor = require('./core/apicore.js');


class TaskHandler extends Interceptor {
	static obfuscatedClassName = "mr";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, TaskHandler.obfuscatedClassName);
	}

	static getJavaVersion(){
		return  super.getField(TaskHandler.obfuscatedClassName,"ae", []);
	}
	static getJavaVendor(){
		return  super.getField(TaskHandler.obfuscatedClassName,"ak", []);
	}
	getThread(){
		return new Thread(super.getField(TaskHandler.obfuscatedClassName,"ah", []));
	}
	getIsClosed(){
		return  super.getField(TaskHandler.obfuscatedClassName,"as", []);
	}
	getCurrent(){
		return new Task(super.getField(TaskHandler.obfuscatedClassName,"ai", []));
	}
	getTask(){
		return new Task(super.getField(TaskHandler.obfuscatedClassName,"ax", []));
	}

	static onClose(todo){
		super.onMethodExecution(TaskHandler.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod6699(todo){
		super.onMethodExecution(TaskHandler.obfuscatedClassName,"ah", todo, []);
	}
	static onNewTask(todo){
		super.onMethodExecution(TaskHandler.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod6709(todo){
		super.onMethodExecution(TaskHandler.obfuscatedClassName,"ax", todo, []);
	}
	static onRun(todo){
		super.onMethodExecution(TaskHandler.obfuscatedClassName,"", todo, []);
	}
}
module.exports = TaskHandler;
