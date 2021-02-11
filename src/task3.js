// поменять порядок цифр числа n

const reverseNum = num => {
    return +`${num}`.split('').reverse().join('');
  };
  
  console.log(reverseNum(123456789));
