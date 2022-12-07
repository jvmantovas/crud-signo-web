import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Register } from "./pages/register";
import { Registered } from "./pages/registered";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/cadastros" element={<Registered />} />
      </Routes>
    </Router>
  );
}

export default App;
