import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Retrieve from "./Components/Retrieve/Retrieve";
import AddNewPerson from "./Components/AddNewPerson/AddNewPerson";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddNewPerson />} />
          <Route path="/retrieve" element={<Retrieve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
