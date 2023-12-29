export default class DarkModeViewModel {
    #isDark;
    #observers = [];

    constructor() {
        this.#isDark =
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }

    get isDark() {
        return this.#isDark === true;
    }

    set isDark(visibility) {
        this.#isDark = visibility;
        this.#notify();
    }

    toggle() {
        localStorage.setItem("theme", this.isDark ? "light" : "dark");
        this.isDark = !this.isDark;
    }

    subscribe(observer) {
        this.#observers.push(observer);
        this.#notifyObserver(observer);
    }

    #notify() {
        this.#observers.forEach((observer) => observer(this.isDark));
    }

    #notifyObserver(observer) {
        observer(this.isDark);
    }

    unsubscribe(observer) {
        this.#observers = this.#observers.filter((obs) => obs !== observer);
    }
}
