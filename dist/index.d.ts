export declare class MockStorage implements Storage {
    [key: string]: any;
    [index: number]: string;
    private store;
    /**
     * Function to get number of keys in store
     * @returns {number} number of keys in the store
     */
    readonly length: number;
    /**
     * Function to clear the entire contents of the store
     */
    clear(): void;
    /**
     * Fetch an item from the store
     * @param {string} key
     * @returns {string | any} the data on that key
     */
    getItem(key: string): string | any;
    /**
     * Get a key by it's index in the store
     * (The order of keys are set by when they are first created)
     * @param {number} index
     * @returns {string | any} name of the key
     */
    key(index: number): string | any;
    /**
     * Delete an item from the store
     * @param {string} key
     */
    removeItem(key: string): void;
    /**
     * Add an item to the store
     * @param {string} key
     * @param {string} data (remember to stringify it, if it's not string)
     */
    setItem(key: string, data: string): void;
}
