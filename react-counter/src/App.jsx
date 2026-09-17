import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { CounterControls } from "./CounterControls";
import { StepSelector } from "./StepSelector";
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [clicks, setClicks] = useState(0);
  function increase() {
    setCount((prev) => prev + step);
    setClicks((prev) => prev + 1);
  }

  function decrease() {
    setCount((prev) => Math.max(0, prev - step));
    setClicks((prev) => prev + 1);
  }

  function reset() {
    setCount(0);
    setClicks((prev) => prev + 1);
  }
  const status = count === 0 ? "Đang ở 0" : "Đang đếm";
  function handleStepChange(e) {
    setStep(Number(e.target.value));
  }
  return (
    <>
      <CounterControls
        onIncrease={increase}
        onDecrease={decrease}
        onReset={reset}
      />

      <StepSelector step={step} onStepChange={handleStepChange} />
      <CounterDisplay count={count} clicks={clicks} status={status} />
    </>
  );
}

export default App;
