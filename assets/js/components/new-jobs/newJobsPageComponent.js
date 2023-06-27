import { ErrorComponent } from "../components.js";
import { JobListItemComponent } from "../jobListItemComponent.js";
import * as functions from "../../functions.js";

export const NewJobsPageComponent = () => {
    // get jobs from cache
    const jobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    // Main Section On HomePage
    const list = document.querySelector("#main");

    if (jobs.length === 0) {
        list.appendChild(functions.getNewElement(ErrorComponent('No Jobs Found')));
        return;
    }

    jobs.forEach(job => {
        list.appendChild(functions.getNewElement(JobListItemComponent(job)));
    });
}