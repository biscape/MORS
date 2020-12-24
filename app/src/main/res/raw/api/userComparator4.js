const Interceptor = require('./core/apicore.js');
const AbstractArchive = require('./abstractArchive.js');


class UserComparator4 extends Interceptor {
	static obfuscatedClassName = "ng";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, UserComparator4.obfuscatedClassName);
	}

	static getSequenceDefinition_skeletonsArchive(){
		return new AbstractArchive(super.getField(UserComparator4.obfuscatedClassName,"ai", []));
	}

	static onCompare_bridged(todo){
		super.onMethodExecution(UserComparator4.obfuscatedClassName,"ak", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(UserComparator4.obfuscatedClassName,"", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(UserComparator4.obfuscatedClassName,"", todo, []);
	}
	static onMethod6825(todo){
		super.onMethodExecution(UserComparator4.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = UserComparator4;
