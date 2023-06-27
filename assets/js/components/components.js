import { JobListItemComponent } from "./jobListItemComponent.js";
import { JobTagComponent } from "./jobTagComponent.js";
import { HomePageComponent } from "./home/homePageComponent.js";
import { ResumeFormPageComponent } from "./resume-form/resumeFormPageComponent.js";
import { ResumeFormComponent } from "./resume-form/resumeFormComponent.js";

const ErrorComponent = (error) => `
        <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="alert alert-danger m-4" role="alert">
            ${error}
            </div>
        </div>
        `;

export { JobTagComponent, JobListItemComponent, HomePageComponent, ErrorComponent, ResumeFormPageComponent, ResumeFormComponent };