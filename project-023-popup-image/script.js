$(function(){

 $('img').css({width:'50px',height:'50px'})
 $('img').click(function(){
     var txtInfo = $('input[type="text"]').val()
     var tempSrc = $(this).attr('src');
     console.log(tempSrc);
     window.open(tempSrc+'?text='+txtInfo+'','Full Image','Window popup')
 })

})