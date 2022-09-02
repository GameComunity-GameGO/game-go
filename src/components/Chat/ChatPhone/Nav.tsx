import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Wrap = styled.div``;

const Svg = styled(motion.svg)`
  background-color: #152232;
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 30px;
  border-radius: 10px;
  position: fixed;
  right: 0;
  bottom: 0;
`;

const NavList = styled(motion.div)`
  background-color: #152232;
  width: 300px;
  height: 500px;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 5px;
  margin: 30px;
  border-radius: 10px;
  border: 1px solid white;
`;
const ListWrap = styled(motion.div)`
  position: relative;
`;
const ExitBtn = styled.div`
  width: 20px;
  position: absolute;
  right: 0;
`;

function Nav() {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrap>
      <Svg
        layoutId={"a"}
        onClick={() => setId("1")}
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
      </Svg>
      <AnimatePresence>
        {id ? (
          <NavList layoutId={"a"}>
            <ListWrap>
              <ExitBtn>
                <svg
                  onClick={() => setId(null)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="white"
                >
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </ExitBtn>
            </ListWrap>
          </NavList>
        ) : null}
      </AnimatePresence>
    </Wrap>
  );
}
export default Nav;
