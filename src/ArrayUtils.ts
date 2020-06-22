import { IDictionary } from '@totalpave/interfaces';

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
    public static map<T extends IDictionary<any> = IDictionary<any>, K extends keyof T = keyof T>(array: Array<T>, key: K): IDictionary<T> {
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
}
