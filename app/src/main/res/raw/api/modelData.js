const VertexNormal = require('./vertexNormal.js');
const FaceNormal = require('./faceNormal.js');
const Entity = require('./entity.js');


class ModelData extends Entity {
	static obfuscatedClassName = "bk";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ModelData.obfuscatedClassName);
	}

	static getField7314(){
		return  super.getField(ModelData.obfuscatedClassName,"bd", []);
	}
	static getModelData_cosine(){
		return  super.getField(ModelData.obfuscatedClassName,"be", []);
	}
	static getModelData_sine(){
		return  super.getField(ModelData.obfuscatedClassName,"bt", []);
	}
	static getField7313(){
		return  super.getField(ModelData.obfuscatedClassName,"bc", []);
	}
	static getField7317(){
		return  super.getField(ModelData.obfuscatedClassName,"bz", []);
	}
	getFaceRenderTypes(){
		return  super.getField(ModelData.obfuscatedClassName,"aa", []);
	}
	getFaceNormals(){
		return  super.getField(ModelData.obfuscatedClassName,"ac", []);
	}
	getVerticesX(){
		return  super.getField(ModelData.obfuscatedClassName,"ae", []);
	}
	getFaceAlphas(){
		return  super.getField(ModelData.obfuscatedClassName,"af", []);
	}
	getFaceLabelsAlpha(){
		return  super.getField(ModelData.obfuscatedClassName,"ag", []);
	}
	getFaceCount(){
		return  super.getField(ModelData.obfuscatedClassName,"ah", []);
	}
	getIndices2(){
		return  super.getField(ModelData.obfuscatedClassName,"aj", []);
	}
	getIndices3(){
		return  super.getField(ModelData.obfuscatedClassName,"al", []);
	}
	getFaceColors(){
		return  super.getField(ModelData.obfuscatedClassName,"am", []);
	}
	getFaceTextures(){
		return  super.getField(ModelData.obfuscatedClassName,"an", []);
	}
	getTexTriangleY(){
		return  super.getField(ModelData.obfuscatedClassName,"ao", []);
	}
	getTexTriangleX(){
		return  super.getField(ModelData.obfuscatedClassName,"ap", []);
	}
	getTextureCoords(){
		return  super.getField(ModelData.obfuscatedClassName,"aq", []);
	}
	getTextureRenderTypes(){
		return  super.getField(ModelData.obfuscatedClassName,"ar", []);
	}
	getIndices1(){
		return  super.getField(ModelData.obfuscatedClassName,"as", []);
	}
	getVertexNormals(){
		return  super.getField(ModelData.obfuscatedClassName,"au", []);
	}
	getTextureTriangleCount(){
		return  super.getField(ModelData.obfuscatedClassName,"aw", []);
	}
	getPriority(){
		return  super.getField(ModelData.obfuscatedClassName,"ay", []);
	}
	getTexTriangleZ(){
		return  super.getField(ModelData.obfuscatedClassName,"az", []);
	}
	getContrast(){
		return  super.getField(ModelData.obfuscatedClassName,"bg", []);
	}
	getField7346(){
		return  super.getField(ModelData.obfuscatedClassName,"bh", []);
	}
	getField7348(){
		return  super.getField(ModelData.obfuscatedClassName,"bj", []);
	}
	getField7350(){
		return  super.getField(ModelData.obfuscatedClassName,"bp", []);
	}
	getField7351(){
		return  super.getField(ModelData.obfuscatedClassName,"bq", []);
	}
	getField7352(){
		return  super.getField(ModelData.obfuscatedClassName,"br", []);
	}
	getVertexLabels(){
		return  super.getField(ModelData.obfuscatedClassName,"ad", []);
	}
	getVerticesY(){
		return  super.getField(ModelData.obfuscatedClassName,"ai", []);
	}
	getVerticesCount(){
		return  super.getField(ModelData.obfuscatedClassName,"ak", []);
	}
	getVertexSkins(){
		return  super.getField(ModelData.obfuscatedClassName,"at", []);
	}
	getFaceSkins(){
		return  super.getField(ModelData.obfuscatedClassName,"av", []);
	}
	getVerticesZ(){
		return  super.getField(ModelData.obfuscatedClassName,"ax", []);
	}
	getAmbient(){
		return  super.getField(ModelData.obfuscatedClassName,"bi", []);
	}
	getFaceRenderPriorities(){
		return  super.getField(ModelData.obfuscatedClassName,"ab", []);
	}
	getIsBoundsCalculated(){
		return  super.getField(ModelData.obfuscatedClassName,"bf", []);
	}
	getField7349(){
		return  super.getField(ModelData.obfuscatedClassName,"bk", []);
	}

	static onMethod13922(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"aa", todo, []);
	}
	static onMethod13924(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ae", todo, []);
	}
	static onRotateZ(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"af", todo, []);
	}
	static onGetModel(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ag", todo, []);
	}
	static onMethod13927(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod13929(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod13930(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"al", todo, []);
	}
	static onRecolor(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"am", todo, []);
	}
	static onRetexture(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"an", todo, []);
	}
	static onCalculateBounds(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ao", todo, []);
	}
	static onInvalidate(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ap", todo, []);
	}
	static onChangeOffset(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"aq", todo, []);
	}
	static onCalculateVertexNormals(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ar", todo, []);
	}
	static onMethod13937(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"as", todo, []);
	}
	static onResize(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"aw", todo, []);
	}
	static onMethod13941(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ay", todo, []);
	}
	static onMethod13928(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ai", todo, []);
	}
	static onToModel(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"at", todo, []);
	}
	static onMethod13940(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod13923(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ab", todo, []);
	}
	static onMethod13916(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"az", todo, []);
	}
	static onMethod13912(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ad", todo, []);
	}
	static onModelData_get(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod13915(todo){
		super.onMethodExecution(ModelData.obfuscatedClassName,"av", todo, []);
	}
}
module.exports = ModelData;
