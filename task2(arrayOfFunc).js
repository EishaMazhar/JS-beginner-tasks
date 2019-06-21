//  2.Transform array of numbers to array of functions that will alert that digits

var Arr=[1,21,7,12,3,2];
var numarray=[];
let a=Arr.length;
for(let i=0;i<a;i++){
   numarray[i]=() => {
    //alert(Arr[i])
    console.log(Arr[i])
}
 numarray[i]();      
}