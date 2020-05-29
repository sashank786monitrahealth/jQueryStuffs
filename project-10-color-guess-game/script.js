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
        marginBottom:'10px'
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
        console.log("game started");
    }

})