import {glob} from 'glob'

export async function globWalkImage(inputFileName) {
  return await glob([`../../static/images/images/avatars/${inputFileName}.{png,jpeg,jpg}`]);
}
