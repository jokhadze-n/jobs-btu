import { JobDetailPageComponent } from './components/details/job_detail_page_component.js';
import * as functions from './functions.js'; // to initialize Functions

function init() {
    JobDetailPageComponent();
    document.getElementById('apply-btn')?.addEventListener('click', functions.navigateToForm);
}

init();