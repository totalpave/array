[@totalpave/array - v4.0.1](README.md) / Exports

# @totalpave/array - v4.0.1

## Table of contents

### Enumerations

- [SortOrder](enums/SortOrder.md)

### Classes

- [ArraySort](classes/ArraySort.md)
- [ArrayUtils](classes/ArrayUtils.md)

### Interfaces

- [IArrayDiff](interfaces/IArrayDiff.md)

### Type Aliases

- [IAsyncSortFunction](modules.md#iasyncsortfunction)
- [ISortFunction](modules.md#isortfunction)

## Type Aliases

### IAsyncSortFunction

Ƭ **IAsyncSortFunction**<`T`\>: (`a`: `T`, `b`: `T`) => `Promise`<`number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`a`, `b`): `Promise`<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`Promise`<`number`\>

#### Defined in

[ArraySort.ts:17](https://github.com/totalpave/array/blob/9d9fac7/src/ArraySort.ts#L17)

___

### ISortFunction

Ƭ **ISortFunction**<`T`\>: (`a`: `T`, `b`: `T`) => `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`a`, `b`): `number`

ArraySort offers an algorithm to run multiple sort functions in series
as a part of a sort.

If a sort function returns null, the next sort function will be executed.
The first sort function to return a non-null value will determine the sort
order between A and B.

If all sort functions returns null, then the default return value will be 0,
or no order change.

This is a class to take advantage of generic types declarations.

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`number`

#### Defined in

[ArraySort.ts:16](https://github.com/totalpave/array/blob/9d9fac7/src/ArraySort.ts#L16)
