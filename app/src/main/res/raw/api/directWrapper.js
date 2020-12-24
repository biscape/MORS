const Wrapper = require('./wrapper.js');


class DirectWrapper extends Wrapper {
	static obfuscatedClassName = "gv";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, DirectWrapper.obfuscatedClassName);
	}

	getObj(){
		return  super.getField(DirectWrapper.obfuscatedClassName,"ak", []);
	}

	static onIsSoft(todo){
		super.onMethodExecution(DirectWrapper.obfuscatedClassName,"ae", todo, []);
	}
	static onGet(todo){
		super.onMethodExecution(DirectWrapper.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = DirectWrapper;
