
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

           if ($("#level").val() == "easy"){
                placeRandom();
           } else {
               computerTurnHard();
           }

        } else {
            alert("already selected");
        }
    }


    function placeRandom(){
        var choose = $(".square:not(.marked)");
        var randPosition = Math.floor(Math.random()*choose.length);
        var randElement = choose[randPosition];
        $(randElement).addClass("o-mark marked");
        console.log(randPosition);
        console.log(choose);
    }
    
    function computerTurnHard(){

    }