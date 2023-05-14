function fibonacci(n) {
  let fibonacciArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    let nextValue = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    fibonacciArray.push(parseInt(nextValue));
  }

  return fibonacciArray;
}

function generateFibonacci() {
  let cantidadCartas = parseInt(document.getElementById("num").value);
  let fibonacciArray = fibonacci(cantidadCartas);

  let cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = "";

  for (let i = 0; i < fibonacciArray.length; i++) {
    let card = document.createElement("div");
    card.className = "card";


    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";

    cardTitle.innerText = fibonacciArray[i].toString();

    console.log(fibonacciArray[i].toString());
    card.appendChild(cardTitle);
    cardsContainer.appendChild(card);
  }
}

// Agregar un controlador de eventos para el envío del formulario
document
  .getElementById("miFormulario")
  .addEventListener("submit", function (evento) {
    evento.preventDefault(); // Prevenir la recarga de la página
    generateFibonacci();
  });

/* script, que cuando se le de click a las tarjetas generadas en la parte 1, 
  levante una alerta consultándole al usuario si desea eliminar dicha tarjeta.
   Si el usuario da click en "sí", se debe eliminar la tarjeta, de caso contrario, 
  solamente cerrar la alerta sin realizar ninguna modificación al HTML. */

document
.getElementById("cards")
.addEventListener("click",
function(evento){
    if (evento.target.classList.contains("card")) {
    if (confirm("¿Está seguro de que desea eliminar la tarjeta?")) {
      evento.target.remove();
    }
  }
});
