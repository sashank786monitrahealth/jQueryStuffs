$(function(){
   
    $('h1').on('click', function(){
        var docHeight = $(document).width();
        var winHeight = $(window).width();
        //console.log($(window));
        //console.log($(document));

        //console.log(docHeight)
        //console.log(winHeight);

        var $el = $('#wrapper > div').last();
        console.log($el);
        console.log($el.height())
        console.log($el.width())
    });
        

})