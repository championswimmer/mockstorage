export class MockStorage implements Storage {
  [key: string]: any;
  [index: number]: string;
  private store: any = {}

  /**
   * Function to get number of keys in store
   * @returns {number} number of keys in the store
   */
  get length (): number {
    return Object.keys(this.store).length
  }

  /**
   * Function to clear the entire contents of the store
   */
  public clear (): void {
    for (const key in this.store) {
      if (this.store.hasOwnProperty(key)) {
        delete this.store[key]
      }
    }
  }

  /**
   * Fetch an item from the store
   * @param {string} key
   * @returns {string | any} the data on that key
   */
  public getItem (key: string): string | any {
    return this.store[key]
  }

  /**
   * Get a key by it's index in the store
   * (The order of keys are set by when they are first created)
   * @param {number} index
   * @returns {string | any} name of the key
   */
  public key (index: number): string | any {
    return Object.keys(this.store)[index]
  }

  /**
   * Delete an item from the store
   * @param {string} key
   */
  public removeItem (key: string): void {
    delete this.store[key]
  }

  /**
   * Add an item to the store
   * @param {string} key
   * @param {string} data (remember to stringify it, if it's not string)
   */
  public setItem (key: string, data: string): void {
    this.store[key] = data
  }

}
