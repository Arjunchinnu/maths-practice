import React from "react";
import PracticeEngine from "../components/PracticeEngine";

function Cubes() {
  return (
    <PracticeEngine
      title="Cubes"
      min={1}
      max={20}
      generate={(n) => ({
        value: n,
        question: `${n}³ = ?`,
        answer: n * n * n
      })}
    />
  );
}

export default Cubes;