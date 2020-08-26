
/* eslint-disable */

import * as Benchmark from 'benchmark';
import {ArraySort} from '../src/ArraySort';

let suite: Benchmark.Suite = new Benchmark.Suite();
let array: Array<number> = [
    5,
    1,
    6,
    3,
    10,
    20,
    2
];
let sorter: ArraySort<number> = new ArraySort<number>();

suite
    .add('Array.sort', () => {
        array.sort((a: number, b: number) => {
            return a - b;
        });
    })
    .add('ArraySort.sort', () => {
        sorter.sort(array, [
            (a: number, b: number): number => {
                return a - b;
            }
        ]);
    })
    .add('ArraySort.bubble', () => {
        sorter.bubble(array, [
            (a: number, b: number): number => {
                return a - b;
            }
        ]);
    })
    .add('ArraySort.insertion', () => {
        sorter.insertion(array, [
            (a: number, b: number): number => {
                return a - b;
            }
        ]);
    })
    .add('ArraySort.merge', () => {
        sorter.merge(array, [
            (a: number, b: number): number => {
                return a - b;
            }
        ]);
    })
    .add('ArraySort.quick', () => {
        sorter.quick(array, [
            (a: number, b: number): number => {
                return a - b;
            }
        ]);
    })
    .add('ArraySort.asyncSort', async () => {
        await sorter.asyncSort(array, [
            async (a: number, b: number): Promise<number> => {
                return a - b;
            }
        ]);
    })
    .add('ArraySort.asyncBubble', async () => {
        await sorter.asyncBubble(array, [
            async (a: number, b: number): Promise<number> => {
                return a - b;
            }
        ]);
    })
    .add('ArraySort.asyncInsertion', async () => {
        await sorter.asyncInsertion(array, [
            async (a: number, b: number): Promise<number> => {
                return a - b;
            }
        ]);
    })
    .add('ArraySort.asyncMerge', async () => {
        await sorter.asyncMerge(array, [
            async (a: number, b: number): Promise<number> => {
                return a - b;
            }
        ]);
    })
    .add('ArraySort.asyncQuick', async () => {
        await sorter.asyncQuick(array, [
            async (a: number, b: number): Promise<number> => {
                return a - b;
            }
        ]);
    })
    .on('cycle', (evt: any) => {
        console.log(String(evt.target));
    })
    .on('complete', function(this: any /* Benchmark typings for `map` function is broken */) {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });
