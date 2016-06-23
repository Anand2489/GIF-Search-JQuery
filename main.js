// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var api_key = "dc6zaTOxFJmzC";
// var search_word = "Hello World";

function httpRequest(url){
	var xmlhttp = new XMLHttpRequest();
	console.log("Hello httpRequest");
	var array = [];
	xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        console.log("hello onreadystatechange")
        array = myfunction(myArr);
        console.log(array[0]);
    	}
	};
	xmlhttp.open('GET', url, true);
	xmlhttp.send();
	// var myArr = JSON.parse(xmlhttp.responseText);
	// array = myfunction(myArr);
	console.log(array);
	console.log("hello httpRequest--2");
	return array;
}

function myfunction(myArr){
	var dataArray = myArr.data;
	var r;
	var array = [];

	for (r=0;r<dataArray.length;r++){
		array.push(dataArray[r].bitly_url);
	}
	console.log("hello myfunction");
	console.log(array[0]);
	return array;
}
function act(search_word){
	var word = search_word.replace(/ /g,"+");
	var url = "http://api.giphy.com/v1/gifs/search?api_key="+api_key+"&q="+word;
	console.log("url: "+url);
	var array = httpRequest(url);
	li = document.getElementById("list");
	li_arr = "";
	for (var i=0; i < array.length; i++){
           li_arr += "<li>" + array[i] + "</li>";
        }
	li.innerHTML = li_arr;
	console.log(array[0]);
}