import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  // <Link to="/article/1">게시글1</Link> 이부분에서 1을 추출하는듯

  return (
    <>
      <h2>게시글{id} 입니다~~~~~</h2>
    </>
  );
};

export default Article;
