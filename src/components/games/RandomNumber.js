import { useState } from "react";

export function RandomNumber() {
  const [minValue, setMinValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);
  const [generatedNumber, setGeneratedNumber] = useState(null);

  const handleGenerate = () => {
    if (minValue !== null && maxValue !== null) {
      const randomNumber = Math.floor(
        Math.random() * (maxValue - minValue + 1) + minValue
      );
      setGeneratedNumber(randomNumber);
    } else {
      alert("Please enther both minimum and maximum values.");
    }
  };

  const handleReset = () => {
    setGeneratedNumber(null);
    setMinValue(null);
    setMaxValue(null);
  };

  return (
    <div className="number-generator">
      <h1>Random Number Generator</h1>
      <p>
        Keep in mind: The randomness is computer-generated, not truly random.
      </p>
      {generatedNumber ? (
        <>
          <div className="generated-number">{generatedNumber}</div>
          <div className="buttons">
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleGenerate} style={{ marginLeft: "30px" }}>
              Generate
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            type="number"
            value={minValue}
            placeholder="min"
            onChange={(e) => setMinValue(Number(e.target.value))}
          ></input>
          <input
            type="number"
            value={maxValue}
            placeholder="max"
            onChange={(e) => setMaxValue(Number(e.target.value))}
          ></input>
          <button onClick={handleGenerate}>Generate</button>
        </>
      )}
    </div>
  );
}
