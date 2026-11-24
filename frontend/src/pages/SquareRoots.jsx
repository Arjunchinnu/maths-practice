import React from "react";
import PracticeEngine from "../components/PracticeEngine";

function SquareRoots() {
  return (
    <PracticeEngine
      title="Square Roots"
      min={1}
      max={50}
      generate={(n) => ({
        value: n,
        question: `√${n * n} = ?`,
        answer: n
      })}
    />
  );
}

export default SquareRoots;