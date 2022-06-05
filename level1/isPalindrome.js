/**
 * Determines whether the given string is a palindrome, 
 * i.e. if you were to reverse the order of the characters inside the string, 
 * you would get back the original string.
 */
function isPalindrome(str) {
  let a = null 
  if(str.length==0 || str.length ==1){
    return true
  }
  for (i=0; i<str.length/2; i++){
    if ( str[i] == str[str.length-1-i])
     {  a = true
    } else {
        a = false 
    }
  }
  return a  
}


describe('isPalindrome', function() {
  const assert = require("chai").assert;

  it('works for empty string', function() {
    assert.isTrue(isPalindrome(''));
  });

  it('works for single characters', function() {
    assert.isTrue(isPalindrome('x'));
    assert.isTrue(isPalindrome('c'));
  });

  it('works for double characters', function() {
    assert.isTrue(isPalindrome('xx'));
    assert.isTrue(isPalindrome('gg'));
    assert.isFalse(isPalindrome('af'));
    assert.isFalse(isPalindrome('yt'));
  });

  it('works for words', function() {
    assert.isTrue(isPalindrome('racecar'));
    assert.isFalse(isPalindrome('potato'));
  });
});