let operacion = ''; // Variable para almacenar la operación
  let unidades = 'deg'; // Unidades por defecto: grados

  function mostrarOperador(operador) {
    operacion += operador;
    document.getElementById('res').value = operacion;
  }

  function calcularFuncion(funcion) {
    let valor = parseFloat(document.getElementById('res').value);

    // Si estamos en grados con esto cambiamos a radianes 
    if (unidades === 'deg') {
      valor = valor * (Math.PI / 180);
    }

    let resultado;

    switch (funcion) {
      case 'sin':
        resultado = Math.sin(valor);
        break;
      case 'cos':
        resultado = Math.cos(valor);
        break;
      case 'tan':
        resultado = Math.tan(valor);
        break;
      default:
        resultado = 'Operación no válida';
    }

    // Convertir el resultado a grados si estamos en grados
    if (unidades === 'deg') {
      resultado = resultado * (180 / Math.PI);
    }

    document.getElementById('res').value = resultado;
    operacion = ''; // Limpiar la operación después de calcular la función
  }

  function toggleUnidades() {
    unidades = (unidades === 'deg') ? 'rad' : 'deg'; //recordatorio (el ? es un operador ternario que cambia a la unidad opuesta)
    document.getElementById('res').value = unidades;
  }

  function resolver() {
    let resultado = eval(operacion);
    document.getElementById('res').value = resultado;
    operacion = ''; // Limpiar la operación después de resolver
  }