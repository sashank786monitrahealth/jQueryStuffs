$(document).ready(function(){
    $("#btnFirst").click(function(){
        $("h1").css('background-color',"chartreuse");
    });


    $("#btnSecond").click(function(){
        $("ol").css('background-color',"fuchsia");
    });


    $("#btnThird").click(function(){
        $("ul").css('background-color',"gold");
    });


    $("#btnFourth").click(function(){
        $("button,p").css('background-color',"dodgerblue");
    });
})