/* generar valores de fibonacci dependiendo del numero de elementos que se quiera  */

function fibonacci(n) {
    let a = 1, b = 0, temp;
    let fibonacci_array = [];

    while (n >= 0){
        fibonacci_array.push(parseInt(b));
        temp = a;
        a = a + b;
        b = temp;
        n--;

    }
    return fibonacci_array;
}

function main(){
    let div_cards = document.getElementById("cards");
    let cards = "";
    let cantidad_cartas = parseInt(document.getElementById("numero"));
    let fibonacci_array = fibonacci(cantidad_cartas);

    for (let index = 0; index < fibonacci_array.length; index++) {
        cards += `<div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${fibonacci_array[index]}</h5>
                    </div>
                </div>`;
    }; 

    div_cards.innerHTML = cards;

}

  // Agrega un controlador de eventos para el envío del formulario
  // El evento se dispara cuando se presiona el botón submit.


  document.getElementById('formulario').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Previene la recarga de la página
    main(); // Llama a la funci
  });