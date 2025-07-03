
class IntPtr {
    #value;

    constructor(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Invalid IntPtr value');
        }
        this.#value = value;
    }

    getValue() {
        return this.#value;
    }

    setValue(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Invalid IntPtr value');
        }
        this.#value = value;
    }
}