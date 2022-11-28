//Using a function to find the sum of an array
const findSum = function(array) {
    const add = array.reduce(function (accumulator, i) {
      return accumulator + i;
    }, 0);
    console.log(add);
  }
  
  //using a function to find the most frequent and least frequent item in an array
  //Find Frequency

const findFrequency = function (array) {
    if(array.length == 0)
    return null;
var modeMap = {};
var maxEl = array[0], maxCount = 1;
for(var i = 0; i < array.length; i++)
{
    var el = array[i];
    if(modeMap[el] == null)
        modeMap[el] = 1;
    else
        modeMap[el]++;  
    if(modeMap[el] > maxCount)
    {
        maxEl = el;
        maxCount = modeMap[el];
    }
}


    
    const hash = Object.create(null);
    let keys;
    let min; 
    array.forEach(el => {
       hash[el] = hash[el] || {
          value: el, count: 0 };
          hash[el].count++; });
          keys = Object.keys(hash);
          keys.sort(function (el, b) {
             return hash[el].count - hash[b].count; });
             min = hash[keys[0]].count;
             return keys. filter(el => {
                return hash[el].count === min;
       }).
       map(el => {
          return {
            'least': hash[el].value,
            'most': maxEl
          }; 
    }); 
 };



//Write function that takes a string as an argument and returns a boolean. True if Palindrome and false if not

const isPalindrome = function repeat(str) {
    let arr = Array.from(str)
    let forward = arr.slice(0, arr.length).join("");
    let backward = arr.reverse().join("");
  
    console.log(forward);
    console.log(backward);
    console.log(Boolean);
    
  
      if (forward == backward) {
          return true;
      } else {
          return false;
      };
     
  
  };



//Write a funciton that takes an array of numbers and find the pair of adjacent elements
//that has the largest product and returns that number
const largestPair = function(array) {
    let first;
    let second;
    if (array[0] > array[1]) {
        first = array[0];
        second = array[1]
    } else {
        first = array[1];
        second = array[0];
    }

    for (let i = 2; i < array.length; i ++) {
        if (array[i] > first) {
            second = first;
            first = array[i];
        } else if (array[i] > second && array[i] != first)
        second = array[i];
    }
    return (first * second);
}

//Function to Remove Parenthesis
const removeParenth = function(string) {
    let str = '';
    if (str === (/[()]/g, '')) {
        return str.replace(/[()]/g, '');
    } 

  };


// // Write a function called scoreScrabble which takes a string as an
//  argument (a single word) and returns the word's scrabble score as a 
//  number.
const scoreScrabble = function (string) {
    let alphabetScore = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 },
        sum = 0,
        i;

    pharase = phrase.toLowerCase();
    for (i = 0; i < word.length; i++) {
        sum += alphabetScore[word[i]] || 0;
    }
    return sum;
};
