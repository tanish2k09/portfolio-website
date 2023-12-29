export default class ContactVisibilityViewModel {
    #isVisible;
    #observers = [];

    constructor(init) {
        this.#isVisible = init;
    }

    get isVisible() {
        return this.#isVisible === true;
    }

    set isVisible(visibility) {
        this.#isVisible = visibility;
        this.#notify();
    }

    subscribe(observer) {
        this.#observers.push(observer);
        this.#notifyObserver(observer);
    }

    #notify() {
        this.#observers.forEach((observer) => observer(this.isVisible));
    }

    #notifyObserver(observer) {
        observer(this.isVisible);
    }

    unsubscribe(observer) {
        this.#observers = this.#observers.filter((obs) => obs !== observer);
    }
}
