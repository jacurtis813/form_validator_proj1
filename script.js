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

// Function to check if the email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

// Check required fields
/* This will then use the function to run a loop. passing the input Array. Which will then checck each id that we have stored and passed through */
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Get Fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listener for the form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password_two]);
/* THIS IS WHERE WE STARTED WITH THIS FORM CREATION
-----------------------------------------------------
    if (username.value == '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }

    if (email.value == '') {
        showError(email, 'Eamil is required')
    } else if(!isValidEmail(email.value)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
    }

    if (password.value == '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }

    if (password_two.value == '') {
        showError(password_two, 'Confirm Password is required')
    } else {
        showSuccess(password_two);
    }
    ----------------------------------------------------
    */
});