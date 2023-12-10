/*
    1. Assign the following object to a variable called "user":
        { name: "Misha", age: 22, settings: {colour: "blue"} }
    2. Log out "Creating user..."
    3. Try to log out: user.profile.colour
    4. Log out "User created!"
    5. Run the code and observe the behaviour

    6. How would you fix this code (without changing steps 1-4
       or the user Object)? Also, add any appropriate logging 
       you feel makes sense.
*/

try {
  const user = { name: 'Misha', age: 22, settings: { colour: 'blue' } };

  console.log('Creating user...');
  console.log(user.profile.colour); //undefined.colour
  throw new Error(
    'the user object does not have the user.profile.colour properties'
  );

  //This line of code will never happen
  // which is a good case for the program
  // for example if we have try to do something which must be completed or finished without problem
  // then we will have next action
  // this behavior prevent us to do the next action
  // realistic exmaple
  // if user does not have a valid account and password
  // we will not create this user
  // then the program should stop at here and will not process the creating step
  console.log('User created');
} catch (error) {
  console.error(error);
}

console.log('Program completed');
