console.log('scripts/main.js');

//=====================================================================
// МЕНЮ
let nav = document.querySelector('.nav')
let menu_toggler = document.querySelector('.menu_toggler')
let menu_counter = document.querySelector('.counter')
let menu_bar = document.querySelector('.menu')
let menu_back = document.querySelector('.nav .back')
let nav_links = document.querySelectorAll('.menu a');
let totop = document.querySelector('.totop');

let device_width = document.documentElement.clientWidth // ширина экрана

// меню на мобилке
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


// Закрытие меню после клика на кнопку в мобильной версии
if (device_width < 600) {
    nav_links.forEach(element => {
        element.addEventListener("click", function () {
            nav.classList.toggle("active")
            menu_bar.classList.toggle("active")
            menu_toggler.classList.toggle("active")
            menu_counter.classList.toggle("active")
        })
    });
}


//=====================================================================
// HOVER
// подтягивает текст из тегов и пишет его в data-атрибут, который после вызывается в scss
let intro_h1 = document.querySelector('#intro h1');
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
// VIEWPORT (NOT WORK!)

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})


//=====================================================================
// SCROLL SECTIONS
import { Splide } from '@splidejs/splide';
import { URLHash } from '@splidejs/splide-extension-url-hash';
import { EventInterface } from '@splidejs/splide';

// конфиг для слайдера
let inner_slider_config = {
    height: '100vh',
    width: '100vw',
    wheel: false,
    arrows: false,
    isNavigation: true,
    pagination: false,
    drag: false,
    speed: 700,
    type: 'fade',
    flickMaxPages: 1,
    flickPower: 800,
    waitForTransition: true,
    releaseWheel: true,
    keyboard: false,
    slideFocus: false,
    noDrag: 'input, textarea, form, .no-drag'

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
// splide.mount({ URLHash })
splide.mount({ URLHash })

// прокрутка горизонтальная в блоке контакты
let contact_splide = new Splide('.contact_splide', {
    ...inner_slider_config,
})
contact_splide.mount({ URLHash })

// функция для установки правильного значения на счётчике
function setMenuCount(device_width) {
    if (device_width > 600) {
        menu_counter.innerHTML = config_counter['desktop'].slideIndex[splide.index] + '/7'

    } else if (600 >= device_width) {
        menu_counter.innerHTML = config_counter['mobile'].slideIndex[splide.index] + '/7'
    }
}

// конфиг счётчика
const config_counter = {
    desktop: {
        slideIndex: [1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7]
    },
    mobile: {
        slideIndex: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]
    }
}

// Убираю псевдо-секции на больших экранах, чтобы не было тротлинга прокрутки
if (device_width > 600) {
    splide.remove('.prev');

    // next  |=> clients_prev -> clients 3
    //       |=> team_prev    -> team 2

    // totop |=> about_prev   -> about

    next_links[2].setAttribute('href', '#team')
    next_links[3].setAttribute('href', '#clients')
    totop.setAttribute('href', '#about')
}

// обновление счётчика в меню
splide.on('move', function () {
    // SCROLL COUNTER (костыли XD)
    device_width = document.documentElement.clientWidth
    setMenuCount(device_width)
})

// SCROLL ANIMATION || NAV HIDE ON INTRO PAGE
let visible_block = document.querySelector('.is-visible')
splide.on('move', function () {

    visible_block.classList.remove('is-visible') // руками убираю класс, т.к. библиотека делает это с задержкой

    if (splide.index == 0) {
        nav.classList.remove('show')
    } else {
        nav.classList.add('show')
    }

    setTimeout(() => { // обновляю информацию о корректном блоке
        visible_block = document.querySelector('.is-visible')
    }, 750)
})

// инициализация счётчика при загрузке страницы
if (splide.state.is(Splide.STATES.IDLE)) {
    if (splide.index != 0) {
        nav.classList.add('show');
    }
    setMenuCount(device_width)
}

// FILE INPUT
// Кастомизация инпута
document.getElementById('offer_file').addEventListener('change', function (e) {
    // Проверяем, что только 1 файл был выбран
    if (this.files && this.files.length == 1) {
        const textContainer = document.querySelector('#offer_file_text');
        const fileName = e.target.value.split('\\').pop();
        if (textContainer) {
            textContainer.textContent = fileName || 'pdf, jpeg, docx, ppt';
            return true;
        }
    }
    return false;
});

document.getElementById('recruit_file').addEventListener('change', function (e) {
    // Проверяем, что только 1 файл был выбран
    if (this.files && this.files.length == 1) {
        const textContainer = document.querySelector('#recruit_file_text');
        const fileName = e.target.value.split('\\').pop();
        if (textContainer) {
            textContainer.textContent = fileName || 'pdf, jpeg, docx, ppt';
            return true;
        }
    }
    return false;
});


// fix-space on input form
let inputs = document.querySelectorAll('input[type=text], textarea[name="offer_task"], textarea[name="recruit_task"]')
inputs.forEach((elem) => {
    elem.addEventListener('keydown', function(e){
        if (e.code == 'Space'){
            e.target.value += ' '
        }
    });
})
// принудительно закрываем клаву
splide.on('move', function(){
    inputs.forEach((elem) => elem.blur())
})


// Попытки убрать авто скролл
// document.addEventListener("DOMContentLoaded", function(event) { 
//     var scrollpos = localStorage.getItem('interplar_splide_index');
//     // if (scrollpos) window.scrollTo(0, scrollpos);
//     if (scrollpos) splide.go(scrollpos-1)
// });

// window.onbeforeunload = function(e) {
//     localStorage.setItem('interplar_splide_index', splide.index);
// };