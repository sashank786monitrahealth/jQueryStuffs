/* 

Obtaining youtube-api:
######################
https://developers.google.com/youtube/v3/getting-started

Youtube-Credentials Page:
#########################
https://console.developers.google.com/apis/credentials?project=jquery-youtube-api-286502
Obtianed Key: AIzaSyC1SNw34ZsayRuVLUcp9_6FVFztafmZAHI
Complete URL: https://www.googleapis.com/youtube/v3/search?q=test&part=snippet&key=AIzaSyC1SNw34ZsayRuVLUcp9_6FVFztafmZAHI

*/
//ensuring jQuery is ready
$(document).ready(function(){

    $('#searchButton').click(function(){
        console.log('clicked.');
        console.log("API key: "+"AIzaSyC1SNw34ZsayRuVLUcp9_6FVFztafmZAHI");
        var apiKey = "AIzaSyC1SNw34ZsayRuVLUcp9_6FVFztafmZAHI";
        var url = "https://www.googleapis.com/youtube/v3/search?q=test&part=snippet&key="+apiKey;
        $.getJSON(url, function(data){
           console.log(data);
        })
    })


})