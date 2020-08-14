$(function(){
    $('.btn').css({
        'border': '1px solid black'
        , 'width':'150px'
        , 'padding':'10px'
    })

    $('.btn-1').click(function(e){
        $.ajax({
            url:'https://api.github.com/gists'
            , dataType: 'json'
            , success: (
                function(data){
                    console.log(data);
                    $.each(data, function(i, d){
                        //console.log(data[i].description);
                    $('#output1').append(data[i].description+'<br><br><br>')
                    })
                })
        })
    })



})