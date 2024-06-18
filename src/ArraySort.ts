
/**
 * ArraySort offers an algorithm to run multiple sort functions in series
 * as a part of a sort.
 * 
 * If a sort function returns null, the next sort function will be executed.
 * The first sort function to return a non-null value will determine the sort
 * order between A and B.
 * 
 * If all sort functions returns null, then the default return value will be 0,
 * or no order change.
 * 
 * This is a class to take advantage of generic types declarations.
 */

export type ISortFunction<T> = (a: T, b: T) => number;
export type IAsyncSortFunction<T> = (a: T, b: T) => Promise<number>;

export class ArraySort<T> {
    public sort(array: T[], sortFunctions: ISortFunction<T>[]): T[] {
        let sorted: T[] = array.slice();

        sorted = sorted.sort((a: T, b: T): number => {
            for (let i: number = 0; i < sortFunctions.length; i++) {
                let sortFn = sortFunctions[i];
                let returnVal: number = sortFn(a, b);
                if (returnVal !== null) {
                    return returnVal;
                }
            }

            return 0;
        });

        return sorted;
    }

    public bubble(arr: T[], sortFunctions: ISortFunction<T>[]): T[] {
        let hasSwapped: boolean = false;

        let array: T[] = arr.slice();

        do {
            hasSwapped = false;
            for (let i: number = 0; i < array.length - 1; i++) {
                let a: T = array[i];
                let b: T = array[i + 1];

                for (let j: number = 0; j < sortFunctions.length; j++) {
                    let sortFn: ISortFunction<T> = sortFunctions[j];
                    let returnVal: number = sortFn(a, b);
                    if (returnVal > 0) {
                        array[i] = b;
                        array[i + 1] = a;
                        hasSwapped = true;
                    }
                }
            }
        } while (hasSwapped);

        return array;
    }

    public insertion(arr: T[], sortFunctions: ISortFunction<T>[]): T[] {
        let array: T[] = arr.slice();

        for (let outer: number = 1; outer < array.length; outer++) {
            for (let inner: number = 0; inner < outer; inner++) {
                let a: T = array[outer];
                let b: T = array[inner];
                for (let j: number = 0; j < sortFunctions.length; j++) {
                    let sortFn: ISortFunction<T> = sortFunctions[j];
                    let returnVal: number = sortFn(a, b);
                    if (returnVal < 0) {
                        let [ t ]: T[] = array.splice(outer, 1);
                        array.splice(inner, 0, t);
                    }
                }
            }
        }

        return array;
    }

    public merge(arr: T[], sortFunctions: ISortFunction<T>[]): T[] {
        let array: T[] = arr.slice();
        
        if (array.length < 2) {
            return array;
        }

        let mid: number = Math.floor(array.length / 2);
        let left: T[] = array.slice(0, mid);
        let right: T[] = array.slice(mid);

        return this.$mergeSort(this.merge(left, sortFunctions), this.merge(right, sortFunctions), sortFunctions);
    }

    private $mergeSort(left: T[], right: T[], sortFunctions: ISortFunction<T>[]): T[] {
        let sorted: T[] = [];

        while (left.length && right.length) {
            let a: T = left[0];
            let b: T = right[0];
            for (let i: number = 0; i < sortFunctions.length; i++) {
                let sortFn: ISortFunction<T> = sortFunctions[i];
                let retVal: number = sortFn(a, b);
                if (retVal <= 0) {
                    sorted.push(left.shift());
                }
                else {
                    sorted.push(right.shift());
                }
            }
        }

        return [
            ...sorted,
            ...left,
            ...right
        ];
    }

    public quick(arr: T[], sortFunctions: ISortFunction<T>[]): T[] {
        let array: T[] = arr.slice();

        if (array.length < 2) {
            return array;
        }

        let chosenIndex: number = array.length - 1;
        let chosen: T = array[chosenIndex];

        let a: T[] = [];
        let b: T[] = [];

        for (let i: number = 0; i < chosenIndex; i++) {
            let val: T = array[i];
            for (let j: number = 0; j < sortFunctions.length; j++) {
                let sortFn: ISortFunction<T> = sortFunctions[j];
                let retVal: number = sortFn(val, chosen);
                if (retVal < 0) {
                    a.push(val);
                }
                else {
                    b.push(val);
                }
            }
        }

        return [
            ...this.quick(a, sortFunctions),
            chosen,
            ...this.quick(b, sortFunctions)
        ];
    }

    public async asyncSort(array: T[], sortFunctions: IAsyncSortFunction<T>[]): Promise<T[]> {
        return this.asyncQuick(array, sortFunctions);
    }

    public async asyncBubble(arr: T[], sortFunctions: IAsyncSortFunction<T>[]): Promise<T[]> {
        let hasSwapped: boolean = false;

        let array: T[] = arr.slice();

        do {
            hasSwapped = false;
            for (let i: number = 0; i < array.length - 1; i++) {
                let a: T = array[i];
                let b: T = array[i + 1];

                for (let j: number = 0; j < sortFunctions.length; j++) {
                    let sortFn: IAsyncSortFunction<T> = sortFunctions[j];
                    let returnVal: number = await sortFn(a, b);
                    if (returnVal > 0) {
                        array[i] = b;
                        array[i + 1] = a;
                        hasSwapped = true;
                    }
                }
            }
        } while (hasSwapped);

        return array;
    }

    public async asyncInsertion(arr: T[], sortFunctions: IAsyncSortFunction<T>[]): Promise<T[]> {
        let array: T[] = arr.slice();

        for (let outer: number = 1; outer < array.length; outer++) {
            for (let inner: number = 0; inner < outer; inner++) {
                let a: T = array[outer];
                let b: T = array[inner];
                for (let j: number = 0; j < sortFunctions.length; j++) {
                    let sortFn: IAsyncSortFunction<T> = sortFunctions[j];
                    let returnVal: number = await sortFn(a, b);
                    if (returnVal < 0) {
                        let [ t ]: T[] = array.splice(outer, 1);
                        array.splice(inner, 0, t);
                    }
                }
            }
        }

        return array;
    }

    public async asyncMerge(arr: T[], sortFunctions: IAsyncSortFunction<T>[]): Promise<T[]> {
        let array: T[] = arr.slice();
        
        if (array.length < 2) {
            return array;
        }

        let mid: number = Math.floor(array.length / 2);
        let left: T[] = array.slice(0, mid);
        let right: T[] = array.slice(mid);

        let results: T[][] = await Promise.all([ this.asyncMerge(left, sortFunctions), this.asyncMerge(right, sortFunctions) ]);
        return this.$asyncMergeSort(results[0], results[1], sortFunctions);
    }

    private async $asyncMergeSort(left: T[], right: T[], sortFunctions: IAsyncSortFunction<T>[]): Promise<T[]> {
        let sorted: T[] = [];

        while (left.length && right.length) {
            let a: T = left[0];
            let b: T = right[0];
            for (let i: number = 0; i < sortFunctions.length; i++) {
                let sortFn: IAsyncSortFunction<T> = sortFunctions[i];
                let retVal: number = await sortFn(a, b);
                if (retVal <= 0) {
                    sorted.push(left.shift());
                }
                else {
                    sorted.push(right.shift());
                }
            }
        }

        return [
            ...sorted,
            ...left,
            ...right
        ];
    }

    public async asyncQuick(arr: T[], sortFunctions: IAsyncSortFunction<T>[]): Promise<T[]> {
        let array: T[] = arr.slice();

        if (array.length < 2) {
            return array;
        }

        let chosenIndex: number = array.length - 1;
        let chosen: T = array[chosenIndex];

        let a: T[] = [];
        let b: T[] = [];

        for (let i: number = 0; i < chosenIndex; i++) {
            let val: T = array[i];
            for (let j: number = 0; j < sortFunctions.length; j++) {
                let sortFn: IAsyncSortFunction<T> = sortFunctions[j];
                let retVal: number = await sortFn(val, chosen);
                if (retVal < 0) {
                    a.push(val);
                }
                else {
                    b.push(val);
                }
            }
        }

        let results: T[][] = await Promise.all([ this.asyncQuick(a, sortFunctions), this.asyncQuick(b, sortFunctions) ]);

        return [
            ...results[0],
            chosen,
            ...results[1]
        ];
    }
}
