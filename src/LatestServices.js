import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

export default function Latest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);

  console.log(data);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const datashow = data.map((item) => (
    <>
      <div class="card">
        <img
          src={item.package_image}
          class="card-img-top"
          alt="..."
          style={{ width: "100%", height: "20vw", objectFit: "cover" }}
        />
        <div class="card-body">
          <h5 class="card-title">{item.details_title_en}</h5>
          <p className="balneo">
            <i
              class="fa-solid fa-location-dot"
              style={{ paddingRight: "5px" }}
            ></i>
            {item.city_name_en}
          </p>

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
    </>
  ));

  return (
    <div class="container pt-5 pb-5">
      <h3 class="fw-bold pt-5 text-center mb-5">Featured Listings</h3>
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000}>
        {datashow}
      </Carousel>
    </div>
  );
}
