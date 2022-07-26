import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardDetails from "./Routes/BoardDetails";
import BoardWrite from "./Routes/BoardWrite";
import GamePage from "./Routes/GamePage";
import MyPage from "./Routes/MyPage";

import Main from "./Routes/Main";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/gamepage/:game" element={<GamePage />}></Route>
        <Route path="/mypage/:type" element={<MyPage />}></Route>
        <Route path="/gamepage/:game/:type" element={<BoardDetails />}></Route>
        <Route
          path="/gamepage/:game/:type/boardwrite"
          element={<BoardWrite />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
