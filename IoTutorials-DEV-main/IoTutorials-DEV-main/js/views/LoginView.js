import * as User from '../models/UserModel.js';

function init() {

    const hNavbar = document.querySelector('nav').offsetHeight;
    const body = document.querySelector('body');

    body.style.paddingTop = hNavbar + 'px';

}

init();

function LoginView() {

    window.onload = function () {
        document.querySelector("#form-login-user").addEventListener("submit", (event) => {
            event.preventDefault();
            if (User.login(document.querySelector("#inputEmail").value, document.querySelector("#inputPassword").value)) {

                User.getLoggedUser.type == 'user' ? window.location.href = "/html/home.html" : window.location.href = "/html/admin/";

            } else {
                let modalLogin = new bootstrap.Modal(document.getElementById("modal-error-login"), {});

                modalLogin.show();
            }
        });
    };


}

LoginView();