$(function(){
    var counter = 0;
    $('.highlight').click(function(){
        $(this).text('clicked '+counter);
        counter++;
    })
})