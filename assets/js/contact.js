
function init() {
    document.getElementById('myForm')?.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting
    // Reset the form
    document.getElementById('myForm').reset();


    alert('Form submitted successfully!');
}