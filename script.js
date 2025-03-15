const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

// Function to toggle forms with smooth animation
function toggleForm(showForm, hideForm) {
    hideForm.classList.add('fade-out');
    setTimeout(() => {
        hideForm.style.display = "none";
        showForm.style.display = "block";
        showForm.classList.remove('fade-out');
        showForm.classList.add('fade-in');
    }, 300);
}

// Event Listeners
signUpButton.addEventListener('click', () => toggleForm(signUpForm, signInForm));
signInButton.addEventListener('click', () => toggleForm(signInForm, signUpForm));
