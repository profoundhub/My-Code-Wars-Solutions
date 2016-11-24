
6 kyu
Sum of Digits / Digital Root

213 - 5 - 87% of 610 - 2539 of 9517 - AJFarmar - 12 Issues Reported

# Instructions

In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works (Ruby example given):

digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2

Tags: ALGORITHMS MATHEMATICS NUMBERS ARITHMETIC

# Output

Time: 296ms Passed: 6 Failed: 0
Test Results:
 Log
 16
16
7

✔ Test Passed: Value == 7
 Log
 195
195
195
15
15
6

✔ Test Passed: Value == 6
 Log
 992
992
992
20
20
2

✔ Test Passed: Value == 2
 Log
 999999999999
999999999999
999999999999
999999999999
999999999999
999999999999
999999999999
999999999999
999999999999
999999999999
999999999999
999999999999
108
108
108
9

✔ Test Passed: Value == 9
 Log
 167346
167346
167346
167346
167346
167346
27
27
9

✔ Test Passed: Value == 9

 Log
 0

✔ Test Passed: Value == 0

You have passed all tests! :)