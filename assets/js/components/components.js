import { JobListItemComponent } from "./job_list_item_component.js";
import { JobTagComponent } from "./job_tag_component.js";
import { HomePageComponent } from "./home/home_page_component.js";
import { ResumeFormPageComponent } from "./resume-form/resume_form_page_component.js";
import { ResumeFormComponent } from "./resume-form/resume_form_component.js";

const ErrorComponent = (error) => `
        <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="alert alert-danger m-4" role="alert">
            ${error}
            </div>
        </div>
        `;

export { JobTagComponent, JobListItemComponent, HomePageComponent, ErrorComponent, ResumeFormPageComponent, ResumeFormComponent };