const modalContainer = document.getElementById('modal-container');
document.getElementById('modal-exit-btn').addEventListener('click', () => {
    modalContainer.classList.remove('modal-container-popup');
    modalContainer.classList.add('modal-container-exit');
});
setTimeout(() => {
    modalContainer.classList.add('modal-container-popup');
}, 1000);

function validateForm(submitBtnId, nameInputId, phoneInputId, emailInputId) {
    const submitBtn = document.getElementById(submitBtnId);
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const nameInput = document.getElementById(nameInputId);
        const phoneInput = document.getElementById(phoneInputId);
        const emailInput = document.getElementById(emailInputId);
        let valid = true;
        if (nameInput.value.length === 0) {
            nameInput.classList.add('invalid');
            nameInput.placeholder = "*נא להזין שם תקין";
            valid = false;
        }
        const validPhoneChars = '0123456789-';
        if (phoneInput.value.length === 0 || 
            ![...phoneInput.value].every((char) => validPhoneChars.includes(char))) {
            phoneInput.classList.add('invalid');
            phoneInput.placeholder = "*נא להזין מספר טלפון";
            phoneInput.value = "";
            valid = false;
        }
        if (emailInput.value.length === 0) {
            emailInput.classList.add('invalid');
            emailInput.placeholder = "*נא להזין כתובת מייל";
            valid = false;
        }
        if (valid) {
            if (nameInput.classList.contains('invalid')) {
                nameInput.classList.remove('invalid');
                nameInput.placeholder = "שם מלא";
            }
            if (phoneInput.classList.contains('invalid')) {
                phoneInput.classList.remove('invalid');
                phoneInput.placeholder = "מספר טלפון";
            }
            if (emailInput.classList.contains('invalid')) {
                emailInput.classList.remove('invalid');
                emailInput.placeholder = "אי-מייל";
            }
            nameInput.value = "";
            phoneInput.value = "";
            emailInput.value = "";
        }
    });
}

validateForm("modal-submit-btn", "modal-name-input", "modal-phone-input", "modal-email-input");
validateForm("contact-submit-btn", "contact-fullname-input", "contact-phone-input", "contact-email-input");
validateForm("footer-submit-btn", "footer-fullname-input", "footer-phone-input", "footer-email-input");
document.getElementById('modal-submit-btn').addEventListener('click', () => {
    modalContainer.classList.remove('modal-container-popup');
    modalContainer.classList.add('modal-container-exit');
});
const headerHamburgerBtn = document.getElementById('header-hamburger-btn');
headerHamburgerBtn.addEventListener('click', () => {
    const mainNavbar = document.getElementById('main-navbar');
    if (mainNavbar.classList.contains('active-navbar')) {
        mainNavbar.classList.remove('active-navbar');
        headerHamburgerBtn.classList.remove('hamburger-to-x');
        headerHamburgerBtn.classList.add('x-to-hamburger');
    } else {
        mainNavbar.classList.add('active-navbar');
        if (headerHamburgerBtn.classList.contains('x-to-hamburger'))
            headerHamburgerBtn.classList.remove('x-to-hamburger');
        headerHamburgerBtn.classList.add('hamburger-to-x');
    }
});

const careersLink = document.getElementById('careers-link');
careersLink.addEventListener('click', () => {
    const careerNavbar = document.getElementById('career-navbar');
    if (careerNavbar.classList.contains('hidden-navbar')) {
        careerNavbar.classList.remove('hidden-navbar');
    } else {
        careerNavbar.classList.add('hidden-navbar');
    }
});
const courseProcessItems = document.querySelectorAll('.course-process-item');
for (let item of courseProcessItems) {
    item.addEventListener('click', () => {
        if (item.classList.contains('show')) {
            item.classList.remove('show');
        } else  {
            item.classList.add('show');
        }
    });
}
const expandableItems =  document.querySelectorAll('.expandable-item');
for (let item of expandableItems) {
    const header = item.children[0];
    const content = item.children[1];
    header.addEventListener('click', () => {
        const icon = header.lastElementChild;
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            icon.classList.remove('fa-arrow-circle-up');
            icon.classList.add('fa-arrow-circle-down');
        } else {
            content.classList.add('show');
            icon.classList.remove('fa-arrow-circle-down');
            icon.classList.add('fa-arrow-circle-up');
        }
    });
}