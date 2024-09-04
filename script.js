function validate() {
    const name = document.forms["fl"]["name"].value;
    const password = document.forms["fl"]["password"].value;
    const email = document.forms["fl"]["email"].value;
    const phone = document.forms["fl"]["phone"].value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const languages = document.querySelectorAll('input[name="lang"]:checked');

    if (name === "") {
        alert("Please enter your name");
        return false;
    }
    if (password === "") {
        alert("Please enter a password");
        return false;
    }
    if (email === "") {
        alert("Please enter an email");
        return false;
    }
    if (phone === "" || isNaN(phone) || phone.length < 10) {
        alert("Please enter a valid phone number");
        return false;
    }
    if (!gender) {
        alert("Please select your gender");
        return false;
    }
    if (languages.length === 0) {
        alert("Please select at least one language");
        return false;
    }

    alert("Form submitted successfully");
    return true;
}


