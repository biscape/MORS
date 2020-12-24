const PcmPlayer = require('./pcmPlayer.js');
const ScriptEvent = require('./scriptEvent.js');
const class19 = require('./class19.js');
const Archive = require('./archive.js');
const class264 = require('./class264.js');


class class263 extends class19 {
	static obfuscatedClassName = "bc";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class263.obfuscatedClassName);
	}

	static getField4627(){
		return new PcmPlayer(super.getField(class263.obfuscatedClassName,"ph", []));
	}
	static getField4626(){
		return new Archive(super.getField(class263.obfuscatedClassName,"do", []));
	}
	getField4628(){
		return new ScriptEvent(super.getField(class263.obfuscatedClassName,"ae", []));
	}
	getField4629(){
		return new class264(super.getField(class263.obfuscatedClassName,"ak", []));
	}

	static onVmethod7589(todo){
		super.onMethodExecution(class263.obfuscatedClassName,"ae", todo, []);
	}
	static onOpen(todo){
		super.onMethodExecution(class263.obfuscatedClassName,"ay", todo, []);
	}
	static onVmethod7592(todo){
		super.onMethodExecution(class263.obfuscatedClassName,"ai", todo, []);
	}
	static onVmethod7594(todo){
		super.onMethodExecution(class263.obfuscatedClassName,"ak", todo, []);
	}
	static onVmethod7604(todo){
		super.onMethodExecution(class263.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod7586(todo){
		super.onMethodExecution(class263.obfuscatedClassName,"ah", todo, []);
	}
}
module.exports = class263;
