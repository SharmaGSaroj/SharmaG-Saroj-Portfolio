import Navigation from "./components/TheNavigation.js";
import Herosection from "./components/TheHerosection.js";
import Footer from "./components/TheFooter.js";
import Project from "./components/ThePortfolio.js";
import Lightbox from "./components/TheLightbox.js";




const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

(() => {




    // create vue instance here

    const { createApp } = Vue

    createApp({
        created() {
            fetch('./scripts/json.php')
                .then(res => res.json())
                .then(data => this.heroData = data)
                .catch(error => console.error(error));
        },
        data() {
            return {
                heroData: {},
                lbData: {},
                showLB: false
            }
        },


        components: {
            thenavigation: Navigation,
            theherosection: Herosection,
            thefooter: Footer,
            theproject: Project,
            thelightbox: Lightbox,

        },
        methods: {
            loadLightbox(hero) {

                //set the lightbox data / render it 
                this.lbData = hero;


                this.showLB = true;
                this.body.style.oveflow = 'hidden';

            },
        },



    }).mount('#app')
})()




