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

        for (let i = 0; i < array.length; i++) {
            if (t.indexOf(array[i]) === -1) {
                t.push(array[i]);
            }
        }

        return t;
    }
}
