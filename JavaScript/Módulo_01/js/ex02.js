var printou = false

function pares(x, y) {
    const xInicial = x
    const yInicial = y
    if (x < y) {
        while (x < y) {
            x++
            if(x % 2 == 0 && x < y) {
                console.log(x)
                
                printou = true
            }
        }

        if (!printou) {
            console.log(`Não há números pares entre ${xInicial} e ${yInicial}.`)
        }
    } else if (y < x) {
        while (y < x) {
            y++
            if (y % 2 == 0 && y < x) {
                console.log(x)

                printou = true
            }
        }

        if (!printou) {
            console.log(`Não há números pares entre ${yInicial} e ${xInicial}.`)
        }
    } else {
        console.log(`Os números são iguais!`)
    }        
}

pares(31, 321)