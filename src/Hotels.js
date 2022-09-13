import Header from "./components/Header";

import Footer from "./components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [data, setData] = useState([]);

  const id = Number(window.location.pathname.substr(-1));
  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/hotel/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes.filter((x) => x.city_id === id)));
  }, []);

  const items = data.map((item) => (
    <Link
      to={`packages/${item.id}`}
      style={{ textDecoration: "none", marginLeft: "3rem" }}
    >
      <div class="card" style={{ width: "24rem" }}>
        <div class="card-body text-center">
          <img
            class="card-img-top mb-2"
            src={item.hotel_image}
            alt="Card cap"
          />
          <h3 class="card-text">{item.hotel_name_en}</h3>
          <h3 class="card-text">{item.hotel_location_en}</h3>
        </div>
      </div>
    </Link>
  ));
  return (
    <div>
      <Header />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {items}
      </div>
      <Footer />
    </div>
  );
}
