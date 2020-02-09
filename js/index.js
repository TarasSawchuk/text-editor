let colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'],
    fontPalette = $('.font-color'),
    bgcPalette = $('.font-bgc'),
    content = $('#editable-container').get(0);

for (let i = 0; i < colorPalette.length; i++) {
  fontPalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
  bgcPalette.append('<a href="#" data-command="backcolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
}

$('.toolbar a').click(function(e) {
  let command = $(this).data('command');
  if (command == 'forecolor' || command == 'backcolor') {
    document.execCommand($(this).data('command'), false, $(this).data('value'));
  }
  else if(command == 'fontSize'){
    document.execCommand('fontSize', false, '20px');
  } else document.execCommand($(this).data('command'), false, null);
});

$('#editable-container').keypress(function(e){
  if(e.which == 13){
      document.execCommand('insertHTML', false, '<br>');
  }
});

$('.convert-btn').click(function(){
  let arrOfcontent = [...content.childNodes];

  console.log(arrOfcontent);
  $('#json-container').css('display', 'block');
});