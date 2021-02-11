// Входит ли цифра 3 в запись числа n2

const includes = num => {
  return `${num ** 2}`.includes('3');
};

console.log(includes(1));
console.log(includes(2));