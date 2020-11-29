import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  padding-top: 180px;
  flex-direction: column;
  background: url(${props => props.background}) no-repeat;
  height: 980px;
  width: 100%;
  float: left;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Label = styled.div`
  color: #fff;
  margin-top: 20px;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  flex-direction: column;

  input {
    background-color: #444;
    border-bottom-color: #e57728;
    border-left-color: #444;
    border-right-color: #444;
    border-top-color: #444;
    height: 48px;
    width: 310px;
    color: #fff;
    font-size: 14px;
    border-radius: 8px;
  }

  input[type="submit"] {
    background-color: #e57728;
    color: #fff;
    margin-top: 30px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 2px;
    text-align: center;
  }
`;
