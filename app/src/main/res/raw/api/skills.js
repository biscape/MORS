const class76 = require('./class76.js');
const Interceptor = require('./core/apicore.js');
const Archive = require('./archive.js');


class Skills extends Interceptor {
	static obfuscatedClassName = "gy";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Skills.obfuscatedClassName);
	}

	static getSkills_enabled(){
		return  super.getField(Skills.obfuscatedClassName,"ae", []);
	}
	static getField3152(){
		return new class76(super.getField(Skills.obfuscatedClassName,"ku", []));
	}
	static getSkills_experienceTable(){
		return  super.getField(Skills.obfuscatedClassName,"ai", []);
	}
	static getField3150(){
		return new Archive(super.getField(Skills.obfuscatedClassName,"df", []));
	}
	static getField3151(){
		return  super.getField(Skills.obfuscatedClassName,"dh", []);
	}

	static onMethod4886(todo){
		super.onMethodExecution(Skills.obfuscatedClassName,"ay", todo, []);
	}
	static onMethod4887(todo){
		super.onMethodExecution(Skills.obfuscatedClassName,"ds", todo, []);
	}
	static onMethod4888(todo){
		super.onMethodExecution(Skills.obfuscatedClassName,"dw", todo, []);
	}
}
module.exports = Skills;
