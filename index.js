function reverseString(str) {
  let returnstr = "";
  for (let i = str.length - 1; i > -1; i--) {
    returnstr += str[i];
  }
  return returnstr;
}

function palindrome(str) {
  return str === reverseString(str);
}
