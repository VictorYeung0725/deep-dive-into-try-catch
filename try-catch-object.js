try {
  const user = {
    name: 'victor',
    age: 21,
    // profile: {
    //   color: 'blue',
    // },
  };
  console.log(user.profile.color);

  //any code below the error will not run

  console.log('do i get here');
} catch (error) {
  console.log('some thing bad happen');
  console.log(error);
}

//if dont have catch
// any code below will crash, and did not wrong which is not what we want
