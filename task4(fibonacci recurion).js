// 4.Write a function which will return you first two times 1, then 2, then 3, then 5 and so on (Fibonacci numbers). 


function Fib(no){
    if(no<=1){
        return no;
    }
    else
        return (Fib(no-1)+Fib(no-2));
}
var input =Number(prompt("Hi,\nEnter the no of elements in series : "));
console.log(`Entered number of terms is : ${input}`);
console.log(1);
for(let a=1;a<=input;a++){
    console.log(Fib(a));
}