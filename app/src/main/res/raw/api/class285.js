const class75 = require('./class75.js');
const Widget = require('./widget.js');
const Archive = require('./archive.js');
const UserList = require('./userList.js');
const LoginType = require('./loginType.js');


class class285 extends UserList {
	static obfuscatedClassName = "eh";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class285.obfuscatedClassName);
	}

	static getField5948(){
		return new Archive(super.getField(class285.obfuscatedClassName,"cl", []));
	}
	static getMousedOverWidgetIf1(){
		return new Widget(super.getField(class285.obfuscatedClassName,"kt", []));
	}
	getField5950(){
		return new LoginType(super.getField(class285.obfuscatedClassName,"aa", []));
	}
	getField5952(){
		return new class75(super.getField(class285.obfuscatedClassName,"af", []));
	}
	getField5951(){
		return  super.getField(class285.obfuscatedClassName,"ab", ['int', 1925869005]);
	}

	static onNewTypedArray(todo){
		super.onMethodExecution(class285.obfuscatedClassName,"at", todo, []);
	}
	static onMethod10474(todo){
		super.onMethodExecution(class285.obfuscatedClassName,"aq", todo, []);
	}
	static onMethod10473(todo){
		super.onMethodExecution(class285.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class285;
