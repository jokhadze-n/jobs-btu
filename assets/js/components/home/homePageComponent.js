import { APIService } from "../../services/apiService.js";
import { JobListItemComponent } from "../jobListItemComponent.js";
import { ErrorComponent } from "../components.js";
import * as functions from "../../functions.js";
export const HomePageComponent = async () => {
    // fetch and get Jobs From service
    const jobs = (await APIService.getJobs());


    // Main Section On HomePage
    const list = document.querySelector("#main");

    // Render error component
    if (jobs.length === 0) {
        list.appendChild(functions.getNewElement(ErrorComponent('No Jobs Found')));
        return;
    }

    const newJobs = jobs.sort((a, b) => b.created_at - a.created_at);
    const slicedNewJobs = newJobs.slice(0, 10);

    localStorage.setItem('jobs', JSON.stringify(slicedNewJobs));
    jobs.forEach(job => {
        list.appendChild(functions.getNewElement(JobListItemComponent(job)));
    });
}