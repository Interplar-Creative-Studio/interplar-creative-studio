console.log('scripts/main.js');

// МЕНЮ
let menu_toggler = document.querySelector('.menu_toggler')
let menu_counter = document.querySelector('.counter')
let menu_bar     = document.querySelector('.menu')

menu_toggler.addEventListener("click", function(){
    menu_bar.classList.toggle("active")
    menu_toggler.classList.toggle("active")
    menu_counter.classList.toggle("active")
})

// HOVER
let intro_h1   = document.querySelector('#intro h1');
let nav_links  = document.querySelectorAll('.menu a');
let btns       = document.querySelectorAll('.btn');
let next_links = document.querySelectorAll('.next');
let footer_email = document.querySelector('#footer .email');
// let license_links = document.querySelectorAll('.license a'); // это лишнее, там слишком маленький текст

intro_h1.setAttribute('data-hover', intro_h1.innerHTML.toUpperCase())
menu_toggler.setAttribute('data-hover', menu_toggler.innerHTML.toUpperCase())
footer_email.setAttribute('data-hover', footer_email.innerHTML.toUpperCase())

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
