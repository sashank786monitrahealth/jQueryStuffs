$(function(){
    $('.btn').css({'border':'1px solid black'});
    $('.btn').first().click(
        function(){
            console.log('first');
        }
    )


    $('.btn:eq(1)').click(
        function(){
            console.log('second');
        }
    )


    $('.btn:eq(2)').click(
        function(){
            console.log('third');
        }
    )
    $('.btn').last().click(
        function(){
            console.log('last');
        }
    )


})