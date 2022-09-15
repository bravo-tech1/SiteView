import Header from "./components/Header";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);
  const items = data.map((item) => (
    <div class="card col-md-4" style={{ marginBottom: "1rem" }}>
      <img
        src={item.package_image}
        class="card-img-top"
        alt="..."
        style={{ width: "100%", height: "30vw", objectFit: "cover" }}
      />
      <div class="card-body">
        <h5 class="card-title">{item.details_title_en}</h5>

        <p class="card-text">
          <i class="fa-solid fa-location-dot"> </i>
          <span style={{ color: "#fdac53", fontWeight: "bold" }}>
            City:{" "}
          </span>{" "}
          {item.city_name_en}
        </p>
        <p class="card-text">
          <i class="fa-solid fa-clock"> </i>
          <span style={{ color: "#ff5959", fontWeight: "bold" }}>
            Period:{" "}
          </span>{" "}
          {item.package_period}
        </p>
        <p class="card-text">{item.city_details_text1_en}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <Header />
      <div
        className="container"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
      >
        <div className="row">{items}</div>
      </div>
      <Footer />
    </div>
  );
}
