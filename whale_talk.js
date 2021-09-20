const input = 'Wisely, and slow. They stumble that run fast.'
resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e' || input[i] === 'u' ) {
    
    if (input[i] === 'e') {
      dblVowelE = (input[i].toUpperCase() + 'E');
      resultArray.push(dblVowelE);
    
    } else {
        if (input[i] === 'u') {
        dblVowelU = (input[i].toUpperCase() + 'U');
        resultArray.push(dblVowelU);
        }

    } 
  } if (input[i] === 'i' || input[i] === 'a' || input[i] === 'o') {
    otherVowels = input[i].toUpperCase();
    resultArray.push(otherVowels);
  } 

  }

  console.log(resultArray.join(''));


