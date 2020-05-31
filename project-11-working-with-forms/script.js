$(function(){

$("input").css("background-color","yellow");

$('input[type="date"]').css("background-color","red");

$('input[type="color"]').css("background-color","skyblue");

$('.btn').click(function(){
   /* 
     var myCheckBoxes = $('input[type="checkbox"]').attr({
        checked:true
    });
    console.log(myCheckBoxes.val());
    */
   var checkedButtons = $('input:checked').val();
   console.log(checkedButtons);
})


$('form').submit(function(e){
    e.preventDefault();
    console.log("Please do not submit me!");

    if ($('input:checked').length > 0){
       $('form').css('background-color','blue');
    } else {
        $('form').css('background-color','chartreuse');
    }
})

})