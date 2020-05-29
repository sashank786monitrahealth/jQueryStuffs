$(document).ready(function(){
    $('#output').hide();
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
        padding:'10px',
        width:'150px',
        backgroundColor:'dodgerblue',
        fontSize:'2em',
        marginBottom:'10px'
    })

    function startGame(){
        console.log("game started");
    }

})