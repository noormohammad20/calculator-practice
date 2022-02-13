let screen = document.getElementById('screen')
buttons = document.querySelectorAll('button')
let screenValue = '';
for (button of buttons) {
    button.addEventListener('click', (e) => {
        buttonText = e.target.innerText
        console.log(buttonText)
        if (buttonText == ('x')) {
            buttonText = "*"
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == ('c')) {
            screenValue = ''
            screen.value = screenValue;
        }
        else if (buttonText == ('=')) {
            screen.value = eval(screen.value)
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })


}