import { NewJobsPageComponent } from "./components/new-jobs/newJobsPageComponent.js";
import * as functions from './functions.js'; // to initialize Functions

function init() {
    NewJobsPageComponent();
    let elements = document.querySelectorAll('#details-btn');

    elements.forEach((item) => {
        item.addEventListener('click', functions.navigateToDetails);
    });
}

init();