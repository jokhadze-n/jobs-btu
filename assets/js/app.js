// Get the buttons
const homeButton = document.getElementById('homeButton');
const jobsButton = document.getElementById('jobsButton');
const contactButton = document.getElementById('contactButton');
setActive()

function setActive() {
    const currentURL = window.location.href;

    removeActive();

    if (currentURL.includes('home')) {
        homeButton.classList.add('active');
    } else if (currentURL.includes('new-jobs')) {
        jobsButton.classList.add('active');
    } else if (currentURL.includes('contact')) {
        contactButton.classList.add('active');
    }
}

function removeActive() {
    homeButton.classList.remove('active');
    jobsButton.classList.remove('active');
    contactButton.classList.remove('active');
}

