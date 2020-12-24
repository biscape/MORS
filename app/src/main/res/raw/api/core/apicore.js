const ValueDeobfuscator = require('./mapping.js');

class Interceptor{

    constructor(obfuscatedObject, obfuscatedClassName ){
        this.obfuscatedClassName = obfuscatedClassName;
        this.obfuscatedClass = Java.use(obfuscatedClassName);
        this.obfuscatedObject = obfuscatedObject // Java.cast(obfuscatedObject, this.obfuscatedClass);

    }
    static getField(obfuscatedClassName, obfuscatedFieldName, deobfuscationArgs){
         var obfuscatedClass = Java.use(obfuscatedClassName);
         var returnValue = obfuscatedClass[obfuscatedFieldName].value;
         if (returnValue != null){
             returnValue = ValueDeobfuscator.deobfuscateValue(returnValue, deobfuscationArgs);
         }
         return returnValue;
    }
    getField(obfuscatedClassName, obfuscatedFieldName, deobfuscationArgs){
        var obfuscatedClass = Java.use(obfuscatedClassName);
        var obfuscatedObject =  Java.cast(this.obfuscatedObject, obfuscatedClass);
        var field = obfuscatedClass.class.getDeclaredField(obfuscatedFieldName);
        var returnValue = null;
        if (field){
            field.setAccessible(true);
            var returnValue = field.get(obfuscatedObject);
        }
        if(returnValue == null && obfuscatedObject[obfuscatedFieldName] != null) {
            returnValue = obfuscatedObject[obfuscatedFieldName].value;
        }
        if (returnValue != null){
            returnValue = ValueDeobfuscator.deobfuscateValue(returnValue, deobfuscationArgs);
        }
        return returnValue;
    }
    static onMethodExecution(obfuscatedClassName, obfuscatedMethodName, todo, deobfuscationArgs){
        var obfuscatedClass = Java.use(obfuscatedClassName);
        var obfuscatedMethod = obfuscatedClass[obfuscatedMethodName];
         obfuscatedMethod.overloads[0].implementation = function(...args) {
               todo(...args);
               this[obfuscatedMethodName](...args);
         }
    }


}

module.exports = Interceptor;
//global.player = Player;
//global.Interceptor = Interceptor;