import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./Routes/GamePage";
import MyPage from "./Routes/MyPage";

import Main from "./Routes/Main";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/gamepage/:game" element={<GamePage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
