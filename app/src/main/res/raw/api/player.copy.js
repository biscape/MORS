const Interceptor = require('./core/apicore.js');

class Player extends Interceptor{
    static obfuscatedClassName = "in";

    getAnimation(){
        return super.getField("cn", ['int',1793361247]);
    }
    getSpotAnimation(){
        return super.getField("bu", ['int',2015437915]);
    }
    constructor(obfuscatedObject){
        super(Player.obfuscatedClassName, obfuscatedObject);
    }
}

module.exports = Player;
