function modalOpen(e) {
    var ID = e.target.id;
    let thankYou = document.querySelector(".modal.thankyou");
    let thankYouClose = document.querySelector(".thankyou-close-button");

    thankYouClose.addEventListener("click", closeThankYou);


    switch (ID) {
        case "general":
            modalOverlay.classList.toggle("closed");
            modal_general.classList.toggle("closed");

            GeneralForm.addEventListener("submit", submitForm = function(e) {
                e.preventDefault();
                if (validateForm()) {
                    thankYou.classList.toggle("closed");
                    modal_general.classList.toggle("closed");
                    GeneralForm.submit();
                }
            });

            break;
        case "covid":
            modalOverlay.classList.toggle("closed");
            modal_covid.classList.toggle("closed");

            CovidForm.addEventListener("submit", submitForm = function(e) {
                e.preventDefault();
                if (validateForm()) {
                    thankYou.classList.toggle("closed");
                    modal_covid.classList.toggle("closed");
                    CovidForm.submit();
                }
            });

            break;
        case "heartscan":
            modalOverlay.classList.toggle("closed");
            modal_heartscan.classList.toggle("closed");

            HeartScanForm.addEventListener("submit", submitForm = function(e) {
                e.preventDefault();
                if (validateForm()) {
                    thankYou.classList.toggle("closed");
                    modal_heartscan.classList.toggle("closed");
                    HeartScanForm.submit();
                }
            });

            break;
        default:
            break;
    }
};

function modalClose(e) {
    classes = e.target.classList;

    if (classes.contains("general")) {
        modalOverlay.classList.toggle("closed");
        modal_general.classList.toggle("closed");
    } else if (classes.contains("covid")) {
        modalOverlay.classList.toggle("closed");
        modal_covid.classList.toggle("closed");
    } else if (classes.contains("heartscan")) {
        modalOverlay.classList.toggle("closed");
        modal_heartscan.classList.toggle("closed");
    } else {
        console.log("Error");
    }
};

function closeThankYou() {
    window.location.href = "https://www.comhs.org";
}

var modal_general = document.querySelector(".modal.general");
var modal_covid = document.querySelector(".modal.covid");
var modal_heartscan = document.querySelector(".modal.heartscan");

var modalClose_general = document.querySelector(".close.general");
var modalClose_covid = document.querySelector(".close.covid");
var modalClose_heartscan = document.querySelector(".close.heartscan");

var modalOverlay = document.querySelector(".modal-overlay");

var CTA_general = document.querySelector("#general");
var CTA_covid = document.querySelector("#covid");
var CTA_heartscan = document.querySelector("#heartscan");
var CTA_womens = document.querySelector("#womens");

// Event Listeners
modalClose_general.addEventListener("click", modalClose);
modalClose_covid.addEventListener("click", modalClose);
modalClose_heartscan.addEventListener("click", modalClose);

CTA_general.addEventListener("click", modalOpen);
CTA_covid.addEventListener("click", modalOpen);
CTA_heartscan.addEventListener("click", modalOpen);
CTA_womens.addEventListener("click", womensHealthPageRedirect);

function womensHealthPageRedirect() {
    window.location.href = "https://www.comhs.org/womensheart/";
    // window.location.href = "./womens-all-in-one.html ";
}

let GeneralForm = document.getElementById("CV_Cardiology_Destination_FY22_General_WebForm");
let CovidForm = document.getElementById("CV_Cardiology_Destination_FY22_COVID_WebForm");
let HeartScanForm = document.getElementById("CV_Cardiology_Destination_FY22_HeartScan_WebForm");

let FirstName_General = GeneralForm.querySelector('[name="Patient.FirstName"]');
let LastName_General = GeneralForm.querySelector('[name="Patient.LastName"]');
let Birthdate_General = GeneralForm.querySelector('[name="Patient.HC4__BirthdateEnc__c"]');
let Email_General = GeneralForm.querySelector('[name="Patient.Email"]');
let Phone_General = GeneralForm.querySelector('[name="Patient.Phone"]');
let ZipCode_General = GeneralForm.querySelector('[name="Patient.PostalCode"]');

let FirstName_Covid = CovidForm.querySelector('[name="Patient.FirstName"]');
let LastName_Covid = CovidForm.querySelector('[name="Patient.LastName"]');
let Birthdate_Covid = CovidForm.querySelector('[name="Patient.HC4__BirthdateEnc__c"]');
let Email_Covid = CovidForm.querySelector('[name="Patient.Email"]');
let Phone_Covid = CovidForm.querySelector('[name="Patient.Phone"]');
let ZipCode_Covid = CovidForm.querySelector('[name="Patient.PostalCode"]');

let FirstName_HeartScan = HeartScanForm.querySelector('[name="Patient.FirstName"]');
let LastName_HeartScan = HeartScanForm.querySelector('[name="Patient.LastName"]');
let Birthdate_HeartScan = HeartScanForm.querySelector('[name="Patient.HC4__BirthdateEnc__c"]');
let Email_HeartScan = HeartScanForm.querySelector('[name="Patient.Email"]');
let Phone_HeartScan = HeartScanForm.querySelector('[name="Patient.Phone"]');
let ZipCode_HeartScan = HeartScanForm.querySelector('[name="Patient.PostalCode"]');

function validateFirstName() {
    var isValid = true;
    getFields();

    if (FirstName.value == "") {
        FirstName.style.border = "1px solid red ";
        isValid = false;
        FirstName.setCustomValidity("First Name must not be blank.");
    } else {
        FirstName.style.border = "1px solid #ced4da ";
        FirstName.setCustomValidity("");
    }

    return isValid;
}

function validateLastName() {
    var isValid = true;
    getFields();

    if (LastName.value == "") {
        LastName.style.border = "1px solid red ";
        isValid = false;
        LastName.setCustomValidity("Last Name must not be blank.");
    } else {
        LastName.style.border = "1px solid #ced4da ";
        LastName.setCustomValidity("");
    }

    return isValid;
}

function validateBirthdate() {
    var isValid = true;
    getFields();

    // birthday regex in MM/DD/YYYY format between 01/01/1920 and 01/01/2019
    var birthdate_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19[2-9]\d|20[0-1]\d)$/;
    if (birthdate_regex.test(Birthdate.value)) {
        Birthdate.style.border = "1px solid #ced4da ";
        Birthdate.setCustomValidity("");
    } else {
        Birthdate.style.border = "1px solid red ";
        isValid = false;
        Birthdate.setCustomValidity("Birthdate must be in the format MM/DD/YYYY");
    }

    return isValid;
}

function validateEmail() {
    var isValid = true;
    getFields();

    var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email_regex.test(Email.value)) {
        Email.style.border = "1px solid #ced4da ";
        Email.setCustomValidity("");
    } else {
        Email.style.border = "1px solid red ";
        isValid = false;
        Email.setCustomValidity("Email must be a valid email address.\nex: email@example.com");
    }

    return isValid;
}

function validatePhone() {
    var isValid = true;
    getFields();

    var phone_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone_regex.test(Phone.value)) {
        Phone.style.border = "1px solid #ced4da ";
        Phone.setCustomValidity("");
    } else {
        Phone.style.border = "1px solid red ";
        isValid = false;
        Phone.setCustomValidity("Phone Number must be 10 digits long.\nex: (219) 555-1234");
    }

    return isValid;
}

function validateZipCode() {
    var isValid = true;
    getFields();

    var zipcode_regex = /^[0-9]{5}$/;
    if (zipcode_regex.test(ZipCode.value)) {
        ZipCode.style.border = "1px solid #ced4da ";
        ZipCode.setCustomValidity("");
    } else {
        ZipCode.style.border = "1px solid red ";
        isValid = false;
        ZipCode.setCustomValidity("Zip Code must be 5 digits long.\nex: 12345");
    }

    return isValid;
}

function getFields() {
    if (!document.querySelector(".modal.general").classList.contains("closed")) {
        FirstName = FirstName_General;
        LastName = LastName_General;
        Birthdate = Birthdate_General;
        Email = Email_General;
        Phone = Phone_General;
        ZipCode = ZipCode_General;
    } else if (!document.querySelector(".modal.covid").classList.contains("closed")) {
        FirstName = FirstName_Covid;
        LastName = LastName_Covid;
        Birthdate = Birthdate_Covid;
        Email = Email_Covid;
        Phone = Phone_Covid;
        ZipCode = ZipCode_Covid;
    } else if (!document.querySelector(".modal.heartscan").classList.contains("closed")) {
        FirstName = FirstName_HeartScan;
        LastName = LastName_HeartScan;
        Birthdate = Birthdate_HeartScan;
        Email = Email_HeartScan;
        Phone = Phone_HeartScan;
        ZipCode = ZipCode_HeartScan;
    }
}

function validateForm() {
    var valid = true;
    getFields();

    if (!validateFirstName()) {
        valid = false;
    } else if (!validateLastName()) {
        valid = false;
    } else if (!validateBirthdate()) {
        valid = false;
    } else if (!validateEmail()) {
        valid = false;
    } else if (!validatePhone()) {
        valid = false;
    } else if (!validateZipCode()) {
        valid = false;
    }

    return valid;
}

FirstName_General.addEventListener("blur", validateFirstName);
LastName_General.addEventListener("blur", validateLastName);
Birthdate_General.addEventListener("blur", validateBirthdate);
Email_General.addEventListener("blur", validateEmail);
Phone_General.addEventListener("blur", validatePhone);
ZipCode_General.addEventListener("blur", validateZipCode);

FirstName_Covid.addEventListener("blur", validateFirstName);
LastName_Covid.addEventListener("blur", validateLastName);
Birthdate_Covid.addEventListener("blur", validateBirthdate);
Email_Covid.addEventListener("blur", validateEmail);
Phone_Covid.addEventListener("blur", validatePhone);
ZipCode_Covid.addEventListener("blur", validateZipCode);

FirstName_HeartScan.addEventListener("blur", validateFirstName);
LastName_HeartScan.addEventListener("blur", validateLastName);
Birthdate_HeartScan.addEventListener("blur", validateBirthdate);
Email_HeartScan.addEventListener("blur", validateEmail);
Phone_HeartScan.addEventListener("blur", validatePhone);
ZipCode_HeartScan.addEventListener("blur", validateZipCode);

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key
    if (!isNumericInput(event) && !isModifierKey(event)) {
        event.preventDefault();
    }
};

// Formatting Phone Number
const formatToPhone = (event) => {
    if (isModifierKey(event)) {
        return;
    }

    const target = event.target;
    const input = event.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
    const area = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length >= 6) {
        target.value = `(${area}) ${middle}-${last}`;
    } else if (input.length >= 3) {
        target.value = `(${area}) ${middle}`;
    } else if (input.length > 0) {
        target.value = `(${area}`;
    }
};

// Formatting Birthdate
const formatToDate = (event) => {
    if (isModifierKey(event)) {
        return;
    }

    const target = event.target;
    const input = event.target.value.replace(/\D/g, '').substring(0, 8); // First eight digits of input only
    const month = input.substring(0, 2);
    const day = input.substring(2, 4);
    const year = input.substring(4, 8);

    if (input.length > 3) {
        target.value = `${month}/${day}/${year}`;
    } else if (input.length > 1) {
        target.value = `${month}/${day}`;
    } else if (input.length >= 0) {
        target.value = `${month}`;
    }
};

Phone_General.addEventListener('keydown', enforceFormat);
Phone_General.addEventListener('keyup', formatToPhone);
Birthdate_General.addEventListener('keydown', enforceFormat);
Birthdate_General.addEventListener('keyup', formatToDate);

Phone_Covid.addEventListener('keydown', enforceFormat);
Phone_Covid.addEventListener('keyup', formatToPhone);
Birthdate_Covid.addEventListener('keydown', enforceFormat);
Birthdate_Covid.addEventListener('keyup', formatToDate);

Phone_HeartScan.addEventListener('keydown', enforceFormat);
Phone_HeartScan.addEventListener('keyup', formatToPhone);
Birthdate_HeartScan.addEventListener('keydown', enforceFormat);
Birthdate_HeartScan.addEventListener('keyup', formatToDate);