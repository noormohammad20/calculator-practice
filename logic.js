let screen = document.getElementById('screen')
buttons = document.querySelectorAll('button')
for (button of buttons) {
    button.addEventListener('click', (e) => {
        buttonText = e.target.innerText
        console.log(buttonText)


    })


}