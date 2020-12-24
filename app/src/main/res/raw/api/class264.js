const Rasterizer3D = require('./rasterizer3D.js');
const class31 = require('./class31.js');
const Varcs = require('./varcs.js');
const Archive = require('./archive.js');


class class264 extends Rasterizer3D {
	static obfuscatedClassName = "bi";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class264.obfuscatedClassName);
	}

	static getField4632(){
		return  super.getField(class264.obfuscatedClassName,"aj", []);
	}
	static getField4634(){
		return new Archive(super.getField(class264.obfuscatedClassName,"du", []));
	}
	getField4635(){
		return new Varcs(super.getField(class264.obfuscatedClassName,"ah", []));
	}
	getField4636(){
		return  super.getField(class264.obfuscatedClassName,"as", []);
	}
	getField4637(){
		return new class31(super.getField(class264.obfuscatedClassName,"ax", []));
	}

	static onMethod7610(todo){
		super.onMethodExecution(class264.obfuscatedClassName,"aa", todo, []);
	}
	static onVmethod7613(todo){
		super.onMethodExecution(class264.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod7615(todo){
		super.onMethodExecution(class264.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod7624(todo){
		super.onMethodExecution(class264.obfuscatedClassName,"as", todo, []);
	}
	static onVmethod7616(todo){
		super.onMethodExecution(class264.obfuscatedClassName,"ai", todo, []);
	}
	static onVmethod7646(todo){
		super.onMethodExecution(class264.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod7629(todo){
		super.onMethodExecution(class264.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod7607(todo){
		super.onMethodExecution(class264.obfuscatedClassName,"ae", todo, []);
	}
	static onAlignWidgetPosition(todo){
		super.onMethodExecution(class264.obfuscatedClassName,"fp", todo, []);
	}
}
module.exports = class264;
