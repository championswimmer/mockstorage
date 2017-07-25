export class MockStorage implements Storage {
  [key: string]: any;
  [index: number]: string;
  private store: any = {}

  get length (): number {
    return Object.keys(this.store).length
  }

  public clear (): void {
    for (const key in this.store) {
      if (this.store.hasOwnProperty(key)) {
        delete this.store[key]
      }
    }
  }

  public getItem (key: string): string | any {
    return this.store[key]
  }

  public key (index: number): string | any {
    return Object.keys(this.store)[index]
  }

  public removeItem (key: string): void {
    delete this.store[key]
  }

  public setItem (key: string, data: string): void {
    this.store[key] = data
  }

}
