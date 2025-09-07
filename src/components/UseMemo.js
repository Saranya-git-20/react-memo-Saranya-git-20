import React, { useMemo } from "react";

function UseMemoExample({ counter }) {
  // Simulate expensive calculation
  const expensiveCalculation = (num) => {
    console.log("Running expensive calculation...");
    for (let i = 0; i < 1000000000; i++) {} // heavy loop
    return num * 2;
  };

  // Memoize result
  const memoizedValue = useMemo(() => expensiveCalculation(counter), [counter]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Counter × 2 = {memoizedValue}</p>
    </div>
  );
}

export default UseMemoExample;
