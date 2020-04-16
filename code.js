const usuarios = [
    {nome:"Marcos", tecnologias:["HTML", "CSS"]},
    {nome:"Tadeu", tecnologias:["PHP", "Laravel"]},
    {nome:"Theomars", tecnologias:["C++", "Assembly"]}
]

for (var i=0;i<usuarios.length;i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]} e ${usuarios[i].tecnologias[1]}`);
}