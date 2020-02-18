

// QUERY SELECTORS ###

const nav = document.querySelector('nav');
const burger = document.querySelector('.burger')
const bars = document.querySelector('.bars')
const frontPageH1 = document.querySelector('.fph1')
const typeEffect = document.querySelector('.effect')

// Testimonials
const testimonials = document.querySelector('.testimonials')
const testimonialGrids = document.querySelectorAll('.testimonials_grid')


if (testimonials) {
    const options = {
        threshold: 0.3
    }
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                console.log(entry.isIntersecting)
                let duration = 400;
                testimonialGrids.forEach(el => {
                    setTimeout(() => {

                        el.classList.add('testimonials-pop')

                    }, duration)
                    duration = duration + 400
                })
            }
        })
    }, options)
    testimonialObserver.observe(testimonials)
}
// Menu effect
const navToggle = () => {
    nav.classList.toggle('displaynav')
    bars.classList.toggle('cross')
}
burger.addEventListener('click', navToggle)


if (frontPageH1) {
    // Frontpage Typeeffect
    const typescript = () => {
        var typewriter = new Typewriter(typeEffect, {
            loop: true
        });

        typewriter.typeString('salg')
            .pauseFor(2000)
            .deleteChars(4)
            .typeString('indkøb')
            .pauseFor(2000)
            .deleteChars(6)
            .typeString('din virksomhed')
            .pauseFor(2000)
            .start();
    }

    typescript()
}