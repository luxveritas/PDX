
var firstlast = document.getElementById("firstlast");
var dob = document.getElementById("age");
var phone = document.getElementById("phonenumber");
var submit = document.getElementById("submit");

var nameSpan = document.getElementById("nameError");
var ageSpan = document.getElementById("ageError");
var phoneSpan = document.getElementById("phoneError");


submit.addEventListener("click", function (event) {
    event.preventDefault();

    var reName = /[A-Z]\w+\s[A-Z]\w+/;
    var reDob = /\d{4}-\d{2}-\d{2}/;
    var rePhone = /\d{3}-\d{3}-\d{4}/;
    if (!reName.test(firstlast.value) && !reDob.test(dob.value) && !rePhone.test(phone.value)) {
        errorDiv = document.getElementById('errors');
        errorDiv.style.backgroundColor = 'red';
        nameSpan.innerHTML = "There are errors in this form."
    } else {
        nameSpan.innerHTML = 'Submitted. Thank you';
        errorDiv.style.backgroundColor = 'green';
    }
});


firstlast.addEventListener("blur", function (event) {
    var re = /[A-Z]\w+\s[A-Z]\w+/;
    if (!re.test(firstlast.value)) {
        event.target.style.background = 'yellow';
        nameSpan.innerHTML = "First and Last name required."
    } else {
        nameSpan.innerHTML = '';
        event.target.style.background = '';
    }
});

dob.addEventListener("blur", function (event) {
    var re = /\d{4}-\d{2}-\d{2}/;
    if (!re.test(dob.value)) {
        event.target.style.background = 'yellow';
        ageSpan.innerHTML = "Date must be in YYYY-MM-DD format."
    } else {
        ageSpan.innerHTML = '';
        event.target.style.background = '';
    }
});

phone.addEventListener("blur", function (event) {
    var re = /\d{3}-\d{3}-\d{4}/;
    if (!re.test(phone.value)) {
        event.target.style.background = 'yellow';
        phoneSpan.innerHTML = "Phone must be in 555-555-5555 format."
    } else {
        phoneSpan.innerHTML = '';
        event.target.style.background = '';
    }
});