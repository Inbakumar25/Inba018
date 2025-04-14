document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const languages = document.getElementById('languages').value;
    const degree = document.getElementById('degree').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Get the message div
    const messageDiv = document.getElementById('message');

    // Check if all fields are filled
    if (!languages || !degree || !username || !email || !password || !phone || !address) {
        messageDiv.innerHTML = "Please fill out all fields.";
        messageDiv.className = "alert"; // Error alert
        messageDiv.style.display = "block"; // Show the message
    } else {
        // Redirect to a new page with form details
        const formDetailsPage = `
            <!DOCTYPE html>
            <html lang='en'>
            <head><title>Form Details</title></head>
            <body>
                <h1>Submitted Form Details</h1>
                <p><strong>Languages:</strong> ${languages}</p>
                <p><strong>Degree:</strong> ${degree}</p>
                <p><strong>Username:</strong> ${username}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Password:</strong> ${password}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
            </body>
            </html>`;
        
        // Open the new page with form details
        const newWindow = window.open();
        newWindow.document.write(formDetailsPage);

        // Optionally, clear the form fields after successful submission
        document.getElementById('registrationForm').reset();
        
        messageDiv.innerHTML = "Registration successful! Redirecting...";
        messageDiv.className = "success"; // Success alert
        messageDiv.style.display = "block"; // Show the message
    }
};
