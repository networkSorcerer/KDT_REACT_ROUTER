import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Header 스타일
const Header = styled.header`
  background-color: #f4f4f4; /* 연한 회색 */
  padding: 20px 30px;
  font-size: 24px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// Footer 스타일
const Footer = styled.footer`
  background-color: #2c3e50; /* 짙은 파란색 */
  color: white;
  text-align: center;
  font-size: 18px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

// Main 콘텐츠 영역
const Main = styled.main`
  min-height: calc(100vh - 200px); /* 헤더와 푸터 높이를 제외한 나머지 높이 */
  padding: 20px;
  background-color: #ecf0f1; /* 연한 회색 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 레이아웃 구성
const Layout = () => {
  return (
    <>
      <Header>여기는 헤더 영역입니다</Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>여기는 푸터 영역입니다</Footer>
    </>
  );
};

export default Layout;
