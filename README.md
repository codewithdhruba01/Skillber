# Skillber

Skillber is a simple and extensible CLI tool built with **TypeScript**. It helps automate and organize tasks (called "skills") using a modular and scalable structure.

## 🚀 Features

- Built with **TypeScript**
- Modular skill system
- Simple command-line interface
- Easily extendable with new skills

## 📦 Installation

```bash
git clone https://github.com/codewithdhruba01/Skillber.git
cd Skillber
npm install
````

## ▶️ Usage

To run a skill from the command line:

```bash
npm run start -- <skill-name> [options]
```

Example:

```bash
npm run start -- greet --name Dhruba
```

## 🛠️ Development

To start development:

```bash
npm run dev
```

To build the project:

```bash
npm run build
```

To run tests (if available):

```bash
npm test
```



## ✨ Creating a New Skill

Create a new file inside the `src/skills/` directory:

```ts
export default function mySkill(args: any) {
  console.log("Running my skill with args:", args);
}
```


> Made with ❤️ by [Dhrubaraj](https://github.com/codewithdhruba01)


