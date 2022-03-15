import "./Advice.scss";

const Advice = props => {
  let advice = "A wise person once said, you must first click a button before you receive advice.";
  if (props.sendAdvice.advice !== undefined) {
    advice = props.sendAdvice.advice;
  }
  let id = "000";
  if (props.sendAdvice.id !== undefined) {
    id = props.sendAdvice.id;
  }

  return (
    <div className="advice">
      <h2 className="advice__header">Advice #{id}</h2>
      <div className="advice__text">"{advice}"</div>
    </div>
  );
};

export default Advice;
