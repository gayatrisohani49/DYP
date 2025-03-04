document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();


    let fullname = document.getElementById("fullname").value;
    let aadhar = document.getElementById("aadhar").value;
    let pan = document.getElementById("pan").value;
    let mobile = document.getElementById("mobile").value;
    let dob = document.getElementById("dob").value;
    let subjects = [
        parseInt(document.getElementById("subject1").value),
        parseInt(document.getElementById("subject2").value),
        parseInt(document.getElementById("subject3").value),
        parseInt(document.getElementById("subject4").value),
        parseInt(document.getElementById("subject5").value),
        parseInt(document.getElementById("subject6").value)
    ];

  
    let nameParts = fullname.trim().split(" ");
    if (nameParts.length < 2) {
        alert("Please enter a valid full name with at least a first name and a last name.");
        return;
    }

    
    if (!/^\d{12}$/.test(aadhar)) {
        alert("Aadhar number should be exactly 12 digits.");
        return;
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
        alert("Invalid PAN card number format.");
        return;
    }

  
    if (!/^\d{10}$/.test(mobile)) {
        alert("Mobile number should be exactly 10 digits.");
        return;
    }

   
    let dobDate = new Date(dob);
    let today = new Date();
    if (dobDate > today) {
        alert("Date of birth cannot be in the future.");
        return;
    }

    let invalidMarks = subjects.some(mark => mark < 0 || mark > 100);
    if (invalidMarks) {
        alert("Please enter marks between 0 and 100 for all subjects.");
        return;
    }

    subjects.sort((a, b) => b - a); 
    let bestOfFive = subjects.slice(0, 5); 
    let totalMarks = bestOfFive.reduce((sum, mark) => sum + mark, 0);
    let percentage = (totalMarks / 500) * 100;

    document.getElementById("percentage").value = percentage.toFixed(2) + "%";

    alert("Form submitted successfully!");
});