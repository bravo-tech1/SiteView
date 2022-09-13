import Header from "./components/Header";

import Footer from "./components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [data, setData] = useState([]);

  const id = Number(window.location.pathname.substr(-1));
  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/city/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes.filter((x) => x.state_id === id)));
  }, []);

  const items = data.map((item) => (
    <Link
      to={`hotels/${item.id}`}
      style={{
        textDecoration: "none",
        textAlign: "center",
        marginLeft: "3rem",
      }}
    >
      <div class="card" style={{ width: "24rem" }}>
        <img class="card-img-top" src={item.city_image} alt="Card image cap" />
        <div class="card-body">
          <h3 class="card-text" style={{ fontWeight: "bold" }}>
            {item.city_name_en}
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
