import { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const GetImage = () => {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const storage = getStorage();

      const fileRef = ref(storage, `images/폴더/파일이름`);

      try {
        // 파일의 다운로드 URL 가져오기
        const downloadUrl = await getDownloadURL(fileRef);
        setUrl(downloadUrl); // 상태에 저장
      } catch (err) {
        console.error("Error fetching file:", err);
        setError("파일을 가져오는 데 실패했습니다.");
      }
    };

    fetchImage();
  }, []); // 빈 배열을 의존성으로 사용 (컴포넌트 마운트 시 한 번 실행)

  return (
    <div>
      {error && <p>{error}</p>}
      {!url && !error && <p>로딩 중...</p>}
      {url && (
        <img src={url} alt="Downloaded File" style={{ maxWidth: "100%" }} />
      )}
    </div>
  );
};

export default GetImage;
