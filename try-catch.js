try {
  const message = 'hello there';
  throw 'boom!';
} catch (error) {
  console.error(error);
  console.log('caught');
}

console.log('hi');
