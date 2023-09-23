if (localStorage.getItem("currentUser")) {
    document.querySelector("#loggedIn").innerHTML += `
    <div class="navbar">
    <div class="logo">
        <a href="../index.html">
            <img src="../asset/Untitled-1.svg" alt="">
        </a>
    </div>
    <div class="searchbar">
        <div class="input-group mb-3">
            <input type="text" class="form-control">
            <div class="input-group-append"><button class="btn  search-btn"><i class="fas fa-search"></i></button></div>
        </div>
    </div>

    <div class="page">
        <a href="">Movies</a>
        <a href="">Categories</a>
        <div class="dropdown">
            <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
            >
            <i class="user-icon fa-solid fa-user"></i>
            </button>
            <ul class="dropdown-menu" style="left: -320%" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">My Profile</a></li>

                <li>
                    <a class="dropdown-item" href="javascript:;" onclick="logout()">Log Out</a>
                </li>
            </ul>
            </div>
    </div>
    </div>
    `
} else {
    document.querySelector("#notLoggedIn").innerHTML += `
    <div class="navbar">
    <div class="logo">
        <a href="../index.html">
            <img src="../asset/Untitled-1.svg" alt="">
        </a>
    </div>
    <div class="searchbar">
        <div class="input-group mb-3">
            <input type="text" class="form-control">
            <div class="input-group-append"><button class="btn  search-btn"><i class="fas fa-search"></i></button></div>
        </div>
    </div>

    <div class="page">
        <a href="../login/login.html">Log in</a>
        <a href="">Movies</a>
        <a href="">Categories</a>
    </div>
    </div>
    `
}