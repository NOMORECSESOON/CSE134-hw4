const form = document.querySelector("form");
const email = document.getElementById("mail");
const comments = document.getElementById("comments");
const emailError = document.querySelector("#mail + span.error");
const commentsError = document.querySelector("#comments + span.error");
const errorOutput = document.getElementById("error-Output");
  
form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address.";
        errorOutput.textContent = 'no email adress';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address.";
        errorOutput.textContent = 'not a email adress';
    }   else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
        errorOutput.textContent = 'email length wrong';
    }
    emailError.className = "error active";
    emailError.classList.remove('active');
    void emailError.offsetWidth;
    emailError.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const comments = document.getElementById("comments");
    const infoOutput = document.getElementById("info-output");

    function updateCharacterCount() {
        const remaining = 1000 - comments.value.length;
        infoOutput.textContent = `Characters left: ${remaining}`;

        if (remaining < 200 && remaining >= 100) {
            infoOutput.className = 'info-warning';
        } else if (remaining < 100) {
            infoOutput.className = 'info-error';
        } else {
            infoOutput.className = 'info-normal';
        }
    }

    comments.addEventListener('input', updateCharacterCount);
    updateCharacterCount();
});














document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'change to white' : 'change to dark';
});

const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', toggleDarkMode);

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});