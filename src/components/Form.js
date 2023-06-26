import React, { useState } from "react";
const initialInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};
const Form = (props) => {
  const [userInput, setUserInput] = useState(initialInput);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    props.calculateHandler(userInput);
  };
  const resetHandler = () => {
    setUserInput(initialInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [input]: +value,
      };
    });
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(e) => {
                inputChangeHandler("current-savings", e.target.value);
              }}
              value={userInput["current-savings"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(e) => {
                inputChangeHandler("yearly-contribution", e.target.value);
              }}
              value={userInput["yearly-contribution"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(e) => {
                inputChangeHandler("expected-return", e.target.value);
              }}
              value={userInput["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(e) => {
                inputChangeHandler("duration", e.target.value);
              }}
              value={userInput["duration"]}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
