export declare class MockStorage implements Storage {
    [key: string]: any;
    [index: number]: string;
    private store;
    readonly length: number;
    clear(): void;
    getItem(key: string): string | any;
    key(index: number): string | any;
    removeItem(key: string): void;
    setItem(key: string, data: string): void;
}
