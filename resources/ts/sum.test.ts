import { sum } from "./sum";

describe("sum", () => {
    test("1 + 1 is 2", () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });
});
