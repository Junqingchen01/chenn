import * as User from '../models/UserModel.js'

function navbarView() {

    let content = `<div class="container-fluid">
    <a class="navbar-brand" href="/index.html">
      <img src="/media/images/logo.png" alt="" width="100" class="d-inline-block align-text-top">
    </a>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-uppercase active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-uppercase" href="#">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SHOP</a>
        </li>
      </ul>`;

    content += `<form class="form-inline">
    <a class="nav-link" href="/html/register.html"><button class="btn bg-black text-light rounded-pill text-uppercase" type="button">Get Start</button></a>
  </form>`;

    content += `</div>`

    document.querySelector("nav").innerHTML = content;

}

navbarView();