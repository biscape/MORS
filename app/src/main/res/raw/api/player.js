const Actor = require('./actor.js');
const TriBool = require('./triBool.js');
const class6 = require('./class6.js');
const Model = require('./model.js');
const Username = require('./username.js');


class Player extends Actor {
	static obfuscatedClassName = "hv";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Player.obfuscatedClassName);
	}

	getField7842(){
		return  super.getField(Player.obfuscatedClassName,"aa", ['int', 640631933]);
	}
	getField7844(){
		return  super.getField(Player.obfuscatedClassName,"ac", ['int', 314337033]);
	}
	getAppearance(){
		return new class6(super.getField(Player.obfuscatedClassName,"ae", []));
	}
	getField7847(){
		return  super.getField(Player.obfuscatedClassName,"af", ['int', 2137905141]);
	}
	getField7848(){
		return  super.getField(Player.obfuscatedClassName,"ag", []);
	}
	getField7850(){
		return  super.getField(Player.obfuscatedClassName,"aj", ['int', 141621459]);
	}
	getField7853(){
		return  super.getField(Player.obfuscatedClassName,"am", ['int', 266915917]);
	}
	getField7854(){
		return  super.getField(Player.obfuscatedClassName,"ao", ['int', 1290906523]);
	}
	getField7855(){
		return  super.getField(Player.obfuscatedClassName,"ap", ['int', 708759067]);
	}
	getField7856(){
		return  super.getField(Player.obfuscatedClassName,"aq", ['int', 2040900769]);
	}
	getField7857(){
		return  super.getField(Player.obfuscatedClassName,"ar", ['int', 967832713]);
	}
	getIsFriendTriBool(){
		return new TriBool(super.getField(Player.obfuscatedClassName,"au", []));
	}
	getField7862(){
		return new Model(super.getField(Player.obfuscatedClassName,"aw", []));
	}
	getField7864(){
		return  super.getField(Player.obfuscatedClassName,"ay", ['int', 1367157467]);
	}
	getField7865(){
		return  super.getField(Player.obfuscatedClassName,"az", ['int', 1460995845]);
	}
	getIsInClanChat(){
		return new TriBool(super.getField(Player.obfuscatedClassName,"bp", []));
	}
	getIsHidden(){
		return  super.getField(Player.obfuscatedClassName,"ad", []);
	}
	getField7849(){
		return  super.getField(Player.obfuscatedClassName,"ai", ['int', 1621962635]);
	}
	getUsername(){
		return new Username(super.getField(Player.obfuscatedClassName,"ak", []));
	}
	getIsUnanimated(){
		return  super.getField(Player.obfuscatedClassName,"at", []);
	}
	getField7861(){
		return  super.getField(Player.obfuscatedClassName,"av", ['int', 1442101647]);
	}
	getField7863(){
		return  super.getField(Player.obfuscatedClassName,"ax", ['int', 199841447]);
	}
	getField7843(){
		return  super.getField(Player.obfuscatedClassName,"ab", ['int', 1865870047]);
	}

	static onMethod15491(todo){
		super.onMethodExecution(Player.obfuscatedClassName,"ae", todo, []);
	}
	static onGetModel(todo){
		super.onMethodExecution(Player.obfuscatedClassName,"ag", todo, []);
	}
	static onMethod15494(todo){
		super.onMethodExecution(Player.obfuscatedClassName,"ah", todo, []);
	}
	static onUpdateIsInClanChat(todo){
		super.onMethodExecution(Player.obfuscatedClassName,"aj", todo, []);
	}
	static onIsVisible(todo){
		super.onMethodExecution(Player.obfuscatedClassName,"aq", todo, []);
	}
	static onCheckIsFriend(todo){
		super.onMethodExecution(Player.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = Player;
