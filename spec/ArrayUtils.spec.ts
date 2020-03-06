
import {ArrayUtils} from '../src/ArrayUtils';
import { IDictionary } from '@totalpave/interfaces';

describe('ArrayUtils', () => {
    describe('deduping', () => {
        let arr: Array<number> = [
            1,
            1,
            2,
            1,
            2,
            2,
            3,
            3,
            3
        ];

        let expectation: Array<number> = [
            1,
            2,
            3
        ];

        it('dedupe', () => {
            expect(ArrayUtils.dedupe(arr)).toEqual(expectation);
        });
    });

    describe('sorting', () => {
        let arr: Array<number> = [
            4,
            1,
            -1,
            3,
            20,
            10
        ];
    
        let expectation: Array<number> = [
            -1,
            1,
            3,
            4,
            10,
            20
        ];
    
        it('sorts ascending', () => {
            expect(ArrayUtils.numericalSort(arr)).toEqual(expectation);
        });
    
        it('sorts descending', () => {
            expect(ArrayUtils.numericalSort(arr, true)).toEqual(expectation.reverse());
        });
    });

    describe('grouping', () => {
        interface ITestData {
            distressID: number;
            value: number;
        }

        let arr: Array<ITestData> = [
            {
                distressID: 1,
                value: 1
            },
            {
                distressID: 1,
                value: 2
            },
            {
                distressID: 1,
                value: 3
            },
            {
                distressID: 2,
                value: 1
            },
            {
                distressID: 2,
                value: 2
            },
            {
                distressID: 2,
                value: 3
            },
            {
                distressID: 3,
                value: 1
            },
            {
                distressID: 3,
                value: 2
            },
            {
                distressID: 3,
                value: 3
            }
        ];

        let expectation: IDictionary<Array<ITestData>> = {
            1: [
                {
                    distressID: 1,
                    value: 1
                },
                {
                    distressID: 1,
                    value: 2
                },
                {
                    distressID: 1,
                    value: 3
                }
            ],
            2: [
                {
                    distressID: 2,
                    value: 1
                },
                {
                    distressID: 2,
                    value: 2
                },
                {
                    distressID: 2,
                    value: 3
                }
            ],
            3: [
                {
                    distressID: 3,
                    value: 1
                },
                {
                    distressID: 3,
                    value: 2
                },
                {
                    distressID: 3,
                    value: 3
                }
            ]
        };

        it('groups', () => {
            expect(ArrayUtils.group<ITestData>(arr, (value: ITestData): string|number => {
                return value.distressID;
            })).toEqual(expectation);
        });
    });
});
