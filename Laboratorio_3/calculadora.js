
function calcular(operador, num1, num2) {
    switch (operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return 'Error: División por cero';
        }
        return num1 / num2;
      default:
        return 'Operador no válido';
    }
  }


  function iniciarCalculadora() {
    let continuar = true;
    let historial = [];
  
    while (continuar) {
      let operador = prompt('Ingrese el operador (+, -, *, /):');
      let num1 = parseFloat(prompt('Ingrese el primer número:'));
      let num2 = parseFloat(prompt('Ingrese el segundo número:'));
      let resultado = calcular(operador, num1, num2);
      console.log(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
      alert(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
  
  
      // Agregar el cálculo al historial
      historial.push(`${num1} ${operador} ${num2} = ${resultado}`);
  
      let respuesta = prompt('¿Desea realizar otro cálculo? (s/n)');
      if (respuesta.toLowerCase() !== 's') {
        continuar = false;
      }
    }
  
    // Mostrar el historial en el HTML
    let historialElement = document.getElementById('historial');
    historial.forEach(item => {
      let li = document.createElement('li');
      li.textContent = item;
      historialElement.appendChild(li);
    });
  }
  
  // Iniciar la calculadora
  iniciarCalculadora();