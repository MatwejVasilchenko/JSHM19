function firstAndLastLetters(inputArray) {
    const resultArray = inputArray.map((str) => {
      const firstLetter = str[0]; 
      const lastLetter = str[str.length - 1];
      return firstLetter + lastLetter; 
    });
  
    return resultArray;
  }
  
  const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];
  const result = firstAndLastLetters(array2);
  console.log(result); 
  