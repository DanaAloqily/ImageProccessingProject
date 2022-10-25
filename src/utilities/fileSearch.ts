import { existsSync } from 'fs';

const fileExists = (imageLocation: string): boolean => {
  return existsSync(imageLocation); // return whether or not the file exists synchronously
};

export default fileExists;
