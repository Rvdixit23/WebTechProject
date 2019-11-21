function loggedIn() {
    cookie = document.cookie.split(";");
    cookie = cookie[0].split('=')
    if (cookie[1]) {
        document.querySelector("#navbar-signup").removeChild(document.querySelector("#navbar-signup > a"));
        console.log("Removed Signup Button")
        document.querySelector("#navbar-login").removeChild(document.querySelector("#navbar-login > a"));
        console.log("Removed Login Button")

        logoutButton = document.createElement("a")
        logoutButton.setAttribute("class", "nav-link");
        logoutButton.setAttribute("href", "/index.html");
        logoutButton.innerHTML = "Logout";
        logoutButton.addEventListener("click", function() {
            document.cookie = "name=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        })
        document.querySelector("#navbar-logout").appendChild(logoutButton);
        console.log("Added Logout Button")
    } else {
        account = document.querySelector("#navbar-account")
        account.removeChild(document.querySelector("#navbar-account > a"));
        account.removeChild(document.querySelector("#navbar-account > div"));
        console.log("Removed Account Menu")
    }
}