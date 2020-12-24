const ClientPreferences = require('./clientPreferences.js');
const Interceptor = require('./core/apicore.js');


class ServerPacket extends Interceptor {
	static obfuscatedClassName = "oy";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ServerPacket.obfuscatedClassName);
	}

	static getClientPreferences(){
		return new ClientPreferences(super.getField(ServerPacket.obfuscatedClassName,"rl", []));
	}
	static getField4108(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"aa", []));
	}
	static getField4110(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ac", []));
	}
	static getField4112(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ae", []));
	}
	static getField4113(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"af", []));
	}
	static getField4114(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ag", []));
	}
	static getField4115(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ah", []));
	}
	static getField4117(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"aj", []));
	}
	static getField4119(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"al", []));
	}
	static getField4120(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"am", []));
	}
	static getField4121(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"an", []));
	}
	static getField4122(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ao", []));
	}
	static getField4123(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ap", []));
	}
	static getField4124(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"aq", []));
	}
	static getField4125(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ar", []));
	}
	static getField4126(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"as", []));
	}
	static getField4128(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"au", []));
	}
	static getField4130(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"aw", []));
	}
	static getField4132(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ay", []));
	}
	static getField4133(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"az", []));
	}
	static getField4134(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ba", []));
	}
	static getField4135(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bb", []));
	}
	static getField4137(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bd", []));
	}
	static getField4138(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"be", []));
	}
	static getField4140(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bg", []));
	}
	static getField4141(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bh", []));
	}
	static getField4143(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bj", []));
	}
	static getField4146(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bm", []));
	}
	static getField4147(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bn", []));
	}
	static getField4148(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bo", []));
	}
	static getField4149(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bp", []));
	}
	static getField4150(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bq", []));
	}
	static getField4151(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"br", []));
	}
	static getField4153(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bt", []));
	}
	static getField4157(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bx", []));
	}
	static getField4158(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"by", []));
	}
	static getField4160(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ca", []));
	}
	static getField4164(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ce", []));
	}
	static getField4165(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cf", []));
	}
	static getField4168(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ci", []));
	}
	static getField4169(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cj", []));
	}
	static getField4170(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ck", []));
	}
	static getField4171(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cl", []));
	}
	static getField4172(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cm", []));
	}
	static getField4174(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"co", []));
	}
	static getField4177(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cr", []));
	}
	static getField4180(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cu", []));
	}
	static getField4181(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cv", []));
	}
	static getField4182(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cw", []));
	}
	static getField4183(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cx", []));
	}
	static getField4185(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cz", []));
	}
	static getField4188(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"dj", []));
	}
	static getField4189(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"dk", []));
	}
	static getField4190(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"dn", []));
	}
	static getField4191(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"dq", []));
	}
	static getField4192(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ds", []));
	}
	static getField4193(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"dx", []));
	}
	static getField4111(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ad", []));
	}
	static getField4116(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ai", []));
	}
	static getField4118(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ak", []));
	}
	static getField4127(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"at", []));
	}
	static getField4129(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"av", []));
	}
	static getField4131(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ax", []));
	}
	static getField4136(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bc", []));
	}
	static getField4142(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bi", []));
	}
	static getField4145(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bl", []));
	}
	static getField4152(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bs", []));
	}
	static getField4154(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bu", []));
	}
	static getField4155(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bv", []));
	}
	static getField4159(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bz", []));
	}
	static getField4161(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cb", []));
	}
	static getField4162(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cc", []));
	}
	static getField4163(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cd", []));
	}
	static getField4166(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cg", []));
	}
	static getField4167(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ch", []));
	}
	static getField4173(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cn", []));
	}
	static getField4176(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cq", []));
	}
	static getField4178(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cs", []));
	}
	static getField4179(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ct", []));
	}
	static getField4184(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cy", []));
	}
	static getField4186(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"df", []));
	}
	static getField4187(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"di", []));
	}
	static getField4109(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"ab", []));
	}
	static getField4139(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bf", []));
	}
	static getField4156(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bw", []));
	}
	static getField4144(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"bk", []));
	}
	static getField4175(){
		return new ServerPacket(super.getField(ServerPacket.obfuscatedClassName,"cp", []));
	}
	getId(){
		return  super.getField(ServerPacket.obfuscatedClassName,"db", ['int', 204240965]);
	}
	getLength(){
		return  super.getField(ServerPacket.obfuscatedClassName,"du", ['int', 1188581747]);
	}

}
module.exports = ServerPacket;
