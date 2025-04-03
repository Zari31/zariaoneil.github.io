document.getElementById("signup-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let childAge = document.getElementById("child-age").value;

    if (!name || !email || !childAge) {
        alert("Please fill out all fields.");
        event.preventDefault(); // Prevent form submission
    }
});
