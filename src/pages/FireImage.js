import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { storage } from "../api/firebase";

const Upload = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith("image/")) {
        alert("이미지 파일만 업로드할 수 있습니다.");
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("파일 크기는 5MB를 초과할 수 없습니다.");
        return;
      }

      const img = new Image();
      img.src = URL.createObjectURL(selectedFile);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 100;
        canvas.height = 100;
        ctx.drawImage(img, 0, 0, 100, 100);
        console.log("이미지 그리기 완료");
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const resizedFile = new File([blob], selectedFile.name, {
                type: "image/jpeg",
              });
              setFile(resizedFile);
              setPreviewUrl(URL.createObjectURL(resizedFile));
            } else {
              console.log("이미지 변환 중 오류 발생");
            }
          },
          "image/jpeg",
          0.95
        );
        URL.revokeObjectURL(img.src);
      };
      img.onerror = () => {
        console.log("이미지 로드 중 오류 발생");
      };
    }
  };

  const uploadImg = () => {
    if (!file) {
      console.log("파일이 없습니다.");
      return;
    }
    const fileName = `${new Date().getTime()}_${file.name}`;
    const fileRef = ref(storage, `images/${fileName}`);
    uploadBytes(fileRef, file)
      .then((snapshot) => {
        console.log("이미지 파이어베이스 업로드 성공");
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        console.log("이미지 다운로드 URL:", url);
      })
      .catch((error) => {
        console.error("업로드 중 오류 발생:", error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange}></input>
      {previewUrl && (
        <img
          src={previewUrl}
          alt="미리보기"
          style={{ maxWidth: "100px", maxHeight: "100px" }}
        />
      )}
      <button onClick={uploadImg}>이미지 업로드</button>
    </div>
  );
};

export default Upload;
