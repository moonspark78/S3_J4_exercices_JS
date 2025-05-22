const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const input1 = document.querySelector('#input1').value;
    const input2 = document.querySelector('#input2').value;
    const operator = document.querySelector('#operation').value;
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(input1) + parseFloat(input2);
            break;
        case '-':
            result = parseFloat(input1) - parseFloat(input2);
            break;
        case '*':
            result = parseFloat(input1) * parseFloat(input2);
            break;
        case '/':
            result = parseFloat(input1) / parseFloat(input2);
            break;
        default:
            result = 'Invalid operator';
    }

    alert(`Result: ${input1} ${operator} ${input2} : ${result}`);
});