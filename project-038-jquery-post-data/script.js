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
        $.post(url,myData,function(d,i){
             console.log(d.input1);
             console.log(d.input2);
             console.log(d.sel);
        })
    })


    $('.btn-2').click(function(e){
        url='http://s179017901.onlinehome.us/discoveryvip/';

        var myData = $('#myForm').serialize();
        console.log(myData);
        $.ajax({
             type:'POST',
             url: url,
             data: myData,
             success: function(data){
                 console.log(data);
             }
        })
    })




})