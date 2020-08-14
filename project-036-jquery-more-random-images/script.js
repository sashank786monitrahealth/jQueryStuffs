$(function(){
    $('.btn').css({
        'border': '1px solid black'
        , 'width':'150px'
        , 'padding':'10px'
    })



    $('.btn-2').click(function(e){
        jQuery.ajax({
            url:'https://api.randomuser.me/?results=50',
            dataType: 'json',
            success: (function(data){
                     console.log(data);
                     var html = "<h1>People</h1> <br><br><br>";
                     $.each(data.results,function(i, n){
                        
                        var fullName = n.name.first + ' ' + n.name.last;
                        var userImage = n.picture.thumbnail;
                            html += '<span>'+' <img src="'+userImage+'"'+'</span>';
                        $('#output1').html(html);
                     })
            })
        })
    })



})