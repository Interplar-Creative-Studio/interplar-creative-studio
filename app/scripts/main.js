console.log('scripts/main.js');

// МЕНЮ
let menu_toggler = document.querySelector('.menu_toggler')
let menu_counter = document.querySelector('.counter')
let menu_bar = document.querySelector('.menu')

menu_toggler.addEventListener("click", function () {
    menu_bar.classList.toggle("active")
    menu_toggler.classList.toggle("active")
    menu_counter.classList.toggle("active")
})

// HOVER
let intro_h1 = document.querySelector('#intro h1');
let nav_links = document.querySelectorAll('.menu a');
let btns = document.querySelectorAll('.btn');
let next_links = document.querySelectorAll('.next');
let footer_email = document.querySelector('#footer .email');
let footer_logo = document.querySelector('.footer_logo');
// let license_links = document.querySelectorAll('.license a'); // это лишнее, там слишком маленький текст

intro_h1.setAttribute('data-hover', intro_h1.innerHTML.toUpperCase())
menu_toggler.setAttribute('data-hover', menu_toggler.innerHTML.toUpperCase())
footer_email.setAttribute('data-hover', footer_email.innerHTML.toUpperCase())
footer_logo.setAttribute('data-hover', footer_logo.innerHTML.toUpperCase())

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
// license_links.forEach(element => {
//     let text = element.innerHTML
//     element.setAttribute('data-hover', text)
// });

// SCROLL COUNTER
let scroll_position = 0
let ticking = false
let windowHeight = window.innerHeight

function doSomething(scroll_pos) {
    menu_counter.innerHTML = Math.floor(scroll_pos / (windowHeight - 10)) // изменение счётчика в меню
}

window.addEventListener('scroll', function (e) {
    scroll_position = window.scrollY

    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(scroll_position)
            ticking = false
        });

        ticking = true
    }
});
