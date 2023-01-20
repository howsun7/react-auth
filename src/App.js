import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';


function App() {
  const [token, setToken] = useState(null);

  return (    
    <div className='mt-3'>
      <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage token={token} />} />
          <Route path='/login' element={<LoginPage token={token} setToken={setToken} />} />
          <Route path="/dashboard" element={<DashboardPage token={token} />} />
        </Routes>
      </BrowserRouter>

      </Container>
    </div>     
  );
}

export default App;
