[@totalpave/array - v3.0.0](../README.md) / [Exports](../modules.md) / ArrayUtils

# Class: ArrayUtils

## Table of contents

### Constructors

- [constructor](ArrayUtils.md#constructor)

### Methods

- [dedupe](ArrayUtils.md#dedupe)
- [diff](ArrayUtils.md#diff)
- [group](ArrayUtils.md#group)
- [map](ArrayUtils.md#map)
- [numericalSort](ArrayUtils.md#numericalsort)
- [removeAllInstancesInList](ArrayUtils.md#removeallinstancesinlist)

## Constructors

### constructor

• **new ArrayUtils**()

## Methods

### dedupe

▸ `Static` **dedupe**<`T`\>(`array`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |

#### Returns

`T`[]

#### Defined in

[ArrayUtils.ts:47](https://github.com/totalpave/array/blob/4eadf03/src/ArrayUtils.ts#L47)

___

### diff

▸ `Static` **diff**<`T`\>(`left`, `right`): [`IArrayDiff`](../interfaces/IArrayDiff.md)<`any`\>

Analyzes the differences between two arrays. Outputs an object {left, bilateral, right}

`left` output are items that are exclusive to the left array.
`right` output are items that are exclusive to the right array.
`bilateral` output are items that exist in both arrays.

**`example`**
```
     let left  = [1, 2, 3, 4, 5, 6];
     let right = [4, 5, 6, 7, 8, 9];

     let diff = ArrayUtils.diff(left, right);
     // diff = {
     //     left: [1, 2, 3],
     //     bilateral: [4, 5, 6],
     //     right: [7, 8, 9]
     // }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `T`[] |
| `right` | `T`[] |

#### Returns

[`IArrayDiff`](../interfaces/IArrayDiff.md)<`any`\>

#### Defined in

[ArrayUtils.ts:114](https://github.com/totalpave/array/blob/4eadf03/src/ArrayUtils.ts#L114)

___

### group

▸ `Static` **group**<`T`\>(`array`, `groupCallback`): `IDictionary`<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `groupCallback` | (`value`: `T`) => `string` \| `number` |

#### Returns

`IDictionary`<`T`[]\>

#### Defined in

[ArrayUtils.ts:33](https://github.com/totalpave/array/blob/4eadf03/src/ArrayUtils.ts#L33)

___

### map

▸ `Static` **map**<`T`, `TK`\>(`array`, `key`): `IDictionary`<`T`\>

Returns an `IDictionary<T>` object keyed by the supplied key parameter.

If the key value is a function, the function will be invoked with no parameters.
It will be expected that the function will return an indexable value, such as a
string or a number.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IDictionary`<`any`, `T`\> = `IDictionary`<`any`\> |
| `TK` | extends `string` \| `number` \| `symbol` = keyof `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `key` | `TK` |

#### Returns

`IDictionary`<`T`\>

#### Defined in

[ArrayUtils.ts:69](https://github.com/totalpave/array/blob/4eadf03/src/ArrayUtils.ts#L69)

___

### numericalSort

▸ `Static` **numericalSort**(`array`, `descending?`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `number`[] |
| `descending?` | `boolean` |

#### Returns

`number`[]

#### Defined in

[ArrayUtils.ts:21](https://github.com/totalpave/array/blob/4eadf03/src/ArrayUtils.ts#L21)

___

### removeAllInstancesInList

▸ `Static` **removeAllInstancesInList**<`T`\>(`item`, `list`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |
| `list` | `T`[] |

#### Returns

`T`[]

#### Defined in

[ArrayUtils.ts:154](https://github.com/totalpave/array/blob/4eadf03/src/ArrayUtils.ts#L154)