[@totalpave/array - v3.0.0-dev](../README.md) / [Exports](../modules.md) / ArraySort

# Class: ArraySort<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](ArraySort.md#constructor)

### Methods

- [asyncBubble](ArraySort.md#asyncbubble)
- [asyncInsertion](ArraySort.md#asyncinsertion)
- [asyncMerge](ArraySort.md#asyncmerge)
- [asyncQuick](ArraySort.md#asyncquick)
- [asyncSort](ArraySort.md#asyncsort)
- [bubble](ArraySort.md#bubble)
- [insertion](ArraySort.md#insertion)
- [merge](ArraySort.md#merge)
- [quick](ArraySort.md#quick)
- [sort](ArraySort.md#sort)

## Constructors

### constructor

• **new ArraySort**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

## Methods

### asyncBubble

▸ **asyncBubble**(`arr`, `sortFunctions`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `sortFunctions` | [`IAsyncSortFunction`](../modules.md#iasyncsortfunction)<`T`\>[] |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[ArraySort.ts:162](https://github.com/totalpave/array/blob/83c287a/src/ArraySort.ts#L162)

___

### asyncInsertion

▸ **asyncInsertion**(`arr`, `sortFunctions`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `sortFunctions` | [`IAsyncSortFunction`](../modules.md#iasyncsortfunction)<`T`\>[] |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[ArraySort.ts:188](https://github.com/totalpave/array/blob/83c287a/src/ArraySort.ts#L188)

___

### asyncMerge

▸ **asyncMerge**(`arr`, `sortFunctions`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `sortFunctions` | [`IAsyncSortFunction`](../modules.md#iasyncsortfunction)<`T`\>[] |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[ArraySort.ts:209](https://github.com/totalpave/array/blob/83c287a/src/ArraySort.ts#L209)

___

### asyncQuick

▸ **asyncQuick**(`arr`, `sortFunctions`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `sortFunctions` | [`IAsyncSortFunction`](../modules.md#iasyncsortfunction)<`T`\>[] |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[ArraySort.ts:249](https://github.com/totalpave/array/blob/83c287a/src/ArraySort.ts#L249)

___

### asyncSort

▸ **asyncSort**(`array`, `sortFunctions`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `sortFunctions` | [`IAsyncSortFunction`](../modules.md#iasyncsortfunction)<`T`\>[] |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[ArraySort.ts:158](https://github.com/totalpave/array/blob/83c287a/src/ArraySort.ts#L158)

___

### bubble

▸ **bubble**(`arr`, `sortFunctions`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `sortFunctions` | [`ISortFunction`](../modules.md#isortfunction)<`T`\>[] |

#### Returns

`T`[]

#### Defined in

[ArraySort.ts:38](https://github.com/totalpave/array/blob/83c287a/src/ArraySort.ts#L38)

___

### insertion

▸ **insertion**(`arr`, `sortFunctions`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `sortFunctions` | [`ISortFunction`](../modules.md#isortfunction)<`T`\>[] |

#### Returns

`T`[]

#### Defined in

[ArraySort.ts:64](https://github.com/totalpave/array/blob/83c287a/src/ArraySort.ts#L64)

___

### merge

▸ **merge**(`arr`, `sortFunctions`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `sortFunctions` | [`ISortFunction`](../modules.md#isortfunction)<`T`\>[] |

#### Returns

`T`[]

#### Defined in

[ArraySort.ts:85](https://github.com/totalpave/array/blob/83c287a/src/ArraySort.ts#L85)

___

### quick

▸ **quick**(`arr`, `sortFunctions`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `sortFunctions` | [`ISortFunction`](../modules.md#isortfunction)<`T`\>[] |

#### Returns

`T`[]

#### Defined in

[ArraySort.ts:124](https://github.com/totalpave/array/blob/83c287a/src/ArraySort.ts#L124)

___

### sort

▸ **sort**(`array`, `sortFunctions`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `sortFunctions` | [`ISortFunction`](../modules.md#isortfunction)<`T`\>[] |

#### Returns

`T`[]

#### Defined in

[ArraySort.ts:20](https://github.com/totalpave/array/blob/83c287a/src/ArraySort.ts#L20)
