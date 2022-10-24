"use strict";
/* import newArr from '../index';

describe('newArr should add a new item to the start of array', () => {
    const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

    it('should make a new array containing dog', () => {
        expect(newArr(3, wordArr)).toContain('dog');
    });
    it('make a new array containing 3', () => {
        expect(newArr(3, wordArr)).toContain(3);
    });
});
 */
/* import app from '../app';
import supertest from 'supertest';

describe('Testing the home page endpoint', function() {

  it('returns 200', async function() {
    // status code should be 200 `OK`
    await supertest(app)
      .get('/')
      .expect(200);
  });

});
 */
/* import countries from "../index";

it("should get basic data on the country canada", async () => {
  const data = await countries.getCountry('canada');
  expect(data).toEqual({
    capital: 'Ottawa',
    region: 'Americas',
    numericCode: '124'
  });
});

it("should get the countries in the region NAFTA", async () => {
  const data = await countries.getRegionCountries('nafta');
  expect(data).toEqual([
      'Canada', 'Mexico', 'United States of America'
  ]);
});


it("should get capitals of NAFTA countries", async () => {
  const data = await countries.getRegionCapitals('nafta');
  expect(data).toEqual([
    'Ottawa', 'Mexico City', 'Washington, D.C.'
  ]);
});


import myFunc from '../index';

it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});

import numbers from '../utilities/numbers';
import arrays from '../utilities/arrays';
import strings from '../utilities/strings';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

it('should be a sum greater than 18', () => {
expect(numbers.sum(18,2)).toBeGreaterThan(18);
}) ;

it('should multiply 5 and 8 and be 40', ()=> {
expect(numbers.multiply(5,8)).toEqual(40);
});

it('should not contail the third index', ()=> {
expect(arrays.cut3(wordArr)).not.toContain('rabbit')

});

it('should capatalize a sentence' , ()=>{
  expect(strings.capitalize('a sentence')).toEqual('A Sentence')
});
*/
