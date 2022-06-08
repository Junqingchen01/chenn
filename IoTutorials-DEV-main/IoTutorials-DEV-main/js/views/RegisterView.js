import * as User from '../models/UserModel.js'

function init() {

    const hNavbar = document.querySelector('nav').offsetHeight;
    const body = document.querySelector('body');

    body.style.paddingTop = hNavbar + 'px';

}

init();

function RegisterView() {

    window.onload = function () {
        document.querySelector("#form-register-user").addEventListener("submit", (event) => {
            event.preventDefault();
            try {
                User.add(
                    document.querySelector("#inputName").value,
                    document.querySelector("#inputEmail").value,
                    document.querySelector("#inputPassword").value,
                );

                let modalRegister = new bootstrap.Modal(document.getElementById("modal-success-register"), {});

                modalRegister.show();
    
                setTimeout(() => {
                    location.href = "/html/login.html";
                }, 1000);
            } catch (error) {
                alert(error.message);
            }
        });
    };

    
}

RegisterView();

