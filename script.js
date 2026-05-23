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
const showPassword = document.querySelector("#show-pw");

const accountTypeError = document.querySelector("#accountType-er")

const agreement = document.querySelector("#agree")
const agreementError = document.querySelector("#agree-er");

const image = document.querySelector("#img");
const imageError = document.querySelector("#img-er")

const maxImageSize = 2100000;
const allowedImages = ['image/png', 'image/jpeg', 'image/jpg'];

const regex = {
    username: /^[a-zA-Z\d_]+$/,
    phone: /^\+?\d[\d -]{9,18}$/,
    email: /^(?![._])[a-zA-Z0-9_.%+-]+(?<![._])@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,32}$/
}

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

function showErrorState(elem) {
    elem.classList.add("error-state");
    elem.classList.remove("success-state");
}

function showSucessState(elem) {
    elem.classList.add("success-state");
    elem.classList.remove("error-state")
}

function checkName() {
    let value = fullName.value.trim();

    if (value === "") {
        fullNameError.textContent = "Please Enter your name!";
         showErrorState(fullName)
        return false;
    }

    showSucessState(fullName);
    fullNameError.textContent = "";
    return true;
}


function checkUsername() {
    let value = username.value.trim();

    if (value === "") {
        usernameError.textContent = "Please Enter a username!";
        showErrorState(username);
        return false;
    }

    if (value.length < 3) {
        usernameError.textContent = "Username too short!";
        showErrorState(username);
        return false;
    }

    if (value.length > 18) {
        usernameError.textContent = "Username too long!";
        showErrorState(username);
        return false;
    }

    if (!regex.username.test(value)) {
        usernameError.textContent = "Username can only contain letters, digits and underscore!";
        showErrorState(username);
        return false;
    }

    showSucessState(username);
    usernameError.textContent = "";
    return true;
}


function checkGender() {
    let value = gender.value;
    
    if (!value) {
        genderError.textContent = "Please select a gender!";
        showErrorState(gender);
        return false;
    }

    showSucessState(gender);
    genderError.textContent = "";
    return true;
}


function checkPhone() {
    let value = phone.value.trim();

    if (value === "") {
        phoneError.textContent = "Please enter your phone number!";
        showErrorState(phone);
        return false;
    }

    if (!regex.phone.test(value)) {
        phoneError.textContent = "Please enter a valid phone number!";
        showErrorState(phone);
        return false;
    }

    showSucessState(phone);
    phoneError.textContent = "";
    return true;
}


function checkDob() {
    if (!dob.value) {
        dobError.textContent = "Please enter your date of birth!"
        showErrorState(dob);
        return false;
    }

    const dobValue = new Date(dob.value);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    if (dobValue > currentDate) {
        dobError.textContent = "Please enter a valid date of birth!"
        showErrorState(dob);
        return false;
    }

    const minDate = new Date(currentDate);
    minDate.setFullYear(minDate.getFullYear() - 18)

    if (dobValue > minDate) {
        dobError.textContent = "You need to be atleast 18 years old to register!"
        showErrorState(dob);
        return false;
    }
    
    showSucessState(dob);
    dobError.textContent = "";
    return true;
}


function checkEmail() {
    let value = email.value.trim();

    if (value === '') {
        emailError.textContent = "Please enter your email address!"
        showErrorState(email);
        return false;
    }

    if (!regex.email.test(value)) {
        emailError.textContent = "Please enter a valid email address!";
        showErrorState(email);
        return false;
    }

    showSucessState(email);
    emailError.textContent = "";
    return true;
}


function checkPassword() {
    let pw = password.value;
    let confPw = confPassword.value;

    if (pw === '') {
        passwordError.textContent = "Please enter a password!";
        showErrorState(password);
        showErrorState(confPassword);
        return false;
    }

    if (pw.length < 8) {
        passwordError.textContent = "Password must be atleast 8 characters long!"
        showErrorState(password);
        showErrorState(confPassword);
        return false;
    }

    if (!regex.password.test(pw)) {
        passwordError.textContent = "Password must contain lowercase, uppercase, digit and special character!";
        showErrorState(password);
        showErrorState(confPassword);
        return false;
    }

    if (confPw === "") {
        passwordError.textContent = "Please confirm password!";
        showErrorState(password);
        showErrorState(confPassword);
        return false;
    }

    if (pw !== confPw) {
        passwordError.textContent = "Passwords do not match!";
        showErrorState(password);
        showErrorState(confPassword);
        return false;
    }

    showSucessState(password);
    showSucessState(confPassword);
    passwordError.textContent = "";
    return true;
}


function checkAccountType() {

    const selected = document.querySelector("input[name='accountType']:checked")

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
    let imgFile = image.files[0];

    if (!imgFile) {
        imageError.textContent = "Please Upload your Picture!"
        return false;
    }

    if (imgFile.size > maxImageSize) {
        imageError.textContent = "File too large! Max size is 2MB."
        return false;
    }

    if (!allowedImages.includes(imgFile.type)) {
        imageError.textContent = "You can only upload Image!"
        return false;
    }

    imageError.textContent = "";
    return true;
}


showPassword.addEventListener("click", () => {
    const pwType = password.type === "password";

    if (pwType) {
        showPassword.textContent = "Hide";
        password.type = "text";
        confPassword.type = "text";
    } else {
        showPassword.textContent = "Show";
        password.type = "password";
        confPassword.type = "password";
    }
})