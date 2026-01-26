import { IMAGE_FOLDER } from './data';

export function getPath(name: string) {
  return `${IMAGE_FOLDER}${name}.png`;
}
