function signOut(){
    localStorage.removeItem("currentUser");
    location.replace("index.html");
}