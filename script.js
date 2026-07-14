document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let department = document.getElementById("department").value.trim();
    let course = document.getElementById("course").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value.trim();

    let gender = "";
    let genders = document.getElementsByName("gender");

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender = genders[i].value;
        }
    }

    let skills = [];
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function(box) {
        if (box.checked) {
            skills.push(box.value);
        }
    });

    if (
        name === "" ||
        email === "" ||
        mobile === "" ||
        department === "" ||
        course === "" ||
        dob === "" ||
        address === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Enter a valid email address.");
        return;
    }

    let mobilePattern = /^[0-9]{10}$/;

    if (!mobile.match(mobilePattern)) {
        alert("Mobile number must contain exactly 10 digits.");
        return;
    }

    if (gender === "") {
        alert("Please select gender.");
        return;
    }

    if (skills.length === 0) {
        alert("Select at least one skill.");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = mobile;
    row.insertCell(3).innerHTML = gender;
    row.insertCell(4).innerHTML = department;
    row.insertCell(5).innerHTML = course;
    row.insertCell(6).innerHTML = skills.join(", ");
    row.insertCell(7).innerHTML = dob;
    row.insertCell(8).innerHTML = address;

    alert("Student Registered Successfully!");

    document.getElementById("registrationForm").reset();
});