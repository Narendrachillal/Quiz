import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sampleQuestions = [
  {
    questionText: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    questionText: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    questionText: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Wordsworth",
      "William Shakespeare",
      "John Keats",
      "Robert Frost",
    ],
    answer: "William Shakespeare",
  },
  //   {
  //     questionText: "Which planet is known as the Red Planet?",
  //     options: ["Earth", "Mars", "Jupiter", "Saturn"],
  //     answer: "Mars",
  //   },
  //   {
  //     questionText: "What is the chemical symbol for water?",
  //     options: ["O2", "CO2", "H2O", "H2O2"],
  //     answer: "H2O",
  //   },
  //   {
  //     questionText: "What is the largest mammal in the world?",
  //     options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
  //     answer: "Blue Whale",
  //   },
  //   {
  //     questionText: "Which is the smallest prime number?",
  //     options: ["0", "1", "2", "3"],
  //     answer: "2",
  //   },
  //   {
  //     questionText: "What is the capital of Japan?",
  //     options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
  //     answer: "Tokyo",
  //   },
  //   {
  //     questionText: "What is the square root of 64?",
  //     options: ["6", "7", "8", "9"],
  //     answer: "8",
  //   },
  //   {
  //     questionText: "What is the currency of the United Kingdom?",
  //     options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
  //     answer: "Pound Sterling",
  //   },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timer === 0) {
      handleTimeout();
    }

    return () => clearInterval(countdown);
  }, [timer]);

  const handleTimeout = () => {
    if (selectedOption === sampleQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(5);
    } else {
      navigate("/result", { state: { score, total: sampleQuestions.length } });
    }
  };

  const handleNext = () => {
    if (selectedOption === sampleQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(5);
    } else {
      navigate("/result", { state: { score, total: sampleQuestions.length } });
    }
  };

  return (
    <div>
      <h2>Quiz</h2>
      <p>Time Left: {timer} seconds</p>
      <h3>{sampleQuestions[currentQuestion].questionText}</h3>
      {sampleQuestions[currentQuestion].options.map((opt, idx) => (
        <div key={idx}>
          <input
            type="radio"
            name="option"
            value={opt}
            checked={selectedOption === opt}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          {opt}
        </div>
      ))}
      <button onClick={handleNext} disabled={!selectedOption}>
        {currentQuestion === sampleQuestions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Quiz;
