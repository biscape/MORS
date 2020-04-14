Java.perform(function() {
    var jClass = Java.use('!$1');
    var jMethod = '!$2';
    var overloads =jClass[jMethod].overloads;
    for (var overi in overloads) {
            overloads[overi].implementation = function() {
            // console.log("hooking: !$1." + jMethod + '(' + overi + ")")
            var ret = this[jMethod].apply(this,arguments);
            // var args = this[jMethod].arguments;
            var args = "";
            for (var argi = 0; argi < arguments.length; argi++) {
                if (arguments[argi]) {
                    if (Array.isArray(arguments[argi])) {
                        args += "[";
                        for (var l = 0; l < arguments[argi].length - 1; l++) {
                            if( arguments[argi][l]){
                                args += " " + arguments[argi][l].toString() + ","
                            }else{
                                args += "null,"
                            }
                        }
                        args += "]";
                    }else{
                        args += " " + arguments[argi].toString() + ","
                    }
                } else {
                    args += "null,"
                }
            }
	   
            if (args.endsWith(",")) args = args.substr(0, args.length-1);
            console.log('bubble(hooked !$1.!$2(' + args + ') --> ' + ret + ')';
            //var funcPtr = this["$handle"];
            //console.log("JSON(!$1): " + JSON.stringify(funcPtr));
            //console.log("String(!$1): " + this.toString());
            // console.log("JSON(!$1): " + JSON.stringify(ptr(funcPtr).readPointer())); //cause Error: access violation accessing ...
            // var jAndroidLog = Java.use("android.util.Log"), jException = Java.use("java.lang.Exception");
            // var stackTraceString = jAndroidLog.getStackTraceString(jException.$new());
            // console.log(stackTraceString);
            return ret;
        }
    }
});
