import { useState } from "react";
import parse from "html-react-parser";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect } from "react";

export default function Pack() {
  const [deatils, setDeatil] = useState([]);
  const [videos, setVideos] = useState([]);

  const id = Number(window.location.pathname.split("/").slice(-1)[0]);

  useEffect(() => {
    fetch(`https://test.emkanfinances.net/api/detail/show`)
      .then((res) => res.json())
      .then((dataRes) => setDeatil(dataRes.filter((x) => x.package_id === id)));
  }, []);
  useEffect(() => {
    fetch(`https://test.emkanfinances.net/api/video/show`)
      .then((res) => res.json())
      .then((dataRes) => setVideos(dataRes));
  }, []);

  const items = deatils.map((item) => (
    <div>
      <div className="WordStyle">{parse(item.text_en)}</div>
    </div>
  ));
  const videosI = videos.map((item) => (
    <div className="col-md-4">
      <video autoPlay muted>
        <source src={`${item.video}`} type="video/mp4" />
      </video>
    </div>
  ));
  return (
    <>
      <Header />
      <div class="container" style={{ marginTop: "10%" }}>
        {items}
        <div className="row">{videosI}</div>
      </div>
      <Footer />
    </>
  );
}
