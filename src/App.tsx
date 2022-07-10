import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Routes/Main";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
