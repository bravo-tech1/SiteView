import { useEffect, useState } from "react";

export default function Landing() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/website/showbyid/1")
      .then((res) => res.json())
      .then((dataRes) => setVideo(dataRes));
  }, []);

  const videoShow = video.map((item) => (
    <video width="100%" autoPlay muted>
      <source src={item.website_image} type="video/mp4" />
    </video>
  ));
  return <div class="landind text-center">{videoShow}</div>;
}
