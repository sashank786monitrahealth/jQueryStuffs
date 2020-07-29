$(function(){

 $('img').css({width:'50px',height:'50px'})
 $('img').click(function(){
     var tempSrc = $(this).attr('src');
     console.log(tempSrc);
     window.open(tempSrc,'Full Image','Window popup')
 })

})