# firebase-modern-js
repo for the fireship course https://fireship.io/courses/js/

## How to setup and run test:
1. init npm and form a `package.json` via:
```bash
npm init -y
```

2. modify the `package.json` to allow test and import
```json
// Update the package.json with a test script.
  "type": "module",
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage",
  },
```

then we can run it in terminal with:
```bash
npm run test
```

## Dream App
1. we will use vite and init it via:
```bash
npm init vite@latest
```
in the prompt, fill in project name (here we use `jscourse-tmp`) and framework (here we choose 'vanilla' and Javascript)

2. after init, we give it a test run
```bash
cd jscourse-tmp
npm install
npm run dev
```

> ps - the "RESTful APIs" is a good video for basic interview level RESTful knowledge

3. notice the openAI api doesn't work yet.

7-24-2023: 
Wrap up. Frontend working, api doesnt work yet. 