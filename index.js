class Usuaario {
  private;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    console.log(`¡Hola ${this.nombre} ${this.apellido}, ¿Como estas?`);
  }
}

const persona1 = new Usuaario("Alberto", "Peres");
persona1.saludar();
