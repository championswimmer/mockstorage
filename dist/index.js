"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MockStorage {
    constructor() {
        this.store = {};
    }
    /**
     * Function to get number of keys in store
     * @returns {number} number of keys in the store
     */
    get length() {
        return Object.keys(this.store).length;
    }
    /**
     * Function to clear the entire contents of the store
     */
    clear() {
        for (const key in this.store) {
            if (this.store.hasOwnProperty(key)) {
                delete this.store[key];
            }
        }
    }
    /**
     * Fetch an item from the store
     * @param {string} key
     * @returns {string | any} the data on that key
     */
    getItem(key) {
        return this.store[key];
    }
    /**
     * Get a key by it's index in the store
     * (The order of keys are set by when they are first created)
     * @param {number} index
     * @returns {string | any} name of the key
     */
    key(index) {
        return Object.keys(this.store)[index];
    }
    /**
     * Delete an item from the store
     * @param {string} key
     */
    removeItem(key) {
        delete this.store[key];
    }
    /**
     * Add an item to the store
     * @param {string} key
     * @param {string} data (remember to stringify it, if it's not string)
     */
    setItem(key, data) {
        this.store[key] = data;
    }
}
exports.MockStorage = MockStorage;
//# sourceMappingURL=index.js.map