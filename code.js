function calculaSaldo(receitas, despesas){
    var receita = somaNumeros(receitas)
    var despesa = somaNumeros(despesas)
    return (receita - despesa).toFixed(2)
}

function somaNumeros(numeros){
    var soma = 0
    for(let i=0;i<numeros.length;i++)
        soma += numeros[i]
    return soma 
}

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

for (var i=0;i<usuarios.length;i++){
    var saldo = [calculaSaldo(usuarios[i].receitas, usuarios[i].despesas), "POSITIVO"]
    if (saldo[0]<0){
        saldo[1] = "NEGATIVO"
    }
    console.log(`${usuarios[i].nome} possui saldo ${saldo[1]} de: ${saldo[0]}`);
}

