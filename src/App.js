import './App.css';

import Main from './MainComponent';
import Admin from './Admin/Admin';
import {Routes,Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
     

      <Routes>
                
      <Route exact  path="/" element={<Admin/>} />
      <Route path="/dashboard" element={ <Main/>} />
  </Routes>

    </div>
  );
}

export default App;
