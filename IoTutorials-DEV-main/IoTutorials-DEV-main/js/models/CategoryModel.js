class Category {

    #id = '';
    #name = '';
    #description = '';

    constructor(name, description) {
        this.id = generateId ();
        this.name = name;
        this.description = description;
    }

    get id() { return this.#id; }

    get name() { return this.#name; }

    get description() { return this.#description; }

    set id(value) { this.id = value; }

    set name(value) { this.name = value; }

    set description(value) { this.description = value; }

}

function generateId () {

    return new Date();

}