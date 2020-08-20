var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    },
    {
    nome: "Filipe",
    habilidades: ["Javascript", "Python"]
    }
    ]

for (var c = 0; c < usuarios.length; c++) {
    console.log(`O ${usuarios[c].nome} possui as habilidades: ${usuarios[c].habilidades.join(", ")}.`)
}