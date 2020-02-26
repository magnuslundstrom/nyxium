

// QUERY SELECTORS ###

const nav = document.querySelector('nav');
const burger = document.querySelector('.burger')
const bars = document.querySelector('.bars')
const submenu = document.querySelector('.submenu')
const submenubullets = submenu.querySelector('.submenubullets')
const dropdowntrigger = submenu.querySelector('.dropdowntrigger')

// if width
if (window.innerWidth < 901) {
    let show = false
    dropdowntrigger.addEventListener('click', () => {

        if (!show) {
            submenubullets.style.display = 'flex'
        } else {
            submenubullets.style.display = 'none'
        }
        show = !show
    })
}


// Menu effect
const navToggle = () => {
    nav.classList.toggle('displaynav')
    bars.classList.toggle('cross')
}


burger.addEventListener('click', navToggle)












// Intersection options
let options;
if (window.innerWidth < 801) {
    options = {
        threshold: 0.1
    }
} else {
    options = {
        threshold: 0.9
    }
}

// Testimonials animationer
const testimonials = document.querySelector('.testimonials')
const testimonialGrids = document.querySelectorAll('.testimonials_grid')

if (testimonials) {

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

// Get started today Animationer

const getstarted = document.querySelector('.get-started')
if (getstarted) {
    const getstartedObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                getstarted.classList.add('get-started-animation')
            }
        })
    }, options)
    getstartedObserver.observe(getstarted)
}

// Two Grid img - text Animation

const textOne = document.querySelector('.text1')
const textTwo = document.querySelector('.text2')

if (textOne && textTwo) {
    const textOneObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textOne.classList.add('slide-left')
            }
        })
    }, options)
    textOneObserver.observe(textOne)

    const textTwoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textTwo.classList.add('slide-right')
            }
        })
    }, options)
    textTwoObserver.observe(textTwo)
}

// Frontpage Typeeffect
const frontPageH1 = document.querySelector('.fph1')
const typeEffect = document.querySelector('.effect')

if (frontPageH1) {
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


