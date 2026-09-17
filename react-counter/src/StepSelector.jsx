export const StepSelector = (props) => {
  return (
    <select value={props.step} onChange={props.onStepChange}>
      <option value={1}>1</option>
      <option value={5}>5</option>
      <option value={10}>10</option>
    </select>
  );
};
