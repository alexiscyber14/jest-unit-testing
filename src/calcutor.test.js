class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error('Cannot divide by zero.');
      }
      return a / b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  }
  
  describe('Calculator', () => {
    describe('add', () => {
      test('adds two positive numbers', () => {
        const calculator = new Calculator();
        expect(calculator.add(2, 3)).toBe(5);
      });
  
      test('adds two negative numbers', () => {
        const calculator = new Calculator();
        expect(calculator.add(-2, -3)).toBe(-5);
      });
  
      test('adds a positive and a negative number', () => {
        const calculator = new Calculator();
        expect(calculator.add(2, -3)).toBe(-1);
      });
    });
  
    describe('subtract', () => {
      test('subtracts two positive numbers', () => {
        const calculator = new Calculator();
        expect(calculator.subtract(5, 3)).toBe(2);
      });
  
      test('subtracts two negative numbers', () => {
        const calculator = new Calculator();
        expect(calculator.subtract(-5, -3)).toBe(-2);
      });
  
      test('subtracts a positive and a negative number', () => {
        const calculator = new Calculator();
        expect(calculator.subtract(5, -3)).toBe(8);
      });
    });
  
    describe('divide', () => {
      test('divides two numbers', () => {
        const calculator = new Calculator();
        expect(calculator.divide(6, 2)).toBe(3);
      });
  
      test('throws an error if dividing by zero', () => {
        const calculator = new Calculator();
        expect(() => {
          calculator.divide(6, 0);
        }).toThrow('Cannot divide by zero.');
      });
    });
  
    describe('multiply', () => {
      test('multiplies two positive numbers', () => {
        const calculator = new Calculator();
        expect(calculator.multiply(2, 3)).toBe(6);
      });
  
      test('multiplies two negative numbers', () => {
        const calculator = new Calculator();
        expect(calculator.multiply(-2, -3)).toBe(6);
      });
  
      test('multiplies a positive and a negative number', () => {
        const calculator = new Calculator();
        expect(calculator.multiply(2, -3)).toBe(-6);
      });
    });
  });
  