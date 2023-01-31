

let preguntaJuego

let preguntaConsola

let preguntaUnidad


function sumaDeProducto() {
    let valor;
    switch (preguntaJuego) {
        case "mario":
            valor = 8000;
            break;
        case "god of war":
            valor = 9000;
            break;
        case "halo":
            valor = 7800;
            break;
    }
    switch (preguntaConsola) {
        case "nintendo":
            valor = 180000;
            break;
        case "play station":
            valor = 320000;
            break; case "xbox":
            valor = 250000;
            break;


    }
    let unidad = preguntaUnidad;
    let suma = unidad * valor;
    return (suma)
}


function formulario() {

    let preguntarCategoria = prompt("Ingrese categoria deseada:\n\n‣ juegos\n\n‣ consolas\n\n")

    if (preguntarCategoria == "") {
        alert("No ingresaste una categoria disponible");
        preguntarCategoria = prompt("Ingrese categoria deseada:\n\n‣ juegos\n\n‣ consolas\n\n")
    }

    if (preguntarCategoria == "juegos") {
        preguntaJuego = prompt("Elija juego:\n\n‣ mario \n\n‣ god of war \n\n‣ halo")
    } else if (preguntarCategoria == "consolas") {
        preguntaConsola = prompt("Elija consola:\n\n‣ nintendo\n\n‣ play station\n\n‣ xbox")
    }

    if (preguntaConsola == "nintendo") {
        preguntaUnidad = prompt("La consola vale $180000. Cuantos desea incorporar al carrito?")
    } else if (preguntaConsola == "play station") {
        preguntaUnidad = prompt("La consola vale $320000. Cuantos desea incorporar al carrito?")
    } else if (preguntaConsola == "xbox") {
        preguntaUnidad = prompt("La consola vale $250000. Cuantos desea incorporar al carrito?")
    }


    if (preguntaJuego == "mario") {
        preguntaUnidad = prompt("El juego vale $8000. Cuantos desea incorporar al carrito?")
    } else if (preguntaJuego == "god of war") {
        preguntaUnidad = prompt("El juego vale $9000. Cuantos desea incorporar al carrito?")
    } else if (preguntaJuego == "halo") {
        preguntaUnidad = prompt("El juego vale $7800. Cuantos desea incorporar al carrito?")
    }

    return (preguntarCategoria)
}

formulario()

preguntaUnidad = Number(preguntaUnidad)


if ((isNaN(preguntaUnidad) && (preguntaUnidad >= 1))) {
    alert("Su pedido sumaria" + " $" + sumaDeProducto() + " " + "un representante se comunicara a la brevedad para finalizar la compra")
} else {
    alert ("Ingreso datos incorrectos")
}







