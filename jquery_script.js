// $(seletor).ação;

$(document).ready(function(){

  $('#btnHide').click(function(){
    $('h1').hide();
  });

  $('#btnAzul').click(function(){
    $('p')
      .css("color", "blue")
      .css("background-color", "lightblue")
      .fadeIn(1000)
      .delay(3000)
      .fadeOut(1000);
    $('#txtMensagem')
      .fadeIn(1000)
      .text('Cor alterada com sucesso')
      .css("color", "blue")
      .css("border", "1px solid blue")
      .css("background-color", "lightBlue")
      .fadeOut(3000);
    $('body')
      .removeClass('green');
  });

  $('#btnVermelho').click(function(){
    $('p')
      .css("color", "red")
      .css("background-color", "lightCoral")
      .fadeOut(1000)
      .delay(3000)
      .fadeIn(1000);
    /*
      No métido CSS é possível colocar todas as propriedades separadas por vírgulas,
      porém, quando a proriedade tiver o traço ("-") deve-se converter para o CamelCase
    */
    $('#txtMensagem')
      .fadeIn(1000)
      .text('Cor alterada com sucesso')
      .css({color: 'red', border: '1px solid red', backgroundColor: 'lightCoral'})
      .fadeOut(3000);
    $('body')
      .addClass('green');
  });

  $('#l1').click(function(){
    $('#i1').show();
    $('#i2').hide();
    $('#i3').hide();
    $('#i4').hide();
  });
  $('#l2').click(function(){
    $('#i1').hide();
    $('#i2').show();
    $('#i3').hide();
    $('#i4').hide();
  });
  $('#l3').click(function(){
    $('#i1').hide();
    $('#i2').hide();
    $('#i3').show();
    $('#i4').hide();
  });
  $('#l4').click(function(){
    $('#i1').hide();
    $('#i2').hide();
    $('#i3').hide();
    $('#i4').show();
  });

});


