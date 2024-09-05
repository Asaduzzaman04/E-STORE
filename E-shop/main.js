// navbar-fixed-section
const navFix = document.querySelector('.nav-fixed')

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
        const yAxis = navFix.offsetTop;
        if(window.scrollY > yAxis){
            navFix.classList.add('top')
        }else{
            navFix.classList.remove('top')
        }
} )