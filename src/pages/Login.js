import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Link 바로감 , useNavigate 조건을 걸고 갈때
const Login = () => {
  // 키보드 입력에 대한 상태 관리
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 간단한 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  const navigate = useNavigate(); // 페이지 이동을 위한 객체 생성

  const onChangeId = (e) => {
    setInputId(e.target.value);
    e.target.value >= 5 ? setIsId(true) : setIsId(false);
  };

  const onChangePw = (e) => {
    setInputPw(e.target.value);
    e.target.value.length >= 5 ? setIsPw(true) : setInputPw(false);
  };

  const onClickLogin = () => {
    // axios 비동기 통신을 해야함
  };
  return (
    <>
      <Link to="/home">메인으로 이동</Link>
    </>
  );
};

export default Login;
