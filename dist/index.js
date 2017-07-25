"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MockStorage {
    constructor() {
        this.store = {};
    }
    get length() {
        return Object.keys(this.store).length;
    }
    clear() {
        for (const key in this.store) {
            if (this.store.hasOwnProperty(key)) {
                delete this.store[key];
            }
        }
    }
    getItem(key) {
        return this.store[key];
    }
    key(index) {
        return Object.keys(this.store)[index];
    }
    removeItem(key) {
        delete this.store[key];
    }
    setItem(key, data) {
        this.store[key] = data;
    }
}
exports.MockStorage = MockStorage;
//# sourceMappingURL=index.js.map