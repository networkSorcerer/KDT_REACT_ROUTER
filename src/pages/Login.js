import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, StyledInput, StyledButton } from "../styles/CommonStyle";
import { UserContext } from "../context/UserStore";

// Link 바로감 , useNavigate 조건을 걸고 갈때
const Login = () => {
  // 키보드 입력에 대한 상태 관리
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 간단한 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  const navigate = useNavigate(); // 페이지 이동을 위한 객체 생성

  const context = useContext(UserContext);
  // useContext 훅으로 우리가 만든 UserContext의 전역 상태값에 접근
  const { setUserId, setPassword } = context;

  const onChangeId = (e) => {
    setUserId(e.target.value);
    setInputId(e.target.value);
    e.target.value.length >= 5 ? setIsId(true) : setIsId(false);
  };

  const onChangePw = (e) => {
    setInputPw(e.target.value);
    e.target.value.length >= 5 ? setIsPw(true) : setIsPw(false);
  };

  const onClickLogin = () => {
    // axios 비동기 통신을 해야함
    // 그리고 결과 수신
    setUserId(inputId);
    setPassword(inputPw);
    if (inputId === "agapefaith" && inputPw === "agape99^^") {
      navigate("/home");
    } else {
      alert("아이디 또는 패스워드가 틀립니다.");
    }
  };
  const passOver = () => {
    navigate("/home");
  };
  return (
    <Container >
      <StyledInput
        value={inputId}
        placeholder="아이디 입력"
        onChange={onChangeId}
      />
      <br />
      <StyledInput
        value={inputPw}
        placeholder="패스워드 입력"
        onChange={onChangePw}
      />
      <br />
      <StyledButton onClick={passOver}>걍 패스</StyledButton>
      {isId && isPw ? (
        <StyledButton onClick={onClickLogin}>로그인</StyledButton>
      ) : (
        <StyledButton disabled>로그인</StyledButton>
      )}
    </Container>
  );
};

export default Login;
