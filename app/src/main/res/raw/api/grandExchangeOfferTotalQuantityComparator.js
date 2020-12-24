const Interceptor = require('./core/apicore.js');


class GrandExchangeOfferTotalQuantityComparator extends Interceptor {
	static obfuscatedClassName = "nq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, GrandExchangeOfferTotalQuantityComparator.obfuscatedClassName);
	}

	static getField3994(){
		return  super.getField(GrandExchangeOfferTotalQuantityComparator.obfuscatedClassName,"aa", []);
	}
	static getField3995(){
		return  super.getField(GrandExchangeOfferTotalQuantityComparator.obfuscatedClassName,"aj", []);
	}

	static onMethod6906(todo){
		super.onMethodExecution(GrandExchangeOfferTotalQuantityComparator.obfuscatedClassName,"ak", todo, []);
	}
	static onCompare_bridged(todo){
		super.onMethodExecution(GrandExchangeOfferTotalQuantityComparator.obfuscatedClassName,"compare", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(GrandExchangeOfferTotalQuantityComparator.obfuscatedClassName,"", todo, []);
	}
}
module.exports = GrandExchangeOfferTotalQuantityComparator;
