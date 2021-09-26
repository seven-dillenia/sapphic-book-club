export class Helper {
    public static delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Generate Fake Object Array
    public static generateFake(count: number): number[] {
        const indexes = [];
        for (let i = 0; i < count; i++) {
            indexes.push(i);
        }
        return indexes;
    }
}