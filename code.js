function transacaoBancaria(transacao){
    usuario.trasacao.push(transacao)
    if(transacao.tipo == "credito")
        usuario.saldo += transacao.valor
    else
        usuario.saldo -= transacao.valor
}

function maiorTransacao(tipo){
    var valor = 0
    for(var i=0;i<usuario.trasacao.length;i++){
        if(tipo == usuario.trasacao[i].tipo && usuario.trasacao[i].valor > valor)
            valor = usuario.trasacao[i].valor
    }
    return valor
}

function mediaDoValorDasTransacoes(){
    var total = 0
    for(var i=0; i<usuario.trasacao.length;i++){
        total += usuario.trasacao[i].valor
    }
    return total/usuario.trasacao.length
}

function numeroDeTransacoes(){
    var contagem = {credito: 0, debito:0}
    for(var i=0; i<usuario.trasacao.length;i++){
        if(usuario.trasacao[i].tipo == "credito"){
            contagem.credito += 1
        }else{
            contagem.debito += 1
        }
    }
    return contagem
}

const usuario = {
    nome: "Perna",
    trasacao: [],
    saldo: 0
}
var transacoes = [
    {tipo:"credito", valor: 80},
    { tipo: "credito", valor: 120 },
    { tipo: "debito", valor: 80 },
    { tipo: "debito", valor: 60 },
    {tipo: "credito", valor: 200},
    {tipo: "credito", valor: 570}
    ]

for (var i=0;i<transacoes.length;i++)
    transacaoBancaria(transacoes[i])

const maior_transacao_credito = maiorTransacao("credito")
const maior_transacao_debito = maiorTransacao("debito")
const media_das_transacoes = mediaDoValorDasTransacoes()
const numero_de_transacoes = numeroDeTransacoes()

console.log(`\nSaldo atual: ${usuario.saldo}`);
console.log(`Maior transação de crédito: ${maior_transacao_credito}\nMaior transação de débito: ${maior_transacao_debito}\nMedia das transações: ${media_das_transacoes}\nNumero de transações de crédito: ${numero_de_transacoes.credito}\nNumero de transações de débito: ${numero_de_transacoes.debito}\n`);