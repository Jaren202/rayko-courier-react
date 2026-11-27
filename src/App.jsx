import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;