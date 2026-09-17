export const CounterControls = (props) => {
  return (
    <>
      <button onClick={props.onIncrease}>+</button>
      <button onClick={props.onDecrease}>-</button>
      <button onClick={props.onReset}>Reset</button>
    </>
  );
};
