$(document).ready(function(){
    var colorArray = [];

    $('#gameArea').hide();
    $('#start').click(startGame);
    $('#output').on('click','.cell',checkCell);
    $('#start').css({
        border:'1px solid black',
        textAlign:'center',
        padding:'10px',
        width:'150px',
        backgroundColor:'red',
        fontSize:'2em',
        marginBottom:'10px',
        color:'white'
    })

    $('#findme').css({
        border:'1px solid black',
        textAlign:'center',
        padding:'0px',
        width:'400px',
        //backgroundColor:'dodgerblue',
        Height:'100px',
        display:'inline-block',
        fontSize:'2em'
    })

    function checkCell(){
        var currColor = $(this).css('backgroundColor');
        if(currColor ==$("#findme").css('backgroundColor')){
           var cntValue = Number($(this).text());
           cntValue++;
           //console.log(cntValue);
           $(this).text(cntValue);
           $(this).css('backgroundColor',addNewColor());
           pickMyColor();
           $('#message').html("Correct");
        } else {
            $('#message').html("Wrong");
        }
    }

    function startGame(){
        makeBoard();
        pickMyColor();
        $('#start').hide();
        $('#gameArea').show();
        console.log("game started");
    }

    function pickMyColor(){
        var index = Math.floor(Math.random()*(colorArray.length));
        var picked = colorArray.splice(index,1);
        $('#findme').css('background-color',picked);
    }

    function randomColor(){
        return '#'+((1<<24)*Math.random() | 0).toString(16);
    }

    function addNewColor(){
        var trackColor = randomColor();
        colorArray.push(trackColor);
        return trackColor;
    }

    function makeBoard(){
        var x = 4;
        var html = '';
        for(var row=0; row<x; row++){
           html+='<div class="row">';
           for(var col=0; col<x;col++){
               html+='<div class="cell" style="background-color:'+addNewColor()+'">0</div>';
           }
           html +="</div>";
        }
        $('#output').html(html);
        $('.cell').css({
            border:'1px solid black',
            textAlign:'center',
            padding:'0px',
            margin:'0px',

            width:'100px',
            //backgroundColor:'dodgerblue',
            height:'100px',
            display:'inline-block', // stack one next to another
            fontSize:'2em',
            color:'black'

        })
    }
})