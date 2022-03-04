
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

    describe('map', () => {
        it('should convert array to map', () => {
            let arr: Array<IDictionary<any>> = [
                {
                    id: 1,
                    name: 'Test'
                },
                {
                    id: 2,
                    name: 'test2'
                }
            ];

            expect(ArrayUtils.map(arr, 'id')).toEqual({
                1: {
                    id: 1,
                    name: 'Test'
                },
                2: {
                    id: 2,
                    name: 'test2'
                }
            });
        });

        it('should call function if key value is function', () => {
            let arr: Array<IDictionary<any>> = [
                {
                    getID: function() {
                        return 1;
                    },
                    name: 'Test'
                },
                {
                    getID: function() {
                        return 2;
                    },
                    name: 'test2'
                }
            ];

            expect(ArrayUtils.map(arr, 'getID')).toEqual({
                1: {
                    getID: expect.any(Function),
                    name: 'Test'
                },
                2: {
                    getID: expect.any(Function),
                    name: 'test2'
                }
            });
        })

        it('should error if there are duplicate keys', () => {
            let arr: Array<IDictionary<any>> = [
                {
                    id: 1,
                    name: 'Test'
                },
                {
                    id: 1,
                    name: 'test2'
                }
            ];

            expect(() => {
                ArrayUtils.map(arr, 'id');
            }).toThrowError(/Encountered duplicate key/);
        });
    });

    describe('diff', () => {
        it('completely unique', () => {
            let left: Array<number> = [
                1,
                2,
                3
            ];

            let right: Array<number> = [
                4,
                5,
                6
            ];

            expect(ArrayUtils.diff(left, right)).toEqual({
                left: [
                    1,
                    2,
                    3
                ],
                bilateral: [],
                right: [
                    4,
                    5,
                    6
                ]
            });
        });

        it('bilateral', () => {
            let left: Array<number> = [
                1,
                2,
                3,
                4,
                5,
                6
            ];

            let right: Array<number> = [
                4,
                5,
                6,
                7,
                8,
                9
            ];

            expect(ArrayUtils.diff(left, right)).toEqual({
                left: [
                    1,
                    2,
                    3
                ],
                bilateral: [
                    4,
                    5,
                    6
                ],
                right: [
                    7,
                    8,
                    9
                ]
            });
        });
    });

    it('removeAllInstancesInList()', () => {
        let inList: any = [
            1,
            2,
            3,
            1,
            2,
            3
        ];
        let list: any = ArrayUtils.removeAllInstancesInList(1, inList);
        expect(inList).not.toBe(list);
        expect(list.length).toBe(4);
        expect(list[0]).toBe(2);
        expect(list[1]).toBe(3);
        expect(list[2]).toBe(2);
        expect(list[3]).toBe(3);
    });
});
