import fileExists from '../../utilities/fileSearch';

describe('Testing the fileExists function', () => {
  it('testing the fileExists function with non-existing file', () => {
    expect(fileExists('invalid path')).toBeFalsy();
  });
});
