function isPalindrome(word){
    let revword = word.split('').reverse().join('')
    if (revword===word){
        return true
    }else{
        return false
    }

}

const word = 'racecar'
if (isPalindrome(word)) {
  console.log('It is a palindrome!')
} else {
  console.log('It is not a palindrome!')
}