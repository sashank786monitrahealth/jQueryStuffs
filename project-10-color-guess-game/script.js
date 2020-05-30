$(document).ready(function(){
    $('#gameArea').hide();
    $('#start').click(startGame);
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

    function startGame(){
        makeBoard();
        pickMyColor();
        $('#gameArea').show();
        console.log("game started");
    }

    function pickMyColor(){

    }

    function makeBoard(){
        var x = 4;
        var html = '';
        for(var row=0; row<x; row++){
           html+='<div class="row">';
           for(var col=0; col<x;col++){
               html+='<div class="cell">0</div>';
           }
           html +="</div>";
        }
        $('#output').html(html);
    }
})