let login = prompt(`Ingrese su nombre para continuar`)
let usuario = ""

while (login != " " && login != "") {
    usuario += login + " "
    login = prompt (`Ingrese su apellido para continuar y de ENTER al finalizar`)
}
alert(`Bienvenido a nuestra tienda ${usuario}`)

alert("Elija las opciones adecuadas para su PC")

    let procesador = prompt(`Elija una opción:
1) i5
2) i7
3) i9
`)

    switch (procesador) {
        case "1":
            alert("Elegiste un procesador i5")
            break

        case "2":
            alert("Elegiste un procesador i7")
            break

        default:
            alert("Elegiste un procesador i9")
            break
    }

    let memoria = prompt(`Elija una opción:
1) 8 RAM
2) 16 RAM
3) 32 RAM
`)

    switch (memoria) {
        case "1":
            alert("Elegiste 8 RAM de memoria")
            break

        case "2":
            alert("Elegiste 16 RAM de memoria")
            break

        default:
            alert("Elegiste 32 RAM de memoria")
            break
    }

    let disco = prompt(`Elija una opción:
1) No agrandar disco
2) Agrandar disco
`)


    if (disco == 1) {
        alert("Elegiste 500 GB de almacenamiento")
    } else {
        alert("Elegiste 1 TB de almacenamiento")
    }

if (procesador == 1 && memoria == 1 && disco == 1){
    alert("El total a pagar es: $800")
} else if (procesador == 1 && memoria == 1 && disco != 1){
    alert("El total a pagar es: $1100")
} else if (procesador == 1 && memoria == 2 && disco == 1){
    alert("El total a pagar es: $900")
} else if (procesador == 1 && memoria == 2 && disco != 1){
    alert("El total a pagar es: $1200")
} else if (procesador == 2 && memoria == 1 && disco == 1){
    alert("El total a pagar es: $900")
} else if (procesador == 2 && memoria == 1 && disco != 1){
    alert("El total a pagar es: $1200")
} else if (procesador == 2 && memoria == 2 && disco == 1){
    alert("El total a pagar es: $1000")
} else if (procesador == 2 && memoria == 2 && disco != 1){
    alert("El total a pagar es: $1300")
} else if (procesador == 2 && memoria == 3 && disco == 1){
    alert("El total a pagar es: $1400")
} else if (procesador == 2 && memoria == 3 && disco != 1){
    alert("El total a pagar es: $1700")
} else if (procesador == 3 && memoria == 1 && disco == 1){
    alert("El total a pagar es: $1200")
} else if(procesador == 3 && memoria == 1 && disco != 1){
    alert("El total a pagar es: $1500")
} else if(procesador == 3 && memoria == 2 && disco == 1){
    alert("El total a pagar es: $1400")
} else if(procesador == 3 && memoria == 2 && disco != 1){
    alert("El total a pagar es: $1700")
} else if(procesador == 3 && memoria == 3 && disco == 1){
    alert("El total a pagar es: $2000")
} else {
    alert("El total a pagar es: $2300")
}