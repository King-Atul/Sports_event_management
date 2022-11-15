import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/home';
import Login from './components/Login_Signup/login';
import CitizenSignup from './components/Login_Signup/citizen_signup';
import WorkerDashboard from './components/worker_dashboard/workerDashPage';
import ComplaintPage from './components/complaint/complaintPage';
import UserCompalints from './components/userPages/userPage';
import AdminDashboard from './components/admin_dashboard/adminDashPage';
import TabEmp from './components/admin_dashboard/emptable';
import TabUser from './components/admin_dashboard/usertable';
import Sports_info from './components/admin_dashboard/sports_info';
import Players_list  from './components/players_list/players_list';
import C_player_records from './components/coach_login_access/c_player_records';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<CitizenSignup />}/>
          <Route path='/complaint' element={<ComplaintPage />}/>
          <Route path='/empdash' element={<WorkerDashboard/>}/>
          <Route path='/usercomplaints' element={<UserCompalints/>}/>
          <Route path='/admindash' element={<AdminDashboard/>}/>
          <Route path='/TabEmp' element={<TabEmp/>}/>
          <Route path='/TabUser' element={<TabUser/>}/>
          <Route path='/sports_info' element={<Sports_info/>}/>
          <Route path='/sports_info/players_list' element={<Players_list/>}/>
          <Route path='sports_info/c_player_records' element={<C_player_records/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
