// Handle contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert(`Thank you, ${name}! We will contact you shortly.`);
      // Add form submission logic here
    } else {
      alert("Please fill all fields!");
    }
  });
