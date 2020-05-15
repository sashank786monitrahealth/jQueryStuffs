
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

       $.each(winningPos,function(key,arr){//
        if(arr.indexOf(pos) >= 0){
            console.log(mark);
            console.log(arr);

        }
           
       })
    }