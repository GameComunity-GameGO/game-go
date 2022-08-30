import React, { useState, useEffect } from "react";
import axios from "axios";
import Board from "../components/Board";
import BoardDetails from "./Board/BoardDetails";
import PropTypes, { string } from "prop-types";
// const config = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//   },
//   withCredentials: true,
// };
// const [gamers, setGamers] = useState([]);

// async function getGamerList() {
//   console.log("게이머정보요청");
//   await axios
//     .get("/api/v1/GamerList", config)
//     .then((response) => {
//       console.log(response);
//       setGamers(response.data);
//       //여기 배열 받아오는 테스트
//       const {
//         data: { gamers },
//       } = response.data;
//       console.log("게이머 : ", gamers);
//     })
//     .catch((error) => {});
// }
function Gamer({ id, gameUsename, introdution }: any) {
  return <h1>{id}</h1>;
}
Gamer.propTypes = {
  id: PropTypes.number.isRequired,
  gameUsername: PropTypes.string.isRequired,
  introdution: PropTypes.string.isRequired,
};
export default Gamer;
