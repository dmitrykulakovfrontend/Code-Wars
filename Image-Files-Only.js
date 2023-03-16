/*
  Build a function that will take an array of filenames (as string) and return an array of array.
  Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

  Detect the image files based on the end of the filename which is their format (extension).
  Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.

  For example:
  Input: ["imgName.extension", "notAnImg"]
  Output: [["imgName.extension", "imgName", "extension"], null]

  So:
  imageFilter(["index.html", "favicon.gif"])
  return [null, ["favicon.gif", "favicon", "gif"]] 

  !Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.
*/

// Answer:

function imageFilter(arr) {
  const ext = ['jpg', 'gif', `png`, `tiff`, `svg` , `bmp`]
  return arr.map(file => ext.includes(file.slice(file.lastIndexOf('.') + 1).toLowerCase()) && file.split('.')[0] ? [file,...file.split('.')] : null)
}

// BigO: O(n2)
