import { Link } from "react-router-dom";
import { UserContext } from "../context/UserStore";
import { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.color};
`;
const Home = () => {
  const { userId, password, color } = useContext(UserContext);
  return (
    <Container color={color}>
      <ul>
        <li>
          {" "}
          <Link to="/about">소개 페이지로 이동</Link>
        </li>
        <li>
          {" "}
          <Link to="/profile/frontend">FrontEnd 프로필</Link>
        </li>
        <li>
          {" "}
          <Link to="/profile/backend">BackEnd 프로필</Link>
        </li>
        <li>
          {" "}
          <Link to="/profile/dba">DBA 프로필</Link>
        </li>
        <li>
          {" "}
          <Link to="/articles">게시판 목록</Link>
          <p>아이디 : {userId}</p>
          <p>패스워드 : {password}</p>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
