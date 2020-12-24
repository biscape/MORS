const NPC = require('./nPC.js');
const class138 = require('./class138.js');
const Widget = require('./widget.js');
const class265 = require('./class265.js');
const class384 = require('./class384.js');
const class206 = require('./class206.js');
const PacketWriter = require('./packetWriter.js');
const class127 = require('./class127.js');
const CollisionMap = require('./collisionMap.js');
const NodeDeque = require('./nodeDeque.js');
const class208 = require('./class208.js');
const class399 = require('./class399.js');
const class360 = require('./class360.js');
const class105 = require('./class105.js');
const class261 = require('./class261.js');
const Player = require('./player.js');
const LoginType = require('./loginType.js');
const class314 = require('./class314.js');
const Archive = require('./archive.js');
const SoundEffect = require('./soundEffect.js');
const class6 = require('./class6.js');
const Timer = require('./timer.js');
const class2 = require('./class2.js');
const NodeHashTable = require('./nodeHashTable.js');


class Client extends class138 {
	static obfuscatedClassName = "client";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Client.obfuscatedClassName);
	}

	static getField4988(){
		return  super.getField(Client.obfuscatedClassName,"rx", []);
	}
	static getArchiveLoaders(){
		return  super.getField(Client.obfuscatedClassName,"rg", []);
	}
	static getField4984(){
		return  super.getField(Client.obfuscatedClassName,"rr", ['int', 882664303]);
	}
	static getField4993(){
		return  super.getField(Client.obfuscatedClassName,"sk", ['int', 1488470637]);
	}
	static getField4982(){
		return  super.getField(Client.obfuscatedClassName,"rp", ['int', 184287419]);
	}
	static getField4980(){
		return  super.getField(Client.obfuscatedClassName,"rk", ['int', 282802091]);
	}
	static getField4990(){
		return new class206(super.getField(Client.obfuscatedClassName,"se", []));
	}
	static getField4963(){
		return  super.getField(Client.obfuscatedClassName,"qb", []);
	}
	static getField4977(){
		return  super.getField(Client.obfuscatedClassName,"rb", ['int', 752692327]);
	}
	static getField4981(){
		return new class6(super.getField(Client.obfuscatedClassName,"ro", []));
	}
	static getField4983(){
		return  super.getField(Client.obfuscatedClassName,"rq", ['int', 1626435597]);
	}
	static getField4991(){
		return  super.getField(Client.obfuscatedClassName,"sg", []);
	}
	static getField4966(){
		return  super.getField(Client.obfuscatedClassName,"qf", ['int', 1602642063]);
	}
	static getField4971(){
		return  super.getField(Client.obfuscatedClassName,"qq", ['int', 936946557]);
	}
	static getField4979(){
		return new class2(super.getField(Client.obfuscatedClassName,"rj", []));
	}
	static getField4974(){
		return  super.getField(Client.obfuscatedClassName,"qv", []);
	}
	static getField4967(){
		return  super.getField(Client.obfuscatedClassName,"qi", []);
	}
	static getField4968(){
		return  super.getField(Client.obfuscatedClassName,"qm", []);
	}
	static getField4969(){
		return  super.getField(Client.obfuscatedClassName,"qo", []);
	}
	static getField4987(){
		return  super.getField(Client.obfuscatedClassName,"rw", ['int', 609598693]);
	}
	static getField4970(){
		return  super.getField(Client.obfuscatedClassName,"qp", []);
	}
	static getField4958(){
		return  super.getField(Client.obfuscatedClassName,"pp", []);
	}
	static getField4972(){
		return  super.getField(Client.obfuscatedClassName,"qr", []);
	}
	static getField4976(){
		return  super.getField(Client.obfuscatedClassName,"qz", []);
	}
	static getField4975(){
		return  super.getField(Client.obfuscatedClassName,"qw", []);
	}
	static getField4964(){
		return  super.getField(Client.obfuscatedClassName,"qc", []);
	}
	static getField4962(){
		return  super.getField(Client.obfuscatedClassName,"qa", []);
	}
	static getField4973(){
		return  super.getField(Client.obfuscatedClassName,"qu", []);
	}
	static getField4965(){
		return  super.getField(Client.obfuscatedClassName,"qd", []);
	}
	static getField4989(){
		return  super.getField(Client.obfuscatedClassName,"sb", []);
	}
	static getField4994(){
		return new class206(super.getField(Client.obfuscatedClassName,"sm", []));
	}
	static getField4985(){
		return  super.getField(Client.obfuscatedClassName,"rs", []);
	}
	static getField4986(){
		return new class127(super.getField(Client.obfuscatedClassName,"rt", []));
	}
	static getField4992(){
		return new class314(super.getField(Client.obfuscatedClassName,"si", []));
	}
	static getField4996(){
		return  super.getField(Client.obfuscatedClassName,"sv", []);
	}
	static getField4995(){
		return  super.getField(Client.obfuscatedClassName,"st", []);
	}
	static getField4738(){
		return  super.getField(Client.obfuscatedClassName,"aa", []);
	}
	static getField4740(){
		return new Client(super.getField(Client.obfuscatedClassName,"ae", []));
	}
	static getField4743(){
		return new LoginType(super.getField(Client.obfuscatedClassName,"al", []));
	}
	static getField4744(){
		return  super.getField(Client.obfuscatedClassName,"am", []);
	}
	static getField4745(){
		return  super.getField(Client.obfuscatedClassName,"an", ['int', 1258128753]);
	}
	static getGameBuild(){
		return  super.getField(Client.obfuscatedClassName,"as", ['int', 537424339]);
	}
	static getGameState(){
		return  super.getField(Client.obfuscatedClassName,"au", ['int', 1192125275]);
	}
	static getCycle(){
		return  super.getField(Client.obfuscatedClassName,"bn", ['int', 1144797683]);
	}
	static getField4755(){
		return  super.getField(Client.obfuscatedClassName,"ca", []);
	}
	static getField4758(){
		return  super.getField(Client.obfuscatedClassName,"cf", ['int', 2103135727]);
	}
	static getJs5ConnectState(){
		return  super.getField(Client.obfuscatedClassName,"ci", ['int', 1961995531]);
	}
	static getField4761(){
		return  super.getField(Client.obfuscatedClassName,"cj", []);
	}
	static getField4762(){
		return  super.getField(Client.obfuscatedClassName,"ck", ['int', 1244461041]);
	}
	static getField4763(){
		return  super.getField(Client.obfuscatedClassName,"cm", ['int', 826683673]);
	}
	static getField4768(){
		return  super.getField(Client.obfuscatedClassName,"cv", ['int', 349230553]);
	}
	static getField4779(){
		return  super.getField(Client.obfuscatedClassName,"ed", ['int', 279936047]);
	}
	static getRandomDatData(){
		return  super.getField(Client.obfuscatedClassName,"en", []);
	}
	static getField4786(){
		return  super.getField(Client.obfuscatedClassName,"ex", []);
	}
	static getField4789(){
		return  super.getField(Client.obfuscatedClassName,"fb", ['int', 1827058161]);
	}
	static getField4791(){
		return new class399(super.getField(Client.obfuscatedClassName,"fe", []));
	}
	static getField4792(){
		return new Timer(super.getField(Client.obfuscatedClassName,"fi", []));
	}
	static getField4793(){
		return  super.getField(Client.obfuscatedClassName,"fj", []);
	}
	static getField4794(){
		return  super.getField(Client.obfuscatedClassName,"fk", ['int', 665276077]);
	}
	static getField4795(){
		return  super.getField(Client.obfuscatedClassName,"fm", []);
	}
	static getField4796(){
		return  super.getField(Client.obfuscatedClassName,"fp", ['int', 938367783]);
	}
	static getField4797(){
		return  super.getField(Client.obfuscatedClassName,"fv", ['int', 247902917]);
	}
	static getField4798(){
		return  super.getField(Client.obfuscatedClassName,"fw", []);
	}
	static getField4800(){
		return  super.getField(Client.obfuscatedClassName,"gh", []);
	}
	static getField4801(){
		return  super.getField(Client.obfuscatedClassName,"gj", ['int', 1091655141]);
	}
	static getField4802(){
		return  super.getField(Client.obfuscatedClassName,"gk", []);
	}
	static getField4803(){
		return  super.getField(Client.obfuscatedClassName,"gl", []);
	}
	static getField4804(){
		return  super.getField(Client.obfuscatedClassName,"go", ['int', 1098895076]);
	}
	static getField4806(){
		return  super.getField(Client.obfuscatedClassName,"gw", []);
	}
	static getField4807(){
		return  super.getField(Client.obfuscatedClassName,"ha", ['int', 1982222811]);
	}
	static getField4809(){
		return  super.getField(Client.obfuscatedClassName,"hc", []);
	}
	static getField4811(){
		return  super.getField(Client.obfuscatedClassName,"he", []);
	}
	static getField4813(){
		return  super.getField(Client.obfuscatedClassName,"hi", ['int', 1283724953]);
	}
	static getField4814(){
		return  super.getField(Client.obfuscatedClassName,"hj", []);
	}
	static getField4816(){
		return  super.getField(Client.obfuscatedClassName,"hp", []);
	}
	static getField4817(){
		return  super.getField(Client.obfuscatedClassName,"hr", ['int', 1458870823]);
	}
	static getField4819(){
		return  super.getField(Client.obfuscatedClassName,"hu", ['int', 1545424505]);
	}
	static getField4821(){
		return  super.getField(Client.obfuscatedClassName,"hy", []);
	}
	static getField4824(){
		return  super.getField(Client.obfuscatedClassName,"ib", ['int', 305997849]);
	}
	static getField4825(){
		return  super.getField(Client.obfuscatedClassName,"ic", []);
	}
	static getField4828(){
		return  super.getField(Client.obfuscatedClassName,"if", []);
	}
	static getField4829(){
		return  super.getField(Client.obfuscatedClassName,"ig", ['int', 297372581]);
	}
	static getField4830(){
		return  super.getField(Client.obfuscatedClassName,"ih", []);
	}
	static getField4834(){
		return  super.getField(Client.obfuscatedClassName,"im", []);
	}
	static getViewportTempX(){
		return  super.getField(Client.obfuscatedClassName,"io", ['int', 1938124041]);
	}
	static getField4837(){
		return  super.getField(Client.obfuscatedClassName,"ip", ['int', 2118939425]);
	}
	static getField4838(){
		return  super.getField(Client.obfuscatedClassName,"iq", ['int', 1555843685]);
	}
	static getField4840(){
		return  super.getField(Client.obfuscatedClassName,"is", []);
	}
	static getField4842(){
		return  super.getField(Client.obfuscatedClassName,"iu", []);
	}
	static getField4846(){
		return  super.getField(Client.obfuscatedClassName,"jc", []);
	}
	static getField4847(){
		return  super.getField(Client.obfuscatedClassName,"jf", []);
	}
	static getField4848(){
		return  super.getField(Client.obfuscatedClassName,"jh", []);
	}
	static getField4849(){
		return  super.getField(Client.obfuscatedClassName,"ji", []);
	}
	static getField4850(){
		return  super.getField(Client.obfuscatedClassName,"jj", []);
	}
	static getField4851(){
		return  super.getField(Client.obfuscatedClassName,"jk", []);
	}
	static getField4852(){
		return  super.getField(Client.obfuscatedClassName,"jn", []);
	}
	static getField4854(){
		return  super.getField(Client.obfuscatedClassName,"jq", ['int', 1158511795]);
	}
	static getField4855(){
		return  super.getField(Client.obfuscatedClassName,"js", ['int', 1462742923]);
	}
	static getRenderSelf(){
		return  super.getField(Client.obfuscatedClassName,"jt", []);
	}
	static getField4857(){
		return  super.getField(Client.obfuscatedClassName,"ju", []);
	}
	static getWidgetFlags(){
		return new NodeDeque(super.getField(Client.obfuscatedClassName,"kc", []));
	}
	static getField4866(){
		return  super.getField(Client.obfuscatedClassName,"kh", ['int', 1925502431]);
	}
	static getField4867(){
		return  super.getField(Client.obfuscatedClassName,"ki", ['int', 2145567295]);
	}
	static getField4869(){
		return new NodeDeque(super.getField(Client.obfuscatedClassName,"kl", []));
	}
	static getField4870(){
		return  super.getField(Client.obfuscatedClassName,"km", ['int', 309338649]);
	}
	static getField4871(){
		return  super.getField(Client.obfuscatedClassName,"kn", []);
	}
	static getField4878(){
		return  super.getField(Client.obfuscatedClassName,"kw", []);
	}
	static getField4879(){
		return  super.getField(Client.obfuscatedClassName,"kx", ['int', 361511941]);
	}
	static getField4880(){
		return  super.getField(Client.obfuscatedClassName,"kz", ['int', 131930477]);
	}
	static getField4881(){
		return  super.getField(Client.obfuscatedClassName,"la", ['int', 389823149]);
	}
	static getField4882(){
		return  super.getField(Client.obfuscatedClassName,"lb", []);
	}
	static getField4884(){
		return  super.getField(Client.obfuscatedClassName,"ld", ['int', 361812625]);
	}
	static getField4886(){
		return  super.getField(Client.obfuscatedClassName,"lf", ['int', 585279883]);
	}
	static getField4887(){
		return new Widget(super.getField(Client.obfuscatedClassName,"lh", []));
	}
	static getField4888(){
		return  super.getField(Client.obfuscatedClassName,"lj", []);
	}
	static getField4889(){
		return  super.getField(Client.obfuscatedClassName,"lk", ['int', 632062603]);
	}
	static getField4892(){
		return  super.getField(Client.obfuscatedClassName,"ln", ['int', 482004441]);
	}
	static getField4894(){
		return  super.getField(Client.obfuscatedClassName,"lp", ['int', 1540315919]);
	}
	static getInterfaceParents(){
		return new NodeHashTable(super.getField(Client.obfuscatedClassName,"lq", []));
	}
	static getField4896(){
		return  super.getField(Client.obfuscatedClassName,"lr", []);
	}
	static getField4897(){
		return  super.getField(Client.obfuscatedClassName,"ls", ['int', 554023561]);
	}
	static getField4898(){
		return new Widget(super.getField(Client.obfuscatedClassName,"lt", []));
	}
	static getField4899(){
		return  super.getField(Client.obfuscatedClassName,"lu", ['int', 2128086909]);
	}
	static getField4900(){
		return  super.getField(Client.obfuscatedClassName,"lv", []);
	}
	static getField4901(){
		return  super.getField(Client.obfuscatedClassName,"lw", ['int', 143215143]);
	}
	static getField4902(){
		return new Widget(super.getField(Client.obfuscatedClassName,"ly", []));
	}
	static getField4903(){
		return  super.getField(Client.obfuscatedClassName,"mc", []);
	}
	static getField4904(){
		return  super.getField(Client.obfuscatedClassName,"mf", ['int', 315836657]);
	}
	static getField4905(){
		return  super.getField(Client.obfuscatedClassName,"mk", []);
	}
	static getField4909(){
		return  super.getField(Client.obfuscatedClassName,"mq", []);
	}
	static getField4910(){
		return  super.getField(Client.obfuscatedClassName,"mr", []);
	}
	static getField4911(){
		return  super.getField(Client.obfuscatedClassName,"mu", []);
	}
	static getField4913(){
		return  super.getField(Client.obfuscatedClassName,"my", []);
	}
	static getField4914(){
		return  super.getField(Client.obfuscatedClassName,"mz", ['int', 1988195317]);
	}
	static getField4915(){
		return  super.getField(Client.obfuscatedClassName,"na", []);
	}
	static getField4916(){
		return  super.getField(Client.obfuscatedClassName,"nb", ['int', 56389475]);
	}
	static getField4917(){
		return  super.getField(Client.obfuscatedClassName,"nc", ['int', 465911005]);
	}
	static getField4918(){
		return  super.getField(Client.obfuscatedClassName,"nd", []);
	}
	static getField4919(){
		return  super.getField(Client.obfuscatedClassName,"ne", ['int', 1662697037]);
	}
	static getField4920(){
		return  super.getField(Client.obfuscatedClassName,"nf", []);
	}
	static getIsResizable(){
		return  super.getField(Client.obfuscatedClassName,"ng", []);
	}
	static getField4922(){
		return  super.getField(Client.obfuscatedClassName,"nh", []);
	}
	static getField4923(){
		return new NodeHashTable(super.getField(Client.obfuscatedClassName,"nk", []));
	}
	static getField4925(){
		return  super.getField(Client.obfuscatedClassName,"nm", []);
	}
	static getField4926(){
		return  super.getField(Client.obfuscatedClassName,"no", []);
	}
	static getField4927(){
		return  super.getField(Client.obfuscatedClassName,"np", []);
	}
	static getField4928(){
		return  super.getField(Client.obfuscatedClassName,"nq", []);
	}
	static getField4929(){
		return  super.getField(Client.obfuscatedClassName,"nr", []);
	}
	static getField4932(){
		return  super.getField(Client.obfuscatedClassName,"nu", ['long', 1951509518394080689]);
	}
	static getField4933(){
		return new NodeDeque(super.getField(Client.obfuscatedClassName,"nv", []));
	}
	static getField4934(){
		return  super.getField(Client.obfuscatedClassName,"nw", []);
	}
	static getField4935(){
		return new NodeDeque(super.getField(Client.obfuscatedClassName,"nx", []));
	}
	static getField4939(){
		return  super.getField(Client.obfuscatedClassName,"od", []);
	}
	static getField4940(){
		return  super.getField(Client.obfuscatedClassName,"oe", ['int', 1029198239]);
	}
	static getField4941(){
		return  super.getField(Client.obfuscatedClassName,"of", []);
	}
	static getField4942(){
		return  super.getField(Client.obfuscatedClassName,"og", ['long', 1538121201046189629]);
	}
	static getField4944(){
		return  super.getField(Client.obfuscatedClassName,"ok", ['int', 652380205]);
	}
	static getField4945(){
		return  super.getField(Client.obfuscatedClassName,"om", []);
	}
	static getField4946(){
		return  super.getField(Client.obfuscatedClassName,"op", []);
	}
	static getField4947(){
		return  super.getField(Client.obfuscatedClassName,"oq", ['int', 1700172899]);
	}
	static getField4948(){
		return  super.getField(Client.obfuscatedClassName,"os", []);
	}
	static getField4950(){
		return  super.getField(Client.obfuscatedClassName,"ow", []);
	}
	static getField4952(){
		return  super.getField(Client.obfuscatedClassName,"pb", []);
	}
	static getField4953(){
		return  super.getField(Client.obfuscatedClassName,"pc", ['int', 984915623]);
	}
	static getField4954(){
		return  super.getField(Client.obfuscatedClassName,"pe", []);
	}
	static getField4955(){
		return  super.getField(Client.obfuscatedClassName,"pj", []);
	}
	static getField4956(){
		return  super.getField(Client.obfuscatedClassName,"pl", []);
	}
	static getField4959(){
		return  super.getField(Client.obfuscatedClassName,"pr", []);
	}
	static getField4960(){
		return  super.getField(Client.obfuscatedClassName,"pv", []);
	}
	static getField4961(){
		return  super.getField(Client.obfuscatedClassName,"pz", []);
	}
	static getField4741(){
		return  super.getField(Client.obfuscatedClassName,"ai", ['int', 1222574629]);
	}
	static getField4748(){
		return  super.getField(Client.obfuscatedClassName,"ax", ['int', 253396789]);
	}
	static getField4753(){
		return  super.getField(Client.obfuscatedClassName,"bu", []);
	}
	static getField4756(){
		return  super.getField(Client.obfuscatedClassName,"cb", []);
	}
	static getField4764(){
		return  super.getField(Client.obfuscatedClassName,"cn", []);
	}
	static getField4766(){
		return  super.getField(Client.obfuscatedClassName,"cq", []);
	}
	static getField4767(){
		return  super.getField(Client.obfuscatedClassName,"ct", ['int', 1643013921]);
	}
	static getField4770(){
		return  super.getField(Client.obfuscatedClassName,"cy", []);
	}
	static getField4775(){
		return  super.getField(Client.obfuscatedClassName,"dm", []);
	}
	static getField4780(){
		return new class105(super.getField(Client.obfuscatedClassName,"eh", []));
	}
	static getField4783(){
		return  super.getField(Client.obfuscatedClassName,"el", []);
	}
	static getField4785(){
		return  super.getField(Client.obfuscatedClassName,"et", []);
	}
	static getLogin_isUsernameRemembered(){
		return  super.getField(Client.obfuscatedClassName,"ez", []);
	}
	static getField4788(){
		return  super.getField(Client.obfuscatedClassName,"fa", ['int', 1337859839]);
	}
	static getField4799(){
		return  super.getField(Client.obfuscatedClassName,"fz", []);
	}
	static getField4805(){
		return  super.getField(Client.obfuscatedClassName,"gr", ['int', 298870723]);
	}
	static getField4812(){
		return  super.getField(Client.obfuscatedClassName,"hg", []);
	}
	static getField4815(){
		return  super.getField(Client.obfuscatedClassName,"hk", []);
	}
	static getField4818(){
		return  super.getField(Client.obfuscatedClassName,"ht", ['int', 2071185999]);
	}
	static getField4822(){
		return  super.getField(Client.obfuscatedClassName,"hz", ['int', 1426587607]);
	}
	static getField4823(){
		return  super.getField(Client.obfuscatedClassName,"ia", []);
	}
	static getViewportTempY(){
		return  super.getField(Client.obfuscatedClassName,"ie", ['int', 1255872291]);
	}
	static getField4831(){
		return  super.getField(Client.obfuscatedClassName,"ij", []);
	}
	static getField4832(){
		return  super.getField(Client.obfuscatedClassName,"ik", []);
	}
	static getField4841(){
		return  super.getField(Client.obfuscatedClassName,"it", []);
	}
	static getField4843(){
		return  super.getField(Client.obfuscatedClassName,"iv", []);
	}
	static getField4845(){
		return  super.getField(Client.obfuscatedClassName,"iy", []);
	}
	static getField4858(){
		return  super.getField(Client.obfuscatedClassName,"jv", ['int', 1770261721]);
	}
	static getField4859(){
		return  super.getField(Client.obfuscatedClassName,"jx", []);
	}
	static getField4860(){
		return  super.getField(Client.obfuscatedClassName,"jy", []);
	}
	static getField4861(){
		return  super.getField(Client.obfuscatedClassName,"ka", []);
	}
	static getField4862(){
		return  super.getField(Client.obfuscatedClassName,"kb", []);
	}
	static getField4864(){
		return  super.getField(Client.obfuscatedClassName,"kd", []);
	}
	static getField4865(){
		return  super.getField(Client.obfuscatedClassName,"ke", []);
	}
	static getField4868(){
		return  super.getField(Client.obfuscatedClassName,"kj", []);
	}
	static getField4872(){
		return  super.getField(Client.obfuscatedClassName,"ko", ['int', 1255069865]);
	}
	static getField4873(){
		return  super.getField(Client.obfuscatedClassName,"kp", ['int', 282494561]);
	}
	static getField4874(){
		return  super.getField(Client.obfuscatedClassName,"kq", ['int', 892273143]);
	}
	static getField4876(){
		return  super.getField(Client.obfuscatedClassName,"ks", []);
	}
	static getField4877(){
		return new NodeDeque(super.getField(Client.obfuscatedClassName,"kv", []));
	}
	static getField4885(){
		return new Widget(super.getField(Client.obfuscatedClassName,"le", []));
	}
	static getField4890(){
		return  super.getField(Client.obfuscatedClassName,"ll", []);
	}
	static getField4891(){
		return new Widget(super.getField(Client.obfuscatedClassName,"lm", []));
	}
	static getField4893(){
		return  super.getField(Client.obfuscatedClassName,"lo", ['int', 43177633]);
	}
	static getField4906(){
		return new Widget(super.getField(Client.obfuscatedClassName,"mn", []));
	}
	static getField4907(){
		return  super.getField(Client.obfuscatedClassName,"mo", []);
	}
	static getField4908(){
		return  super.getField(Client.obfuscatedClassName,"mp", []);
	}
	static getField4912(){
		return  super.getField(Client.obfuscatedClassName,"mv", []);
	}
	static getField4924(){
		return new NodeDeque(super.getField(Client.obfuscatedClassName,"nl", []));
	}
	static getField4930(){
		return  super.getField(Client.obfuscatedClassName,"ns", ['int', 1769648097]);
	}
	static getField4931(){
		return  super.getField(Client.obfuscatedClassName,"nt", []);
	}
	static getField4936(){
		return  super.getField(Client.obfuscatedClassName,"nz", []);
	}
	static getField4937(){
		return  super.getField(Client.obfuscatedClassName,"ob", []);
	}
	static getField4949(){
		return  super.getField(Client.obfuscatedClassName,"ot", []);
	}
	static getField4951(){
		return  super.getField(Client.obfuscatedClassName,"ox", []);
	}
	static getField4957(){
		return  super.getField(Client.obfuscatedClassName,"pn", ['int', 1727347875]);
	}
	static getIsLowDetail(){
		return  super.getField(Client.obfuscatedClassName,"ab", []);
	}
	static getField4771(){
		return  super.getField(Client.obfuscatedClassName,"dc", []);
	}
	static getField4772(){
		return  super.getField(Client.obfuscatedClassName,"dd", ['int', 661337829]);
	}
	static getField4774(){
		return  super.getField(Client.obfuscatedClassName,"dg", []);
	}
	static getJs5Errors(){
		return  super.getField(Client.obfuscatedClassName,"dp", ['int', 1183594211]);
	}
	static getField4777(){
		return new Archive(super.getField(Client.obfuscatedClassName,"dr", []));
	}
	static getField4778(){
		return new class360(super.getField(Client.obfuscatedClassName,"dy", []));
	}
	static getField4781(){
		return new PacketWriter(super.getField(Client.obfuscatedClassName,"ei", []));
	}
	static getField4782(){
		return  super.getField(Client.obfuscatedClassName,"ek", []);
	}
	static getField4808(){
		return  super.getField(Client.obfuscatedClassName,"hb", []);
	}
	static getField4810(){
		return  super.getField(Client.obfuscatedClassName,"hd", ['int', 1667958991]);
	}
	static getField4844(){
		return  super.getField(Client.obfuscatedClassName,"iw", ['int', 377530725]);
	}
	static getField4875(){
		return  super.getField(Client.obfuscatedClassName,"kr", []);
	}
	static getField4883(){
		return  super.getField(Client.obfuscatedClassName,"lc", ['int', 686366071]);
	}
	static getField4938(){
		return  super.getField(Client.obfuscatedClassName,"oc", []);
	}
	static getField4826(){
		return  super.getField(Client.obfuscatedClassName,"id", []);
	}
	static getField4835(){
		return  super.getField(Client.obfuscatedClassName,"in", []);
	}
	static getField4839(){
		return  super.getField(Client.obfuscatedClassName,"ir", []);
	}
	static getField4853(){
		return  super.getField(Client.obfuscatedClassName,"jp", ['int', 1976218495]);
	}
	static getField4820(){
		return  super.getField(Client.obfuscatedClassName,"hv", []);
	}
	static getField4833(){
		return  super.getField(Client.obfuscatedClassName,"il", []);
	}
	getField4997(){
		return  super.getField(Client.obfuscatedClassName,"ay", []);
	}
	getField5000(){
		return new class265(super.getField(Client.obfuscatedClassName,"ja", []));
	}
	getField5001(){
		return new class261(super.getField(Client.obfuscatedClassName,"jb", []));
	}

	static onVmethod8278(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"af", todo, []);
	}
	static onVmethod8281(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"al", todo, []);
	}
	static onMethod8282(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"am", todo, []);
	}
	static onVmethod8283(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"an", todo, []);
	}
	static onMethod8284(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"ao", todo, []);
	}
	static onVmethod8285(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"ar", todo, []);
	}
	static onVmethod8288(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"aw", todo, []);
	}
	static onVmethod8290(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"ay", todo, []);
	}
	static onDrawLoggedIn(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"az", todo, []);
	}
	static onMethod8292(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"bj", todo, []);
	}
	static onOpenMenu(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"ce", todo, []);
	}
	static onMethod8296(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"cl", todo, []);
	}
	static onMethod8297(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"cu", todo, []);
	}
	static onMethod8301(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"fc", todo, []);
	}
	static onMethod8302(todo){
		super.onMethodExecution(Client.obfuscatedClassName,"fe", todo, []);
	}
}
module.exports = Client;
