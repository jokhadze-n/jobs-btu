import { HomePageComponent } from "./components/components.js";
import * as functions from './functions.js'; // to initialize Functions

// Init Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

async function init() {
    await HomePageComponent();
    let elements = document.querySelectorAll('#details-btn');

    elements.forEach((item) => {
        item.addEventListener('click', functions.navigateToDetails);
    });
}

init();