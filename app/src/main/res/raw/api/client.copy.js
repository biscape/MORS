const Interceptor = require('./core/apicore.js');

class Client extends Interceptor{
    static obfuscatedClassName = "client";

    static onGameCycle(todo){
        super.onMethodExecution(Client.obfuscatedClassName,"cc", todo, []);
    }
    static onRandomMethodFA(todo){
        super.onMethodExecution(Client.obfuscatedClassName,"aw", todo, []);
    }
    constructor(obfuscatedObject){
        super(WorldMapScaleHandler.obfuscatedClassName, obfuscatedObject);
    }
}
module.exports = Client;
