const Interceptor = require('./core/apicore.js');
const ArchiveDisk = require('./archiveDisk.js');


class class45 extends Interceptor {
	static obfuscatedClassName = "cu";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class45.obfuscatedClassName);
	}

	static getMasterDisk(){
		return new ArchiveDisk(super.getField(class45.obfuscatedClassName,"rz", []));
	}
	static getField2282(){
		return new class45(super.getField(class45.obfuscatedClassName,"ae", []));
	}
	static getField2283(){
		return new class45(super.getField(class45.obfuscatedClassName,"ak", []));
	}
	getField2289(){
		return  super.getField(class45.obfuscatedClassName,"ai", ['int', 48927879]);
	}

	static onMethod3635(todo){
		super.onMethodExecution(class45.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod3637(todo){
		super.onMethodExecution(class45.obfuscatedClassName,"br", todo, []);
	}
	static onMethod3636(todo){
		super.onMethodExecution(class45.obfuscatedClassName,"av", todo, []);
	}
	static onRunScript(todo){
		super.onMethodExecution(class45.obfuscatedClassName,"hd", todo, []);
	}
}
module.exports = class45;
