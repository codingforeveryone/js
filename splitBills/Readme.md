Write a function to work out who is owed what when a group of friends all pay different amounts toward a bill.

The function should take one parameter: an object with two or more name-value pairs which represent the members of the group and the amount spent by each.
The function should return an object with the same names, showing how much money the members should pay or receive.
Further points:

The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
If value is a decimal, round to two decimal places.
Example

3 friends go out together: A pays £20, B pays £15, and C pays £10 toward the bill. The function should return an object showing that A should receive £5, B should receive £0, and C should pay £5.