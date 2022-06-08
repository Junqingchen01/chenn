import * as User from './models/UserModel.js';

function init() {
    User.init();

    if (!localStorage.users || JSON.parse(localStorage.users).length == 0) {
        User.add('Admin', 'admin@example.com', 'admin1234', 'admin');
        User.add('User', 'user@example.com', 'user1234' );
    }

    console.log(JSON.parse(localStorage.users));

}

init();