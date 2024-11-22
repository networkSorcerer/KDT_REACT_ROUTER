import styled from "styled-components";

// 색상 정의
const defaultBackgroundColor = "#3498db"; // 변경된 배경 색상 (파란색)
const defaultFontColor = "#fff"; // 기본 글자 색상
const buttonBackgroundColor = "#ff8c00"; // 버튼 배경 색상

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 화면 중앙에 배치 */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 100%;
  max-width: 400px;
  margin: 0;
  background-color: ${(props) => props.color || defaultBackgroundColor};
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

export const StyledInput = styled.input`
  margin: 10px 0;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${defaultBackgroundColor};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  &::placeholder {
    color: #888;
  }
`;

export const StyledButton = styled.button`
  font-weight: bold;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  color: ${defaultFontColor};
  background-color: ${buttonBackgroundColor};
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e07b00;
  }

  &:active {
    background-color: #c77400;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
