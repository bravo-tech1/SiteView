import HeaderAr from "./components/HeaderAr";
import { useState, useEffect } from "react";
import FooterAr from "./components/FooterAr";

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);
  const items = data.map((item) => (
    <div class="card col-md-4" dir="rtl" style={{ marginBottom: "1rem" }}>
      <img
        src={item.package_image}
        class="card-img-top"
        alt="..."
        style={{ width: "100%", height: "30vw", objectFit: "cover" }}
      />
      <div class="card-body" dir="rtl">
        <h5 class="card-title">{item.details_title_ar}</h5>

        <p class="card-text">
          <p class="balneo" dir="rtl">
            مدة البكج: <span style={{ fontWeight: "blod" }}> من </span>
            <span style={{ color: "#ff5959" }}> {item.period_from}</span>
            <span style={{ fontWeight: "blod" }}> الى </span>{" "}
            <span style={{ color: "#ff5959" }}> {item.period_to}</span>
          </p>
          <div dir="rtl">
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
        </p>
        <p class="card-text">{item.city_details_text1_ar}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <HeaderAr />
      <div
        className="container"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
      >
        <div className="row" dir="rtl">
          {items}
        </div>
      </div>
      <FooterAr />
    </div>
  );
}
