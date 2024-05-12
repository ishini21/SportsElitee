import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import FeedbackDetails from "./Components/FeedbackDetails/FeedbackDetails";
import AddFb from './Components/AddFb/AddFb';
import Update from './Components/UpdateFeedback/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path= "/" element = {<Home/>}/> 
          <Route path= "/mainhome" element = {<Home/>}/>
          <Route path= "/AddFeedback" element = {<AddFb/>}/>
          <Route path= "/Feedbackdetails" element = {<FeedbackDetails/>}/>
          <Route path= "/Feedbackdetails/:id" element = {<Update/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
