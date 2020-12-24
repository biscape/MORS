const Interceptor = require('./core/apicore.js');


class GrandExchangeOfferUnitPriceComparator extends Interceptor {
	static obfuscatedClassName = "ol";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, GrandExchangeOfferUnitPriceComparator.obfuscatedClassName);
	}


	static onMethod7034(todo){
		super.onMethodExecution(GrandExchangeOfferUnitPriceComparator.obfuscatedClassName,"ak", todo, []);
	}
	static onCompare_bridged(todo){
		super.onMethodExecution(GrandExchangeOfferUnitPriceComparator.obfuscatedClassName,"compare", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(GrandExchangeOfferUnitPriceComparator.obfuscatedClassName,"", todo, []);
	}
}
module.exports = GrandExchangeOfferUnitPriceComparator;
