import { glob } from 'glob'

export async function globWalkImage(inputFileName) {
  const image = await glob([`../../static/images/images/avatars/${inputFileName}.{png,jpeg,jpg}`]);
  return image;
}
