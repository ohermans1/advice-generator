import "./App.scss";
import Card from "./components/Card";
import Advice from "./components/Advice";
import Button from "./components/Button";
import Divider from "./components/Divider";
import { useState } from "react";

function App() {
  const [adviceData, getAdviceData] = useState("A wise person once said, you must first click a button before you receive advice.");

  const getAdvice = advice => {
    getAdviceData(advice);
  };

  return (
    <div className="App">
      <Card>
        <Advice sendAdvice={adviceData} />
        <Divider />
        <Button getAdvice={getAdvice} />
      </Card>
    </div>
  );
}

export default App;
