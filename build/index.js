"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var csvtojson_1 = __importDefault(require("csvtojson"));
var fs_1 = require("fs");
var app = (0, express_1.default)();
var port = 3000; //process.env.PORT;
var inputFile = './users.csv';
var outputFile = 'users.json';
app.listen(port, function () { return console.log("Server started at http://localhost:".concat(port)); });
app.get('/', function (req, res) {
    res.send('converting in process');
    (0, csvtojson_1.default)()
        .fromFile(inputFile)
        .then(function (data) {
        var newData = data.map(function (item) {
            var first = item.first_name;
            var last = item.last_nsme;
            var phone = item.phone;
            if (item.phone === "") {
                phone = "missing data";
            }
            return { first: first, last: last, phone: phone };
        });
        fs_1.promises.writeFile(outputFile, JSON.stringify(newData));
    });
});
/* const start = async() => {
  app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
};

start();
 */
/*import axios from 'axios';

async function getCountry(name: string) {
  const getApi = await axios(`https://restcountries.com/v2/name/${name}`);
  const data = getApi.data[0];
  return {
      capital: data.capital,
      region: data.region,
      numericCode: data.numericCode
  };
}
/** Create a test for this getRegion function
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.com/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here
async function getRegionCapitals(regionalbloc: string) {
  const countryEndpoints = await getRegionCountries(regionalbloc);
  const promises = countryEndpoints.map((endpoint: any) =>
     axios(`https://restcountries.com/v2/name/${endpoint}`
  ));
  const arr = await Promise.all(promises);
  const capitals = [];
  for (let i=0; i < arr.length; i++) {
      capitals.push(arr[i].data[0].capital);
  }
  return capitals;
}

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};

 const myFunc = (num: number): number => {

    return num * num;
  };
  
  export default myFunc;
*/
/* import arrays from './utilities/arrays.js';
import numbers from './utilities/numbers.js';
import strings from './utilities/strings.js';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;
const five = parseInt('5');

const newArr = (num: number, arr:(string|number)[]): (string|number)[]=> {
    return [num, ...arr];
}

console.log(newArr(3, wordArr));
console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply(five, 8));
console.log(arrays.lgNum(mixArr));

export default newArr; */ 
