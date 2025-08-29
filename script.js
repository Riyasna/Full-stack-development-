// Button interactivity
document.getElementById("learnBtn").addEventListener("click", function () {
    alert("Full Stack Development combines frontend, backend, and database skills!");
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop form refresh

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMsg = document.getElementById("formMsg");

    if (name === "" || email === "" || message === "") {
        formMsg.textContent = "⚠️ Please fill in all fields.";
        formMsg.style.color = "red";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMsg.textContent = "⚠️ Please enter a valid email address.";
        formMsg.style.color = "red";
    } else {
        formMsg.textContent = "✅ Thank you! Your message has been sent.";
        formMsg.style.color = "green";

        // Reset form
        document.getElementById("contactForm").reset();
    }
});
