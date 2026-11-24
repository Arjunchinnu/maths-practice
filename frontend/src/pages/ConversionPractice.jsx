import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PracticeEngine from "../components/PracticeEngine";

// Fraction, Decimal and Percentage conversion data
const conversions = [
  { fraction: "1/2", decimal: "0.5", percentage: "50%" },
  { fraction: "1/3", decimal: "0.333", percentage: "33.33%" },
  { fraction: "1/4", decimal: "0.25", percentage: "25%" },
  { fraction: "1/5", decimal: "0.2", percentage: "20%" },
  { fraction: "1/6", decimal: "0.1667", percentage: "16.67%" },
  { fraction: "1/7", decimal: "0.142857", percentage: "14.2857%" },
  { fraction: "1/8", decimal: "0.125", percentage: "12.5%" },
  { fraction: "1/9", decimal: "0.111", percentage: "11.11%" },
  { fraction: "1/10", decimal: "0.1", percentage: "10%" },
  { fraction: "1/11", decimal: "0.0909", percentage: "9.09%" },
  { fraction: "1/12", decimal: "0.0833", percentage: "8.33%" },
  { fraction: "1/16", decimal: "0.0625", percentage: "6.25%" },
  { fraction: "1/20", decimal: "0.05", percentage: "5%" },
  { fraction: "1/25", decimal: "0.04", percentage: "4%" },
  { fraction: "1/40", decimal: "0.025", percentage: "2.5%" },
  { fraction: "1/50", decimal: "0.02", percentage: "2%" },
  { fraction: "1/100", decimal: "0.01", percentage: "1%" },
];

// Generate conversion questions
function generateConversion(value, direction) {
  const item = conversions[value - 1];

  let question = "";
  let answer = "";

  switch (direction) {
    case "Fraction to Decimal":
      question = `Convert ${item.fraction} into Decimal`;
      answer = item.decimal;
      break;

    case "Fraction to Percentage":
      question = `Convert ${item.fraction} into Percentage`;
      answer = item.percentage;
      break;

    case "Decimal to Fraction":
      question = `Convert ${item.decimal} into Fraction`;
      answer = item.fraction;
      break;

    case "Decimal to Percentage":
      question = `Convert ${item.decimal} into Percentage`;
      answer = item.percentage;
      break;

    case "Percentage to Fraction":
      question = `Convert ${item.percentage} into Fraction`;
      answer = item.fraction;
      break;

    case "Percentage to Decimal":
      question = `Convert ${item.percentage} into Decimal`;
      answer = item.decimal;
      break;

    default:
      question = "Invalid conversion";
      answer = "";
  }

  return {
    value,
    question,
    answer,
  };
}

// Main conversion practice page
function ConversionPractice() {
  const navigate = useNavigate();

  const direction = localStorage.getItem("conversionDirection");

  useEffect(() => {
    if (!direction) {
      navigate("/conversions");
    }
  }, [direction, navigate]);

  if (!direction) {
    return null;
  }

  const generate = (value) => generateConversion(value, direction);

  return (
    <div>
      <PracticeEngine title={direction} min={1} max={17} generate={generate} />
    </div>
  );
}

export default ConversionPractice;
