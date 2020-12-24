const NodeDeque = require('./nodeDeque.js');
const Tile = require('./tile.js');
const class47 = require('./class47.js');
const class19 = require('./class19.js');
const GameObject = require('./gameObject.js');
const Occluder = require('./occluder.js');
const Interceptor = require('./core/apicore.js');


class Scene extends Interceptor {
	static obfuscatedClassName = "be";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Scene.obfuscatedClassName);
	}

	static getScene_cameraY(){
		return  super.getField(Scene.obfuscatedClassName,"ac", []);
	}
	static getScene_cameraX(){
		return  super.getField(Scene.obfuscatedClassName,"ag", []);
	}
	static getScene_cameraXTileMax(){
		return  super.getField(Scene.obfuscatedClassName,"ao", []);
	}
	static getScene_cameraXTileMin(){
		return  super.getField(Scene.obfuscatedClassName,"ap", []);
	}
	static getScene_drawnCount(){
		return  super.getField(Scene.obfuscatedClassName,"ar", []);
	}
	static getScene_cameraZ(){
		return  super.getField(Scene.obfuscatedClassName,"au", []);
	}
	static getScene_plane(){
		return  super.getField(Scene.obfuscatedClassName,"aw", []);
	}
	static getTileUpdateCount(){
		return  super.getField(Scene.obfuscatedClassName,"ay", []);
	}
	static getScene_cameraYTileMin(){
		return  super.getField(Scene.obfuscatedClassName,"az", []);
	}
	static getField378(){
		return  super.getField(Scene.obfuscatedClassName,"ba", []);
	}
	static getScene_planeOccluderCounts(){
		return  super.getField(Scene.obfuscatedClassName,"bb", []);
	}
	static getField381(){
		return  super.getField(Scene.obfuscatedClassName,"bd", []);
	}
	static getField384(){
		return  super.getField(Scene.obfuscatedClassName,"bg", []);
	}
	static getCheckClick(){
		return  super.getField(Scene.obfuscatedClassName,"bh", []);
	}
	static getGameObjects(){
		return  super.getField(Scene.obfuscatedClassName,"bj", []);
	}
	static getScene_planesCount(){
		return  super.getField(Scene.obfuscatedClassName,"bm", []);
	}
	static getField391(){
		return  super.getField(Scene.obfuscatedClassName,"bn", []);
	}
	static getField392(){
		return  super.getField(Scene.obfuscatedClassName,"bo", []);
	}
	static getField393(){
		return  super.getField(Scene.obfuscatedClassName,"bp", []);
	}
	static getScene_selectedPlane(){
		return  super.getField(Scene.obfuscatedClassName,"bq", []);
	}
	static getField395(){
		return  super.getField(Scene.obfuscatedClassName,"br", []);
	}
	static getScene_currentOccludersCount(){
		return  super.getField(Scene.obfuscatedClassName,"bx", []);
	}
	static getField402(){
		return  super.getField(Scene.obfuscatedClassName,"by", []);
	}
	static getScene_viewportXCenter(){
		return  super.getField(Scene.obfuscatedClassName,"ca", []);
	}
	static getScene_viewportYMin(){
		return  super.getField(Scene.obfuscatedClassName,"cj", []);
	}
	static getField410(){
		return  super.getField(Scene.obfuscatedClassName,"ck", []);
	}
	static getField417(){
		return  super.getField(Scene.obfuscatedClassName,"cw", []);
	}
	static getScene_viewportYMax(){
		return  super.getField(Scene.obfuscatedClassName,"cx", []);
	}
	static getScene_cameraYTile(){
		return  super.getField(Scene.obfuscatedClassName,"ad", []);
	}
	static getScene_isLowDetail(){
		return  super.getField(Scene.obfuscatedClassName,"ak", []);
	}
	static getScene_cameraYTileMax(){
		return  super.getField(Scene.obfuscatedClassName,"at", []);
	}
	static getScene_cameraXTile(){
		return  super.getField(Scene.obfuscatedClassName,"av", []);
	}
	static getField380(){
		return  super.getField(Scene.obfuscatedClassName,"bc", []);
	}
	static getField386(){
		return  super.getField(Scene.obfuscatedClassName,"bi", []);
	}
	static getField389(){
		return  super.getField(Scene.obfuscatedClassName,"bl", []);
	}
	static getField396(){
		return  super.getField(Scene.obfuscatedClassName,"bs", []);
	}
	static getField398(){
		return  super.getField(Scene.obfuscatedClassName,"bu", []);
	}
	static getField399(){
		return  super.getField(Scene.obfuscatedClassName,"bv", []);
	}
	static getField403(){
		return  super.getField(Scene.obfuscatedClassName,"bz", []);
	}
	static getField405(){
		return  super.getField(Scene.obfuscatedClassName,"cb", []);
	}
	static getField407(){
		return new class47(super.getField(Scene.obfuscatedClassName,"cg", []));
	}
	static getScene_viewportYCenter(){
		return  super.getField(Scene.obfuscatedClassName,"cn", []);
	}
	static getScene_viewportXMax(){
		return  super.getField(Scene.obfuscatedClassName,"cs", []);
	}
	static getScene_viewportXMin(){
		return  super.getField(Scene.obfuscatedClassName,"ct", []);
	}
	static getField383(){
		return  super.getField(Scene.obfuscatedClassName,"bf", []);
	}
	static getScene_tilesDeque(){
		return new NodeDeque(super.getField(Scene.obfuscatedClassName,"bw", []));
	}
	static getField388(){
		return  super.getField(Scene.obfuscatedClassName,"bk", []);
	}
	static getField413(){
		return new class19(super.getField(Scene.obfuscatedClassName,"cp", []));
	}
	getTempGameObjects(){
		return  super.getField(Scene.obfuscatedClassName,"aa", []);
	}
	getPlanes(){
		return  super.getField(Scene.obfuscatedClassName,"ae", []);
	}
	getTileHeights(){
		return  super.getField(Scene.obfuscatedClassName,"ah", []);
	}
	getMinPlane(){
		return  super.getField(Scene.obfuscatedClassName,"aj", []);
	}
	getTempGameObjectsCount(){
		return  super.getField(Scene.obfuscatedClassName,"al", []);
	}
	getTiles(){
		return  super.getField(Scene.obfuscatedClassName,"as", []);
	}
	getTileRotation2D(){
		return  super.getField(Scene.obfuscatedClassName,"cf", []);
	}
	getTileShape2D(){
		return  super.getField(Scene.obfuscatedClassName,"cv", []);
	}
	getXSize(){
		return  super.getField(Scene.obfuscatedClassName,"ai", []);
	}
	getYSize(){
		return  super.getField(Scene.obfuscatedClassName,"ax", []);
	}
	getField420(){
		return  super.getField(Scene.obfuscatedClassName,"ab", []);
	}

	static onNewBoundaryObject(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"aa", todo, []);
	}
	static onInit(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod705(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"af", todo, []);
	}
	static onSetTileMinPlane(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"ah", todo, []);
	}
	static onNewFloorDecoration(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"aj", todo, []);
	}
	static onNewGroundItemPile(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"al", todo, []);
	}
	static onAddNullableObject(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"am", todo, []);
	}
	static onNewGameObject(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"an", todo, []);
	}
	static onDrawEntity(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"aq", todo, []);
	}
	static onMethod717(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"ar", todo, []);
	}
	static onAddTile(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"as", todo, []);
	}
	static onRemoveGameObject(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"aw", todo, []);
	}
	static onClearTempGameObjects(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"ay", todo, []);
	}
	static onOcclude(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"ba", todo, []);
	}
	static onDrawTileOverlay(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bb", todo, []);
	}
	static onMethod728(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bg", todo, []);
	}
	static onMethod729(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bh", todo, []);
	}
	static onGetObjectFlags(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bj", todo, []);
	}
	static onMethod734(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bn", todo, []);
	}
	static onMethod736(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bp", todo, []);
	}
	static onMethod737(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bq", todo, []);
	}
	static onMethod738(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"br", todo, []);
	}
	static onSetLinkBelow(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"ai", todo, []);
	}
	static onInit7(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"ak", todo, []);
	}
	static onRemoveWallDecoration(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"av", todo, []);
	}
	static onMethod730(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bi", todo, []);
	}
	static onMethod733(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bl", todo, []);
	}
	static onMethod739(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bs", todo, []);
	}
	static onMethod741(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bu", todo, []);
	}
	static onDrawTile(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bv", todo, []);
	}
	static onNewWallDecoration(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"ab", todo, []);
	}
	static onMethod727(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bf", todo, []);
	}
	static onMethod743(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bw", todo, []);
	}
	static onScene_buildVisiblityMap(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bd", todo, []);
	}
	static onContainsBounds(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bx", todo, []);
	}
	static onScene_addOccluder(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod679(todo){
		super.onMethodExecution(Scene.obfuscatedClassName,"bc", todo, []);
	}
}
module.exports = Scene;
