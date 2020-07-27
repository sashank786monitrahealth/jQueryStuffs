$(function(){

  $('input').first().before('Image Text :');
  $('input').after('<br>');
  $('input[type="color"]').first().before('Background Color :');
  $('input[type="color"]').last().before('Text Color :');

  $('input[type="submit"]').click(function(){
      event.preventDefault();
      var clrValues = $('input[type="color"]');
      var colorBack = clrValues.first().val();
      var colorFront = clrValues.last().val();
      console.log("colorBack = "+colorBack);
      console.log("colorFront = "+colorFront);
      var imagePath = 'http://via.placeholder.com/350x150';
      $('img').attr('src',imagePath);
  })
})