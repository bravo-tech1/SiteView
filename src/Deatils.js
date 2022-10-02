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
    <>
      <div>
        <div className="WordStyle">{parse(item.text_en)}</div>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide custom-detail"
        data-bs-ride="carousel"
        style={{ width: "70%", margin: "0 auto" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={item.detailimages[0].image}
              class="d-block w-100"
              alt="img"
            />
          </div>
          {item.detailimages.map((nice) => (
            <div class="carousel-item">
              <img src={nice.image} class="d-block w-100" alt="img" />
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          style={{ left: "-10%" }}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          style={{ right: "-10%" }}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <div className="WordStyle">{parse(item.text_en)}</div>
      </div>
    </>
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
        {items};<div className="row">{videosI}</div>
      </div>
      <Footer />
    </>
  );
}
