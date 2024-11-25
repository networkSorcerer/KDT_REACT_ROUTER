import { Link } from "react-router-dom";
import { UserContext } from "../context/UserStore";
import { useContext } from "react";
const Home = () => {
  const { userId, password } = useContext(UserContext);
  return (
    <>
      <h1>여기는 홈입니다</h1> <br />
      <p>가장 먼저 보이는 페이지 입니다.</p> <br></br>
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
    </>
  );
};

export default Home;
