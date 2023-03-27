import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Shop from "./Shop/Shop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
