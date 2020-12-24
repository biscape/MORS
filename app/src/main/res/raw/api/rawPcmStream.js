const PcmStream = require('./pcmStream.js');


class RawPcmStream extends PcmStream {
	static obfuscatedClassName = "hm";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, RawPcmStream.obfuscatedClassName);
	}

	getStart(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"aa", []);
	}
	getField7217(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"ae", []);
	}
	getField7218(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"af", []);
	}
	getField7219(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"ah", []);
	}
	getField7221(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"aj", []);
	}
	getNumLoops(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"al", []);
	}
	getField7224(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"am", []);
	}
	getField7225(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"an", []);
	}
	getField7226(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"aq", []);
	}
	getField7227(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"as", []);
	}
	getField7229(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"ay", []);
	}
	getField7220(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"ai", []);
	}
	getField7222(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"ak", []);
	}
	getField7228(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"ax", []);
	}
	getEnd(){
		return  super.getField(RawPcmStream.obfuscatedClassName,"ab", []);
	}

	static onMethod13521(todo){
		super.onMethodExecution(RawPcmStream.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod13524(todo){
		super.onMethodExecution(RawPcmStream.obfuscatedClassName,"am", todo, []);
	}
	static onMethod13525(todo){
		super.onMethodExecution(RawPcmStream.obfuscatedClassName,"an", todo, []);
	}
	static onMethod13528(todo){
		super.onMethodExecution(RawPcmStream.obfuscatedClassName,"aq", todo, []);
	}
	static onGetObjectId(todo){
		super.onMethodExecution(RawPcmStream.obfuscatedClassName,"aw", todo, []);
	}
	static onMethod13533(todo){
		super.onMethodExecution(RawPcmStream.obfuscatedClassName,"av", todo, []);
	}
	static onSetNumLoops(todo){
		super.onMethodExecution(RawPcmStream.obfuscatedClassName,"ab", todo, []);
	}
	static onMethod13547(todo){
		super.onMethodExecution(RawPcmStream.obfuscatedClassName,"bk", todo, []);
	}
	static onMethod13453(todo){
		super.onMethodExecution(RawPcmStream.obfuscatedClassName,"ae", todo, []);
	}
	static onCreateRawPcmStream(todo){
		super.onMethodExecution(RawPcmStream.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod13455(todo){
		super.onMethodExecution(RawPcmStream.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = RawPcmStream;
