import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from "./components/admin/Dashboard";
import MasterLayout from './layouts/admin/MasterLayout';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/admin" element={<MasterLayout />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

          
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
