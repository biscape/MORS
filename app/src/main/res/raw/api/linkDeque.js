const Interceptor = require('./core/apicore.js');


class LinkDeque extends Interceptor {
	static obfuscatedClassName = "com/jagex/mobilesdk/payments/PurchaseHistory";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, LinkDeque.obfuscatedClassName);
	}

	getActivity(){
		return new Activity(super.getField(LinkDeque.obfuscatedClassName,"", []));
	}
	getPurchaseHistory(){
		return  super.getField(LinkDeque.obfuscatedClassName,"", []);
	}
	getBillingClientWrapper(){
		return new BillingClientWrapper(super.getField(LinkDeque.obfuscatedClassName,"", []));
	}
	getUnconsumedPurchases(){
		return  super.getField(LinkDeque.obfuscatedClassName,"", []);
	}
	getSkuDetails(){
		return  super.getField(LinkDeque.obfuscatedClassName,"", []);
	}
	getCurrentStoreSubscriptions(){
		return  super.getField(LinkDeque.obfuscatedClassName,"", []);
	}

	static onFetchSkuDetails(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onFetchPendingTransactions(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onLast(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"getKnownSubscriptionList", todo, []);
	}
	static onEligibleForTrialPurchase(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onEligibleForIntroductoryPrice(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onReady(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onIsPendingTransactionsAvailable(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onSaveKnownSubscriptionList(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onFetchPurchaseHistory(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onProcessFriendUpdates(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"tidyKnownSubscriptionList", todo, []);
	}
	static onGetUnconsumedPurchases(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onInit(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onAddToKnownSubscriptions(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onGetSkuDetails(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onAccess$300(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onAccess$000(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onAccess$200(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
	static onAccess$100(todo){
		super.onMethodExecution(LinkDeque.obfuscatedClassName,"", todo, []);
	}
}
module.exports = LinkDeque;
