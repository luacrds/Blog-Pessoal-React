import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './context/UserContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaTemas from './temas/listatemas/ListaTemas';
import FormTema from './temas/formtema/FormTema';
import DeletarTema from './temas/deletartema/DeletarTema';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens';
import DeletarPostagem from './temas/deletarpostagem/DeletarPostagem';
import Perfil from './pages/perfil/Perfil';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/cadastrartema" element={<FormTema />} />
          <Route path="/editartema/:id" element={<FormTema />} />
          <Route path="/deletartema/:id" element={<DeletarTema />} />
          <Route path="/postagens" element={<ListaPostagens />} />
          <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;