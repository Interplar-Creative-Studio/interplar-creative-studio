console.log('scripts/main.js');


let menu_toggler = document.querySelector('.menu_toggler')
let menu_counter = document.querySelector('.counter')
let menu_bar     = document.querySelector('.menu')

menu_toggler.addEventListener("click", function(){
    menu_bar.classList.toggle("active")
    menu_toggler.classList.toggle("active")
    menu_counter.classList.toggle("active")
})