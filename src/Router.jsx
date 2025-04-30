import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Cadastrar } from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />   {/* <- esta é a raiz */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastra-se" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  );
}

export {Router};
