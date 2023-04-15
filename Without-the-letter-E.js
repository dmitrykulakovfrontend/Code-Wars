/*
  Is it possible to write a book without the letter 'e' ?

  Task
  Given String str, return:

  How many "e" does it contain (case-insensitive) in string format.
  If given String doesn't contain any "e", return: "There is no "e"."
  If given String is empty, return empty String.
  If given String is `null`/`None`/`nil`, return `null`/`None`/`nil`
*/

// Answer:

public class WithoutLetterE {
  public static String findE(String str){
    if (str == null) return null;
    if (str.length() == 0) return str;
    int amountOfE = 0;
    for (char letter : str.toCharArray()) {
      if (Character.toLowerCase(letter) == 'e') {
        amountOfE++;
      }
    }
    return amountOfE == 0 ? "There is no \"e\"." : String.valueOf(amountOfE);
  }
}

// BigO: O(n)
