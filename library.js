class book {
    #title;
    #author;
    #availability;
}
constructor(title; author) {
    this.#title=title;
    this.#author=author;
    this.#availability=true;

    getTitle() {
        return this.#title;
    }
    getAuthor() {
        return this.#author;
    }
    getAvailability() {
        return this.#availability;
    }
    CheckoutBook() {
        if (this.#available) {
            this.#available = false;
        } else {
            console.log ("Sorry "${this.#tytle" is not available."});
        }
    }
}