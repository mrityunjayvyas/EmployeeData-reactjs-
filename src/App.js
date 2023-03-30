import "./App.css";
import Navbar from "./components/Navbar";
import Inputsection from "./components/Inputsection";
import Datasheet from "./components/Datasheet";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      masg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <div className="App">
      <Navbar />
      <Alert alert={alert} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Datasheet showAlert={showAlert} />} />

          <Route
            exact
            path="/addemployeedtails"
            element={<Inputsection showAlert={showAlert} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
