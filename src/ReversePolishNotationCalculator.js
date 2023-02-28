function calc(expression) {
  let stack = [];
   expression.split(' ').forEach(token => {
     if (['+', '-', '*', '/'].includes(token)) {
       let secondOperand = stack.pop();
       let firstOperand = stack.pop();
       switch (token) {
         case '+':
           stack.push(firstOperand + secondOperand);
           break;
         case '-':
           stack.push(firstOperand - secondOperand);
           break;
         case '*':
           stack.push(firstOperand * secondOperand);
           break;
         case '/':
           stack.push(firstOperand / secondOperand);
           break;
       }
     } else {
       stack.push(parseFloat(token));
     }
   });
 
   return expression ? stack[0] : 0;
 }