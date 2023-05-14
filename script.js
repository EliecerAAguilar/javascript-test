function fibonacci(n) {
  let fibonacciArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    let nextValue = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    fibonacciArray.push(nextValue);
  }

  return fibonacciArray;
}

function generateFibonacci() {
  let cantidadCartas = parseInt(document.getElementById("numero").value);
  let fibonacciArray = fibonacci(cantidadCartas);

  let cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = "";

  for (let i = 0; i < fibonacciArray.length; i++) {
    let card = document.createElement("div");
    card.className = "card";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = fibonacciArray[i];

    cardBody.appendChild(cardTitle);
    card.appendChild(cardBody);
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
