const Interceptor = require('./core/apicore.js');


class GrandExchangeOfferWorldComparator extends Interceptor {
	static obfuscatedClassName = "na";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, GrandExchangeOfferWorldComparator.obfuscatedClassName);
	}


	static onMethod6744(todo){
		super.onMethodExecution(GrandExchangeOfferWorldComparator.obfuscatedClassName,"ak", todo, []);
	}
	static onCompare_bridged(todo){
		super.onMethodExecution(GrandExchangeOfferWorldComparator.obfuscatedClassName,"compare", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(GrandExchangeOfferWorldComparator.obfuscatedClassName,"", todo, []);
	}
}
module.exports = GrandExchangeOfferWorldComparator;
