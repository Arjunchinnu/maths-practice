import React, { useState } from "react";
import PracticeEngine from "../components/PracticeEngine";

function Tables() {

  const [selectedTable, setSelectedTable] = useState(null);

  if (selectedTable) {
    return (
      <PracticeEngine
        title={`Table ${selectedTable}`}
        min={1}
        max={10}
        generate={(n) => ({
          value: n,
          question: `${selectedTable} × ${n} = ?`,
          answer: selectedTable * n
        })}
      />
    );
  }

  return (
    <div className="practice-container">

      <h1>Multiplication Tables</h1>

      <p>Select the table you want to practise.</p>

      <div className="table-grid">

        {Array.from({ length: 25 }, (_, i) => i + 1).map(n => (

          <button
            key={n}
            onClick={() => setSelectedTable(n)}
          >
            {n}
          </button>

        ))}

      </div>

      <button className="back-button" onClick={() => window.location.href = "/"}>
        ← Dashboard
      </button>

    </div>
  );
}

export default Tables;