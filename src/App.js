import logo from './logo.svg';
import './App.css';
import Home from './components/home'


import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Requests_Slot1 from './components/requests_slot1';
import Requests_Slot2 from './components/requests_slot2';
import Requests_Slot3 from './components/requests_slot3';
import Requests_Slot4 from './components/requests_slot4';
import Requests_Slot5 from './components/requests_slot5';
import Accepted from './components/accepted';
import Rejected from './components/rejected';
import Pending from './components/pending';



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/requests_slot1" element={<Requests_Slot1/>}/>
      <Route path ="/requests_slot2" element={<Requests_Slot2/>}/>
      <Route path ="/requests_slot3" element={<Requests_Slot3/>}/>
      <Route path ="/requests_slot4" element={<Requests_Slot4/>}/>
      <Route path ="/requests_slot5" element={<Requests_Slot5/>}/>
      <Route path ="/requests_slot5" element={<Requests_Slot5/>}/>
      <Route path ="/accepted" element={<Accepted/>}/>
      <Route path ="/rejected" element={<Rejected/>}/>
      <Route path ="/pending" element={<Pending/>}/>      
        
      
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
