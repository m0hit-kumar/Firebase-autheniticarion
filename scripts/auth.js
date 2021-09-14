const signupform = document.querySelector("#signup-form");
// console.log(signupform);
signupform.addEventListener("submit", (e) => {
  e.preventDefault();

  //get user info

  const email = signupform["signup-email"].value;
  const password = signupform["signup-password"].value;

  console.log(email, password);

  // signup the users

  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred);
  });
});
