export class TypeUtil {
    public static booleanTest = /^true/;
    public static stringToBoolean (value: string): boolean {
        return this.booleanTest.test(value);
    }
}