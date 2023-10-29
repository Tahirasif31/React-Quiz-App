import { useState } from "react";

const quiz = [
  {
    question: "Who is the first Asian American to feature on US currency?",
    answers: ["Elizabeth Sung", "Anna May Wong", "Jadin Wong", "Vera Wong"],
    id: Math.round(Math.random) * 10000,
    answer: 1,
  },
  {
    question: "“The Amazon Fund” is maintained by which financial institution?",
    answers: [
      "World Bank",
      "IMF0",
      "New Development Bank",
      "Brazilian Development Bank",
    ],
    id: Math.round(Math.random) * 10000,
    answer: 3,
  },
  {
    question:
      "Gateway to the Underworld” is an artefact belonging to which country?",
    answers: ["India", "Sri Lanka", "Mexico", "USA"],
    id: Math.round(Math.random) * 10000,
    answer: 2,
  },
  {
    question: "Grasslands found in Africa are called?",
    answers: ["Prairies", "Steppes", "Savannah", "Pampass"],
    id: Math.round(Math.random) * 10000,
    answer: 2,
  },
  {
    question:
      "What is the underwater mountain system formed by plate tactonic spreading called?",
    answers: [
      "Mid oceanic Ridge",
      "Oceanic Trench",
      "Continental Slope",
      "Abyssal Plains",
    ],
    id: Math.round(Math.random) * 10000,
    answer: 3,
  },
  {
    question: "Which is the southernmost active volcano on earth?",
    answers: ["Mount Dukono", "Mount Rainier", "Mount Semeru", "Mount Erebus"],
    id: Math.round(Math.random) * 10000,
    answer: 3,
  },
  {
    question: "Which forests act as barriers against cyclones?",
    answers: [
      "Alpine forests",
      "Mangrove forests",
      "Evergreen forests",
      "Monsoon forests",
    ],
    id: Math.round(Math.random) * 10000,
    answer: 1,
  },
];

let current = 0;

function App() {
  const [curQuestion, setCurQuestion] = useState(quiz[current]);
  const [answer, setAnswer] = useState("");

  function answerCheck(id) {
    setAnswer(curQuestion.answer === id ? id : alert("wrong answer"));
  }

  function handleQuestionChange() {
    current++;
    console.log(current);
    setCurQuestion(quiz[current]);
    setAnswer("");
  }

  return (
    <div className="App">
      <img src="/pexels.jpeg" alt="main" />
      <div className="content-container">
        <h1>The Great Big Book Quiz</h1>
        <p className="description">
          Practicing for your next big game show? Think you have what it takes
          to take on the masters? Test your knowledge with our literature quiz.
        </p>
        <p className="description">
          Once you're ready to get started, simply answer the first question
          below!
        </p>
      </div>
      <div className="quiz-container">
        <p className="question">{curQuestion?.question}</p>
        <div className="answers">
          {curQuestion?.answers.map((c, i) => (
            <div
              className={`answer ${answer === i ? "right" : ""}`}
              onClick={() => answerCheck(i)}
              key={c.id}
            >
              <span>{c}</span>
              <span className="answer-icon">
                {answer === i ? (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                  </svg>
                )}
                {/* <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg> */}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <span className="btn" onClick={handleQuestionChange}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
          </svg>
        </span>
        <p className="footer-text">Powered by Anonymous</p>
      </div>
    </div>
  );
}

export default App;
