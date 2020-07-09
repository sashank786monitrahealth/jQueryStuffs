$(function(){
    var counter = 0;
    $('.highlight').dblclick(function(){
        $(this).text('Double Click!!')
    })

    $('.highlight').click(function(){
        $(this).text('clicked '+counter);
        counter++;
    })
    $('.highlight').hover(function(){
        $(this).text('Hover over Me!!');
    })
})