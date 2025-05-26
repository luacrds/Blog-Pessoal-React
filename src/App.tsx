import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './context/UserContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaTemas from './temas/listatemas/ListaTemas';


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/temas" element={<ListaTemas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;