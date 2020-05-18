
    var finished = false;  // global variable 
    
    $(document).ready(function(){
        for(var i=1;i<=9;i++){
            $("#grid").append("<div class=square id=s"+i+" data-position="+i+"></div>")
        }

        ////

    $("#level").change(function(){
        $("#container1").hide();
        $("#rules").show();
        $('#grid').show();
    });
        ////

    $(".square").on("click",playersTurn);

    })

    function playersTurn(){
        var thisClass = $(this).attr("class");
        if (thisClass.indexOf("marked") < 0){
           $(this).addClass("x-mark marked");
           trackWinner($(this).data("position"),"x-mark");

           if ($("#level").val() == "easy"){
                placeRandom();
           } else {
               computerTurnHard();
           }

        } else {
            alert("already selected");
        }

        if ($(".marked").length == 9 && finished == false)  {
           displayResult("Draw!", "draw");
           finished = true;
        }
    }


    function placeRandom(){
        var choose = $(".square:not(.marked)");
        var randPosition = Math.floor(Math.random()*choose.length);
        var randElement = choose[randPosition];
        $(randElement).addClass("o-mark marked");
        var currentPos = $(randElement).data("position");
        trackWinner(currentPos, "o-mark");
    }


    
    function computerTurnHard(){
       
    }


    function trackWinner(pos,mark){
       var winningPos = [[1,2,3],[1,4,7],[1,5,9]
                       , [2,5,8]
                       , [3,6,9],[3,5,7]
                       ,[4,5,6]
                       ,[7,8,9]];
       if ($(".x-mark").length >=3 || $(".o-mark").length >= 3) {


            $.each(winningPos,function(key,arr){//
                if (finished == true)
                   return false;

                   
                if(arr.indexOf(pos) >= 0){
                    console.log(arr);
                    var marksInARow = 0;
                    $.each(arr, function(index, value){
                        var classNames = $("#s"+value).attr("class");
                        if (classNames.indexOf(mark) >= 0){
                            marksInARow++;
                            if (marksInARow == 3){
                                finished = true;
                                if(mark == "x-mark"){
                                    displayResult("You Win!","win");
                                    //console.log("You Win.");
                                } else if (mark == "o-mark"){
                                    displayResult("You Lost!","lost")
                                    //console.log("You Lost.");
                                }
                                return false;
                            }
                        }
                    })
        
                }
                
            })

       }
    }

    function displayResult(message, className){
       $("#rules").hide();
       $("#container2").show();
       $("#btnResult").html(message);
       $("#btnResult").addClass(className);
    }


    function resetGame(){
        finished = false;
        $("#container2").hide();
        $("#container1").show();
        $("#grid").hide();
        $("#level").val("default");
        $(".square").removeClass("x-mark o-mark marked");
        $("#btnResult").html("");
        $("#btnResult").removeClass();
    }