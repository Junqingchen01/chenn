class Tutorial {

    #id = '';
    #video = '';
    #description = '';
    #questions = [];
    #category = '';

    constructor(video, questions, category) {
        this.id = generateId();
        this.video = video;
        this.questions = questions;
        this.category = category;
    }

    get id() { return this.#id; }

    get video() { return this.#video; }

    get description() { return this.#description}

    get questions() { return this.#questions; }

    get category() { return this.#category; }

    set id(value) { this.id = value; }

    set video(value) { this.video = value; }

    set description(value) { this.description = value; }

    set questions(value) { this.questions = value; }

    set category(value) { this.category = value; }

}

function generateId () {

    return new Date();

}