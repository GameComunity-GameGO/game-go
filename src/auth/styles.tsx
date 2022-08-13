import styled from "styled-components";

export const Container = styled.div``;
export const Header = styled.header`
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma,
    Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 40px;
  margin-bottom: 12px;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 300px;
  max-width: 300px;
`;

export const Label = styled.label`
  margin-bottom: 16px;
  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 13px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 10px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  //padding: 10px;
  height: 38px;
  // padding-top: 5px;
  // padding-bottom: 5px;
  font-size: 18px;
  line-height: 1.33333333;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const Button = styled.button`
  margin-bottom: 18px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #373e59;
  border: none;
  font-size: 16px;
  font-weight: 900;
  height: 42px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #2196f3;
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;
export const Button2 = styled.div`
  margin-bottom: 16px;
  font-weight: 600;
  &:hover {
    display: block;
    text-align: left;
    color: #2196f3;
    padding-bottom: 8px;
    font-size: 13px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;
export const Button3 = styled.div`
  margin-bottom: 1px;
  font-weight: 600;
  &:hover {
    display: block;
    text-align: left;
    color: #2196f3;
    padding-bottom: 8px;
    font-size: 13px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;
export const Error = styled.div`
  color: #e01e5a;
  margin: 5px 0 16px;
  font-weight: bold;
  font-size: 13px;
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
  margin: 8px 0 16px;
  font-size: 13px;
`;

export const LinkContainer = styled.div`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 190px;
  max-width: 190px;
  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;
