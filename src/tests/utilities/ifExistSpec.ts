import fileExists from '../../utilities/fileSearch';
import path from 'path';

const imgDir = path.resolve('./') + '/build/';
const outputDir = imgDir + 'thumbnail/';
const outputImage = outputDir + `fjord-200x300.jpg`;

describe('testing ifExist functionality that checks ig an image already exists', () => {
  it('test the  route with existing file', () => {
    expect(fileExists(outputImage)).toBeTruthy();
  });
  it('test the  route with existing file', () => {
    expect(fileExists('invalid-path')).toBeFalsy();
  });
});
