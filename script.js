// Create a comment in JavaScript
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password_two = document.getElementById('password_two')

// Function built to display the error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className ='form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Function built to display the success submission
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


// Event Listener for the form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value == '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }
})