const Entity = require('./entity.js');


class Model extends Entity {
	static obfuscatedClassName = "cp";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Model.obfuscatedClassName);
	}

	static getModel_sharedSequenceModelFaceAlphas(){
		return  super.getField(Model.obfuscatedClassName,"ae", []);
	}
	static getModel_transformTempX(){
		return  super.getField(Model.obfuscatedClassName,"bn", []);
	}
	static getModel_transformTempZ(){
		return  super.getField(Model.obfuscatedClassName,"by", []);
	}
	static getModel_sharedSpotAnimationModel(){
		return new Model(super.getField(Model.obfuscatedClassName,"ai", []));
	}
	static getModel_sharedSequenceModel(){
		return new Model(super.getField(Model.obfuscatedClassName,"ak", []));
	}
	static getModel_sharedSpotAnimationModelFaceAlphas(){
		return  super.getField(Model.obfuscatedClassName,"ax", []);
	}
	static getField7457(){
		return  super.getField(Model.obfuscatedClassName,"bl", []);
	}
	static getModel_transformTempY(){
		return  super.getField(Model.obfuscatedClassName,"bs", []);
	}
	static getField7460(){
		return  super.getField(Model.obfuscatedClassName,"bu", []);
	}
	static getField7456(){
		return  super.getField(Model.obfuscatedClassName,"bf", []);
	}
	getIndicesCount(){
		return  super.getField(Model.obfuscatedClassName,"aa", []);
	}
	getVertexLabels(){
		return  super.getField(Model.obfuscatedClassName,"ac", []);
	}
	getIndices2(){
		return  super.getField(Model.obfuscatedClassName,"af", []);
	}
	getField7467(){
		return  super.getField(Model.obfuscatedClassName,"ag", []);
	}
	getVerticesCount(){
		return  super.getField(Model.obfuscatedClassName,"ah", []);
	}
	getVerticesY(){
		return  super.getField(Model.obfuscatedClassName,"aj", []);
	}
	getVerticesZ(){
		return  super.getField(Model.obfuscatedClassName,"al", []);
	}
	getFaceColors1(){
		return  super.getField(Model.obfuscatedClassName,"am", []);
	}
	getFaceColors2(){
		return  super.getField(Model.obfuscatedClassName,"an", []);
	}
	getFaceTextures(){
		return  super.getField(Model.obfuscatedClassName,"ao", []);
	}
	getField7474(){
		return  super.getField(Model.obfuscatedClassName,"ap", []);
	}
	getIndices3(){
		return  super.getField(Model.obfuscatedClassName,"aq", []);
	}
	getFaceAlphas(){
		return  super.getField(Model.obfuscatedClassName,"ar", []);
	}
	getVerticesX(){
		return  super.getField(Model.obfuscatedClassName,"as", []);
	}
	getFaceLabelsAlpha(){
		return  super.getField(Model.obfuscatedClassName,"au", []);
	}
	getFaceRenderPriorities(){
		return  super.getField(Model.obfuscatedClassName,"aw", []);
	}
	getFaceColors3(){
		return  super.getField(Model.obfuscatedClassName,"ay", []);
	}
	getField7483(){
		return  super.getField(Model.obfuscatedClassName,"az", []);
	}
	getYMidOffset(){
		return  super.getField(Model.obfuscatedClassName,"ba", []);
	}
	getYMid(){
		return  super.getField(Model.obfuscatedClassName,"bb", []);
	}
	getBottomY(){
		return  super.getField(Model.obfuscatedClassName,"bd", []);
	}
	getXMid(){
		return  super.getField(Model.obfuscatedClassName,"be", []);
	}
	getIsSingleTile(){
		return  super.getField(Model.obfuscatedClassName,"bg", []);
	}
	getField7490(){
		return  super.getField(Model.obfuscatedClassName,"bh", []);
	}
	getField7492(){
		return  super.getField(Model.obfuscatedClassName,"bj", []);
	}
	getField7494(){
		return  super.getField(Model.obfuscatedClassName,"bp", []);
	}
	getField7495(){
		return  super.getField(Model.obfuscatedClassName,"bq", []);
	}
	getField7496(){
		return  super.getField(Model.obfuscatedClassName,"br", []);
	}
	getRadius(){
		return  super.getField(Model.obfuscatedClassName,"bt", []);
	}
	getXMidOffset(){
		return  super.getField(Model.obfuscatedClassName,"bx", []);
	}
	getField7465(){
		return  super.getField(Model.obfuscatedClassName,"ad", []);
	}
	getField7478(){
		return  super.getField(Model.obfuscatedClassName,"at", []);
	}
	getField7480(){
		return  super.getField(Model.obfuscatedClassName,"av", []);
	}
	getXzRadius(){
		return  super.getField(Model.obfuscatedClassName,"bc", []);
	}
	getField7491(){
		return  super.getField(Model.obfuscatedClassName,"bi", []);
	}
	getZMid(){
		return  super.getField(Model.obfuscatedClassName,"bv", []);
	}
	getDiameter(){
		return  super.getField(Model.obfuscatedClassName,"bz", []);
	}
	getIndices1(){
		return  super.getField(Model.obfuscatedClassName,"ab", []);
	}
	getZMidOffset(){
		return  super.getField(Model.obfuscatedClassName,"bw", []);
	}
	getBoundsType(){
		return  super.getField(Model.obfuscatedClassName,"bk", []);
	}

	static onResetBounds(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"aa", todo, []);
	}
	static onToSharedSequenceModel(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"ae", todo, []);
	}
	static onAnimate2(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"af", todo, []);
	}
	static onGetModel(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"ag", todo, []);
	}
	static onCalculateBoundingBox(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod14361(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod14363(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"al", todo, []);
	}
	static onMethod14364(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"am", todo, []);
	}
	static onMethod14365(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"an", todo, []);
	}
	static onScale(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"ap", todo, []);
	}
	static onTransform(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"aq", todo, []);
	}
	static onOffsetBy(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"ar", todo, []);
	}
	static onCalculateBoundsCylinder(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"as", todo, []);
	}
	static onMethod14374(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"aw", todo, []);
	}
	static onMethod14376(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"ay", todo, []);
	}
	static onMethod14360(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"ai", todo, []);
	}
	static onContourGround(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"ak", todo, []);
	}
	static onBuildSharedModel(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"ax", todo, []);
	}
	static onAnimate(todo){
		super.onMethodExecution(Model.obfuscatedClassName,"ab", todo, []);
	}
}
module.exports = Model;
