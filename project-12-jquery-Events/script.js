$(function(){
    var counter = 0;
    /*
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
   $('.highlight').mousedown(function(){
       $(this).text("Mouse down!");
   })
   $('.highlight').mouseup(function(){
       $(this).text("Mouse up!");
   })
   $('.highlight').mouseenter(function(){
       $(this).text("mouse entered.")
   })
   $('.highlight').mouseleave(function(){
       $(this).text("mouse leaves.")
   })
  $('.highlight').mousemove(function(){
      $(this).text("mouse moved.")
  })
   */
  
   $('.highlight').mouseout(function(){
      $(this).text("mouse out.")
  })

})