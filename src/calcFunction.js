export function calculationFunction (expression) {
    expression = expression.replace(/\s+/g, '');

    function getPrecedence(operator) {
        if (operator === '+' || operator === '-') return 1;
        if (operator === '*' || operator === '/') return 2;
        return 0;
    }

    function shuntingYard(expression) {
        const output = [];
        const operators = [];
    
        let i = 0;
        while (i < expression.length) {
          const char = expression[i];
    
          if (/\d|\./.test(char)) {
            let numStr = '';
            while (i < expression.length && (/\d|\./.test(expression[i]))) {
              numStr += expression[i];
              i++;
            }
            output.push(parseFloat(numStr));
            continue;
          }

          if (/[\+\-\*\/]/.test(char)) {
            while (
              operators.length > 0 &&
              getPrecedence(operators[operators.length - 1]) >= getPrecedence(char)
            ) {
              output.push(operators.pop());
            }
            operators.push(char);
            i++;
            continue;
          }
    
          if (char === '(') {
            operators.push(char);
            i++;
            continue;
          }

          if (char === ')') {
            while (operators.length > 0 && operators[operators.length - 1] !== '(') {
              output.push(operators.pop());
            }
            operators.pop();
            i++;
            continue;
          }
    
          i++;
        }

        while (operators.length > 0) {
            output.push(operators.pop());
          }
      
          return output;
        }

        function evaluateRPN(rpn) {
            const stack = [];
        
            for (const token of rpn) {
              if (typeof token === 'number') {
                stack.push(token);
              } else {
                const b = stack.pop();
                const a = stack.pop();
                switch (token) {
                  case '+':
                    stack.push(a + b);
                    break;
                  case '-':
                    stack.push(a - b);
                    break;
                  case '*':
                    stack.push(a * b);
                    break;
                  case '/':
                    stack.push(a / b);
                    break;
                  default:
                    throw new Error(`Неизвестный оператор: ${token}`);
                }
              }
            }

            return stack.pop();
  }

  const rpn = shuntingYard(expression);

  return evaluateRPN(rpn);
}