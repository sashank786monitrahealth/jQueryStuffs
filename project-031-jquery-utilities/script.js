$(function(){
    var myArray = ["hello","world"];
    $('#output1,#output2').css({
        'position':'relative'
    })

    $('.btn').css({
        'border':'1px solid black'
        , 'width':'150px'
        , 'padding':'10px'

    })

    $('.btn').first().click(function(){
        console.log($.isArray(myArray));
    })

    $('.btn:eq(1)').click(function(){})
    $('.btn').last().click(function(){})
    
})