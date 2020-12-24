require('../../bigint.min.js');
const Player = require('../../api/player.js');

class ValueDeobfuscator{
    static classmap = {
        "in": function newplayer1(value) {return new Player(value);},
        "hv": function newplayer2(value) {return new Player(value);}
    };

    static deobfuscateValue(value, deobfuscationArgs){
        if (deobfuscationArgs[0] === "int"){
            return ValueDeobfuscator.deobInt(value, deobfuscationArgs[1]);
        }else if (deobfuscationArgs[0] === "long"){
            return ValueDeobfuscator.deobLong(value, deobfuscationArgs[1]);
        }else{
            return value;
        }
    }

    static deobInt(value, decopvalue){
        var decop = new bigInt(decopvalue);
        var maxinteger = new bigInt(1).shiftLeft(31);
        return ( decop *  new bigInt(value))  % maxinteger;
    }

    static deobLong(value, decopvalue){
        var decop = new bigInt(decopvalue);
        var maxinteger = new bigInt(1).shiftLeft(63);
        return ( decop *  new bigInt(value))  % maxinteger;
    }
}

module.exports = ValueDeobfuscator;
