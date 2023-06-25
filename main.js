function makeBurger(panInicial, ...ingredientes) {
    var objetoBurger = {
      panSuperior: panInicial,
      panInferior: panInicial,
      ingredientes: ingredientes
    };
  
    console.log(objetoBurger);
  }
  
  // Ejemplo de uso
  makeBurger("pan", "lechuga", "tomate", "queso", "cebolla", "salsa");
  