
import {ArraySort} from '../src/ArraySort';
import { SortOrder } from '../src/api';

describe('ArraySort', () => {
    let array: number[] = [
        5,
        1,
        6,
        3,
        10,
        20,
        2
    ];
    let sorter: ArraySort<number> = new ArraySort<number>();

    it('can sort with no functions', () => {
        let expectation: string = '[5,1,6,3,10,20,2]';
        let result: number[] = sorter.sort(array, []);
        expect(JSON.stringify(result)).toBe(expectation);
    });

    it('can sort with 1 sort function', () => {
        let expectation: string = '[1,2,3,5,6,10,20]';
        let result: number[] = sorter.sort(array, [
            (a: number, b: number): number => {
                return a - b;
            }
        ]);
        expect(JSON.stringify(result)).toBe(expectation);
    });

    it('can sort with 2 sort function', () => {
        let expectation: string = '[1,3,5,6,10,20,2]';
        let result: number[] = sorter.sort(array, [
            (a: number, b: number): number => {
                if (a === 2 || b === 2) {
                    return null;
                }
                return a - b;
            },
            (a: number, b: number): number => {
                if (a !== 2 && b !== 2) {
                    return SortOrder.NO_CHANGE;
                }
                else if (a === 2) {
                    return SortOrder.BA;
                }
                else if (b === 2) {
                    return SortOrder.AB;
                }
                else {
                    return SortOrder.NO_CHANGE;
                }
            }
        ]);
        expect(JSON.stringify(result)).toBe(expectation);
    });

    describe('Sync', () => {
        it('Sort', () => {
            let expectation: string = '[1,2,3,5,6,10,20]';
            let result: number[] = sorter.sort(array, [
                (a: number, b: number): number => {
                    return a - b;
                }
            ]);
            expect(JSON.stringify(result)).toBe(expectation);
        });

        it('Bubble', () => {
            let expectation: string = '[1,2,3,5,6,10,20]';
            let result: number[] = sorter.bubble(array, [
                (a: number, b: number): number => {
                    return a - b;
                }
            ]);
            expect(JSON.stringify(result)).toBe(expectation);
        });

        it('Insertion', () => {
            let expectation: string = '[1,2,3,5,6,10,20]';
            let result: number[] = sorter.insertion(array, [
                (a: number, b: number): number => {
                    return a - b;
                }
            ]);
            expect(JSON.stringify(result)).toBe(expectation);
        });

        it('Merge', () => {
            let expectation: string = '[1,2,3,5,6,10,20]';
            let result: number[] = sorter.merge(array, [
                (a: number, b: number): number => {
                    return a - b;
                }
            ]);
            expect(JSON.stringify(result)).toBe(expectation);
        });

        it('Quick', () => {
            let expectation: string = '[1,2,3,5,6,10,20]';
            let result: number[] = sorter.quick(array, [
                (a: number, b: number): number => {
                    return a - b;
                }
            ]);
            expect(JSON.stringify(result)).toBe(expectation);
        });
    });

    describe('Async', () => {
        describe('Sort', () => {
            it('can sort', async () => {
                let expectation: string = '[1,2,3,5,6,10,20]';
                let result: number[] = await sorter.asyncSort(array, [
                    async (a: number, b: number): Promise<number> => {
                        return a - b;
                    }
                ]);
                expect(JSON.stringify(result)).toBe(expectation);
            });
        });
    
        describe('Bubble Sort', () => {
            it('can sort', async () => {
                let expectation: string = '[1,2,3,5,6,10,20]';
                let result: number[] = await sorter.asyncBubble(array, [
                    async (a: number, b: number): Promise<number> => {
                        return a - b;
                    }
                ]);
                expect(JSON.stringify(result)).toBe(expectation);
            });
        });
    
        describe('Insertion Sort', () => {
            it('can sort', async () => {
                let expectation: string = '[1,2,3,5,6,10,20]';
                let result: number[] = await sorter.asyncInsertion(array, [
                    async (a: number, b: number): Promise<number> => {
                        return a - b;
                    }
                ]);
                expect(JSON.stringify(result)).toBe(expectation);
            });
        });
    
        describe('Merge Sort', () => {
            it('can sort', async () => {
                let expectation: string = '[1,2,3,5,6,10,20]';
                let result: number[] = await sorter.asyncMerge(array, [
                    async (a: number, b: number): Promise<number> => {
                        return a - b;
                    }
                ]);
                expect(JSON.stringify(result)).toBe(expectation);
            });
        });
    
        describe('Quick Sort', () => {
            it('can sort', async () => {
                let expectation: string = '[1,2,3,5,6,10,20]';
                let result: number[] = await sorter.asyncQuick(array, [
                    async (a: number, b: number): Promise<number> => {
                        return a - b;
                    }
                ]);
                expect(JSON.stringify(result)).toBe(expectation);
            });
        });
    });
});
