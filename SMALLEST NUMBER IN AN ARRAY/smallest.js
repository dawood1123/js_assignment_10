var arr = []; 
for (var i = 0; i < 5; i++) {
    arr[i] = +prompt("Enter element number" + i+1); 
}

var min = arr[0]; 

for (var i = 0; i < 5; i++) { 
    if (arr[i] < min){ 
        min = arr[i]; 
    }
}

console.log ("minimum numbe is: " + min )