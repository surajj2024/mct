# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), a popular toolchain for creating React applications with a good developer experience right out of the box.

## Table of Contents

- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
- [Folder Structure](#folder-structure)
- [Supported Browsers](#supported-browsers)
- [Learn More](#learn-more)
  - [Code Splitting](#code-splitting)
  - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
  - [Making a Progressive Web App](#making-a-progressive-web-app)
  - [Advanced Configuration](#advanced-configuration)
  - [Deployment](#deployment)
  - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) directly into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, these files must exist with exact filenames:

- `public/index.html` is the page template.
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

## Supported Browsers

By default, Create React App supports all modern browsers including Edge, Firefox, Chrome, Safari, and mobile browsers.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved [here](https://facebook.github.io/create-react-app/docs/code-splitting).

### Analyzing the Bundle Size

This section has moved [here](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size).

### Making a Progressive Web App

This section has moved [here](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app).

### Advanced Configuration

This section has moved [here](https://facebook.github.io/create-react-app/docs/advanced-configuration).

### Deployment

This section has moved [here](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run build` fails to minify

This section has moved [here](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).

## Additional Tips and Tricks

### Environment Variables

Create React App uses `.env` files to allow you to customize your app's configuration. You can create a `.env` file in the root of your project to set environment variables. For example:

```sh
REACT_APP_API_URL=http://api.example.com
```

### Using CSS Preprocessors

If you prefer using a CSS preprocessor like SASS, you can integrate it into your Create React App project. First, install the necessary packages:

```sh
npm install node-sass
```

Then, rename your `.css` files to `.scss` and import them normally.

### Linting and Formatting

Create React App comes with ESLint for linting and Prettier for code formatting. You can customize their configurations by creating `.eslintrc.json` and `.prettierrc` files in the root of your project.

### Integrating with Backend Services

You can easily integrate your React app with backend services. Use `fetch` or libraries like `axios` to make HTTP requests to your backend API.

### State Management

For larger applications, you might want to use state management libraries like Redux or Context API. Create React App is compatible with these libraries out of the box.

### Testing

Create React App uses Jest for testing. You can create test files with the `.test.js` extension to add tests. For example:

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

### TypeScript

Create React App supports TypeScript. You can create a new TypeScript app by running:

```sh
npx create-react-app my-app --template typescript
```

### Customizing Webpack Config

If you need to customize the Webpack configuration, you will need to eject your app first by running `npm run eject`. After ejecting, you can modify the Webpack config files directly.

By following these tips and tricks, you can enhance your Create React App experience and build robust React applications. Happy coding!