
var arr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = prompt("Enter values for array");
}

console.log(arr)

var arr1 = []; 

for (var i = arr.length - 1, j = 0; i >= 0, j < arr.length; i--, j++) { 
    arr1 [j] = arr [i]; 
}

console.log(arr1); 
