alert("Elija las opciones adecuadas para su PC")

let procesador = prompt(`Elija una opción:
1) i5
2) i7
3) i9
`)

switch (procesador){
    case "1":
        alert("Elegiste un procesador i5")
        break
    
    case "2":
        alert("Elegiste un procesador i7")
        break

    case "3":
        alert("Elegiste un procesador i9")
        break

    default:
        alert("Opción no disponible")
        break
}

let memoria = prompt(`Elija una opción:
1) 8 RAM
2) 16 RAM
3) 32 RAM
`)

switch (memoria){
    case "1":
        alert("Elegiste 8 RAM de memoria")
        break
    
    case "2":
        alert("Elegiste 16 RAM de memoria")
        break

    case "3":
        alert("Elegiste 32 RAM de memoria")
        break

    default:
        alert("Opción no disponible")
        break
}

let disco = prompt(`Elija una opción:
1) No agrandar disco
2) Agrandar disco
`)

if (disco == 1) {
    alert("Elegiste 500 GB de almacenamiento")
} else if (disco == 2){
    alert("Elegiste 1 TB de almacenamiento")
} else {
    alert("Opción invalida")
}