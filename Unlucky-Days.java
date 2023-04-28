/*
  Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

  Find the number of Friday 13th in the given year.

  Input: Year in Gregorian calendar as integer.

  Output: Number of Black Fridays in the year as an integer.

  Examples:

  unluckyDays(2015) == 3
  unluckyDays(1986) == 1
*/

// Answer:

import java.time.DayOfWeek;
import java.time.LocalDate;
public class Kata {
  public static int unluckyDays(int year) {
        int count = 0;
        LocalDate date = LocalDate.of(year, 1, 13);
        while (date.getYear() == year) {
            if (date.getDayOfWeek() == DayOfWeek.FRIDAY) {
                count++;
            }
            date = date.plusMonths(1);
        }
        return count;
  }
}

// BigO: O(1)
