const BufferedFile = require('./bufferedFile.js');
const Interceptor = require('./core/apicore.js');


class class197 extends Interceptor {
	static obfuscatedClassName = "my";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class197.obfuscatedClassName);
	}

	static getJagexCache_dat2File(){
		return new BufferedFile(super.getField(class197.obfuscatedClassName,"af", []));
	}
	static getField3915(){
		return new BufferedFile(super.getField(class197.obfuscatedClassName,"aq", []));
	}
	static getUserHomeDirectory(){
		return new File(super.getField(class197.obfuscatedClassName,"ar", []));
	}
	static getField3918(){
		return  super.getField(class197.obfuscatedClassName,"aw", []);
	}
	static getCacheDir(){
		return new File(super.getField(class197.obfuscatedClassName,"ax", []));
	}
	static getJagexCache_randomDat(){
		return new BufferedFile(super.getField(class197.obfuscatedClassName,"ab", []));
	}

}
module.exports = class197;
