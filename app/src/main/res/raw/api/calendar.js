const Interceptor = require('./core/apicore.js');


class Calendar extends Interceptor {
	static obfuscatedClassName = "np";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Calendar.obfuscatedClassName);
	}

	static getDAYS_OF_THE_WEEK(){
		return  super.getField(Calendar.obfuscatedClassName,"ae", []);
	}
	static getCalendar_calendar(){
		return new java.util.Calendar(super.getField(Calendar.obfuscatedClassName,"ai", []));
	}
	static getMONTH_NAMES_ENGLISH_GERMAN(){
		return  super.getField(Calendar.obfuscatedClassName,"ak", []);
	}

}
module.exports = Calendar;
