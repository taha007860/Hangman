## Project Description: 🎮

Hangman is a fun and interactive word-guessing game. It was created using React JS. The game challenges players to guess a secret word by guessing one letter at a time. Before the man is hanged, players have a limited number of chances to guess the correct letters; otherwise, the hangman is fully drawn, resulting in a GAME OVER. 💀

This game's implementation offers a user-friendly interface that allows players to easily enter their guesses and track their progress. The game also includes different word lengths and categories to keep players involved and challenged.

In the future, Hangman will be expanded to include even more features. Planned enhancements include the integration of HackerRank challenges into the game. Players will have to solve HackerRank problems to earn letters that can be used to help solve the hangman puzzle. This integration will increase the game's engagement and educational value for those looking to improve their algorithm and data structure skills. 💡🔍

With Hangman, you can enjoy a classic word-guessing game that's easy to play and hard to put down. And with planned enhancements, the game will only get better and more challenging over time. 🚀

## Video Demo: 📺

Check out this video demo of the Hangman game in action:

https://github.com/taha007860/Registration-Form/assets/96583299/c0185bb8-bddb-4293-b2c8-bc1f1632cef6

## Features: 🎯

Hangman Game includes several components and game mechanics that work together to create a fun and engaging gaming experience:

- **Figure Component:** The Figure component displays the hangman image, with different parts of the figure appearing as the player makes incorrect guesses. 🤖

- **Header Component:** The Header component displays the game's title and challenges players to find the hidden word by entering letters. Good luck! 🤞

- **Notification Component:** The Notification component displays messages to the player throughout the game. If the player has already entered a letter, the component displays an alert informing the player that the letter has already been entered. This can help players avoid repeating guesses and save time. 📢

- **Popup Component:** The Popup component is responsible for displaying the game's outcome when the player either wins or loses the game. If the player loses, it displays the correct answer. In both cases, it provides an option for the player to play again. 🎉

- **Word Component:** The Word component is responsible for displaying the word that the player needs to guess. This component receives the word as a prop and renders each letter of the word as a separate component. It also keeps track of the letters that have been correctly guessed by the player and displays them in their correct positions in the word.

- **Wrong Letters Component:** The Wrong Letters component is responsible for displaying the letters that the player has guessed incorrectly. This component receives an array of wrong letters as a prop and renders each letter as a separate component. It also keeps track of the number of wrong letters guessed and displays the hangman figure accordingly.

## Styling: 🎨

The App.css file contains the styling for the hangman game web page. It sets the background color, font family, and height of the page, as well as the styling for the game container, figure container, wrong letters container, word container, popup container, and notification container.

The figure container contains the SVG graphics for the hangman figure, while the wrong letters container displays the letters that the player has guessed incorrectly. The word container displays the word that the player needs to guess, and the popup container displays a popup message when the game is over.

The notification container displays a notification message when the player has already guessed a letter. The CSS styling also includes animations and transitions for the notification container and popup container to make the game more engaging for the player.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


