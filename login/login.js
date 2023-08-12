let login = document.getElementById("login-form");
login.addEventListener("submit", function(event) {
    event.preventDefault();

    let users = JSON.parse(localStorage.getItem("users"));
    console.log("users: ", users);

    for (let i = 0; i < users.length; i++) {
        if (users[i].email == login.email.value.trim()) {
            if (users[i].password == login.password.value.trim()) {
                alert("Login successfully!");
                window.location.href = "../index.html";
            } else {
                alert("Wrong password");
            }
        }
    }
    if (users[users.length - 1].email != login.email.value.trim()) {
        alert("Wrong email");
    }
});