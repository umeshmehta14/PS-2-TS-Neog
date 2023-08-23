var dynamicArray = [1, "hello", true, { key: "value" }];
var toArrayString = function (arr) { return JSON.stringify(arr); };
var arrayString = toArrayString(dynamicArray);
console.log(arrayString);
