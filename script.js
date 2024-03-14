// Create a comment in JavaScript
const form = document.getElementById('form')
const lawson = document.getElementById('lawson')
const first_name = document.getElementById('first_name')
const last_name = document.getElementById('last_name')
const dropdown = document.getElementById('dropdown')

// Function built to display the error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Function built to display the success submission
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// Check required fields
/* This will then use the function to run a loop. passing the input Array. Which will then checck each id that we have stored and passed through */
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length for the form input
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} charcters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be a max of ${max} charcters`);
    } else {
        showSuccess(input);
    }
}

// Badge Report Function
function checkDropDown(dropdown) {
    // Check if the dropdown value is the default
    if (dropdown.option === 'default' || dropdown.option === 'Select') {
        // It's the default value, so show error
        showError(input);
    } else {
        // It's not the default value, so show success
        showSuccess(input);
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
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([lawson, first_name, last_name, dropdown]);
    checkLength(lawson, 6, 6);
    checkLength(first_name, 3, 30);
    checkLength(last_name, 6, 30);
    checkDropDown(dropdown);
});
