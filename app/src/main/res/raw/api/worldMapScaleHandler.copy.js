const Interceptor = require('./core/apicore.js');
const Player = require('./player.js');

class WorldMapScaleHandler extends Interceptor{
    static obfuscatedClassName = "ce";

    static getCurrentPlayer(){
        return new Player(super.getField(WorldMapScaleHandler.obfuscatedClassName,"jl", []));
    }
    constructor(obfuscatedObject){
        super(WorldMapScaleHandler.obfuscatedClassName, obfuscatedObject);
    }
}
module.exports = WorldMapScaleHandler;
