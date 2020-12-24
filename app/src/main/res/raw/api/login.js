const class311 = require('./class311.js');
const class384 = require('./class384.js');
const class77 = require('./class77.js');
const IndexedSprite = require('./indexedSprite.js');
const Interceptor = require('./core/apicore.js');


class Login extends Interceptor {
	static obfuscatedClassName = "hc";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Login.obfuscatedClassName);
	}

	static getClearLoginScreen(){
		return  super.getField(Login.obfuscatedClassName,"aa", []);
	}
	static getTitleboxSprite(){
		return new IndexedSprite(super.getField(Login.obfuscatedClassName,"af", []));
	}
	static getField3173(){
		return new class384(super.getField(Login.obfuscatedClassName,"ao", []));
	}
	static getField3174(){
		return new class384(super.getField(Login.obfuscatedClassName,"ap", []));
	}
	static getField3177(){
		return  super.getField(Login.obfuscatedClassName,"bd", ['int', 1967830023]);
	}
	static getField3178(){
		return  super.getField(Login.obfuscatedClassName,"bh", []);
	}
	static getField3179(){
		return  super.getField(Login.obfuscatedClassName,"bj", ['int', 271125841]);
	}
	static getField3181(){
		return  super.getField(Login.obfuscatedClassName,"bq", ['int', 1537245781]);
	}
	static getField3182(){
		return  super.getField(Login.obfuscatedClassName,"br", ['int', 1203175655]);
	}
	static getLoginIndex(){
		return  super.getField(Login.obfuscatedClassName,"ci", ['int', 1530703249]);
	}
	static getLogin_response3(){
		return  super.getField(Login.obfuscatedClassName,"cl", []);
	}
	static getLogin_username(){
		return  super.getField(Login.obfuscatedClassName,"cr", []);
	}
	static getLogin_response1(){
		return  super.getField(Login.obfuscatedClassName,"cu", []);
	}
	static getField3189(){
		return  super.getField(Login.obfuscatedClassName,"cx", ['int', 798872043]);
	}
	static getField3193(){
		return  super.getField(Login.obfuscatedClassName,"dk", []);
	}
	static getField3202(){
		return  super.getField(Login.obfuscatedClassName,"eg", []);
	}
	static getField3210(){
		return new DecimalFormat(super.getField(Login.obfuscatedClassName,"ex", []));
	}
	static getField3211(){
		return new class77(super.getField(Login.obfuscatedClassName,"fc", []));
	}
	static getField3213(){
		return  super.getField(Login.obfuscatedClassName,"fi", ['long', 6913982772656691549]);
	}
	static getField3214(){
		return  super.getField(Login.obfuscatedClassName,"fl", ['long', 3351497678225665821]);
	}
	static getField3215(){
		return new class311(super.getField(Login.obfuscatedClassName,"ft", []));
	}
	static getField3216(){
		return  super.getField(Login.obfuscatedClassName,"fx", []);
	}
	static getField3217(){
		return  super.getField(Login.obfuscatedClassName,"fy", ['long', 2461331528236452057]);
	}
	static getField3176(){
		return  super.getField(Login.obfuscatedClassName,"bc", []);
	}
	static getLogin_response2(){
		return  super.getField(Login.obfuscatedClassName,"cc", []);
	}
	static getField3187(){
		return  super.getField(Login.obfuscatedClassName,"ct", ['int', 544365949]);
	}
	static getField3190(){
		return  super.getField(Login.obfuscatedClassName,"cy", []);
	}
	static getLogin_password(){
		return  super.getField(Login.obfuscatedClassName,"df", []);
	}
	static getField3194(){
		return  super.getField(Login.obfuscatedClassName,"dl", []);
	}
	static getField3203(){
		return  super.getField(Login.obfuscatedClassName,"el", ['int', 2097251915]);
	}
	static getField3205(){
		return  super.getField(Login.obfuscatedClassName,"ep", ['int', 429066365]);
	}
	static getField3206(){
		return new class77(super.getField(Login.obfuscatedClassName,"eq", []));
	}
	static getField3212(){
		return  super.getField(Login.obfuscatedClassName,"fh", ['long', 180434444578281621]);
	}
	static getField3168(){
		return  super.getField(Login.obfuscatedClassName,"ab", ['int', 1992095003]);
	}
	static getField3191(){
		return  super.getField(Login.obfuscatedClassName,"db", []);
	}
	static getField3195(){
		return  super.getField(Login.obfuscatedClassName,"do", []);
	}
	static getField3196(){
		return  super.getField(Login.obfuscatedClassName,"dr", ['long', 4160663032669778749]);
	}
	static getField3197(){
		return  super.getField(Login.obfuscatedClassName,"du", []);
	}
	static getField3198(){
		return  super.getField(Login.obfuscatedClassName,"dv", []);
	}
	static getField3199(){
		return  super.getField(Login.obfuscatedClassName,"dy", ['int', 641438241]);
	}
	static getField3200(){
		return  super.getField(Login.obfuscatedClassName,"ec", ['int', 1172979771]);
	}
	static getField3201(){
		return  super.getField(Login.obfuscatedClassName,"ee", ['long', 5940071224440696811]);
	}
	static getCurrentLoginField(){
		return  super.getField(Login.obfuscatedClassName,"em", ['int', 250696121]);
	}
	static getField3207(){
		return  super.getField(Login.obfuscatedClassName,"er", ['int', 844359429]);
	}

}
module.exports = Login;
