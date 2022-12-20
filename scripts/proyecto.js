//FUNCION
iniciarApp()

function iniciarApp (){
    console.log("Iniciando Tienda Online")
    segundaFuncion()
}

function segundaFuncion(){
    console.log("Armando carrito")
    carritoListo("A continuacion sus productos")
}

function carritoListo (preparar){
    console.log("Calculando...Espere...")
    console.log(`Carrito Listo: ${preparar}`)
}

//ARRAY CON METODOS
let productos = ["Jabon Carbon", "Jabon Acuamarino", "Vela Frutal", "Vela Espiritual", "Sal Marina", "Sal Himalaya"]
productos.push("Sal Efervecente")

//LOGIN
let login = prompt(`Ingrese su nombre para continuar`)
let usuario = ""

while (login != " " && login != "") {
    usuario += login
    login = prompt (`Presione ENTER al finalizar`)
}
alert(`Bienvenido a nuestra tienda ${usuario}`)

alert("Armamos un carrito navideño de " + productos.length + " productos nuevos para vos!")

//CARRITO NAVIDEÑO
const carrito = [
    {nombre: "Jabon Carbon", componentes: "Carbon Activado y escencias mentoladas" ,precio: 250},
    {nombre: "Jabon Acuamarino", componentes: "Algas y sales marinas" ,precio: 285},
    {nombre: "Vela Frutal", componentes: "Cera aromatizada con distintas frutas" ,precio: 525},
    {nombre: "Vela Espiritual", componentes: "Cera purificada" ,precio: 370},
    {nombre: "Sal Marina", componentes: "Sal purificada extraída del mediterraneo" ,precio: 650},
    {nombre: "Sal Himalaya", componentes: "Sal extraída del monte Himalaya" ,precio: 720},
    {nombre: "Sal efervecente", componentes: "Sal a base de bicarbonato" ,precio: 370},
]

carrito.forEach((producto) => {
    console.log(producto.nombre);
    console.log(producto.componentes);
    console.log(producto.precio);
})

carrito.find((producto) => producto.nombre.includes("Jabon"));
console.log(carrito)

let total = carrito.reduce((accum, p) => {
    return accum + p.precio
}, 0)

alert("Total del carrito navideño: $" + total)

let descuento = prompt("Ingrese DESCUENTO para obtener un beneficio")

//DESCUENTO
if (total >= 3000 && descuento === "descuento" || descuento === "DESCUENTO"){
    alert("Abonando en efectivo tenes un 10% de descuento")
} else {
    alert("Debes superar los 3000 para tener un beneficio")
}
                            
                           