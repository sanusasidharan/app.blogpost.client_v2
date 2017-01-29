var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
  
    // parsed response body as js object 
    
	 var hacked=[{
	"pubDate": {
		"$date": "2016-12-30T05:25:00.000Z"
	},
	"author": "",
	"title": "2017 Predictions for the connected car:: What to look out for? - Part 2",
	"feedCategory": "INFOSYS",
	"_id": 120,
	"description": "The blog will look at the following - what is the trend, why does the blogger think it is in a particular phase and what is the impact.",
	"link": "http://www.infosysblogs.com/engineering-services/2016/12/2017_predictions_for_the_conne_1.html?soc=rssinf"
}, {
	"pubDate": {
		"$date": "2016-12-30T05:25:00.000Z"
	},
	"author": "",
	"title": "2017 Predictions for the connected car:: What to look out for? - Part 2",
	"feedCategory": "INFOSYS",
	"_id": 120,
	"description": "The blog will look at the following - what is the trend, why does the blogger think it is in a particular phase and what is the impact.",
	"link": "http://www.infosysblogs.com/engineering-services/2016/12/2017_predictions_for_the_conne_1.html?soc=rssinf"
}];
	console.log(hacked);
    // raw response 
    //console.log(response);
	
	res.json(hacked);
	
  
  //__dirname : It will resolve to your project folder.
});

app.get('/INFOSYS',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/investor',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/media',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/blog',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});


app.listen(999);

console.log("Running at Port 999");

