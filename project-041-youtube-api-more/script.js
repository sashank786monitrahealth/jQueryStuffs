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
        $('#input1').val()
        var searchItem = $('#input1').val();

        searchYoutube(searchItem);
    })


    function searchYoutube(searchItem){

        console.log('clicked.');
        console.log("API key: "+"AIzaSyC1SNw34ZsayRuVLUcp9_6FVFztafmZAHI");
        var apiKey = "AIzaSyC1SNw34ZsayRuVLUcp9_6FVFztafmZAHI";
        //var url = "https://www.googleapis.com/youtube/v3/search?q="+searchItem+"&part=snippet&key="+apiKey;
        var ajaxURL = "https://www.googleapis.com/youtube/v3/search";
        $.ajax({
            url: ajaxURL,
            dataType: 'json',
            type:'GET',
            data: {
                key:apiKey,
                q:searchItem,
                part:'snippet',
                maxResults:1,
                nextPageToken: "CBkQAA"
            }
        }).done(function(data){
            //console.log(data);
            var nextPage = data.nextPageToken;
            var previousPage = data.prevPageToken;
            var html = "";
            $.each(data['items'],function(index,value){
              html += `<div>`;
              html += '<div><div class="title">'+value.snippet.title+`</div>`;
              html += '<div class="url">'+value.id.videoId+`</div>`;
              html += '<div class="thumbnail"><img src="'+value.snippet.thumbnails.medium.url+`"></div>`;
              html += `</div>`;
              console.log(value.snippet);
              //console.log(value.id.videoId);
              //console.log(value.snippet.thumbnails.medium.url);
              //html = value.snippet.thumbnails.medium.url+'<br>';
              //console.log(html)
              //$('#output').append(html);
            })
            $('#output').html(html);
        })
        /*
        $.getJSON(url, function(data){
           console.log(data);
        })
        */
    }


})