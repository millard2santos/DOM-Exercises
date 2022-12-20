const section = document.querySelector('section')
const body = document.querySelector('body')
section.style.display = 'flex'

section.style.flexWrap = 'wrap'
section.style.gap = '5px'
// section.style.padding = '0'

for (i = 1; i <= 100; i++) {
    const div = document.createElement('div')
    if( i%5 === 0 ){
        div.style.backgroundColor = 'green'
    }else if ( i%2 === 0){
        div.style.backgroundColor = 'blue'
    }else{
        div.style.backgroundColor = 'red'

    }
    div.style.width = '30px'
    div.style.height = '30px'
    div.style.border = '1.5px solid #000'
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    // div.style.
    div.innerText = i
    section.appendChild(div)
}
const div = document.createElement('div')
console.log(div)
console.log(body);
console.log(section);


// ------------------------------------------------------------


