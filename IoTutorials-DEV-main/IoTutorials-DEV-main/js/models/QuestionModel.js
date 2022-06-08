class Question {

    #id = '';
    #options = [];
    #correct = '';
    #points = 0;
    #xp = 0;

    constructor(options, correct, points, xp) {

        this.options = options
        this.correct = correct;
        this.points = points;
        this.xp = xp;

    }

    get options() { return this.#options; }

    get correct() { return this.#correct; }

    get points() { return this.#points; }

    get xp() { return this.#xp; }

    set options(value) { this.#options = value; }

    set correct(value) { this.#correct = value; }

    set points(value) { this.#points = value; }

    set xp(value) { this.#xp = value; }

    /* validate() {

    } */

}

function generateId() {

    return new Date();

}