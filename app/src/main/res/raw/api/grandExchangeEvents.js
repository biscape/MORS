const Interceptor = require('./core/apicore.js');


class GrandExchangeEvents extends Interceptor {
	static obfuscatedClassName = "nw";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, GrandExchangeEvents.obfuscatedClassName);
	}

	static getGrandExchangeEvents_ageComparator(){
		return new Comparator(super.getField(GrandExchangeEvents.obfuscatedClassName,"ae", []));
	}
	static getGrandExchangeEvents_quantityComparator(){
		return new Comparator(super.getField(GrandExchangeEvents.obfuscatedClassName,"ah", []));
	}
	static getGrandExchangeEvents_priceComparator(){
		return new Comparator(super.getField(GrandExchangeEvents.obfuscatedClassName,"ai", []));
	}
	static getGrandExchangeEvents_nameComparator(){
		return new Comparator(super.getField(GrandExchangeEvents.obfuscatedClassName,"ax", []));
	}

}
module.exports = GrandExchangeEvents;
