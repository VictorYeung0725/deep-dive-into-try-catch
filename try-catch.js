try {
  const message = 'hello there';
  console.log(message);
  throw 'boom!';
} catch (error) {
  console.error(error);
  console.log('caught');
}

console.log('hi');
