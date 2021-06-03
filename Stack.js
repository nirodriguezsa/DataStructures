//Implementación de estructuras de datos en Js usando clases

//Pila (Stack)

class Stack {
  constructor() {
    this.items = {};
    this.top = 0;
  }

  push(data) {
    //Agregar
    this.top++;
    this.items[this.top] = data;
  }

  pop() {
    //quitar
    if (this.top === 0) {
      return null;
    } else {
      const data = this.items[this.top];
      delete this.items[this.top];
      this.top--;
      return data;
    }
  }

  getSize() {
    return this.top;
  }

  isEmpty() {
    return !this.getSize() > 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.items[this.top];
    }
  }

  print() {
    //imprime todo
    if (this.isEmpty()) {
      return null;
    } else {
      var elements = [];
      for (let i = this.top; i > 0; i--) {
        elements.push(this.items[i]);
        console.log(elements);
      }
    }
    return elements;
  }
}

const stack = new Stack();

stack.push("Carro");
stack.push("Moto");
stack.push("1");
stack.push(2000);

console.log(stack);
console.log(stack.getSize());

console.log(stack.pop());

console.log(stack);

console.log(stack.getSize());

console.log(stack.isEmpty());


console.log(stack.print());
stack.push(2000);
stack.push(20002);

console.log(stack.peek());


console.log(stack.print());
