/*
  #Sort the columns of a csv-file

  You get a string with the content of a csv-file. The columns are separated by semicolons.
  The first line contains the names of the columns.
  Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.

  An example:

  Before sorting:
  As table (only visualization):
  |myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
  |17945       |10091    |10088  |3907   |10132          |
  |2           |12       |13     |48     |11             |

  The csv-file:
  myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
  17945;10091;10088;3907;10132\n
  2;12;13;48;11

  ----------------------------------

  After sorting:
  As table (only visualization):
  |Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
  |3907   |17945       |10091    |10088  |10132          |
  |48     |2           |12       |13     |11             |

  The csv-file:
  Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
  3907;17945;10091;10088;10132\n
  48;2;12;13;11
  There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.
*/

// Answer:

export function sortCsvColumns(csvFileContent:string) : string {
  let result = '';
  const lines = csvFileContent.split('\n');
  const sortedHeader = lines[0].split(';')
  .map((name, index) => ({name, index}))
  .sort((a, b) => a.name.localeCompare(b.name));
  for (let title of sortedHeader) {
    result += title.name;
    result += ';';
  }
    result = result.slice(0, -1)
  result += '\n';
  for (let i = 1; i < lines.length; i++) {
    let values = lines[i].split(';');
    let sortedLine = '';
    for (let title of sortedHeader) {
      sortedLine += values[title.index];
      sortedLine += ';';
    }
    sortedLine = sortedLine.slice(0, -1)
    sortedLine += '\n';
    result += sortedLine;
  }
  return result.slice(0, -1)
}

// BigO: O(n2)
