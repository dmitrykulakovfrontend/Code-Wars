/*
  Create a function that will return true if the input is in the following date time format 01-09-2016 01:20 and false if it is not.
*/

// Answer:

function dateChecker(date){
	return /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/.test(date);
}

// BigO: O(n)
