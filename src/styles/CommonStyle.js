import styled from "styled-components";

// 색상 정의
const defaultBackgroundColor = "#f9aa06";
const defaultFontColor = "#fff";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;
  width: 500px;
  margin: auto;
  background-color: ${(props) => props.color || defaultBackgroundColor};
`;
