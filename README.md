# 🚦 CryptoLight

## Motivation

CryptoLight is a place where anyone can get a quick snapshot of the crypto market over the past 24 hours and make informed decisions. The analytics are based on calculated metrics from the Top 100 coins.

The main goal of the project is to give everyone the ability to make investment decisions without needing deep knowledge of the crypto market. That said, the app might show some metrics that only more experienced crypto investors will fully appreciate.

The app analyzes the market and shows a simple traffic light—basically answering the question: 'Is today a good day to invest in crypto?'

- 🔴 - Not a good time to invest
- 🟡 - Market is neutral: could be worth waiting, or for some, a good time to jump in
- 🟢 - A favorable time to invest

The app is open to everyone—no sign-up required.

## About the app

**Key Features**:

- Shows a simple traffic light to help guide your investment decisions
- Lets you add assets to your personal watchlist
- Easily remove assets from your watchlist
- Your watchlist is saved, so it’s right there next time you open the app
- Browse the Top 100 cryptocurrencies
- View your customized watchlist anytime
- Get quick access to key crypto market metrics

### Some screenshots

#### 🔴 light

#### 🟡 light

<img src="./screenshots/CryptoLight-neutral.png" />

#### 🟢 light

### Usage

You can run project locally.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname
    }
  }
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules
  }
});
```
