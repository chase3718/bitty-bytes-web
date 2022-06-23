import Login from './components/Login';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from'./components/Dashboard';
import Register from './components/Register';
import PasswordReset from './components/PasswordReset';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/register' element={<Register />} />
      <Route path='/reset' element={<PasswordReset />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
