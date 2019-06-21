//  1.Find the second biggest element in the array of numbers. 

let arr=[1,21,7,12,3,2];
arr.sort(function(a,b){return b-a});
console.log('Second largest element is : '+ arr[1]);
