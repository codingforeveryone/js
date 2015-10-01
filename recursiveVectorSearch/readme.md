Problem: find if an element x is present in a vector using binary search principle. The function must be written using recursion.

I think this is a classic problem, so if you look around you will find the solution already made. So I try to give here the basic explanation to solve it without having to look around too much. Probably you know already this topic, but I´ll write a couple of lines anyway.

Binary search is efficient, because it never uses more the log_2(N) attempt to find an element in a vector of N elements.

You need the data to be ordered.

The principle is that you divide the data in 2 parts, and check if the number you are searching for, is bigger or smaller then the value you have on the division. If not you repeat with one of the 2 subset of data and go on until you find the value.   
