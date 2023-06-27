import * as constants from '../constants.js';
import { JobTagComponent } from './jobTagComponent.js';

export const JobListItemComponent = (job) => {
    const { createdAt, companyName, tags, location, title, slug } = job; // Data Object
    const randomItemColor = constants.colors.random();
    const randomLogo = constants.logos.random();
    const obj = JSON.stringify(job);
    return ` 
    <div class="wrapper-container">
        <div class="custom-container" style="background-color: ${randomItemColor}">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <div class="date-container">
                    <span class="f14-m">${createdAt.formatDate()}</span>
                </div>
            </div>
            <div class="d-flex flex-row">
                <span class="f14-m">${companyName}</h2>
            </div>
            <div class="d-flex flex-row justify-content-between align-items-center">
                <span class="f24-m">${title.getTwoWords()}</span>
                <i class="fa-brands fa-${randomLogo} fa-2xl"></i>
            </div>
            <div class="d-flex flex-row align-items-center">
                <!-- tags -->
                ${tags.mapComponent(JobTagComponent)}
            </div>
        </div>
        <div class="bottom-row">
                <div class="d-flex gap-2">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <span class="f16-r grey-txt">
                    ${location}
                    </span>
                </div>               
            <button class="bottom-button" id="details-btn" data-job='${encodeURIComponent(obj)}'>Details</button>
        </div>
    </div>
`;
}

