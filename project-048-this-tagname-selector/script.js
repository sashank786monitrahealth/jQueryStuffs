$(function(){
    $('input').focus(function(){
        $(this).css({
            'background-color':'chartreuse'
        })
    }).blur(function(){

        $(this).css({
            'background-color':'white'
        })

    })
})