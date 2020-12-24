const Interceptor = require('./core/apicore.js');


class MouseWheel extends Interceptor {
	static obfuscatedClassName = "";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, MouseWheel.obfuscatedClassName);
	}


}
module.exports = MouseWheel;
