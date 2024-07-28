# Quiz App

A dynamic quiz application built with React and Redux that fetches questions from the Open Trivia Database API and allows users to answer questions and see their scores.

## Features

- Fetches trivia questions from the Open Trivia Database API.
- Supports multiple categories, difficulties, and question types.
- Displays questions and possible answers.
- Tracks and displays the user's score.
- "Next" button to manually proceed to the next question.
- Responsive and user-friendly interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Redux Store](#redux-store)
- [Actions](#actions)
- [Reducers](#reducers)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mishismail/quiz-app.git

2. Navigate to the project directory:

   ```bash
   cd quiz-app

3. Install dependencies:
   
   ```bash
   npm install

4. Start the development server:

   ```bash
   npm start

## Usage
- Open your browser and navigate to http://localhost:3000.
- Select your desired quiz settings (category, difficulty, type, and number of questions).
- Click the "Start Quiz" button to fetch questions and begin the quiz.
- Answer the questions by clicking on the options.
- Click the "Next" button to manually proceed to the next question if necessary.
- View your score at the end of the quiz.

## Components
**'src/App.js'**
The main application component that conditionally renders the settings, question, and final screen components based on the current state.

**'src/Components/Question.js'**
Displays the current question and possible answers. Handles user interactions for selecting an answer and proceeding to the next question.

**'src/Components/Settings.js'**
Provides the interface for selecting quiz settings such as category, difficulty, type, and number of questions.

**'src/Components/FinalScreen.js'**
Displays the user's final score and provides an option to restart the quiz.

**'src/Components/FetchButton.js'**
Handles the API request to fetch quiz questions based on the selected settings.

## Redux Store
### State
- **options**: Stores the quiz settings.
- **questions**: Stores the fetched quiz questions.
- **index**: Tracks the current question index.
- **score**: Tracks the user's score.

### Actions
**CHANGE_LOADING**
**CHANGE_CATEGORY**
**CHANGE_DIFFICULTY**
**CHANGE_TYPE**
**CHANGE_AMOUNT**
**SET_QUESTIONS**
**SET_INDEX**
**SET_SCORE**

### Reducers**
The Reducer function in src/Reducer.js handles the state changes based on the dispatched actions.

## Styling
Styles for the application are defined in src/App.css. You can customize the styles to match your desired design.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
