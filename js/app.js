
// console.log("Hola mundo")
// // alert("hola mundo")

// let nombre = "Nodo Tecnologico "

// let edad = 18

// console.log("Hola soy " + nombre + "y tengo "  + edad + " años ")

// // definición  de una función 
// function Suma(numero1 , numero2){
//     return numero1 + numero2
// }

// //llamado a la función 

// let resultado = Suma("5", "8")

// console.log(resultado)

// const persona = {
//     nombre: "Lucas", 
//     edad: "19",
//     fechaDeNacimiento: "2005",
// }

// console.log(" Hola soy " + persona.nombre + " , tengo " + persona.edad + " años de edad " + " y nací en el año " + persona.fechaDeNacimiento)

//     const textoHeader = document.querySelector('#heading') 

//     console.log(textoHeader)

//     textoHeader.textContent = "MARADONA CAFÉ"

//     textoHeader.classList.add('nueva-clasejs')

// const enlaces = document.querySelectorAll('.navegacion a')

// console.log(enlaces[0])

// enlaces[2].textContent = "Nuevo Enlace"

// const nuevoEnlance = document.createElement('A')
// nuevoEnlance.textContent = "Indumentaria"
// nuevoEnlance.href = "https://shop.kruesports.gg/"
// nuevoEnlance.classList.add("nueva-clasejs")

// const navegacion = document.querySelector('.navegacion')

// navegacion.appendChild(nuevoEnlance)


// const nuevoParrafo = document.createElement('P')
// nuevoParrafo.textContent = " “La va a tocar para Diego, ahí la tiene Maradona, lo marcan dos, pisa la pelota Maradona, arranca por la derecha el genio del fútbol mundial, deja el tendal y va a tocar para Burruchaga… ¡Siempre Maradona! ¡Genio! ¡Genio! ¡Genio! Ta-ta-ta-ta-ta-ta-ta-ta… Gooooool… Gooooool… ¡Quiero llorar! ¡Dios Santo, viva el fútbol! ¡Golaaazooo! ¡Diegoooool! ¡Maradona! Es para llorar, perdónenme… Maradona, en recorrida memorable, en la jugada de todos los tiempos… Barrilete cósmico… ¿De qué planeta viniste para dejar en el camino a tanto inglés, para que el país sea un puño apretado gritando por Argentina? Argentina 2 - Inglaterra 0. Diegol, Diegol, Diego Armando Maradona… Gracias, Dios, por el fútbol, por Maradona, por estas lágrimas, por este Argentina 2-Inglaterra 0” "

// nuevoParrafo.classList.add("clase-maradona")

// const jorge = document.querySelector('.header__texto')
// jorge.appendChild(nuevoParrafo)

// console.log(nuevoParrafo)

// const btnForm = document.querySelector('.formulario input[type=submit]')

// console.log(btnForm)

// btnForm.addEventListener('click', function{

// })

// btnForm.addEventListener('click', imprimirClick)

// function imprimirClick(e){
//     e.preventDefault()
//     console.log("click")
// }

const contacto = document.querySelector('h3')

console.log(contacto)

contacto.addEventListener('click', cambiarclase)

function cambiarclase(){
    contacto.classList.toggle("clase-maradona")
    contacto.textContent="MARADONA"
}

