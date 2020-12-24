const Interceptor = require('./core/apicore.js');


class GrandExchangeOfferNameComparator extends Interceptor {
	static obfuscatedClassName = "nu";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, GrandExchangeOfferNameComparator.obfuscatedClassName);
	}


	static onMethod6924(todo){
		super.onMethodExecution(GrandExchangeOfferNameComparator.obfuscatedClassName,"ak", todo, []);
	}
	static onCompare_bridged(todo){
		super.onMethodExecution(GrandExchangeOfferNameComparator.obfuscatedClassName,"compare", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(GrandExchangeOfferNameComparator.obfuscatedClassName,"", todo, []);
	}
}
module.exports = GrandExchangeOfferNameComparator;
