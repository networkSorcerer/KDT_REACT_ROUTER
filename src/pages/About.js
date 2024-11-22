import { Link, useLocation, useSearchParams } from "react-router-dom";
// 쿼리스트링 : URL 뒷부분에 붙여서 전달하는 유동적인 데이터?키=값&키=값
const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();
  // 쿼리 스트링 정보 가져오기
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  //detail 값을 토글하는 함수
  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  //mode 값을 증가시키는 함수
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <>
      <h1>여기는 About 페이지입니다.</h1>
      <p>소개 페이지 데스</p>
      <Link to="/">홈으로 이동</Link>
      {/* <p>쿼리스트링 : {location.search}</p> */}
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>토글 디테일</button>
      <button onClick={onIncreaseMode}> mode + 1</button>
    </>
  );
};
export default About;
