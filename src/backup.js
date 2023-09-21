import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextDescription from "./components/TextDescription";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#343a40";
      setmode("dark");
      showAlert("Dark Mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      setmode("light");
      showAlert("white Mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text-Utility "
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextDescription
                  title="Enter Your Text"
                  heading="Enter Your Text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About alert={alert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
