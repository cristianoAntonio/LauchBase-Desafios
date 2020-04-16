const usuario = {
    nome: "Carlos",
    idade: 30,
    tecnologias: [
        {nome:"C++", especialidade: "Desktop"},
        {nome:"Javascript", especialidade:"Web"},
        {nome:"Python", especialidade:"de-tudo-um-pouco"}
    ]
}

console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${usuario.tecnologias[1].nome} com especialidade em ${usuario.tecnologias[1].especialidade}`);