import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Seguimiento from "./pages/Seguimiento";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;