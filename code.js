const nome = "Carlos";
const peso = 90;
const altura = 1.65;

var IMC = peso / (altura * altura);

if (IMC >= 30)
    console.log(`${nome} voce esta acima do peso`);
else
    console.log(`${nome} voce não esta acima do peso`);
