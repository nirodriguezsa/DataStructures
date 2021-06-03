//Implementación de estructuras de datos en Js usando clases

//Filas (Queue)

class Queue {
  constructor() {
    this.items = {};
    this.ini = 0;
    this.end = 0;
  }

  enqueue(data) {
    //Agrega
    this.items[this.end] = data;
    this.end++;
  }
  dequeue() {
    //Borra
    if (this.ini === this.end) {
      return null;
    } else {
      const data = this.items[this.ini];
      delete this.items[this.ini];
      this.ini++;
      return data;
    }
  }

  getSize() {
    //Retorna el tamaño
    return this.end - this.ini;
  }

  isEmpty() {
    //¿Está vacía?
    if (this.getSize() <= 0) {
      return true;
    } else return false;
  }

  peek() {
    //Devuelve el primer elemento
    if (this.isEmpty()) {
      return null;
    } else {
      const data = this.items[this.ini];
      return data;
    }
  }

  print() {
    //imprime todo
    if (this.isEmpty()) {
      return null;
    } else {
      var elements = [];
      for (let i = this.ini; i < this.end; i++) {
        elements.push(this.items[i]);
      }
    }
    return elements;
  }
}

const queue = new Queue();

queue.enqueue("Hola");
queue.enqueue("Como");
queue.enqueue("2354");
queue.enqueue("Estas");
queue.enqueue(555);

console.log(queue.print());

console.log(queue.dequeue());

console.log(queue.peek());

console.log(queue.print());
