if (localStorage.getItem("currentUser")) {
    document.querySelector("#loggedIn").innerHTML += `
    `
} else {
    document.querySelector("#notLoggedIn").innerHTML += `
    <div class="bg-image-container">
        <img src="https://d135u4jtzauizi.cloudfront.net/_hero/104983/Zone-Of-Interest_Cannes-Image.webp"
      alt="BG hero image" class="bg-image" />
    </div>

    <div class="landing">
        <h1 class="title"> Unlimited Movie, TVs Shows, & More. </h1>
        <a href="signup/register.html">Sign up now!</a>
    </div>
    `
}