import React from "react";
import { useNavigate } from "react-router-dom";
import PracticeEngine from "../components/PracticeEngine";

// 20 fraction examples
const fractions = [
  [1, 2],
  [1, 4],
  [3, 4],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [1, 8],
  [3, 8],
  [5, 8],
  [7, 8],
  [1, 10],
  [3, 10],
  [7, 10],
  [9, 10],
  [1, 20],
  [3, 20],
  [7, 20],
  [11, 20],
  [19, 20],
];

function generateConversion(value, direction) {
  const [numerator, denominator] = fractions[value - 1];

  const decimal = numerator / denominator;
  const percentage = decimal * 100;

  const fractionText = `${numerator}/${denominator}`;

  const decimalText = Number(decimal.toFixed(6)).toString();

  const percentageText =
    Number(percentage.toFixed(6)).toString() + "%";

  let question = "";
  let answer = "";

  switch (direction) {
    case "Fraction to Decimal":
      question = `Convert ${fractionText} into Decimal`;
      answer = decimalText;
      break;

    case "Fraction to Percentage":
      question = `Convert ${fractionText} into Percentage`;
      answer = percentageText;
      break;

    case "Decimal to Fraction":
      question = `Convert ${decimalText} into Fraction`;
      answer = fractionText;
      break;

    case "Decimal to Percentage":
      question = `Convert ${decimalText} into Percentage`;
      answer = percentageText;
      break;

    case "Percentage to Fraction":
      question = `Convert ${percentageText} into Fraction`;
      answer = fractionText;
      break;

    case "Percentage to Decimal":
      question = `Convert ${percentageText} into Decimal`;
      answer = decimalText;
      break;

    default:
      question = "Invalid conversion";
      answer = "0";
  }

  return {
    value,
    question,
    answer,
  };
}

function ConversionPractice() {
  const navigate = useNavigate();

  const direction = localStorage.getItem("conversionDirection");

  if (!direction) {
    navigate("/conversions");
    return null;
  }

  const generate = (value) =>
    generateConversion(value, direction);

  return (
    <div>
      <PracticeEngine
        title={direction}
        min={1}
        max={20}
        generate={generate}
      />
    </div>
  );
}

export default ConversionPractice;