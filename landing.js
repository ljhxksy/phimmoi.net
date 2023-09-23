if (localStorage.getItem("currentUser")) {
    document.querySelector("#loggedIn-nav").innerHTML += `
    <h1 class="title">Welcome back!</h1>
    <p>Here are some movies we recommend for you!</p>
    `
} else {
    document.querySelector("#notLoggedIn-nav").innerHTML += `
    <h1 class="title">Unlimited Movie, TVs Shows, & More.</h1>
    <a href="signup/register.html">Sign up now!</a>
    `
}