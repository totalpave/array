
import * as api from '../src/api';
import {ArraySort} from '../src/ArraySort';
import {ArrayUtils} from '../src/ArrayUtils';

describe('Public API', () => {
    it('ArraySort', () => {
        expect(api.ArraySort).toBe(ArraySort);
    });
    
    it('ArrayUtils', () => {
        expect(api.ArrayUtils).toBe(ArrayUtils);
    });
});
