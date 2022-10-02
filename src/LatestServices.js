import { useEffect, useState } from "react";

export default function Latest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);
  const dataEdit = data.splice(1);
  const items = dataEdit.map((item) => (
    <>
      <div className={`carousel-item`}>
        <div class="card">
          <img
            src={item.package_image}
            class="card-img-top"
            alt="..."
            style={{ width: "100%", height: "30vw", objectFit: "cover" }}
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
      </div>
    </>
  ));
  const dataSliedItem = data.slice(!1);

  return (
    <div class="container pt-5 pb-5">
      <h3 class="fw-bold pt-5 text-center mb-5">Featured Listings</h3>
      <div className="slide-father-flex">
        <div
          id="carouselExampleControls"
          class="carousel slide latest-slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div className="carousel-item active">
              <div class="card">
                <img
                  src={dataSliedItem.map((item) => item.package_image)}
                  class="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "30vw", objectFit: "cover" }}
                />
                <div class="card-body">
                  <h5 class="card-title">
                    {dataSliedItem.map((item) => item.details_title_en)}
                  </h5>
                  <p class="balneo">
                    Package Period:{" "}
                    <span style={{ fontWeight: "blod" }}> From </span>
                    <span style={{ color: "#ff5959" }}>
                      {" "}
                      {dataSliedItem.map((item) => item.period_from)}
                    </span>
                    <span style={{ fontWeight: "blod" }}> To </span>{" "}
                    <span style={{ color: "#ff5959" }}>
                      {" "}
                      {dataSliedItem.map((item) => item.period_to)}
                    </span>
                  </p>
                  <div>
                    <p class="paragraph">
                      <span style={{ color: "var(--yellow-color)" }}>
                        {dataSliedItem.map((item) => item.package_rate === 0) ||
                        dataSliedItem.map(
                          (item) => item.package_rate === null
                        ) ? (
                          ""
                        ) : dataSliedItem.map(
                            (item) => item.package_rate === 1
                          ) ? (
                          <i class="fa-solid fa-star"></i>
                        ) : dataSliedItem.map(
                            (item) => item.package_rate === 2
                          ) ? (
                          <>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </>
                        ) : dataSliedItem.map(
                            (item) => item.package_rate === 3
                          ) ? (
                          <>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </>
                        ) : dataSliedItem.map(
                            (item) => item.package_rate === 4
                          ) ? (
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
                </div>
              </div>
            </div>
            {items}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
