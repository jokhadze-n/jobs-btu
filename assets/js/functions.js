String.prototype.getTwoWords = function () {
    return this.split(' ').slice(0, 2).join(' ');
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

// If we Want to map List to Components we can use this function
Array.prototype.mapComponent = function (component) {
    return this.map(item => component(item)).join('');
}

Array.prototype.mapKeysToCamelCase = function () {
    return this.map(obj => {
        const newObj = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
                newObj[camelCaseKey] = obj[key];
            }
        }
        return newObj;
    });
}

Number.prototype.formatDate = function () {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const date = new Date(this * 1000);
    return date.toLocaleDateString('en-US', options);
}

export const navigateToForm = () => {
    window.location = 'resume-form.html';
}

export const navigateToHome = () => {
    window.location = 'homepage.html';
}

export const navigateToDetails = (e) => {
    const clickedJob = e.target.getAttribute('data-job');

    localStorage.setItem('job', decodeURIComponent(clickedJob));
    window.location = 'details.html';
}

// get new node element
export const getNewElement = (component) => {
    const newComponent = document.createElement("div");

    newComponent.innerHTML = component;

    return newComponent
}
