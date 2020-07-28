$(function(){
   
    $('h1').on('click', function(){
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        console.log($(window));
        console.log($(document));

        console.log(docHeight)
        console.log(winHeight)
    });
        

})