import logo from './logo.svg';
import './App.css';
import Header from './componment/Header';
import {FeedbackProvider}from './componment/FeedbackContext';
import FeedbackForm from './componment/FeedbackForm';

function App() {
  return (
    <div>

    <FeedbackProvider>
   <Header/>
 <FeedbackForm/>
   </FeedbackProvider>
    </div>
  );
}

export default App;
