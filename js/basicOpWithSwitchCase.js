//Using a switch case
function basicOpWithSwitchCase(operator, num1, num2) {
    switch (operator) {
        case "+":
            alert(num1 + num2);
            break;

        case "-":
            alert(num1 - num2);
            break;

        case "*":
            alert(num1 * num2);
            break;

        case "/":
            alert(num1 / num2);
            break;

        default:
            alert("You are not that dumb dumb, right?")
    }
}

basicOpWithSwitchCase("(", 77, 11)