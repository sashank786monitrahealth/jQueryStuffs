$(function(){
    $('.btn').css({
        'border': '1px solid black'
        , 'width':'150px'
        , 'padding':'10px'
    })



    $('.btn-2').click(function(e){
        jQuery.ajax({
            url:'https://api.randomuser.me/?results=5',
            dataType: 'json',
            success: (function(data){
                     var n = data.results[0];
                     var fullName = n.name.first+' '+n.name.last;
                     var userImage = n.picture.thumbnail;
                     var html = '<div>'+fullName+'</div>'
            })
        })
    })



})