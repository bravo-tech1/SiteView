import Header from "./components/Header";

import Footer from "./components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/city/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);

  const items = data.map((item) => (
    <Link
      to={`hotels/${item.id}`}
      style={{ textDecoration: "none", textAlign: "center" }}
    >
      <div class="card" style={{ width: "24rem", marginLeft: "3rem" }}>
        <img class="card-img-top" src={item.city_image} alt="Card image cap" />
        <div class="card-body">
          <h3 class="card-text" style={{ fontWeight: "bold" }}>
            {item.city_name_ar}
          </h3>
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
