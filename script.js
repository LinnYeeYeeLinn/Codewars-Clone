const scrollUp = document.querySelector(".scrollUp");
const login = document.querySelector("#login");
const loginContainer = document.querySelector(".login-container");
const closeLoginForm = document.querySelector("#closeLoginForm");

window.onscroll = () => {
    if(window.scrollY > 80){
        scrollUp.style.opacity = "1";
    }
    else{
        scrollUp.style.opacity = "0";
    }
}

login.addEventListener("click", () => {
    loginContainer.classList.remove("d-none");
})

closeLoginForm.addEventListener("click", () => {
    loginContainer.classList.add("d-none");
})

AOS.init();