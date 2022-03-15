import "./Advice.scss";

const Advice = props => {
  return (
    <div className="advice">
      <h2 className="advice__header">Advice #{props.sendAdvice.id}</h2>
      <div className="advice__text">"{props.sendAdvice.advice}"</div>
    </div>
  );
};

export default Advice;
