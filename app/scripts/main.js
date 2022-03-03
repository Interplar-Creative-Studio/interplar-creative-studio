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
    speed: 500,
}

// прокрутка страницы (вертикальная)
let splide = new Splide('.splide', {
    ...inner_slider_config,
    direction: 'ttb',
    wheel: true,
    breakpoints: {
        905: {
            drag: true,
            autoHeight: true,
            dragMinThreshold: 10,
            height: '100vh',
        },
    }
})
splide.mount({ URLHash })


let contact_splide = new Splide('.contact_splide', {
    ...inner_slider_config,
})
contact_splide.mount({ URLHash })


function setMenuCount(device_width){
    if (device_width > 600){
        menu_counter.innerHTML = config_counter['desktop'].slideIndex[splide.index] + '/7'
        
    } else if (600 >= device_width ) {
        menu_counter.innerHTML = config_counter['mobile'].slideIndex[splide.index] + '/7'
    }
}

const config_counter = {
    desktop : {
        slideIndex : [0, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7]
    },
    mobile : {
        slideIndex : [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]
    }
}

let totop = document.querySelector('.totop');
let device_width = document.documentElement.clientWidth

if (device_width > 600) {
    splide.remove( '.prev' ); // Убираю псевдо-секции чтобы небыло тротлинга прокрутки

    // next  |=> clients_prev -> clients 3
    //       |=> team_prev    -> team 2

    // totop |=> about_prev   -> about

    next_links[2].setAttribute('href', '#team')
    next_links[3].setAttribute('href', '#clients')
    totop.setAttribute('href', '#about')
}

splide.on('move', function () {
    // SCROLL COUNTER (костыли XD)
    device_width = document.documentElement.clientWidth

    setMenuCount(device_width)

})

// SCROLL ANIMATION || NAV HIDE ON INTRO PAGE
let visible_block = document.querySelector('.is-visible')
splide.on('move', function () {

    visible_block.classList.remove('is-visible')

    if (splide.index > 0){
        if (nav.classList.contains('hide')) nav.classList.remove('hide')
    } else {
        nav.classList.add('hide')
    }

    setTimeout(()=>{
        visible_block = document.querySelector('.is-visible')
    }, 550)

})

if ( splide.state.is( Splide.STATES.IDLE ) ) {
    if(splide.index == 0){
        nav.classList.add('hide');
    }
    setMenuCount(device_width)
  }