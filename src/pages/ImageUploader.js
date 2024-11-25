import { useState } from "react";
import { storage } from "../api/firebase";

const ImageUploader = () => {
  const [file, setFile] = useState(null); // 로컬 파일 경로
  const [url, setUrl] = useState(""); // 업로드 후 파이어베이스 URL 경로
};
