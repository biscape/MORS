const IterableNodeDeque = require('./iterableNodeDeque.js');
const Entity = require('./entity.js');


class Actor extends Entity {
	static obfuscatedClassName = "in";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Actor.obfuscatedClassName);
	}

	getField7517(){
		return  super.getField(Actor.obfuscatedClassName,"an", []);
	}
	getField7518(){
		return  super.getField(Actor.obfuscatedClassName,"ba", []);
	}
	getIdleSequence(){
		return  super.getField(Actor.obfuscatedClassName,"bd", ['int', 1355976873]);
	}
	getField7523(){
		return  super.getField(Actor.obfuscatedClassName,"bh", []);
	}
	getX(){
		return  super.getField(Actor.obfuscatedClassName,"bj", ['int', 513787439]);
	}
	getField7527(){
		return  super.getField(Actor.obfuscatedClassName,"bn", ['int', 775383853]);
	}
	getField7529(){
		return  super.getField(Actor.obfuscatedClassName,"bq", ['int', 286078883]);
	}
	getField7530(){
		return  super.getField(Actor.obfuscatedClassName,"br", ['int', 1694732224]);
	}
	getField7542(){
		return  super.getField(Actor.obfuscatedClassName,"ce", ['int', 1686775401]);
	}
	getMovementSequence(){
		return  super.getField(Actor.obfuscatedClassName,"ck", ['int', 1649344219]);
	}
	getField7550(){
		return  super.getField(Actor.obfuscatedClassName,"cm", ['int', 2015437915]);
	}
	getField7552(){
		return  super.getField(Actor.obfuscatedClassName,"co", []);
	}
	getField7560(){
		return  super.getField(Actor.obfuscatedClassName,"cw", []);
	}
	getField7570(){
		return  super.getField(Actor.obfuscatedClassName,"dn", ['int', 1839442589]);
	}
	getField7576(){
		return  super.getField(Actor.obfuscatedClassName,"dx", ['int', 2110624105]);
	}
	getField7526(){
		return  super.getField(Actor.obfuscatedClassName,"bl", []);
	}
	getField7531(){
		return  super.getField(Actor.obfuscatedClassName,"bs", ['int', 204283925]);
	}
	getField7533(){
		return  super.getField(Actor.obfuscatedClassName,"bu", ['int', 57325253]);
	}
	getField7539(){
		return  super.getField(Actor.obfuscatedClassName,"cb", ['int', 1601229033]);
	}
	getField7541(){
		return new IterableNodeDeque(super.getField(Actor.obfuscatedClassName,"cd", []));
	}
	getField7544(){
		return  super.getField(Actor.obfuscatedClassName,"cg", []);
	}
	getSequence(){
		return  super.getField(Actor.obfuscatedClassName,"cn", ['int', 1793361247]);
	}
	getField7554(){
		return  super.getField(Actor.obfuscatedClassName,"cq", []);
	}
	getSequenceDelay(){
		return  super.getField(Actor.obfuscatedClassName,"cs", ['int', 1000787179]);
	}
	getField7557(){
		return  super.getField(Actor.obfuscatedClassName,"ct", ['int', 1785048439]);
	}
	getField7562(){
		return  super.getField(Actor.obfuscatedClassName,"cy", ['int', 95348223]);
	}
	getField7535(){
		return  super.getField(Actor.obfuscatedClassName,"bw", []);
	}
	getField7525(){
		return  super.getField(Actor.obfuscatedClassName,"bk", ['int', 302654365]);
	}
	getField7553(){
		return  super.getField(Actor.obfuscatedClassName,"cp", []);
	}

	static onIsVisible(todo){
		super.onMethodExecution(Actor.obfuscatedClassName,"aq", todo, []);
	}
}
module.exports = Actor;
