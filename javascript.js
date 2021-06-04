var mensagem = 'Olá mundo';
// alert(mensagem);


// alert('Olá');

/*
   Este é um comentário
   em JavaScript em várias
   linhas
*/


var a = 2;
var b = 3;
var c = 'X';

var soma = a + b;
var subtracao = a - b;
var multiplicacao = a * b;
var divisao = a / b;

/*
alert(soma);
alert(subtracao);
alert(multiplicacao);
alert(divisao);
*/

var modulo = 3 % 2;
// alert(modulo);

if (modulo == 1) {
  // alert(b + ' é um número ímpar!');
} else {
  // alert(b + ' é um número par');
}

if (c%2 == 1) {
  // alert(c + ' é um número ímpar!');
} else if (c%2 == 0) {
  // alert(c+ ' é um número par');
} else {
  // alert(c + ' não é um número válido.');
}

var i = 0;
while (i < 3) {
  // alert('i = ' + i);
  i++;
}

for (var j=0; j<3; j++) {
  // alert('j = ' + j);
}

var lista = ['laranja', 'maçã', 'banana', 'pêra'];
alert(lista);

for (i in lista) {
  mensagem = 'Na posição ' + i + ' temos ' + lista[i];
  // alert(mensagem);
  console.log(mensagem);
}
