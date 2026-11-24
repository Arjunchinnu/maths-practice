import React from "react";
import PracticeEngine from "../components/PracticeEngine";

function CubeRoots() {
  return (
    <PracticeEngine
      title="Cube Roots"
      min={1}
      max={30}
      generate={(n) => ({
        value: n,
        question: `∛${n * n * n} = ?`,
        answer: n
      })}
    />
  );
}

export default CubeRoots;