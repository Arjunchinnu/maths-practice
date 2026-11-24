import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function PracticeEngine({ title, min, max, generate }) {
  const navigate = useNavigate();

  const inputRef = useRef(null);
  const answeredRef = useRef(false);

  const [mode, setMode] = useState("select");
  const [from, setFrom] = useState(min);
  const [to, setTo] = useState(max);
  const [count, setCount] = useState(10);

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [seconds, setSeconds] = useState(0);

  const storageKey = `progress_${title}`;

  // Convert numbers, fractions and percentages into numeric values
  const parseAnswer = (value) => {
    const text = String(value).trim();

    if (!text) return null;

    if (text.endsWith("%")) {
      const number = Number(text.slice(0, -1));
      return Number.isFinite(number) ? number / 100 : null;
    }

    if (text.includes("/")) {
      const parts = text.split("/");

      if (parts.length !== 2) return null;

      const numerator = Number(parts[0]);
      const denominator = Number(parts[1]);

      if (
        !Number.isFinite(numerator) ||
        !Number.isFinite(denominator) ||
        denominator === 0
      ) {
        return null;
      }

      return numerator / denominator;
    }

    const number = Number(text);

    return Number.isFinite(number) ? number : null;
  };

  // Check mathematically equivalent answers
  const isCorrectAnswer = (userAnswer, correctAnswer) => {
    const userValue = parseAnswer(userAnswer);
    const correctValue = parseAnswer(correctAnswer);

    if (userValue === null || correctValue === null) return false;

    return Math.abs(userValue - correctValue) < 0.000001;
  };

  // Automatically focus answer box
  useEffect(() => {
    if (mode === "practice" || mode === "test") {
      inputRef.current?.focus();
    }
  }, [index, mode]);

  // Timer
  useEffect(() => {
    if (mode !== "test" && mode !== "practice") return;

    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [mode]);

  // Save statistics
  const saveStats = (correct) => {
    const stats = JSON.parse(
      localStorage.getItem("mathStats") ||
        '{"completed":0,"correct":0,"tests":0}',
    );

    stats.completed += 1;

    if (correct) {
      stats.correct += 1;
    }

    localStorage.setItem("mathStats", JSON.stringify(stats));
  };

  // Start serial practice
  const startPractice = () => {
    const saved = Number(localStorage.getItem(storageKey) || min);

    const list = [];

    for (let i = saved; i <= max; i++) {
      list.push(generate(i));
    }

    if (list.length === 0) {
      alert("Practice completed! Reset progress to practise again.");
      return;
    }

    setQuestions(list);
    setIndex(0);
    setScore(0);
    setAnswer("");
    setFeedback("");
    setSeconds(0);

    answeredRef.current = false;

    setMode("practice");
  };

  // Start random test
  const startTest = () => {
    const list = [];

    for (let i = 0; i < count; i++) {
      const value = Math.floor(Math.random() * (to - from + 1)) + from;

      list.push(generate(value));
    }

    setQuestions(list);
    setIndex(0);
    setScore(0);
    setAnswer("");
    setFeedback("");
    setSeconds(0);

    answeredRef.current = false;

    setMode("test");
  };

  // Move to next question
  const moveToNextQuestion = () => {
    if (index < questions.length - 1) {
      if (mode === "practice") {
        const nextValue = questions[index].value + 1;

        localStorage.setItem(storageKey, nextValue);
      }

      setIndex((i) => i + 1);
      setAnswer("");
      setFeedback("");

      answeredRef.current = false;
    } else {
      if (mode === "practice") {
        localStorage.setItem(storageKey, max + 1);
      }

      if (mode === "test") {
        const stats = JSON.parse(
          localStorage.getItem("mathStats") ||
            '{"completed":0,"correct":0,"tests":0}',
        );

        stats.tests += 1;

        localStorage.setItem("mathStats", JSON.stringify(stats));
      }

      setMode("result");
    }
  };

  // Check answer
  const checkAnswer = (value) => {
    if (value.trim() === "" || answeredRef.current) return;

    const current = questions[index];

    if (isCorrectAnswer(value, current.answer)) {
      answeredRef.current = true;

      setScore((s) => s + 1);
      saveStats(true);

      setFeedback("Correct!");

      setTimeout(() => {
        moveToNextQuestion();
      }, 400);
    } else {
      setFeedback("Try again!");
    }
  };

  // Handle answer
  const handleInput = (value) => {
    if (answeredRef.current) return;

    setAnswer(value);
    setFeedback("");

    if (
      value.trim() !== "" &&
      isCorrectAnswer(value, questions[index].answer)
    ) {
      checkAnswer(value);
    }
  };

  // On-screen keypad
  const handleKeyPress = (key) => {
    if (answeredRef.current) return;

    let newAnswer = answer;

    if (key === "C") {
      newAnswer = "";
    } else if (key === "⌫") {
      newAnswer = answer.slice(0, -1);
    } else {
      newAnswer = answer + key;
    }

    handleInput(newAnswer);
  };

  const keypadButtons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "/",
    "0",
    ".",
    "%",
    "⌫",
  ];

  return (
    <div className="practice-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Dashboard
      </button>

      <h1>{title}</h1>

      {/* Practice Settings */}

      {mode === "select" && (
        <div className="practice-settings">
          <h2>Choose Practice Mode</h2>

          <button onClick={startPractice}>Serial Practice</button>

          <h3>Test Settings</h3>

          <label>From: </label>

          <select
            value={from}
            onChange={(e) => {
              const value = Number(e.target.value);

              setFrom(value);

              if (value > to) {
                setTo(value);
              }
            }}
          >
            {Array.from({ length: max - min + 1 }, (_, i) => i + min).map(
              (n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ),
            )}
          </select>

          <label> To: </label>

          <select value={to} onChange={(e) => setTo(Number(e.target.value))}>
            {Array.from({ length: max - from + 1 }, (_, i) => i + from).map(
              (n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ),
            )}
          </select>

          <br />
          <br />

          <label>Questions: </label>

          <select
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          >
            {[10, 20, 30, 50].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>

          <br />
          <br />

          <button onClick={startTest}>Start Test</button>
        </div>
      )}

      {/* Questions */}

      {(mode === "practice" || mode === "test") && (
        <div className="question-card">
          <div className="question-info">
            <span>
              Question {index + 1} / {questions.length} <span className="feedback">{feedback}</span>
            </span>

            <span>
              {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
            </span>
          </div>

          

          <h1>{questions[index].question}</h1>

          {/* Answer Input - No Mobile Keyboard */}

          

          <input
            ref={inputRef}
            type="text"
            inputMode="none"
            value={answer}
            readOnly
            placeholder="Use the keypad below"
          />

          {/* On-screen Keypad */}

          <div className="number-keypad">
            {keypadButtons.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => handleKeyPress(key)}
                disabled={answeredRef.current}
              >
                {key}
              </button>
            ))}

            <button
              type="button"
              className="clear-btn"
              onClick={() => handleKeyPress("C")}
            >
              CLEAR
            </button>
          </div>
        </div>
      )}

      {/* Result */}

      {mode === "result" && (
        <div className="question-card">
          <h2>Practice Completed!</h2>

          <h1>
            {score} / {questions.length}
          </h1>

          <h3>Accuracy: {Math.round((score / questions.length) * 100)}%</h3>

          <p>
            Time Taken: {Math.floor(seconds / 60)} minutes {seconds % 60}{" "}
            seconds
          </p>

          <button onClick={() => setMode("select")}>Back to Practice</button>
        </div>
      )}
    </div>
  );
}

export default PracticeEngine;
