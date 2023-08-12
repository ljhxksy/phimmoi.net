let register = document.getElementById("register-form");
register.addEventListener("submit", function(event) {
    event.preventDefault(); //ngan su reload mac dinh cua trinh duyet

    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    // in ra email va pass ng dung nhap duoc
    const data = {
        email: register.email.value.trim(),
        password: register.password.value.trim(),
    }
    console.log(data);

    if (data.email.length == 0 && data.password.length == 0) {
        alert("Please input your email and password.");
    } else if (!data.email.match("@")) {
        alert("Please enter a valid email");
    } else if (data.password.length < 8){
        alert("Password must be at least 8 characters.");
    } else if (!data.password.match(lowerCaseLetter)) {
        alert("Password must contain a lowercase letter");
    } else if (!data.password.match(upperCaseLetter)) {
        alert("Password must contain an uppercase letter");
    } else if (!data.password.match(numbers)) {
        alert("Password must contain a number");
    } else {
        //console.log("xu li voi local storage");
        if (localStorage.users) {
            let users = JSON.parse(localStorage.users);

            let count = 0;
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == data.email) {
                    alert("Email already exists!");
                    count++;
                }
            }
            if (count == 0) { 
                users.push(data); 
                location.replace("../login/login.html")
            }

            localStorage.setItem("users", JSON.stringify(users));
        } else {
            localStorage.setItem("users", JSON.stringify([data]));
        }

        location.replace("../login/login.html")
    }
});