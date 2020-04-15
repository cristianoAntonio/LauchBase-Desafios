const nome = "Carlos";
const idade = 59;
const sexo = 'M';
const contribuicao = 36;

var homem_pode_aposentar = sexo == 'M' && contribuicao >= 35 && idade + contribuicao >= 95;
var mulher_pode_aposentar = sexo == 'F' && contribuicao >= 30 && idade + contribuicao >= 85;

if (homem_pode_aposentar | mulher_pode_aposentar)
    console.log(`${nome} voce pode se aposentar`);
else
    console.log(`${nome} voce não pode se aposentar`);
