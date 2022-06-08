// Getters não funcionam
let users;
let loggedUser;

init();

export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
  loggedUser = localStorage.loggedUser ? localStorage.loggedUser : null;
  for (let index = 0; index < users.length; index++) {
    let user = users[0].email
    console.log(user);
  }

}

export function add(name, email, password, type = 'user') {

  console.log('ADD');


  // Ver razão de de `some` não funcionar com variáveis privadas
  if (users.find((user) => user.email == email)) {
    throw Error(`User with email "${email}" already exists!`);
  } else {

    let newuser = new User(name, email, password, type)

    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));
  }

}

export function getLoggedUser() {
  return users.find((user) => user.id == loggedUser)
}

export function login(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  for (let index = 0; index < users.length; index++) {
    console.log(users[index].email);
  }

  if (user) {
    localStorage.setItem("loggedUser", user.id);
    return true;
  } else {
    return false;
  }
}

class User {

  #id = '';
  #name = '';
  #email = '';
  #password = '';
  #points = 0;
  #xp = 0;
  #avatar = '';
  #type = '';
  #videosSeen = [];
  // last video

  constructor(name, email, password, type = 'user') {
    this.id = generateId();
    this.name = name;
    this.email = email;
    this.password = password;
    this.points = 0;
    this.xp = 0;
    this.avatar = '';
    this.type = type;
    this.videosSeen = [];
  }

  get id() { return this.#id; }

  get name() { return this.#name; }

  get email() { return this.#email; }

  get password() { return this.#password; }

  get points() { return this.#points; }

  get xp() { return this.#xp; }

  get avatar() { return this.#avatar; }

  get type() { return this.#type; }

  get videosSeen() { return this.#videosSeen; }

  set id(value) { this.#id = value; }

  set name(value) { this.#name = value; }

  set email(value) { this.#email = value; }

  set password(value) { this.#password = value; }

  set points(value) { this.#points = value; }

  set xp(value) { this.#xp = value; }

  set avatar(value) { this.#avatar = value; }

  set type(value) { this.#type = value; }

  set videosSeen(value) { this.#videosSeen = value; }

}

function generateId() {
  let maxId = users.length > 0 ? Math.max(...users.map((user) => user.id)) : 0;
  return maxId + 1;
}