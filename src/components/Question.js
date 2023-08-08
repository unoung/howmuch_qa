import React from "react";

export default function Question({
  question,
  options,
  selectedOption,
  onOptionSelect,
}) {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => onOptionSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
