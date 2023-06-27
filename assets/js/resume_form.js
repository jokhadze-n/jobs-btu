import { ResumeFormPageComponent } from './components/components.js';

function init() {
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    const job = JSON.parse(localStorage.getItem('job') || '');
    const isSlugUsed = submissions.some(submission => submission.slug === job?.['slug']);

    ResumeFormPageComponent(isSlugUsed);
    document.getElementById('myForm')?.addEventListener('submit', handleFormSubmit);
}
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const job = JSON.parse(localStorage.getItem('job'));

    // Store form data in an object
    const formData = {
        name: name,
        surname: surname,
        email: email,
        slug: job['slug'],
    };

    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    submissions.push(formData);
    localStorage.setItem('submissions', JSON.stringify(submissions));

    // Reset the form
    document.getElementById('myForm').reset();


    alert('Form submitted successfully!');
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}


init();
// Add event listener to the form submit event
