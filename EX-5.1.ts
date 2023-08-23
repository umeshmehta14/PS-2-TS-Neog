type DynamicArray = any[];

const dynamicArray: DynamicArray = [1, "hello", true, { key: "value" }];

const toArrayString = (arr: DynamicArray) => JSON.stringify(arr);

const arrayString = toArrayString(dynamicArray);
console.log(arrayString);
