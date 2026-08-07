var email = "arish@gmail.com";

function login() {

    let userEmail = document.getElementById("email").value;

    if (userEmail === email) {

        location.href = "dashboard.html";

    } else {

        alert("User not found! Enter correct email");

    }

}