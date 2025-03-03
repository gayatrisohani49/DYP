// Event listener for form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values of the fields
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

    // Split the full name into first, middle, and last name
    let nameParts = fullname.trim().split(" ");
    if (nameParts.length < 2) {
        alert("Please enter a valid full name with at least a first name and a last name.");
        return;
    }

    // Aadhar number validation
    if (!/^\d{12}$/.test(aadhar)) {
        alert("Aadhar number should be exactly 12 digits.");
        return;
    }

    // PAN card number validation
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
        alert("Invalid PAN card number format.");
        return;
    }

    // Mobile number validation
    if (!/^\d{10}$/.test(mobile)) {
        alert("Mobile number should be exactly 10 digits.");
        return;
    }

    // Date of Birth validation (Date must not be in the future)
    let dobDate = new Date(dob);
    let today = new Date();
    if (dobDate > today) {
        alert("Date of birth cannot be in the future.");
        return;
    }

    // Marks validation (Each mark must be between 0 and 100)
    let invalidMarks = subjects.some(mark => mark < 0 || mark > 100);
    if (invalidMarks) {
        alert("Please enter marks between 0 and 100 for all subjects.");
        return;
    }

    // Calculate the percentage for the best of five subjects
    subjects.sort((a, b) => b - a); // Sort marks in descending order
    let bestOfFive = subjects.slice(0, 5); // Take the best 5 marks
    let totalMarks = bestOfFive.reduce((sum, mark) => sum + mark, 0);
    let percentage = (totalMarks / 500) * 100;

    // Display the calculated percentage
    document.getElementById("percentage").value = percentage.toFixed(2) + "%";

    alert("Form submitted successfully!");
});
