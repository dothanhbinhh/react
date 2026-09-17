export const CounterDisplay = (props) => {
  return (
    <>
      <div> Giá trị: {props.count}</div>
      <div>Số lần click: {props.clicks}</div>
      <div>Trạng thái: {props.status}</div>
    </>
  );
};
