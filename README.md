# JS-beginner-tasks
Find the second biggest element in the array of numbers. 

------
Transform array of numbers to array of functions that will alert that digits
 
------
sort array of objects wrt any of its properties

------
Write a function which will return you first two times 1, then 2, then 3, then 5 and so on (Fibonacci numbers). 

------ 

There are four substring missions that were born all in one day and you shouldn’t be needed more than one day to solve them. All of those mission can be simply solved by brute force, but is it always the best way to go? (you might not have access to all of those missions yet, but they are going to be available with more opened islands on the map).

This mission is the first one of the series. Here you should find the length of the longest substring that consists of the same letter. For example, line "aaabbcaaaa" contains four substrings with the same letters "aaa", "bb","c" and "aaaa". The last substring is the longest one which makes it an answer.

Input: String.

Output: Int.

Example 
longRepeat('sdsffffse') == 4
longRepeat('ddvvrwwwrggg') == 3

----------

Roman numerals come from the ancient Roman numbering system. They are based on specific letters of the alphabet which are combined to signify the sum (or, in some cases, the difference) of their values. The first ten Roman numerals are:

I, II, III, IV, V, VI, VII, VIII, IX, and X.

The Roman numeral system is decimal based but not directly positional and does not include a zero. Roman numerals are based on combinations of these seven symbols:

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
romanNumerals(3999) == 'MMMCMXCIX'
