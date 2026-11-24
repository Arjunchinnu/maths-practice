import React from "react";
import PracticeEngine from "../components/PracticeEngine";

function Squares() {
  return (
    <PracticeEngine
      title="Squares"
      min={1}
      max={50}
      generate={(n) => ({
        value: n,
        question: `${n}² = ?`,
        answer: n * n
      })}
    />
  );
}

export default Squares;