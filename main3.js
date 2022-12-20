const h2 = document.getElementById('subtitle')
h2.remove()

const bold = document.querySelectorAll('.bold')
console.log(bold);
bold.forEach(x => x.style.textDecoration = 'underline')

const italics = document.querySelectorAll('.italics')
italics.forEach(x => x.style.fontStyle = 'italic')

const articleIndex = ["Introducción", "Biografía", "Obras"]
const lista = document.querySelector('#index > ul')
for(i=0; i <articleIndex.length;i++){
    const indexAdd = document.createElement('li')
    indexAdd.innerText = articleIndex[i]
    lista.append(indexAdd)
}

const obrasLi = document.querySelectorAll('section ul > li')
obrasLi.forEach(elements => elements.classList.add('work-item'))


const links = [
    "https://es.wikipedia.org/wiki/Generaci%C3%B3n_del_27",
    "https://es.wikipedia.org/wiki/Albert_Einstein",
    "https://es.wikipedia.org/wiki/John_Maynard_Keynes",
    "https://es.wikipedia.org/wiki/Marie_Curie",
    "https://es.wikipedia.org/wiki/Luis_Bu%C3%B1uel",
    "https://es.wikipedia.org/wiki/Rafael_Alberti",
    "https://es.wikipedia.org/wiki/Salvador_Dal%C3%AD"
    ]

const linkSelection = document.querySelectorAll('a')
linkSelection.forEach((elements,i) => elements.href = links[i])




