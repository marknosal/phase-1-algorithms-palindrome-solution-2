function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let i = 0; i < word.length / 2; i++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) {
    // if the letters don't match, return false
      return false
    }
  }
    // if we reach the middle, and all the letters match, return true
    return true
}

/* 
  Add your pseudocode here
  iterate from the beginning to the middle
    check each letter to the corresponding letter from the end
      if any letters dont match => return false
      if all match => return true
*/

/*
iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
