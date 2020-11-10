Coin Counter
Create a coin counter application that takes X amount of money (such as \$4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies. Do not worry about adding a user interface to the application. Instead, focus on writing good tests and functional code.

Part 1
Create a coin counter function that uses recursion to solve the problem.

Part 2
Create a coin counter function that uses a closure that can be used with functions for each type of change (quarters, nickels, dimes and pennies).

1 quarter = .25
1 dime = .1
1 nickle = .05
1 penny = .01

user input: 3.59
need to grab anything past the . so in this case .59
subtract from one. in this case .41
count 1 for everytime the number can be divisbale by a coin
then check how many time .25 can go into .41 = 1 quarter
then check the remander for how many times .1 can go into .16 = 1 dime
then check the remander for how many times .05 can go into .06 = 1 nickle
then check the remander for how many times .01 can go into .01 = 1 penny

count != 0 keep checking



-------------

Roman Numerals
You've already had a chance to create an application to convert numbers into Roman numerals. This time, solve the problem recursively!

Roman numerals are based on seven symbols:

Symbol  Value
I       1
V       5
X       10
L       50
C       100
D       500
M       1,000
The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.

The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.

You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.

Bonus: Can you solve this problem using closures and currying?

