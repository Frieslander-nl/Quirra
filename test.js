const { ask, askMultiple, menu, askValidated } = require('./index.js');
/*
(async () => {
        const name = await ask("What's your name? ");
          console.log(`Hello, ${name}!`);
})();
*/
(async () => {
  const questions = [
    { key: "name", question: "What's your name? " },
    { key: "age", question: "How old are you? " },
    { key: "hobby", question: "What's your favorite hobby? " }
  ];

  const answers = await askMultiple(questions);

  console.log("Your answers:");
  console.log(answers);
})();


/*(async () => {
  const choice = await menu("Choose an option:", [
    "Start Game",
    "Load Game",
    "Exit"
  ]);

  console.log("You chose:", choice);
})();


(async () => {
  const age = await askValidated(
    "Enter your age: ",
    input => !isNaN(input),
    "Age must be a number!"
  );

  console.log("Your age is:", age);
})();
*/