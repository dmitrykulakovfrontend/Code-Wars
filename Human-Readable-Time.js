/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

// Answer

/*
* given: non-negative integer as seconds
* expects: human readable time format string 'HH:MM:SS'
*
*   humanReadable(0) '00:00:00';
*   humanReadable(59) '00:00:59'
*   humanReadable(60) '00:01:00'
*   humanReadable(90) '00:01:30'
*   humanReadable(3599) '00:59:59'
*   humanReadable(3600) '01:00:00'
*   humanReadable(45296) '12:34:56'
*   humanReadable(86399) '23:59:59'
*   humanReadable(86400) '24:00:00'
*   humanReadable(359999) '99:59:59'
*
* to get amount of hours i can use seconds / 3600, for amount of minutes i can use seconds % 3600 / 60, and for seconds i can
* simply use seconds % 60 but each time i will check is number less than 10, and if so then i will turn it into string with
* zero at start
*
* */

function humanReadable (time) {
  let hours,minutes,seconds = 0;
  hours = Math.trunc(time / 3600) < 10 ? `0${Math.trunc(time / 3600)}` : Math.trunc(time / 3600);
  minutes = Math.trunc(time % 3600 / 60) < 10 ? `0${Math.trunc(time % 3600 / 60)}`
  : Math.trunc(time % 3600 / 60);
  seconds = Math.trunc(time % 60) < 10 ? `0${Math.trunc(time % 60)}` : Math.trunc(time % 60);
  return `${hours}:${minutes}:${seconds}`
}
// BigO: Im not sure about math complexity, but there is no loops so i would say O(n).
