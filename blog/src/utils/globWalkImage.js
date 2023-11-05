const fg = require('fast-glob');

export async function globWalkImage(inputFileName) {
  return await fg.glob([`../../static/images/images/avatars/${inputFileName}.{png,jpeg,jpg}`], { dot: true });
}
