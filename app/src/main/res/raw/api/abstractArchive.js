const class247 = require('./class247.js');
const GZipDecompressor = require('./gZipDecompressor.js');
const Interceptor = require('./core/apicore.js');


class AbstractArchive extends Interceptor {
	static obfuscatedClassName = "kc";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, AbstractArchive.obfuscatedClassName);
	}

	static getGzipDecompressor(){
		return new GZipDecompressor(super.getField(AbstractArchive.obfuscatedClassName,"an", []));
	}
	static getField3644(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"ap", ['int', 274296091]);
	}
	getFileIds(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"aa", []);
	}
	getField3647(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"ae", ['int', 2042398039]);
	}
	getField3648(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"af", []);
	}
	getField3649(){
		return new class247(super.getField(AbstractArchive.obfuscatedClassName,"ah", []));
	}
	getField3651(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"aj", []);
	}
	getField3652(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"al", []);
	}
	getFiles(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"am", []);
	}
	getGroups(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"aq", []);
	}
	getShallowFiles(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"ar", []);
	}
	getGroupCrcs(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"as", []);
	}
	getReleaseGroups(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"aw", []);
	}
	getField3659(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"ay", ['int', 742123395]);
	}
	getField3650(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"ai", []);
	}
	getField3658(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"ax", []);
	}
	getField3646(){
		return  super.getField(AbstractArchive.obfuscatedClassName,"ab", []);
	}

	static onGroupLoadPercent(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"aa", todo, []);
	}
	static onMethod6136(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ac", todo, []);
	}
	static onWriteShortLE(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ae", todo, []);
	}
	static onGetFile(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"af", todo, []);
	}
	static onMethod6140(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ag", todo, []);
	}
	static onTryLoadFile(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ah", todo, []);
	}
	static onTryLoadGroup(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod6145(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"al", todo, []);
	}
	static onLoadGroup(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"am", todo, []);
	}
	static onGetGroupFileIds(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"an", todo, []);
	}
	static onMethod6148(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ao", todo, []);
	}
	static onGetFileFlat(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"aq", todo, []);
	}
	static onSetMaxFlashCount(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ar", todo, []);
	}
	static onMethod6152(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"as", todo, []);
	}
	static onTryLoadGroupByName(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"au", todo, []);
	}
	static onMethod6156(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"aw", todo, []);
	}
	static onGetGroupFileCount(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ay", todo, []);
	}
	static onMethod6159(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"az", todo, []);
	}
	static onMethod6174(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"bp", todo, []);
	}
	static onMethod6137(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ad", todo, []);
	}
	static onTakeFile(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod6144(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod6153(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"at", todo, []);
	}
	static onGetFileId(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"av", todo, []);
	}
	static onTakeFileEncrypted(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod6167(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"bi", todo, []);
	}
	static onTakeFileFlat(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ab", todo, []);
	}
	static onMethod6133(todo){
		super.onMethodExecution(AbstractArchive.obfuscatedClassName,"ar", todo, []);
	}
}
module.exports = AbstractArchive;
