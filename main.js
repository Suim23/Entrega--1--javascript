  // Función para generar un número aleatorio entre 1 y 100
  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 50) + 1;
  }

  // Número que el usuario debe adivinar
  const numeroSecreto = generarNumeroAleatorio();

  // Bucle para permitir al usuario realizar múltiples intentos
  let intentos = 0;
  let adivinanzaCorrecta = false;

  while (!adivinanzaCorrecta) {
    // Solicitar al usuario que ingrese un número
    let intentoUsuario = prompt("Intenta adivinar el número (entre 1 y 50):");

    // Validar si el usuario ingresó un número
    if (intentoUsuario !== null && intentoUsuario.trim() !== "") {
      let numeroUsuario = parseInt(intentoUsuario);

      // Incrementar el contador de intentos
      intentos++;

      // Comprobar si el usuario adivinó el número
      if (numeroUsuario === numeroSecreto) {
        alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
        adivinanzaCorrecta = true;
      } else if (numeroUsuario < numeroSecreto) {
        alert("El número es demasiado bajo. Intenta nuevamente.");
      } else {
        alert("El número es demasiado alto. Intenta nuevamente.");
      }
    } else {
      // Si el usuario no ingresó un número, mostrar un mensaje de error
      alert("Por favor, ingrese un número válido.");
    }
  }