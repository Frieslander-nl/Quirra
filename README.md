# Quirra

**Quirra** is a lightweight Node.js library that simplifies console interactions in the terminal. It helps you create clean, user-friendly prompts using minimal code — perfect for developers who want a Python-like experience when working with terminal input.

---

## ✨ Features

- ✅ Ask a single question using a simple syntax
- ✅ Ask multiple questions in sequence
- ✅ Create interactive terminal menus
- ✅ Validate user input with custom rules
- ✅ Clean async/await-based API

---

## 📦 Installation

Install via npm:

```bash
npm install quirra
```

Or with yarn:

```bash
yarn add quirra
```

---

## 🚀 Usage Examples

### 1. Ask a Single Question

```js
const { ask } = require("quirra");

(async () => {
  const name = await ask("What's your name? ");
  console.log("Hello,", name);
})();
```

---

### 2. Ask Multiple Questions

```js
const { askMultiple } = require("quirra");

(async () => {
  const questions = [
    { key: "name", question: "What's your name? " },
    { key: "age", question: "How old are you? " },
    { key: "hobby", question: "What's your favorite hobby? " },
  ];

  const answers = await askMultiple(questions);
  console.log("Your answers:", answers);
})();
```

---

### 3. Create a Menu

```js
const { menu } = require("quirra");

(async () => {
  const choice = await menu("Choose an option:", [
    "Start Game",
    "Load Game",
    "Exit",
  ]);

  console.log("You selected:", choice);
})();
```

---

### 4. Ask with Validation

```js
const { askValidated } = require("quirra");

(async () => {
  const age = await askValidated(
    "Enter your age: ",
    (input) => !isNaN(input),
    "Please enter a valid number."
  );

  console.log("Your age is:", age);
})();
```

---

## 🧰 API Reference

### `ask(question: string) → Promise<string>`

Prompts the user for input and returns it.

---

### `askMultiple(questions: { key: string, question: string }[]) → Promise<object>`

Asks a list of questions and returns an object of answers.

Example return:

```js
{
  name: "John",
  age: "30"
}
```

---

### `menu(prompt: string, choices: string[]) → Promise<string>`

Displays a numbered menu and returns the selected choice.

---

### `askValidated(question: string, validator: Function, errorMessage?: string) → Promise<string>`

Prompts the user and checks input using a validation function. If the input is invalid, it will repeat until valid.

---

## 📄 License

MIT © 2025 [Frieslander-nl]

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to make Quirra even better.

---

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/quirra)
- [GitHub Repository](https://github.com/Frieslander-nl/Quirra)

---
