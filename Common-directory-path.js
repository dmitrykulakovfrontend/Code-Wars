/*
  Returns the commom directory path for specified array of full filenames.

   @param {array} pathes
   @return {string}
  Examples:

    ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
    ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
    ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
    ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
*/

// Answer:

function getCommonDirectoryPath(pathes) {
  let commonPath = pathes[0];
  for (let i = 1; i < pathes.length; i++) {
    let path = pathes[i];
    let pointer;
    for (let index in commonPath) {
      index = +index;
      if (commonPath[index] !== path[index]) {
        commonPath = path.slice(0, pointer + 1);
      } else if (path[index] === '/') {
        pointer = index;
      }
    }
  }
    return commonPath
}

// BigO: O(n2)
