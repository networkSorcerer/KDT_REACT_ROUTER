import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Layout from "./styles/Layout";
import UserStore from "./context/UserStore";
function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article/:id" element={<Article />} />
            </Route>
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}
// useState 상태 관리 (insert, update)
// useEffect 상태관리 (최초 로딩시 작동, 의존성 주입 필요)
// useLocation 사이트 주소( 쿼리스트링)
// useSearchParams 사이트 주소(쿼리 스트링) 에서 추출
// useParams url 값에서 원하는 값을 추출
export default App;
