import { describe, it, expect } from 'vitest'
import sum from "../src";

describe('test sum', () => {
    it('should test', () => {
        const result = sum(1, 3);
        expect(result).toEqual(4);
    })
});