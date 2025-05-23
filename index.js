const readline = require('readline');

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}



async function askMultiple(questions) {
  const answers = {};

  for (const question of questions) {
    answers[question.key] = await ask(question.question);
  }

  return answers;
}

async function menu(promptText, choices) {
  console.log(promptText);

  for (let i = 0; i < choices.length; i++) {
    console.log(`${i + 1}. ${choices[i]}`);
  }

  console.log()

  while (true) {
    const input = await ask("Enter a number: ");
    const selectedIndex = parseInt(input) - 1;

    if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < choices.length) {
      return choices[selectedIndex];
    }

    console.log(`Invalid choice. Please enter a number between 1 and ${choices.length}.`);
  }
}

async function askValidated(question, validatorFn, errorMessage = "Invalid input. Please try again.") {
  while (true) {
    const input = await ask(question);

    if (validatorFn(input)) {
      return input;
    }

    console.log(errorMessage);
  }
}
 

      

module.exports = { ask, askMultiple, menu, askValidated };
