function temHabilidade(skills) {
    var temHabilidade = false

    for(var i = 0; i <= skills.length; i++) {
        if (skills[i] == "Javascript") {
            temHabilidade = true
        }
    }

    console.log(temHabilidade)
}

var skills = ["Javascript", "ReactJS", "React Native"];

temHabilidade(skills)