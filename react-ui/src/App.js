import logo from "./logo.svg";
import "./App.css";
import Header from "./componment/Header";
import { FeedbackProvider } from "./componment/FeedbackContext";
import FeedbackForm from "./componment/FeedbackForm";
import { Router, Routes } from "react-router-dom";
import FeedbackStats from "./componment/FeedbackStats";
import Feedbacklist from "./componment/Feedbacklist";
import About from "./componment/About";

function App() {
  return (
    <div>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
          <Routes>
            <Route
            path='/'
            element={
              <div>
              <FeedbackForm/>
              <FeedbackStats/>
              <Feedbacklist/>
              </div>
            }
            >
            </Route>
            <Route path='/path' element={<About/>}></Route>
            </Routes>
          </div>
        </Router>
      </FeedbackProvider>
    </div>
  );
}

export default App;
