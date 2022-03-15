import "./Button.scss";
import axios from "axios";

const Button = props => {
  const fetchData = async () => {
    const result = await axios("https://api.adviceslip.com/advice");
    props.getAdvice(result.data.slip);
  };

  return <button className="button" onClick={fetchData} value="test"></button>;
};

export default Button;
