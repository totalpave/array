
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
export class ArraySort<T> {
    public sort(array: Array<T>, sortFunctions: Array<(a: T, b: T) => number>): Array<T> {
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
}
