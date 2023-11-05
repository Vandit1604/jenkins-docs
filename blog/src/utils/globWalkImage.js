const fg = require('fast-glob');

export function globWalkImage(inputFileName) {
  return fg.globSync([`../../static/images/images/avatars/${inputFileName}.{png,jpeg,jpg}`], { dot: true });
}
