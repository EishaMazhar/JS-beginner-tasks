/* 6.Roman numerals come from the ancient Roman numbering system.
They are based on specific letters of the alphabet which are combined to signify the sum (or, in some cases, the difference) of their values.
The first ten Roman numerals are:

I, II, III, IV, V, VI, VII, VIII, IX, and X.

The Roman numeral system is decimal based but not directly positional and does not include a zero.
Roman numerals are based on combinations of these seven symbols:

Numeral	Value
I	1 (unus)
V	5 (quinque)
X	10 (decem)
L	50 (quinquaginta)
C	100 (centum)
D	500 (quingenti)
M	1,000 (mille)

For this task, you should return a roman numeral using the specified integer value ranging from 1 to 3999.

Input: A number as an integer.

Output: The Roman numeral as a string.

Example:
romanNumerals(6) == 'VI'
romanNumerals(76) == 'LXXVI'
romanNumerals(13) == 'XIII'
romanNumerals(44) == 'XLIV'
romanNumerals(3999) == 'MMMCMXCIX'*/
function romanNumerals(decNo){
    var s=[];
    var th=["","M","MM","MMM","MMMM","MMMMM","MMMMMM","MMMMMMM","MMMMMMMM","MMMMMMMMMM"];
    var h=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    var t=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    var u=["","I","II","III","IV","V","VI","VII","VIII","IX"];

    var Th=th[Math.floor(decNo/1000)];
    s=Th;
    var H=h[Math.floor((decNo%1000)/100)];
    s+=H;
    var T=t[Math.floor((decNo%100)/10)];
    s+=T;
    var uni=u[decNo%10];
    s+=uni;
    return s;
}
var decNo=Number(prompt("Hi,\nEnter the no: "));
console.log(`Entered number is : ${decNo}`);
console.log(romanNumerals(decNo));