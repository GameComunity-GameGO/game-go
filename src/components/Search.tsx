import styled from "styled-components";
import React from "react";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  justify-content: center;
  align-items: center;
  span,
  div {
    color: gray;
  }
`;
const Form = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    position: absolute;
    height: 25px;
    fill: whitesmoke;
    right: 0;
    margin-right: 10px;
    cursor: pointer;
  }
  input {
    width: 100%;
    height: 55px;
    border: none;
    border-radius: 10px;
    background-color: #282e40;
    color: whitesmoke;
    padding-left: 10px;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
`;

function Search() {
  return (
    <>
      <Wrap>
        <Form>
          <input type="text"></input>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </Form>
      </Wrap>
    </>
  );
}
export default React.memo(Search);