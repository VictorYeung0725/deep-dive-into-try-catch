const message = 'Meo';
try {
  // const message = 'hello';
  console.log(message);
  throw new Error('Oh no');
} catch (error) {
  console.log(error);
  console.log(message);
  // to solve this may need another try catch block to prevent the program from crash
}

console.log('Program completed');
