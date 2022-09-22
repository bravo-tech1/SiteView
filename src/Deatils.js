import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./components/Header";

import Footer from "./components/Footer";

import { useEffect } from "react";

export default function Pack() {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const id = Number(window.location.pathname.split("/").slice(-1)[0]);
  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes.filter((x) => x.id === id)));
  }, []);
  useEffect(() => {
    fetch(`https://test.emkanfinances.net/api/package/showdetails/${id}`)
      .then((res) => res.json())
      .then((dataRes) => setImages(dataRes[2]));
  }, []);
  useEffect(() => {
    fetch(`https://test.emkanfinances.net/api/package/showdetails/${id}`)
      .then((res) => res.json())
      .then((dataRes) => setVideos(dataRes[1]));
  }, []);

  const items = data.map((item) => (
    <div>
      <h1 style={{marginTop: '4rem'}}>{item.city_name_en}</h1>
      <h1>{item.details_title_en}</h1>
      <h2 style={{ color: "black",
    fontSize: '15px',
    fontWeight: '200' }}>{item.details_text2_en}</h2>
      <div className="row mt-4"  style={{rowGap: '10px'}}>
        {images.map((itm) => (
          <img src={itm.img} className="col-md-4" alt="countrys" />
        ))}
      </div>
      <div className="row">
    {videos.map((itm) => (
       <video
     
       autoPlay
       muted
       style={{marginTop: '2rem', marginBottom: '2rem'}}
     >
       <source
         src={`${itm.video}`}
         type="video/mp4"
       />
     </video>
    ))}
  </div>
    </div>
   
  ));
  return (
    <>
      <Header />
      <div class="container" style={{ marginTop: "10%" }}>
        {items}
      </div>
      <Footer />
    </>
  );
}
