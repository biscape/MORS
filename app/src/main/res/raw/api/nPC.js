const Actor = require('./actor.js');
const NPCDefinition = require('./nPCDefinition.js');


class NPC extends Actor {
	static obfuscatedClassName = "il";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, NPC.obfuscatedClassName);
	}

	getDefinition(){
		return new NPCDefinition(super.getField(NPC.obfuscatedClassName,"ak", []));
	}

	static onGetModel(todo){
		super.onMethodExecution(NPC.obfuscatedClassName,"ag", todo, []);
	}
	static onIsVisible(todo){
		super.onMethodExecution(NPC.obfuscatedClassName,"aq", todo, []);
	}
	static onMethod15534(todo){
		super.onMethodExecution(NPC.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod15533(todo){
		super.onMethodExecution(NPC.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod15536(todo){
		super.onMethodExecution(NPC.obfuscatedClassName,"bi", todo, []);
	}
}
module.exports = NPC;
