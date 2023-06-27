import { JobDetailPageComponent } from './components/details/jobDetailPageComponent.js';
import * as functions from './functions.js'; // to initialize Functions

function init() {
    JobDetailPageComponent();
    document.getElementById('apply-btn')?.addEventListener('click', functions.navigateToForm);
}

init();