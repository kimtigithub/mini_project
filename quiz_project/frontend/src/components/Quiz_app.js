import React, { useEffect, useState } from "react";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";
import "../App.css";

function Quiz_app() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    var countDown = 300;
    var timer = setInterval(() => {
      if (countDown == 0) {
        clearInterval(timer);
      } else {
        countDown -= 1;
        console.log(countDown);
        setMinutes(Math.floor(countDown / 60));
        setSeconds(countDown % 60);
      }
    }, 1000);
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  return (
    <div className="app">
      <div className="timer">
        <h2>Timer</h2>
        <h2>
          {minutes}:{seconds}
        </h2>
      </div>
      <div className="container-quiz_app">
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} />
        ) : (
          <>
            <div className="image-container">
              <img
                src="/assets/d0333051d24ff9adba8cc63b100016a9.png"
                height="100px"
                width="100px"
              />
            </div>
            <center>
              <PsychologyAltIcon sx={{ fontSize: 30 }} />{" "}
              <h3> General Knowledge</h3>
            </center>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-text">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${
                      clickedOption == i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz_app;
