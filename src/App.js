import Login from './components/Login';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import PasswordReset from './components/PasswordReset';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="app">
      <NavBar></NavBar>
      <div className="app-content">

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset' element={<PasswordReset />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
