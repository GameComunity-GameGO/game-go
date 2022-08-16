import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BoardDetails from "./Routes/Board/BoardDetails";
import BoardView from "./Routes/Board/BoardView";
import BoardWrite from "./Routes/Board/BoardWrite";
import GamePage from "./Routes/GamePage";
import MyPage from "./Routes/MyPage";
import Main from "./Routes/Main";
import BoardUpdate from "./Routes/Board/BoardUpdate";
import CommentUpdate from "./components/Board/CommentUpdate";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:type" element={<Main />}></Route>
        <Route path="/gamepage/:game" element={<GamePage />}></Route>
        <Route path="/mypage/:type" element={<MyPage />}></Route>
        <Route path="/gamepage/:game/:type" element={<BoardDetails />}></Route>
        <Route
          path="/gamepage/:game/:type/boardwrite"
          element={<BoardWrite />}
        ></Route>
        <Route
          path="/gamepage/:game/:type/boardupdate/:id"
          element={<BoardUpdate />}
        ></Route>
        <Route
          path="/gamepage/:game/:type/commentupdate/:id/:reply"
          element={<CommentUpdate />}
        ></Route>
        <Route
          path="/gamepage/:game/:type/boardview/:id"
          element={<BoardView />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
