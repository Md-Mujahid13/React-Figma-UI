import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/layout';
import Home from './pages/home';
import AboutUs from './pages/about';
import Coursestyle1 from './pages/course-style-1';
import CourseDetails from './pages/course-detail';
import Event from './pages/event';
import EventDetails from './pages/event-details';
import Teacher from './pages/teacher';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/courses' element={<Coursestyle1/>}/>
        <Route path='/coursesdetails' element={<CourseDetails/>}/>
        <Route path='/event' element={<Event/>}/>
        <Route path='/eventdetails' element={<EventDetails/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
