let preguntaCategoria = true

let respuestaCategoria = ""

let preguntaJuego = true

let respuestaJuego = ""

let preguntaConsola = true

let respuestaConsola = ""

let preguntaUnidad = true

let respuestaUnidad = ""

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
        }
    }



} else {

    while (preguntaConsola) {
        respuestaConsola = prompt("Elija consola:\n\n‣ 1/nintendo\n\n‣ 2/play station\n\n‣ 3/xbox", "1")
        if (respuestaConsola == "1" || respuestaConsola == "nintendo" || respuestaConsola == "2" || respuestaConsola == "play station" || respuestaConsola == "3" || respuestaConsola == "xbox"){
            preguntaConsola = false
        }
    }

}




