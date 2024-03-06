import "./App.css";
import Navbar from './components/navBar';
import Footer from './components/footer';
import Homepage from "./components/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Homepage />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
