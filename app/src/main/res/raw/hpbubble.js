Java.perform(function() {
    var jClass = Java.use('op');
    var jMethod = 'ad';
    var overloads =jClass[jMethod].overloads;
    for (var overi in overloads) {
            overloads[overi].implementation = function() {
            var ret = this[jMethod].apply(this,arguments);
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
	    if (arguments.length > 3){
		if(arguments[2]+"" === "63"){
  		    console.log('hooked op.ad(' + args + ') --> ' + ret);
		    console.log('bubble('+arguments[0]+'hp)');
 		    console.log('beep()');
		}
	    }

          
            return ret;
        }
    }
});
