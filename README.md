# firebase-modern-js
repo for the fireship course https://fireship.io/courses/js/

## Take aways:
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