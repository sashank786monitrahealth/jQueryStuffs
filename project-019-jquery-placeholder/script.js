$(function(){

  $('input').first().before('Image Text :');
  $('input').after('<br>');
  $('input[type="color"]').first().before('Background Color :');
  $('input[type="color"]').last().before('Text Color :');


  $('input[type="color"]').change(function(){
    var clrValues = $('input[type="color"]');
    var textHolder = $('input[type="text"]').val();
    var colorBack = cleanHash(clrValues.first().val());
    var colorFront = cleanHash(clrValues.last().val());
    console.log("colorBack = "+colorBack);
    console.log("colorFront = "+colorFront);
    var imagePath = 'http://via.placeholder.com/350x150/'+colorBack+'/'+colorFront+"?text="+textHolder;
    $('img').attr('src',imagePath);
});

  $('input[type="submit"]').click(function(){
      event.preventDefault();
  })


function cleanHash(arg){
    return arg.replace('#','');
}

})