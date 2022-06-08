class Review {

    #id = '';
    #video = '';
    #category = '';
    #price = '';
    #xp = '';
    #usersAvailable = [];

    constructor(video, category, price, xp) {
        this.id = generateId();
        this.video = video;
        this.category = category;
        this.price = price;
        this.xp = xp;
        this.usersAvailable = [];
    }

    get id() { return this.#id; }

    get video() { return this.#video; }

    get category() { return this.#category; }

    get price() { return this.#price; }

    get xp() { return this.#xp; }

    get usersAvailable() { return this.#usersAvailable; }

    set id(value) { this.id = value; }

    set video(value) { this.video = value; }

    set category(value) { this.category = value; }

    set price(value) { this.price = value; }

    set xp(value) { this.xp = value; }

    set usersAvailable(value) { this.usersAvailable = value; }


}

function generateId () {

    return new Date();

}