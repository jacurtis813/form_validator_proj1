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
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid');
    }
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

// Check input length for the form input
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} charcters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be a max of ${max} charcters`);
    } else {
        showSuccess(input);
    }
}

// Check that the passwords are matching
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// Get FieldName to apply the Upper Case character for the Error Message
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Function to reset the form (self-edition)
function resetForm() {
    document.getElementById(reset).reset();
  }

// Event Listener for the form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password_two]);
    checkLength(username, 3, 30);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password_two);
});