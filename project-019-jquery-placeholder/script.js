$(function(){

  $('input').first().before('Image Text :');
  $('input').after('<br>');
  $('input[type="color"]').first().before('Background Color :');
  $('input[type="color"]').last().before('Text Color :');

  $('input[type="submit"]').click(function(){
      event.preventDefault();
      var imagePath = 'http://via.placeholder.com/350x150';
      $('img').attr('src',imagePath);
  })
})