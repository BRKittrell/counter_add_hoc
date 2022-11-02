import { React, useState } from "react";
import Counter from "./components/Counter";
import Count from "./components/Count";
import BackButton from "./components/BackButton";

const App = () => {
  // create some count state that starts at 0
  const [count, setCount] = useState(0);
  // create a button that when clicked increments the count function
  const handleCountClick = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  // if the count state is >= 10, display completed component that simply has an h1 that says completed.
  // In the completed component, add a button that says back that resets the count state to 0 and displays the button.

  if (count < 10) {
    return (
      <div className="App">
        <Count count={count} setCount={setCount} />
        <Counter handleCountClick={handleCountClick} />
      </div>
    );
  } else {
    return <BackButton resetCount={resetCount} />;
  }
};

export default App;
