// navbar-fixed-section
const navFix = document.querySelector('.nav-fixed')
const heroSection = document.querySelector(".hero-section");

window.addEventListener("scroll", () => {
        const yAxis = navFix.offsetTop;
        if(window.scrollY > yAxis){
            navFix.classList.add('top')

        }else{
            navFix.classList.remove('top')
        }
} )
