
$(function(){
    $("#btnClick1").click(function(){
        $("[id |=first]").css("color","red");
        //$("[btn]").css("color","red");
    })
    $("#btnClick2").click(function(){
        //$("[class]").css("color","red");
        $("[id]").css("color","chartreuse");
    })
    $("#btnClick3").click(function(){
        $("[id $=th]").css("color","violet");
        //$("[btn]").css("color","red");
    })
    $("#btnClick4").click(function(){
        $("[id *=Click]").css("color","chartreuse");
        //$("[btn]").css("color","red");
    })
})
/*
    $(document).ready(function(){       
      $("#btnClick").click(function(){            
          $("[class]").css("color", "red");
          $("[id]").css("color", "red");
          $("[id=firstDiv]").css("color", "red");
          $("[class=paras]").css("color", "red");
          $("p[class!=paras]").css("color", "red");
      });         
   });
   */