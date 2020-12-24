const Interceptor = require('./core/apicore.js');
const class198 = require('./class198.js');
const UrlRequester = require('./urlRequester.js');
const class133 = require('./class133.js');
const UrlRequest = require('./urlRequest.js');


class class141 extends Interceptor {
	static obfuscatedClassName = "jl";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class141.obfuscatedClassName);
	}

	static getField3579(){
		return new class198(super.getField(class141.obfuscatedClassName,"rn", []));
	}
	getField3580(){
		return new UrlRequester(super.getField(class141.obfuscatedClassName,"ae", []));
	}
	getField3581(){
		return  super.getField(class141.obfuscatedClassName,"ah", []);
	}
	getField3584(){
		return  super.getField(class141.obfuscatedClassName,"as", []);
	}
	getField3582(){
		return new UrlRequest(super.getField(class141.obfuscatedClassName,"ai", []));
	}
	getField3583(){
		return new URL(super.getField(class141.obfuscatedClassName,"ak", []));
	}
	getField3585(){
		return new class133(super.getField(class141.obfuscatedClassName,"ax", []));
	}

	static onMethod5953(todo){
		super.onMethodExecution(class141.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod5955(todo){
		super.onMethodExecution(class141.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod5964(todo){
		super.onMethodExecution(class141.obfuscatedClassName,"as", todo, []);
	}
	static onMethod5956(todo){
		super.onMethodExecution(class141.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod5958(todo){
		super.onMethodExecution(class141.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod5966(todo){
		super.onMethodExecution(class141.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = class141;
