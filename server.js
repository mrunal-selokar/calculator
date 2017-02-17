var express = require('express');
var path = require('path');
var calculate=require('./calculator.js');
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', function(request,response){
	console.log(request.params);
	var query=new String(request.url);
	var keyValuePairs = query.split("&"); 
	var no1=keyValuePairs[0].split("=")[1];
	var no2=new String(keyValuePairs[1]).split("=")[1]||"0";
	var method=new String(keyValuePairs[2]).split("=")[1]||"0";
	
	var result=calculate(method,Number(no1),Number(no2));
	console.log(result + "");
	response.render('index', { result: result });
});


app.listen(3001)
