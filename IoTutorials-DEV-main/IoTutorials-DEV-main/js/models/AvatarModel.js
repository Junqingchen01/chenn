class Avatar {

    #id = '';
    #image = '';
    #minXp = 0;

    constructor(image, minXp) {
        this.id = generateId ();
        this.image = image;
        this.minXp = minXp;
    }

    get id() { return this.#id; }

    get image() { return this.#image; }

    get minXp() { return this.minXp; }

    set id(value) { this.#id = value; }

    set image(value) { this.#image = value; }

    set minXp(value) { this.#minXp = value;}

}

function generateId () {

    return new Date();

}