// let mail;
let user = localStorage.getItem("currentUser");
if(user)
    location.replace("home.html");

function signup(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if(!email || !pass)
    {
        alert("Email or password can't be empty!");
        return;
    }

    if(localStorage.getItem(email))
    {
        alert("user already exists!");
        return;
    }

    // localStorage.setItem('email', email);
    // localStorage.setItem('pass', pass);
    localStorage.setItem(email, pass);
    localStorage.setItem("currentUser", email);

    // one way
    // document.getElementById("email").value = "";
    // document.getElementById("pass").value = "";

    // another way
    // let inputs = document.getElementsByTagName("input");
    // for(input of inputs){
    //     input.value = "";
    // }

    // yet another way
    window.location.reload();
}

function login(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (localStorage.getItem(email))
    {
        if (pass == localStorage.getItem(email))
        {
            localStorage.setItem("currentUser", email);
            location.replace("home.html");
        }
        else
            alert("Wrong password");
    }
    else {
        alert("No user found by that email!");
    }
}