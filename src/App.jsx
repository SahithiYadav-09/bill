import { Routes, Route } from "react-router-dom";
import Home from "./home";
import ADMINISTRATION from "./Administration";
import RUP from "./ADSUB/RuleUpdation";
import WUP from "./ADSUB/WorkingDaysUp";
import DARup from "./ADSUB/DArup";
import HRARup from "./ADSUB/HRArup";
import RELIEFRup from "./ADSUB/RELIEFrup";
import "./App.css";

function App() {
  return (
    <div>
      <h1>PAY SYSTEM</h1>

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/administration" element={<ADMINISTRATION />} />
        <Route path="/adrup" element={<RUP />} />
        <Route path="/adwup" element={<WUP />} />
         <Route path="/darup/DA" element={<DARup />} />
        <Route path="/darup/HRA" element={<HRARup />} />
         <Route path="/darup/RELIEF" element={<RELIEFRup />} />
      </Routes>
    </div>
  );
}

export default App;

   


