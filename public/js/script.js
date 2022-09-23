
//Starting application
function start() {
    console.log('Starting application');

    var numberSelect = document.querySelector('#numberSelect'); //Captura o elemento do Id número selecionado
    var showNumber = document.querySelector('#showNumber'); //Captura o elemtento do id mostrar número
    var numberText = document.querySelector('#numberText'); //Captura o elemento do id mostrar número por extenso
  
    /*
    Capturado o elemento e o valor do input através do event input
    e chamando uma função anônima para mostrar o número escolhido no id showNumber 
    */
    numberSelect = addEventListener('input', function(event){
      var currentNumber = event.target.value;
      showNumber.value = currentNumber;

      numberText.value = numberToText (currentNumber); //Mostrando o número selecionado por extenso no input do ID numberText
  
    });
}

function numberToText (number) {
  var tamanho = number.toString().length;

  if (tamanho === 1){
    return tamanhoPrimeiraDescricao(number);
  }

  if (tamanho === 2){
    return tamanhoSegundDescricao(number);
  }

  if (tamanho === 3){
    return tamanhoTerceiroDescricao(number);
  }

}

function tamanhoPrimeiraDescricao(number){
  if (number === '0') return 'Zero';
  if (number === '1') return 'Um';
  if (number === '2') return 'Dois';
  if (number === '3') return 'Três';
  if (number === '4') return 'Quatro';
  if (number === '5') return 'Cinco';
  if (number === '6') return 'Seis';
  if (number === '7') return 'Sete';
  if (number === '8') return 'Oito';
  if (number === '9') return 'Nove';
}

function tamanhoSegundDescricao(number){
  if (number === '10') return 'Dez';
  if (number === '11') return 'Onze';
  if (number === '12') return 'Doze';
  if (number === '13') return 'Trese';
  if (number === '14') return 'Quatorze';
  if (number === '15') return 'Quinze';
  if (number === '16') return 'Dezeseis';
  if (number === '17') return 'Dezesete';
  if (number === '18') return 'Dezoito';
  if (number === '19') return 'Dezenove';
  if (number === '20') return 'Vinte';
  if (number === '30') return 'Trinta';
  if (number === '40') return 'Quarenta';
  if (number === '50') return 'Cinquenta';
  if (number === '60') return 'Sessenta';
  if (number === '70') return 'Setenta';
  if (number === '80') return 'Oitenta';
  if (number === '90') return 'Noventa';

  var primaryNumber = number[0];
  var secondNumber = number[1];
  var prefix = '';


  if (primaryNumber === '2') prefix = 'Vinte e ';
  if (primaryNumber === '3') prefix = 'Trinta e ';
  if (primaryNumber === '4') prefix = 'Quarenta e ';
  if (primaryNumber === '5') prefix = 'Cinquenta e';
  if (primaryNumber === '6') prefix = 'Sessenta e ';
  if (primaryNumber === '7') prefix = 'Setenta e ';
  if (primaryNumber === '8') prefix = 'Oitenta e ';
  if (primaryNumber === '9') prefix = 'Noventa e ';

  return prefix + tamanhoPrimeiraDescricao(secondNumber);

}

function tamanhoTerceiroDescricao (number){

  if (number === '100') return 'Cem';
  if (number === '200') return 'Duzentos';
  if (number === '300') return 'Tresentos';
  if (number === '400') return 'Quatrocentos';
  if (number === '500') return 'Quinhentos';
  if (number === '600') return 'Seisentos';
  if (number === '700') return 'Setesentos';
  if (number === '800') return 'Oitocentos';
  if (number === '900') return 'Novecentos';

  var primaryNumber = number[0];
  var secondNumber = number[1];
  var thirdNumber = number[2];
  var secondAndThirdNumber = number.substring(1);
  var prefix = '';

  if (primaryNumber === '1') prefix =  'Cento e ';
  if (primaryNumber === '2') prefix =  'Duzendos e ';
  if (primaryNumber === '3') prefix =  'Tresentos e ';
  if (primaryNumber === '4') prefix =  'Quatrocentos e ';
  if (primaryNumber === '5') prefix =  'Quinhentos e ';
  if (primaryNumber === '6') prefix =  'Seisentos e ';
  if (primaryNumber === '7') prefix =  'Setesentos e ';
  if (primaryNumber === '8') prefix =  'Oitocentos e ';
  if (primaryNumber === '9') prefix =  'Novecentos e ';

  if (secondNumber === '0'){
    return prefix + tamanhoPrimeiraDescricao(thirdNumber);
  }

  return prefix + tamanhoSegundDescricao(secondAndThirdNumber);

}

start();
