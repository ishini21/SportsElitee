import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Schedules from './Components/Schedules/Schedules';
import AddSchedule from './Components/AddSchedule/AddSchedule';
import UpdateSchedule from './Components/UpdateSchedule/UpdateSchedule';
import Interface from './Components/Interface/Interface';
import Main from './Components/Main/Main';
import Cricket from './Components/Cricket/Cricket';
import Football from './Components/Football/Football';
import Badminton from './Components/Badminton/Badminton';
import Swimming from './Components/Swimming/Swimming';
import Volleyball from './Components/Volleyball/Volleyball';





function App() {
  return (
    <div >
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/mainhome' element={<Main/>}/>
          <Route path='/scheduleinterface' element={<Interface/>}/>
          <Route path='/schedules' element={<Schedules/>}/>
          <Route path='/addSchedules' element={<AddSchedule/>}/>
          <Route path='/updateSchedules' element={<UpdateSchedule/>}/>
          <Route path='/schedules/:id' element={<UpdateSchedule/>}/>
          <Route path='/cricketpage' element={<Cricket/>}/>
          <Route path='/footballpage' element={<Football/>}/>
          <Route path='/badmintonpage' element={<Badminton/>}/>
          <Route path='/volleyballpage' element={<Volleyball/>}/>
          <Route path='/swimmingpage' element={<Swimming/>}/>
          
        </Routes>
      </React.Fragment>
     
    </div>
  );
}

export default App;
