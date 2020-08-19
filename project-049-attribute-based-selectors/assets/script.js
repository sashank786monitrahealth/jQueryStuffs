
$(function(){
    $("#btnClick1").click(function(){
        $("p[class!=paras]").css("color","red");
        //$("[btn]").css("color","red");
    })
    $("#btnClick2").click(function(){
        //$("[class]").css("color","red");
        $("[id]").css("color","purple");
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