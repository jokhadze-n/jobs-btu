import { ResumeFormComponent, ErrorComponent } from "../components.js";
import { navigateToHome } from "../../functions.js";

const HomeButton = () => {
    let returnToHomeBtn = document.createElement('button');
    returnToHomeBtn.className = 'custom-btn';
    returnToHomeBtn.innerHTML = '<span>Home</span>'
    return returnToHomeBtn;
}

export const ResumeFormPageComponent
    = (isSlugUsed) => {
        const list = document.querySelector("#main");

        // for formComponent HTML
        const formComponent = document.createElement("div");

        // Get Component
        formComponent.innerHTML = !isSlugUsed ? ResumeFormComponent() : ErrorComponent('Form for this job has been submitted');

        if (!isSlugUsed) {
            list.appendChild(formComponent);
            return;
        };

        const mainDiv = formComponent.querySelector('.d-flex');
        mainDiv.appendChild(HomeButton());
        mainDiv.querySelector('.custom-btn').addEventListener('click', navigateToHome);

        list.appendChild(formComponent);
    }


