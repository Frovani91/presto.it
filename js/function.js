const navTitle = document.getElementById(`navTitle`)
const indexTitle = document.title
const dropdwonLi = document.getElementById(`dropdwonLi`)
const navbarColor03 = document.getElementById(`navbarColor03`)
const cardsContainer = document.getElementById(`cardsContainer`)
const articles = document.getElementsByTagName(`article`)

// DECLARATION

// funzione per creare dinamicamente voci menu li e le cards
function dropdownCreator(array, target) {
  array.forEach(categoria => {
    // MENU
    let a = document.createElement(`a`)
    a.classList.add(`dropdown-item`)
    a.setAttribute(`href`, `${categoria.link}`)
    a.innerHTML = `${categoria.name}`
    target.appendChild(a)
  });


}

// funzione per dare la classe txt-white a tutte le voci della navabar
function textWhite() {
  let liList = navbarColor03.getElementsByTagName(`li`)
  for (i = 0; i < liList.length; i++) {
    li = liList[i].childNodes
    li[1].classList.add(`text-white`)
  }
}
// funzione inserimento dinamico cards

function articlesCreator(array, target, array2) {
  array.forEach((value, index) => {
    let articolo = document.createElement(`article`);
    articolo.setAttribute(`class`, `col-12 col-lg-3 opacity-0`)
    articolo.innerHTML = `<div class="mx-3">
       <h3 class="card-header pt-5 pb-3">${value.name}</h3>
       <div class="card-body">
       </div>
       <div class="d-flex justify-content-center mt-3 " style="background-color:${array2[index]};">
         <i class=" icon ${value.icon} d-flex justify-content-center"></i>
       </div>
       <div class="card-body">
         <p class="card-text pt-3 my-justify">Some quick example text to build on the card title and make up the bulk of the card's
           content.</p>
       </div>
       <div class="card-body pt-3">
         <a href="${value.link}" class="card-link">${value.name}</a>

       </div>
       <div class="card-footer text-muted">
         <p class="mt-2">${value.announcementsCount} </p>
       </div>
     </div>`;
    target.appendChild(articolo)
  })

}

// funzione effetto translate al passaggio dell'utente

let slider = () => {
  for (i = 0; i < articles.length; i++) {
    let windowheight = window.innerHeight
    let revalTop = articles[i].getBoundingClientRect().top
    let revalPoint = 200
    if (revalTop < windowheight - revalPoint && i % 2 === 0) {
      articles[i].classList.add(`slide`)
      articles[i].classList.remove(`opacity-0`)

    }
    if (revalTop < windowheight - revalPoint && i % 2 !== 0) {
      articles[i].classList.add(`slideverse`)
      articles[i].classList.remove(`opacity-0`)

    }
  }
}



// EXECUTION

// per dare alla navabar il titolo della pagina
navTitle.innerHTML = `${indexTitle}`

// inserimento dinamico delle categorie nella navbar
dropdownCreator(categories, dropdwonLi)

// funzione per dare testo bianco alle scritte
textWhite()

// funzione inserimento cards
articlesCreator(categories, cardsContainer, arrayColors)

// funzione per fare effetto translate delle cards
document.addEventListener(`scroll`, slider)








