const Animation = require('./animation.js');
const DualNode = require('./dualNode.js');


class Frames extends DualNode {
	static obfuscatedClassName = "bf";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Frames.obfuscatedClassName);
	}

	static getField6598(){
		return  super.getField(Frames.obfuscatedClassName,"ay", []);
	}
	getFrames(){
		return  super.getField(Frames.obfuscatedClassName,"ak", []);
	}

	static onHasAlphaTransform(todo){
		super.onMethodExecution(Frames.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod12203(todo){
		super.onMethodExecution(Frames.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod12205(todo){
		super.onMethodExecution(Frames.obfuscatedClassName,"cq", todo, []);
	}
}
module.exports = Frames;
