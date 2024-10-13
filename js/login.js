// constants for login password elements
const loginPasswordInput = document.getElementById('login-password');
const loginPasswordIconContainer = document.getElementById('login-password-icon');


// constants for signup password elements
const signupPasswordInput = document.getElementById('signup-password');
const signupPasswordIconContainer = document.getElementById('signup-password-icon');
const signupConfirmPasswordInput = document.getElementById('signup-confirm-password');
const signupConfirmPasswordIconContainer = document.getElementById('signup-confirm-password-icon');


// SVGs for icons
const lockSvg = getLockSvg();
const eyeSlashSvg = getEyeSlashSvg();
const eyeSvg = getEyeSvg();


// initialize icons for login and signup
loginPasswordIconContainer.innerHTML = lockSvg;
signupPasswordIconContainer.innerHTML = lockSvg;
signupConfirmPasswordIconContainer.innerHTML = lockSvg;


// setup event listeners for both login and signup password fields
setupPasswordEventListeners(loginPasswordInput, loginPasswordIconContainer);
setupPasswordEventListeners(signupPasswordInput, signupPasswordIconContainer);
setupPasswordEventListeners(signupConfirmPasswordInput, signupConfirmPasswordIconContainer);


/**
 * sets up event listeners for a password input and its icon container.
 * @param {HTMLInputElement} input - the password input element.
 * @param {HTMLElement} iconContainer - the icon container element.
 */
function setupPasswordEventListeners(input, iconContainer) {
    input.addEventListener('input', updateIcons);
    iconContainer.addEventListener('click', () => togglePasswordVisibility(input, iconContainer));
}


/**
 * updates the icons based on the input value.
 */
function updateIcons() {
    const iconContainer = this.nextElementSibling;

    switch (true) {
        case this.value === '':
            iconContainer.innerHTML = lockSvg;
            break;
        case this.type === 'password':
            iconContainer.innerHTML = eyeSlashSvg;
            break;
        default:
            iconContainer.innerHTML = eyeSvg;
            break;
    }
}


/**
 * toggles the password visibility.
 * @param {HTMLInputElement} input - the password input element.
 * @param {HTMLElement} iconContainer - the icon container element.
 */
function togglePasswordVisibility(input, iconContainer) {
    if (input.type === 'password') {
        showPassword(input, iconContainer);
    } else {
        hidePassword(input, iconContainer);
    }
}


/**
 * shows the password.
 * @param {HTMLInputElement} input - the password input element.
 * @param {HTMLElement} iconContainer - the icon container element.
 */
function showPassword(input, iconContainer) {
    input.type = 'text';
    iconContainer.innerHTML = eyeSvg;
}


/**
 * hides the password.
 * @param {HTMLInputElement} input - the password input element.
 * @param {HTMLElement} iconContainer - the icon container element.
 */
function hidePassword(input, iconContainer) {
    input.type = 'password';
    iconContainer.innerHTML = eyeSlashSvg;
}


/**
* returns the svg markup for the lock icon.
* @returns {string} svg markup for the lock icon
*/
function getLockSvg() {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
            <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path>
        </svg>
    `;
}


/**
* returns the svg markup for the eye-slash icon.
* @returns {string} svg markup for the eye-slash icon
*/
function getEyeSlashSvg() {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
            <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z"></path>
        </svg>
    `;
}


/**
* returns the svg markup for the eye icon.
* @returns {string} svg markup for the eye icon
*/
function getEyeSvg() {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
            <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
        </svg>
    `;
}


/**
 * toggles the visibility of the login and sign-up boxes and resets validation errors.
 * 
 * @param {boolean} isSignUp - if true, shows the sign-up box; if false, shows the login box.
 * @returns {void}
 */
function toggleAuth(isSignUp) {
    const logInBox = document.getElementById('login-wrapper');
    const signUpBox = document.getElementById('signup-wrapper');
    const signUpCall = document.getElementById('call-to-signup');

    toggleVisibility(logInBox, !isSignUp);
    toggleVisibility(signUpBox, isSignUp);
    toggleVisibility(signUpCall, !isSignUp);

    if (isSignUp) {
        resetLoginErrors();
    } else {
        resetSignupErrors();
    }
}


/**
 * resets the error messages and styles for the login form.
 * 
 * @returns {void}
 */
function resetLoginErrors() {
    document.getElementById('error-login-email').classList.add('hidden');
    document.getElementById('error-login-password').classList.add('hidden');
    document.getElementById('login-email').classList.remove('input-error');
    document.getElementById('login-password').classList.remove('input-error');
}


/**
 * resets the error messages and styles for the sign-up form.
 * 
 * @returns {void}
 */
function resetSignupErrors() {
    document.getElementById('error-signup-name').classList.add('hidden');
    document.getElementById('error-signup-email').classList.add('hidden');
    document.getElementById('error-signup-password').classList.add('hidden');
    document.getElementById('error-signup-confirm-password').classList.add('hidden');
    document.getElementById('signup-name').classList.remove('input-error');
    document.getElementById('signup-email').classList.remove('input-error');
    document.getElementById('signup-password').classList.remove('input-error');
    document.getElementById('signup-confirm-password').classList.remove('input-error');
}


/**
 * toggles the 'hidden' and 'show' classes on a given element based on the provided flag.
 * 
 * @param {HTMLElement} element - the element whose visibility will be toggled.
 * @param {boolean} shouldShow - if true, shows the element; if false, hides it.
 * @returns {void}
 */
function toggleVisibility(element, shouldShow) {
    if (shouldShow) {
        element.classList.remove('hidden');
        element.classList.add('show');
    } else {
        element.classList.add('hidden');
        element.classList.remove('show');
    }
}


/**
 * processes the login of a user.
 * @param {Event} event - the event triggered when the form is submitted.
 */
function login(event) {
    event.preventDefault();

    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');

    // perform validation
    if (validateLoginInputs(emailInput, passwordInput)) {
        // attempt to find the user
        const user = findUser(emailInput.value, passwordInput.value);

        if (user) {
            handleSuccessfulLogin(user, emailInput, passwordInput);
        } else {
            handleFailedLogin(emailInput, passwordInput);
        }
    }
}


/**
 * validates email and password inputs.
 * @param {HTMLInputElement} emailInput - the email input field.
 * @param {HTMLInputElement} passwordInput - the password input field.
 * @returns {boolean} - returns true if both inputs are valid, false otherwise.
 */
function validateLoginInputs(emailInput, passwordInput) {
    const isEmailValid = validateLoginEmail(emailInput);
    const isPasswordValid = validateLoginPassword(passwordInput);
    return isEmailValid && isPasswordValid;
}


/**
 * ! finds a user by email and password in the users array.
 * @param {string} email - the user's email.
 * @param {string} password - the user's password.
 * @returns {Object|null} - returns the user object if found, otherwise null.
 */
function findUser(email, password) {
    return users.find(user => user.email === email && user.password === password) || null;
}


/**
 * handles actions when login is successful.
 * @param {Object} user - the logged-in user object.
 * @param {HTMLInputElement} emailInput - the email input field.
 * @param {HTMLInputElement} passwordInput - the password input field.
 */
function handleSuccessfulLogin(user, emailInput, passwordInput) {
    alert(`Welcome back, ${user.user}!`);
    clearLoginInputs(emailInput, passwordInput);
    redirectToDashboard();
}


/**
 * clears the email and password input fields.
 * @param {HTMLInputElement} emailInput - the email input field.
 * @param {HTMLInputElement} passwordInput - the password input field.
 */
function clearLoginInputs(emailInput, passwordInput) {
    emailInput.value = '';
    passwordInput.value = '';
}


/**
 * redirects the user to the dashboard or another page after login.
 */
function redirectToDashboard() {
    window.location.href = './pages/summary.html';
}


/**
 * handles actions when login fails.
 * @param {HTMLInputElement} emailInput - the input field for the email.
 * @param {HTMLInputElement} passwordInput - the input field for the password.
 */
function handleFailedLogin(emailInput, passwordInput) {
    showFailedLoginModal(emailInput, passwordInput);
}


/**
 * Validates email input in the login form.
 * @param {HTMLInputElement} emailInput - the email input element.
 * @returns {boolean} true if email is valid, false otherwise.
 */
function validateLoginEmail(emailInput) {
    const errorEmail = document.getElementById('error-login-email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add('input-error');
        errorEmail.classList.remove('hidden');
        return false; // invalid email
    } else {
        emailInput.classList.remove('input-error');
        errorEmail.classList.add('hidden');
        return true; // valid email
    }
}


/**
 * Validates the password input in the login form.
 * @param {HTMLInputElement} passwordInput - the password input element.
 * @returns {boolean} true if password is valid, false otherwise.
 */
function validateLoginPassword(passwordInput) {
    const errorPassword = document.getElementById('error-login-password');

    if (passwordInput.value.length < 6) {
        passwordInput.classList.add('input-error');
        errorPassword.classList.remove('hidden');
        return false; // invalid password
    } else {
        passwordInput.classList.remove('input-error');
        errorPassword.classList.add('hidden');
        return true; // valid password
    }
}


/**
 * displays the modal for failed login attempts and hides it after 2 seconds.
 * @param {HTMLInputElement} emailInput - the input field for the email.
 * @param {HTMLInputElement} passwordInput - the input field for the password.
 */
function showFailedLoginModal(emailInput, passwordInput) {
    const modal = document.getElementById('failed-login-modal');
    modal.classList.remove('hidden');
    modal.classList.add('show');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('show');
        clearLoginInputs(emailInput, passwordInput);
    }, 2000);
}