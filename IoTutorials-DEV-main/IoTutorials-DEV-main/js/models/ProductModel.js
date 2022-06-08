class Product {

    #id = '';
    #name = '';
    #price = 0;
    #description = '';
    #image = '';

    constructor(name, price, description, image) {
        this.id = generateId();
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    get id() { return this.#id; }

    get name() { return this.#name; }

    get price() { return this.#price; }

    get description() { return this.#description; }

    get image() { return this.#image; }

    set id(value) { this.#id = value; }

    set name(value) { this.#name = value; }

    set price(value) { this.#price = value; }

    set description(value) { this.#description = value; }

    set image(value) { this.#image = value; }

    /* changePassword(actualPassword, newPassword) {

    } */

}

function generateId () {

    return new Date();

}