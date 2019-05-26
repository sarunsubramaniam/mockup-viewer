var fs = require('fs');

var content = '';

var fNames = ["image-01.svg", "image-02.svg", "image-03.svg"];

fNames.forEach(function (fName,index){
fs.readFile(fName, "utf8", readFile);
	function readFile(err, data){
		var dataWithoutClick = data.replace(/onclick=\"([^\"]*)\"/g,'');
		var removeViewBackground = dataWithoutClick.replace('style="enable-background:new 0 0 1080 1920;"','');
	    var newData = removeViewBackground.replace(/<\w*\s/g,function(str){
				return str+'onclick="onSvgClick(this)" ';
		});
    fs.writeFile (__dirname+'/'+fName, newData, function(err) {
    	if (err) throw err;
        console.log(fName + ' Saved !!');
    });
	}
});
