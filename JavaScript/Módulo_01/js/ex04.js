function experiencia(anosEstudo) {
    var nivelExperiencia
    
    if (anosEstudo >= 0) {
        if (anosEstudo <= 1) {
            nivelExperiencia = "Iniciante"
        } else if (anosEstudo <= 3) {
            nivelExperiencia = "Intermediário"
        } else if (anosEstudo <= 6) {
            nivelExperiencia = "Avançado"
        } else if (anosEstudo >= 7) {
            nivelExperiencia = "Jedi Master"
        }
    } else {
        nivelExperiencia  = null
    }

    (nivelExperiencia != null) ? console.log(`O usuário tem conhecimentos de ${nivelExperiencia}.`) : console.log("Número de anos inválido!")
}

const anosEstudo = 7
experiencia(anosEstudo)