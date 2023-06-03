import React from 'react';
import "../App.css";

function QuizResult(props) {
  return (
    <div>
    <div className="image-container">
          <img
            src="/assets/d0333051d24ff9adba8cc63b100016a9.png"
            height="100px"
            width="100px"
          />
        </div>
    <h3>Congratulations!!! You completed the quiz..
    </h3>
    <div>
      Your score:{props.score}<br/>
      Total Score:{props.totalScore}
      </div>
      <button className="button1">Logout</button>
    </div>
  );
}

export default QuizResult;
