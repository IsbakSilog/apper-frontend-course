function convertToVowels(word){
return [...word]
.filter(c => 'aeiouAEIOU'
.includes(c))
.join(''); 
}

console.log(convertToVowels('HelloAE World'))
