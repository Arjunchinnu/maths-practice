import React from "react";
import PracticeEngine from "../components/PracticeEngine";

const directions = [
  "Fraction to Decimal",
  "Fraction to Percentage",
  "Decimal to Fraction",
  "Decimal to Percentage",
  "Percentage to Fraction",
  "Percentage to Decimal"
];

function Conversions() {

  return (
    <div className="practice-container">

      {/* <h1>Fraction - Decimal - Percentage</h1> */}
      <h1>Conversions</h1>

      <p>Select the conversion direction.</p>

      <div className="table-grid">

        {directions.map(direction => (

          <button
            key={direction}
            onClick={() => {
              localStorage.setItem("conversionDirection", direction);
              window.location.href = "/conversions/practice";
            }}
          >
            {direction}
          </button>

        ))}

      </div>

    </div>
  );
}

export default Conversions;