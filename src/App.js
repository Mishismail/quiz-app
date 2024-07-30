// src/App.js

import React from 'react';
import { useSelector } from 'react-redux';

import Settings from './components/Settings.js';
import Question from './components/Question.js';
import FinalScreen from './components/FinalScreen.js';
import './App.css';

function App() {
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.index);

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />;
  } else if (!questions.length) {
    component = <Settings />;
  } else {
    component = <FinalScreen />;
  }

  return (
    <div className="App">
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="app-container">
        <div className="quiz-container">{component}</div>
      </div>
    </div>
  );
}

export default App;

