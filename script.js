document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const result = document.getElementById('result');
     
        let operator = '';
        let operand1 = '';
        let operand2 = '';
      
        buttons.forEach(button => {
          button.addEventListener('click', () => {
    
            if(button.classList.contains('number')){
                if(operator){
                    operand2 += button.textContent;
                    result.value += button.textContent;
                }
                else{
                    operand1 += button.textContent;
                    result.value += button.textContent;}
          }
            else if(button.classList.contains('operator')){
                operator = button.textContent;
                result.value="";
            }
    
            else if(button.classList.contains('clear')){
                result.value="";
                operator="";
                operand1="";
                operand2="";}
    
            else if (button.classList.contains('equals')) {
                if(!operator){
                    result.value=operand1
                }
                else{
                try {
                    result.value = evaluateExpression(operand1, operator, operand2);
                    operand1=result.value;
                    operand2='';
                    operator='';
                    
                } catch (error) {
                    result.value = 'Error';
                }}
            }
                // console.log(operand1);
                // console.log(operator);
                // console.log(operand2);
                // console.log("*");
            });
        });
    
        function evaluateExpression(op1, op, op2) {
            const num1 = parseFloat(op1);
            const num2 = parseFloat(op2);
    
            switch (op) {
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case '*':
                    return num1 * num2;
                case '/':
                    if (num2 === 0) return 'Error';
                    return num1 / num2;
                default:
                    return 'Error 1';
            }
        }
    });