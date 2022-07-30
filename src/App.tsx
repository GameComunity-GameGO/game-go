import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BoardDetails from "./Routes/Board/BoardDetails";
import BoardView from "./Routes/Board/BoardView";
import BoardWrite from "./Routes/Board/BoardWrite";
import GamePage from "./Routes/GamePage";

import Main from "./Routes/Main";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/gamepage/:game" element={<GamePage />}></Route>
        <Route path="/gamepage/:game/:type" element={<BoardDetails />}></Route>
        <Route
          path="/gamepage/:game/:type/boardwrite"
          element={<BoardWrite />}
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
