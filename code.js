function usuarioTrabalhaComCSS(usuario){
    var trabalha_com_css = usuario.tecnologias[0] == "CSS" | usuario.tecnologias[1] == "CSS"
    return trabalha_com_css
}

const usuarios = [
    {nome:"Marcos", tecnologias:["HTML", "CSS"]},
    {nome:"Tadeu", tecnologias:["CSS", "Laravel"]},
    {nome:"Theomars", tecnologias:["C++", "Assembly"]}
]

for(var i=0;i<usuarios.length;i++){
    var trabalha_com_CSS = usuarioTrabalhaComCSS(usuarios[i])
    if (trabalha_com_CSS){
        console.log(`${usuarios[i].nome} trabalha com CSS`);
    }
}