const testFile = '../img'
const fs = require('fs')


var files = fs.readdirSync(testFile), 
            cats = [], 
            ninjas = [], 
            obj = {}, 
            catRegex = /cat/,
            ninjaRegex = /ninja/,
            obj = {}

files.forEach(file => {
    file.match(catRegex) ? cats.push(file): ninjas.push(file)
})

obj.cats = cats
obj.ninjas = ninjas 


var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
        window.$ = _$;
        window.obj = obj 
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}


// var files = {}, cats = [], ninjas = [], catRegex = /cat/, ninjaRegex = /ninja/

// fs.readdir(testFile, function(err, files){
//     if(err){
//         console.log(err)
//     }
//     files.forEach(function(file,index){
//         if(file.match(catRegex)){
//             cats.push(file)
//         }
//     })
// })



