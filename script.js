function letterCombinations(input_digit) {
  //Complete the function
if (digits === "") {
    return [];
  }
const phone = {
	"1":"1",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
	"0": "0",
  };

	const res = [];

function backtrack(index, path) {
    if (path.length === digits.length) {
      res.push(path);
      return;
    }
const letters = phone[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, path + letters[i]);
    }
}
	backtrack(0, "");
  return res;
	
}

module.exports = letterCombinations;
