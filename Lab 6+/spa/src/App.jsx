import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/homepage/Homepage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
