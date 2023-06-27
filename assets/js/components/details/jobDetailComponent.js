import * as constants from '../../constants.js';
import { IconItemComponent } from './IconItemComponent.js';
import { ErrorComponent } from "../components.js";

export const JobDetailComponent = (job) => {
    if (job === undefined || job === null) {
        return ErrorComponent('No job Found');
    }

    localStorage.setItem('job', JSON.stringify(job));

    const { companyName, tags, jobTypes, location, title, description } = job; // Data Object
    const randomLogo = constants.logos.random();
    const randomPhoto = constants.photos.random();

    return `
        <div class="d-flex flex-column justify-content-center align-items-center header">
            <div class="detail-photo-wrapper">
                <img
                    src="assets/img/${randomPhoto}.jpg"
                    alt="Header Photo"
                >
                <div class="detail-header-container">
                    <span class="h-span">${title}</span>
                    <div class="d-flex justify-content-start align-items-center gap-2">
                        <i class="fa-brands fa-${randomLogo} fa-2xl"></i>
                        <span>${companyName}</span>
                        <i class="fa-sharp fa-solid fa-location-dot fa-lg"></i>
                        <span>${location}</span>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="d-flex justify-content-center gap-4"
            style="margin-top: 100px"
        >
            <button class="custom-btn" id="apply-btn">
                <span>Apply</span>
            </button>
        </div>

        <!-- Main Content -->

        <div class="container mt-5">
            <hr/>
            ${description}
            <hr/>
            <div class="d-flex mt-4">
                ${constants.detailPageIcons.mapComponent(IconItemComponent)}
            </div>
        </div>
    `;
}

