function reverse(word){
    // return word.split('')
    // .reverse()
    // .join('')
    
    let invertedString = '';
    for (let i = word.length - 1; i >= 0; i--) {
    invertedString += word[i];
    }
    return invertedString;
      

}

console.log(reverse('hello'))