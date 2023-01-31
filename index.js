let preguntaCategoria = true

let respuestaCategoria = ""

let preguntaJuego = true

let respuestaJuego = ""

let preguntaConsola = true

let respuestaConsola = ""

let preguntaUnidad = true

let respuestaUnidad = ""

let campoParseado = 0

let esNumerico = false

let valor;

function sumaDeProducto() {

    let unidad = respuestaUnidad;
    let suma = unidad * valor;
    return (suma)
}

while (preguntaCategoria) {
    respuestaCategoria = prompt("Ingrese categoria deseada:\n\n‣1/juegos\n\n‣2/consolas\n\n✱Ejemplo:", "1")
    if (respuestaCategoria == "juegos" || respuestaCategoria == "1" || respuestaCategoria == "consolas" || respuestaCategoria == "2") {
        preguntaCategoria = false;
    }
}

if (respuestaCategoria == "juegos" || respuestaCategoria == "1") {
    while (preguntaJuego) {
        respuestaJuego = prompt("Elija juego:\n\n‣ 1/mario \n\n‣ 2/god of war \n\n‣ 3/halo", "1")
        if (respuestaJuego == "mario" || respuestaCategoria == "1" || respuestaCategoria == "god of war" || respuestaCategoria == "2" || respuestaCategoria == "halo" || respuestaCategoria == "3") {
            preguntaJuego = false;

            switch (respuestaJuego) {

                case "mario", "1":
                    valor = 8000;
                    break;
                case "god of war", "2":
                    valor = 9000;
                    break;
                case "halo", "3":
                    valor = 7800;
                    break;
            }
        }
    }
} else {

    while (preguntaConsola) {
        respuestaConsola = prompt("Elija consola:\n\n‣ 1/nintendo\n\n‣ 2/play station\n\n‣ 3/xbox", "1")
        if (respuestaConsola == "1" || respuestaConsola == "nintendo" || respuestaConsola == "2" || respuestaConsola == "play station" || respuestaConsola == "3" || respuestaConsola == "xbox") {
            preguntaConsola = false;

            switch (respuestaConsola) {

                case "nintendo", "1":
                    valor = 180000;
                    break;
                case "play station", "2":
                    valor = 320000;
                    break;
                case "xbox", "3":
                    valor = 250000;
                    break;
            }
        }

    }
}

while (preguntaUnidad) {
    respuestaUnidad = prompt(`El producto vale $${valor} Cuantas unidades desea incorporar al carrito?`)
    campoParseado = parseInt(respuestaUnidad)
    esNumerico = !isNaN(campoParseado)
    if (esNumerico) {
        preguntaUnidad = false;
    }
}

if (!preguntaJuego) {
    alert(`Su/s juego/s vale/n ${sumaDeProducto()}. Muchas gracias por su compra! En breve uno de nuestros representantes se comunicara con usted para finalizar con la transaccion y programar la entrega `)
} else if (!preguntaConsola) {
    alert(`Su/s consolas/s vale/n ${sumaDeProducto()}. Muchas gracias por su compra! En breve uno de nuestros representantes se comunicara con usted para finalizar con la transaccion y programar la entrega `)
}
