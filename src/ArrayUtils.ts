import { IDictionary } from '@totalpave/interfaces';

export interface IArrayDiff<T = any> {
    /**
     * Items that only appear in the left array
     */
    left: Array<T>;

    /**
     * Items that appear in both arrays
     */
    bilateral: Array<T>;

    /**
     * Items that only appear in the right array
     */
    right: Array<T>;
}

export class ArrayUtils {
    public static numericalSort(array: Array<number>, descending?: boolean): Array<number> {
        let output: Array<number> = array.slice();
        return output.sort((a: number, b: number) => {
            if (descending) {
                return b - a;
            }
            else {
                return a - b;
            }
        });
    }

    public static group<T = any>(array: Array<T>, groupCallback: (value: T) => string|number): IDictionary<Array<T>> {
        let map: IDictionary<Array<T>> = {};
        
        array.forEach((value: T) => {
            let groupByValue: string|number = groupCallback(value);
            if (!map[groupByValue]) {
                map[groupByValue] = [];
            }
            map[groupByValue].push(value);
        });

        return map;
    }

    public static dedupe<T = any>(array: Array<T>): Array<T> {
        let t: Array<T> = [];

        for (let i: number = 0; i < array.length; i++) {
            if (t.indexOf(array[i]) === -1) {
                t.push(array[i]);
            }
        }

        return t;
    }

    /**
     * Returns an `IDictionary<T>` object keyed by the supplied key parameter.
     * 
     * If the key value is a function, the function will be invoked with no parameters.
     * It will be expected that the function will return an indexable value, such as a
     * string or a number.
     * 
     * @param array 
     * @param key 
     */
    public static map<T extends IDictionary<any> = IDictionary<any>, TK extends keyof T = keyof T>(array: Array<T>, key: TK): IDictionary<T> {
        let map: IDictionary<T> = {};

        for (let i: number = 0; i < array.length; i++) {
            let item: T = array[i];
            let keyValue: any = item[key];

            if (typeof keyValue === 'function') {
                keyValue = item[key]();
            }

            if (!map[keyValue]) {
                map[keyValue] = item;
            }
            else {
                throw new Error('Encountered duplicate key. Key value should be unique. Maybe you wanted to use ArrayUtils.group instead?');
            }
        }

        return map;
    }

    /**
     * Analyzes the differences between two arrays. Outputs an object {left, bilateral, right}
     * 
     * `left` output are items that are exclusive to the left array. 
     * `right` output are items that are exclusive to the right array.
     * `bilateral` output are items that exist in both arrays.
     * 
     * @example
     * ```
     *      let left  = [1, 2, 3, 4, 5, 6];
     *      let right = [4, 5, 6, 7, 8, 9];
     * 
     *      let diff = ArrayUtils.diff(left, right);
     *      // diff = {
     *      //     left: [1, 2, 3],
     *      //     bilateral: [4, 5, 6],
     *      //     right: [7, 8, 9]
     *      // }
     * ```
     * 
     * @param left 
     * @param right 
     */
    public static diff<T = any>(left: Array<T>, right: Array<T>): IArrayDiff {
        let leftUnique: Array<T> = [];
        let rightUnique: Array<T> = [];
        let bilateral: Array<T> = [];

        for (let i: number = 0; i < left.length; i++) {
            let value: T = left[i];
            if (right.indexOf(value) > -1) {
                if (bilateral.indexOf(value) === -1) {
                    bilateral.push(value);
                }
            }
            else {
                if (leftUnique.indexOf(value) === -1) {
                    leftUnique.push(value);
                }
            }
        }

        for (let i: number = 0; i < right.length; i++) {
            let value: T = right[i];
            if (left.indexOf(value) > -1) {
                if (bilateral.indexOf(value) === -1) {
                    bilateral.push(value);
                }
            }
            else {
                if (rightUnique.indexOf(value) === -1) {
                    rightUnique.push(value);
                }
            }
        }

        return {
            left: leftUnique,
            right: rightUnique,
            bilateral
        };
    }

    public static removeAllInstancesInList<T = any>(item: T, list: Array<T>): Array<T> {
        list = list.slice();
        
        while (list.indexOf(item) > -1) {
            list.splice(list.indexOf(item), 1);
        }
    
        return list;
    }
}
