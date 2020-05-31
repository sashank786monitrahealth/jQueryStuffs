$(function(){

$("input").css("background-color","yellow");

$('input[type="date"]').css("background-color","red");

$('input[type="color"]').css("background-color","skyblue");

$('.btn').click(function(){
    var myCheckBoxes = $('input[type="checkbox"]').attr({
        checked:true
    });
    console.log(myCheckBoxes.val());
})


})