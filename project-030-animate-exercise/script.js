$(function(){
 
    $('.btn').click(function(){
       var str = $(this).text().slice(-1);
       console.log(str);

       if (str=='1'){
           $('.highlight').animate({
               opacity:'0.5',
               letterSpacing:'+=10px'
           })
       }

       if (str=='2'){
           $('.highlight').animate({
               opacity:'1',
               letterSpacing:'-=10px'
           })
       }
    })
    
})