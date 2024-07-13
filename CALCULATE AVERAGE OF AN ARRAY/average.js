var arr = []; 

for (var i = 0; i < 5; i++){ 
    arr[i] = +prompt("Enter the value of array")
}

var sum =0 ; 

for (i = 0; i < 5; i++) {
    sum = sum + arr[i]; 
}

var average = sum / 5; 

console.log(`Average of all elements of array is = ${average}`)