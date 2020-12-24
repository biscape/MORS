const class61 = require('./class61.js');
const Interceptor = require('./core/apicore.js');


class UserList extends Interceptor {
	static obfuscatedClassName = "ew";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, UserList.obfuscatedClassName);
	}

	getField2448(){
		return  super.getField(UserList.obfuscatedClassName,"ae", []);
	}
	getPreviousUsernamesMap(){
		return  super.getField(UserList.obfuscatedClassName,"ah", []);
	}
	getField2452(){
		return new Comparator(super.getField(UserList.obfuscatedClassName,"as", []));
	}
	getArray(){
		return  super.getField(UserList.obfuscatedClassName,"ai", []);
	}
	getCapacity(){
		return  super.getField(UserList.obfuscatedClassName,"ak", ['int', 1778409807]);
	}
	getUsernamesMap(){
		return  super.getField(UserList.obfuscatedClassName,"ax", []);
	}

	static onGetByUsername(todo){
		super.onMethodExecution(UserList.obfuscatedClassName,"ah", todo, []);
	}
	static onGetByPreviousUsername(todo){
		super.onMethodExecution(UserList.obfuscatedClassName,"aj", todo, []);
	}
	static onGetByCurrentUsername(todo){
		super.onMethodExecution(UserList.obfuscatedClassName,"as", todo, []);
	}
	static onNewTypedArray(todo){
		super.onMethodExecution(UserList.obfuscatedClassName,"at", todo, []);
	}
	static onContains(todo){
		super.onMethodExecution(UserList.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod3927(todo){
		super.onMethodExecution(UserList.obfuscatedClassName,"fw", todo, []);
	}
}
module.exports = UserList;
