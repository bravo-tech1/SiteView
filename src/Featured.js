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
    <div class="card" style={{ width: "24rem" }}>
      <img
        src={item.package_image}
        class="card-img-top featured-img"
        alt="..."
        style={{ width: "100%", height: "20vw", objectFit: "cover" }}
      />
      <div class="card-body">
        <h5 class="card-title">{item.details_title_en}</h5>
        <p class="balneo">
          Package Period: <span style={{ fontWeight: "blod" }}> From </span>
          <span style={{ color: "#ff5959" }}> {item.period_from}</span>
          <span style={{ fontWeight: "blod" }}> To </span>{" "}
          <span style={{ color: "#ff5959" }}> {item.period_to}</span>
        </p>
        <div>
          <p class="paragraph">
            <span style={{ color: "var(--yellow-color)" }}>
              {item.package_rate === 0 || item.package_rate === null ? (
                ""
              ) : item.package_rate === 1 ? (
                <i class="fa-solid fa-star"></i>
              ) : item.package_rate === 2 ? (
                <>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </>
              ) : item.package_rate === 3 ? (
                <>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </>
              ) : item.package_rate === 4 ? (
                <>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </>
              ) : (
                <>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </>
              )}
            </span>
          </p>
        </div>
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
        <div
          style={{
            gap: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {items}
        </div>
      </div>
      <Footer />
    </div>
  );
}
