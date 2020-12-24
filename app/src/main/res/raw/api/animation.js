const Skeleton = require('./skeleton.js');
const Interceptor = require('./core/apicore.js');


class Animation extends Interceptor {
	static obfuscatedClassName = "bg";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Animation.obfuscatedClassName);
	}

	static getField430(){
		return  super.getField(Animation.obfuscatedClassName,"ae", []);
	}
	static getField431(){
		return  super.getField(Animation.obfuscatedClassName,"ai", []);
	}
	static getField432(){
		return  super.getField(Animation.obfuscatedClassName,"ak", []);
	}
	static getField433(){
		return  super.getField(Animation.obfuscatedClassName,"ax", []);
	}
	getField434(){
		return  super.getField(Animation.obfuscatedClassName,"aa", []);
	}
	getHasAlphaTransform(){
		return  super.getField(Animation.obfuscatedClassName,"af", []);
	}
	getSkeleton(){
		return new Skeleton(super.getField(Animation.obfuscatedClassName,"ah", []));
	}
	getTransformSkeletonLabels(){
		return  super.getField(Animation.obfuscatedClassName,"aj", []);
	}
	getField439(){
		return  super.getField(Animation.obfuscatedClassName,"al", []);
	}
	getTransformCount(){
		return  super.getField(Animation.obfuscatedClassName,"as", []);
	}
	getField435(){
		return  super.getField(Animation.obfuscatedClassName,"ab", []);
	}

}
module.exports = Animation;
