const form = document.querySelector('form');

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#full-name-er");

const username = document.querySelector("#username")
const usernameError = document.querySelector("#username-er")

const gender = document.querySelector("#gender");
const genderError = document.querySelector("#gender-er")

const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phone-er")

const dob = document.querySelector("#dob");
const dobError = document.querySelector("#dob-er");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-er");

const password = document.querySelector("#password");
const confPassword = document.querySelector("#conf-password");
const passwordError = document.querySelector("#password-er");

const accountType = document.querySelectorAll('input[type="radio"]')
const accountTypeError = document.querySelector("#accountType-er")

const agreement = document.querySelector("#agree")
const agreementError = document.querySelector("#agree-er");

const image = document.querySelector("#img");
const imageError = document.querySelector("#img-er")


form.addEventListener('submit', e => {
    const validations = [
        checkName(),
        checkUsername(),
        checkGender(),
        checkPhone(),
        checkDob(),
        checkEmail(),
        checkPassword(),
        checkAccountType(),
        checkAgreement(),
        checkImage()
    ]

    const isValid = validations.every(Boolean);

    if (!isValid) e.preventDefault();
})


function checkName() {
    let value = fullName.value.trim();

    if (value === "") {
        fullNameError.textContent = "Please Enter your name!";
        return false;
    }

    fullNameError.textContent = "";
    return true;
}


function checkUsername() {
    let value = username.value.trim();

    if (value === "") {
        usernameError.textContent = "Please Enter a username!";
        return false;
    }

    if (value.includes(' ')) {
        usernameError.textContent = "You cannot use 'Space' in username!";
        return false;
    }

    usernameError.textContent = "";
    return true;
}


function checkGender() {
    let value = gender.value;
    
    if (value === "") {
        genderError.textContent = "Plese select a gender!";
        return false;
    }

    genderError.textContent = "";
    return true;
}


function checkPhone() {
    let value = phone.value.replaceAll(' ', '');

    if (value === "") {
        phoneError.textContent = "Please enter your phone number!";
        return false;
    }

    if (isNaN(value)) {
        phoneError.textContent = "Please enter a valid phone number!";
        return false;
    }

    phoneError.textContent = "";
    return true;
}


function checkDob() {
    let value = dob.value;

    if (value === "") {
        dobError.textContent = "Please enter your date of birth!"
        return false;
    }

    dobError.textContent = "";
    return true;
}


function checkEmail() {
    let value = email.value.trim();

    if (value === '') {
        emailError.textContent = "Please enter your email address!"
        return false;
    }

    emailError.textContent = "";
    return true;
}


function checkPassword() {
    let pw = password.value;
    let confPw = confPassword.value;

    if (pw === '') {
        passwordError.textContent = "Please enter a password!";
        return false;
    }

    if (confPw === "") {
        passwordError.textContent = "Please confirm password!";
        return false;
    }

    if (pw !== confPw) {
        passwordError.textContent = "Passwords does not match!";
        return false;
    }

    passwordError.textContent = "";
    return true;
}


function checkAccountType() {

    const selected = document.querySelector("input[type='radio']:checked")

    if (!selected) {
        accountTypeError.textContent = "Please Select an account type!"
        return false;
    }

    accountTypeError.textContent = "";
    return true;
}

function checkAgreement() {
    
    if (!agreement.checked) {
        agreementError.textContent = "You need to agree to continue!"
        return false;
    }

    agreementError.textContent = "";
    return true;
}

function checkImage() {

    if (image.files.length === 0) {
        imageError.textContent = "Please Upload your Picture!"
        return false;
    }

    imageError.textContent = "";
    return true;
}