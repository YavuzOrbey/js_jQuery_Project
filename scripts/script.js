$(document).ready(function(){

  for(var i=0; i<16*16; i++){
    var block = $('<div class="block highlight"></div>');
    $('#grid').append(block);
  }
  $('.block').on('mouseenter', function(){
    $(this).toggleClass('highlight');
  });
});