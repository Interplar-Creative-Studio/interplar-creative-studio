console.log('scripts/main.js');

//=====================================================================
// МЕНЮ
let nav = document.querySelector('.nav')
let menu_toggler = document.querySelector('.menu_toggler')
let menu_counter = document.querySelector('.counter')
let menu_bar = document.querySelector('.menu')
let menu_back = document.querySelector('.nav .back')

menu_toggler.addEventListener("click", function () {
    nav.classList.toggle("active")
    menu_bar.classList.toggle("active")
    menu_toggler.classList.toggle("active")
    menu_counter.classList.toggle("active")
})

menu_back.addEventListener("click", function () {
    nav.classList.toggle("active")
    menu_bar.classList.toggle("active")
    menu_toggler.classList.toggle("active")
    menu_counter.classList.toggle("active")
})

//=====================================================================
// HOVER
let intro_h1 = document.querySelector('#intro h1');
let nav_links = document.querySelectorAll('.menu a');
let btns = document.querySelectorAll('.btn');
let next_links = document.querySelectorAll('.next');
let back_link = document.querySelector('.back');
let footer_email = document.querySelector('#footer .email');
let footer_logo = document.querySelector('.footer_logo');
// let license_links = document.querySelectorAll('.license a'); // это лишнее, там слишком маленький текст

intro_h1.setAttribute('data-hover', intro_h1.innerHTML.toUpperCase())
menu_toggler.setAttribute('data-hover', menu_toggler.innerHTML.toUpperCase())
footer_email.setAttribute('data-hover', footer_email.innerHTML.toUpperCase())
footer_logo.setAttribute('data-hover', footer_logo.innerHTML.toUpperCase())
back_link.setAttribute('data-hover', back_link.innerHTML.toUpperCase())

nav_links.forEach(element => {
    let text = element.innerHTML
    element.setAttribute('data-hover', text.toUpperCase())
});
btns.forEach(element => {
    let text = element.innerHTML
    element.setAttribute('data-hover', text.toUpperCase())
});
next_links.forEach(element => {
    let text = element.innerHTML
    element.setAttribute('data-hover', text)
});

//=====================================================================
//SCROLL SECTIONS
import { Splide } from '@splidejs/splide';
import { URLHash } from '@splidejs/splide-extension-url-hash';

let inner_slider_config = {
    height: '100vh',
    width: '100vw',
    wheel: false,
    arrows: false,
    isNavigation: true,
    pagination: false,
    drag: false,
    speed: 700,
}

// прокрутка страницы (вертикальная)
let splide = new Splide('.splide', {
    ...inner_slider_config,
    direction: 'ttb',
    wheel: true
    wheel: true,
    breakpoints: {
        905: {
            drag: true,
            autoHeight: true,
            dragMinThreshold: 1,
            height: '100vh',
        }
    }
})
splide.mount({ URLHash })


let contact_splide = new Splide('.contact_splide', {
    ...inner_slider_config,
})
contact_splide.mount({ URLHash })



splide.on('move', function () {
    // SCROLL COUNTER
    // SCROLL COUNTER (костыли XD)
    switch (splide.index) {
        case 0:
            menu_counter.innerHTML = '1/7'
            break;
        case 1:
            menu_counter.innerHTML = '1/7'
            break;
        case 2:
            menu_counter.innerHTML = '2/7'
            break;
        case 3:
            menu_counter.innerHTML = '2/7'
            break;
        case 4:
            menu_counter.innerHTML = '3/7'
            break;
        case 5:
            menu_counter.innerHTML = '3/7'
            break;
        case 6:
            menu_counter.innerHTML = '4/7'
            break;
        case 7:
            menu_counter.innerHTML = '5/7'
            break;
        case 8:
            menu_counter.innerHTML = '6/7'
            break;
        case 9:
            menu_counter.innerHTML = '6/7'
            break;
        case 10:
            menu_counter.innerHTML = '7/7'
            break;

        default:
            menu_counter.innerHTML = splide.index + '/7'
    }
})




