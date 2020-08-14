$(function(){
    $('.btn').css({
        'border': '1px solid black'
        , 'width':'150px'
        , 'padding':'10px'
    })

    $('.btn-1').click(function(e){
        url='http://s179017901.onlinehome.us/discoveryvip/';

        var myData = $('#myForm').serialize();
        console.log(myData);
        $.post(url,myData,function(i,d){
             console.log(d);
        })
    })



})