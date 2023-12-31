/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPlerView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
  
/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value__accordion-header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item)
            toggleItem(openItem)
    })
})

const toggleItem= (item) =>{
    const accordionContent = item.querySelector('.value__accordion-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =  document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){ 
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.add('active-link');

        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}
window.addEventListener('scroll',  scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' :'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.home__title, .popular__container, .subscribe__container, .footer__container')
sr.reveal('.home__description, .footer__info', {delay: 500})
sr.reveal('.home__search', {delay: 600})
sr.reveal('.home__value', {delay: 700})
sr.reveal('.home__images', {delay: 800, origin: 'bottom'})
sr.reveal('.logos__img', {interval: 100})
sr.reveal('.value__content, .contact__content', {origin: 'left'})
sr.reveal('.value__content, .contact__images', {origin: 'right'})







/*=============== TYPED ===============*/
const typed = new Typed('.typed', {
    strings: [
        '<i class="casas">Oficinas</i>', 
        '<i class="casas">Locales</i>', 
        '<i class="casas">Comercios</i>', 
        '<i class="casas">Casas Modulares</i>', 
        '<i class="casas">Restoranes</i>', 
        '<i class="casas">Quinchos</i>', 
        '<i class="casas">Hogares</i>'
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 80, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
    
  });





  const inputBox = document.getElementById("searchInput");
const suggBox = document.querySelector(".suggestions");
const icon = document.querySelector(".icon");
const suggestions = ["materiales", "presupuesto", "precio", "contacto", "donde estamos", "Que hacemos"]; // Reemplaza con tus sugerencias

inputBox.addEventListener("keyup", (e) => {
    let userData = e.target.value;
    let emptyArray = [];

    if (userData) {
        emptyArray = suggestions.filter((data) =>
            data.toLowerCase().startsWith(userData.toLowerCase())
        );

        showSuggestions(emptyArray);

        suggBox.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                inputBox.value = e.target.textContent;
                suggBox.innerHTML = "";

                // Aquí redirige al sitio web específico cuando seleccionas una sugerencia
                if (inputBox.value === "materiales") {
                    window.location.href = "sobrenostros.html";
                } else if (inputBox.value === "presupuesto") {
                    window.location.href = "sobrenostros.html ";
                } else if (inputBox.value === "precio") {
                    window.location.href = "sobrenostros.html";
                } else if (inputBox.value === "contacto") {
                    window.location.href = "URL_SITIO_WEB_3";
                } else if (inputBox.value === "donde estamos") {
                    window.location.href = "sobrenostros.html";
                } else if (inputBox.value === "Que hacemos") {
                    window.location.href = "sobrenostros.html";
                }
                
            }
        });
    } else {
        suggBox.innerHTML = "";
    }
});

function showSuggestions(list) {
    let listData = list.map((data) => `<li>${data}</li>`).join("");
    suggBox.innerHTML = listData;
}







 
  
