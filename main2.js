const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const span = document.querySelectorAll('span')

span.forEach( (x,i) => {
    x.style.color = colors[i]
})