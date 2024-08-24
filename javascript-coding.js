let array = [2, 3, 4, 5, 2, 1, 1, 1, 2, 3, 4, 4, 9, 8, 7];

//removing duplicates
let set = new Set(array);
set.forEach(x => {
    console.log(x + " ");
});
console.log(set.has());

//reversing array elements
var s = 0;
var e = array.length - 1;
while (s < e) {
    [array[s], array[e]] = [array[e], array[s]];
    s++;
    e--;
}
console.log(array);

//max and min element
var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;
array.forEach(x => {
    max = Math.max(x, max);
    min = Math.min(x, min);
});
console.log("MAX : " + max + " MIN : " + min);

//sorting an array
array.sort();
console.log(array);

var val = 5;
//binary search
const binarySearch = () => {
    var low = 0;
    var high = array.length - 1;
    while (low < high) {
        var mid = low + (high - low) / 2;
        if (array[mid] == val) {
            console.log("value found");
            return;
        }
        else if (array[mid] > val)
            high = mid - 1;
        else
            low = mid + 1;
    }
    console.log("Not found");
};
binarySearch(array, val);

//bubble sort
array = [2, 3, 4, 5, 2, 1, 1, 1, 2, 3, 4, 4, 9, 8, 7];
var sz = array.length;
for (var i = 0; i < sz; i++) { //array traversal
    for (var j = 0; j < sz - i - 1; j++) { //Compares each pair of adjacent elements and swaps them if they are in the wrong order.
        if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
    }
}
console.log(array);

array = [2, 3, 4, 5, 2, 1, 1, 1, 2, 3, 4, 4, 9, 8, 7];
let freqMap = new Map();
array.forEach(x => {
    if (freqMap.has(x))
        freqMap.set(x, freqMap.get(x) + 1);
    else
        freqMap.set(x, 1);
});
let sortedKeyArray = [...freqMap.keys()].sort();
let sortedValueArray = [...freqMap.values()].sort();
console.log(sortedKeyArray);
console.log(sortedValueArray);
freqMap.forEach((val, key) => {
    console.log("key : " + key + " value : " + val);
});
