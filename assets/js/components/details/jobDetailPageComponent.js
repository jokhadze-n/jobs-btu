import { JobDetailComponent } from "./jobDetailComponent.js";

export const JobDetailPageComponent = () => {
    // fetch and get Jobs From service
    const job = JSON.parse(localStorage.getItem('job'));
    // Main Section On HomePage
    const list = document.querySelector("#details");

    const jobDetailComponent = document.createElement("div");

    // Get Component
    jobDetailComponent.innerHTML = JobDetailComponent(job);
    list.appendChild(jobDetailComponent);
}