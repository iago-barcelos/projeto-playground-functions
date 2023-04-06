// Desafio 1 - Crie a função compareTrue

function compareTrue(parametro1, parametro2) {
  if (parametro1 && parametro2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2 - Crie a função splitSentence

function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 3 - Crie a função concatName

function concatName(nomes) {
  return (nomes[nomes.length - 1]) + ', ' + nomes[0]
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points
}

// Desafio 5 - Crie a função highestCount

function obterMaiorNumero(numeros) {

  let maiorNumero = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < numeros.length; index += 1) {

    let numeroDoArray = numeros[index];

    if (numeroDoArray > maiorNumero) {
      maiorNumero = numeroDoArray;
    }
  }
  return maiorNumero
}
 
function highestCount(numeros) {

  const maiorNumeroEncontrado = obterMaiorNumero(numeros);

  let repeticao = 0

  for (let index = 0; index < numeros.length; index += 1) {

    let numeroDoArray = numeros[index];

    if (numeroDoArray === maiorNumeroEncontrado) {
      repeticao += 1;
    }
  }
  return repeticao;
}
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
