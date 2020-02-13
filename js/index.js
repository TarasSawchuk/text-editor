let colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'],
    fontPalette = document.getElementsByClassName('font-color')[0],
    bgcPalette = document.getElementsByClassName('font-bgc')[0],
    content = document.getElementById('#editable-container');

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
  let jsonContainer = $('#json-container').get(0);
  let arrOfSpan = [...content.childNodes].filter( el => el.tagName === "SPAN");


  arrOfSpan.forEach( function(obj){
    jsonContainer.innerHTML += `<span class='json-elm'>
      text:${obj.innerText}<br>
      fontSize:${obj.style.fontSize}<br>
      color:${obj.style.color}<br>
    </span>`
  });

  console.log(arrOfSpan);
  $('#json-container').css('display', 'block');
});