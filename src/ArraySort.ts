
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
export type ISortPromiseFunction<T> = (a: T, b: T) => Promise<number>;

export class ArraySort<T> {
    public sort(array: Array<T>, sortFunctions: Array<ISortFunction<T>>): Array<T> {
        let sorted: Array<T> = array.slice();

        sorted = sorted.sort((a: T, b: T): number => {
            for (let i: number = 0; i < sortFunctions.length; i++) {
                const sortFn = sortFunctions[i];
                const returnVal: number = sortFn(a, b);
                if (returnVal !== null) {
                    return returnVal;
                }
            }

            return 0;
        });

        return sorted;
    }

    public async bubble(arr: Array<T>, sortFunctions: Array<ISortPromiseFunction<T>>): Promise<Array<T>> {
        let swapped: boolean = false;

        let array: Array<T> = arr.slice();

        do {
            swapped = false;
            for (let i: number = 0; i < array.length - 1; i++) {
                let a: T = array[i];
                let b: T = array[i + 1];

                for (let j: number = 0; j < sortFunctions.length; j++) {
                    let sortFn: ISortPromiseFunction<T> = sortFunctions[j];
                    let returnVal: number = await sortFn(a, b);
                    if (returnVal > 0) {
                        array[i] = b;
                        array[i + 1] = a;
                        swapped = true;
                    }
                }
            }
        } while (swapped);

        return array;
    }

    public async insertion(arr: Array<T>, sortFunctions: Array<ISortPromiseFunction<T>>): Promise<Array<T>> {
        let array: Array<T> = arr.slice();

        for (let outer: number = 1; outer < array.length; outer++) {
            for (let inner: number = 0; inner < outer; inner++) {
                let a: T = array[outer];
                let b: T = array[inner];
                for (let j: number = 0; j < sortFunctions.length; j++) {
                    let sortFn: ISortPromiseFunction<T> = sortFunctions[j];
                    let returnVal: number = await sortFn(a, b);
                    if (returnVal < 0) {
                        let [ t ]: Array<T> = array.splice(outer, 1);
                        array.splice(inner, 0, t);
                    }
                }
            }
        }

        return array;
    }

    public async merge(arr: Array<T>, sortFunctions: Array<ISortPromiseFunction<T>>): Promise<Array<T>> {
        let array: Array<T> = arr.slice();
        
        if (array.length < 2) {
            return array;
        }

        let mid: number = Math.floor(array.length / 2);
        let left: Array<T> = array.slice(0, mid);
        let right: Array<T> = array.slice(mid);


        return await this._mergeSort(await this.merge(left, sortFunctions), await this.merge(right, sortFunctions), sortFunctions);
    }

    private async _mergeSort(left: Array<T>, right: Array<T>, sortFunctions: Array<ISortPromiseFunction<T>>): Promise<Array<T>> {
        let sorted: Array<T> = [];

        while (left.length && right.length) {
            let a: T = left[0];
            let b: T = right[0];
            for (let i: number = 0; i < sortFunctions.length; i++) {
                let sortFn: ISortPromiseFunction<T> = sortFunctions[i];
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

    public async quick(arr: Array<T>, sortFunctions: Array<ISortPromiseFunction<T>>): Promise<Array<T>> {
        let array: Array<T> = arr.slice();

        if (array.length < 2) {
            return array;
        }

        let chosenIndex: number = array.length - 1;
        let chosen: T = array[chosenIndex];

        let a: Array<T> = [];
        let b: Array<T> = [];

        for (let i: number = 0; i < chosenIndex; i++) {
            let val: T = array[i];
            for (let j: number = 0; j < sortFunctions.length; j++) {
                let sortFn: ISortPromiseFunction<T> = sortFunctions[j];
                let retVal: number = await sortFn(val, chosen);
                if (retVal < 0) {
                    a.push(val);
                }
                else {
                    b.push(val);
                }
            }
        }

        return [
            ...(await this.quick(a, sortFunctions)),
            chosen,
            ...(await this.quick(b, sortFunctions))
        ];
    }
}
