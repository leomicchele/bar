import { animacionTitulo } from "./animation.js"

window.addEventListener('load', () => {
    scrollParallax()
    
})


export function scrollParallax() {
    const $titulo = document.querySelector('.container_titulo')
    const $about = document.querySelector('.container_about article')

    window.addEventListener('scroll', () => {
        if(window.screen.width > 800) {

            let scrollTop = document.documentElement.scrollTop
            
            $titulo.style.opacity = '1'
            $titulo.style.animation = 'none'
            $titulo.style.transform =`translateY(${scrollTop / 2.2}px)`
    
            $about.style.transform =`translateY(${- scrollTop * 1.1}px)`

            window.addEventListener('resize', ()=> {
                $titulo.style.opacity = '1'
                $titulo.style.transform = `translateY(0px)`
                $about.style.transform =`translateY(0px)`
                // $about.style.top =`500px`
                console.log('entrando al window')
            })
        } 
        

    })
}