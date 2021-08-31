import { scrollParallax } from "./parallax.js";

window.addEventListener('load', () => {
    console.log('Empezando...')
    animacionTitulo() // Animacion Titulo
    animacionNav(); // Animacion Nav
    escuchandoMenu(); // Animacion Scroll

})

// Animacion Scroll
function escuchandoMenu(){
    const $about = document.querySelector('#about');
    const $menu = document.querySelector('#menu');
    const $galeria = document.querySelector('#galeria');
    const $ubicacion = document.querySelector('#ubicacion');

    // Acerca de
    $about.addEventListener('click', (e) => {
        e.preventDefault();
        window.scroll({
            top: 380,
            left: 0,
            behavior: 'smooth'
        })
    })

    // Menu
    $menu.addEventListener('click', (e) => {
        e.preventDefault();
        const $Section = document.querySelector('.menu_titulo')
        const ubicacionPixeles = $Section.offsetTop
        window.scroll({
            top: ubicacionPixeles,
            left: 0,
            behavior: 'smooth'
        })
    })

    // Galeria
    $galeria.addEventListener('click', (e) => {
        e.preventDefault();
        const $Section = document.querySelector('#SectionGaleria')
        const ubicacionPixeles = $Section.offsetTop - 20
        window.scroll({
            top: ubicacionPixeles,
            left: 0,
            behavior: 'smooth'
        })
    })

    // Ubicacion 
    $ubicacion.addEventListener('click', (e) => {
        e.preventDefault();
        const $Section = document.querySelector('.container_ubicacion')
        const ubicacionPixeles = $Section.offsetTop + 50
        window.scroll({
            top: ubicacionPixeles,
            left: 0,
            behavior: 'smooth'
        })
    })


}

// Animacion Nav
function animacionNav(){
    const $arrayMenu = document.querySelectorAll('nav a');
    let time = 500;
    $arrayMenu.forEach((link) => {
        time = time + 350;
        setTimeout(() => {
            link.style.visibility = "visible"
            link.style.animation = `menuNav 1s ease 0ms 1 normal forwards`;
        }, time);
    })
}

// Animacion Titulo
export function animacionTitulo(){
    const $titulo = document.querySelector('.container_titulo')
    if(window.screen.width > 800){
        console.log('animacion')
        
        $titulo.style.animation = 'titulo 1500ms ease-out 0ms 1 normal forwards';
        // scrollParallax()
    }

    $titulo.style.opacity = 1;
}