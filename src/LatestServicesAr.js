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
          <div class="card-body" dir="rtl">
            <h5 class="card-title">{item.details_title_ar}</h5>

            <p class="card-text">
              <i class="fa-solid fa-location-dot"> </i>
              <span style={{ color: "#fdac53", fontWeight: "bold" }}>
                المدينة:{" "}
              </span>{" "}
              {item.city_name_ar}
            </p>
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
      </div>
    </>
  ));
  const dataSliedItem = data.slice(!1);

  return (
    <div class="container pt-5 pb-5 arabic">
      <h3 class="fw-bold pt-5 text-center mb-5">اخر العروض</h3>
      <div className="slide-father-flex">
        <div
          id="carouselExampleControls"
          class="carousel slide latest-slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div className="carousel-item active">
              <div class="card" dir="rtl">
                <img
                  src={dataSliedItem.map((item) => item.package_image)}
                  class="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "30vw", objectFit: "cover" }}
                />
                <div class="card-body">
                  <h5 class="card-title">
                    {dataSliedItem.map((item) => item.details_title_ar)}
                  </h5>
                  <p class="card-text">
                    <p class="balneo" dir="rtl">
                      مدة البكج:{" "}
                      <span style={{ fontWeight: "blod" }}> من </span>
                      <span style={{ color: "#ff5959" }}>
                        {" "}
                        {dataSliedItem.map((item) => item.period_from)}
                      </span>
                      <span style={{ fontWeight: "blod" }}> الى </span>{" "}
                      <span style={{ color: "#ff5959" }}>
                        {" "}
                        {dataSliedItem.map((item) => item.period_to)}
                      </span>
                    </p>
                    <div dir="rtl">
                      <p class="paragraph">
                        <span style={{ color: "var(--yellow-color)" }}>
                          {dataSliedItem.map((item) =>
                            item.package_rate === 0 ||
                            item.package_rate === null ? (
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
                            )
                          )}
                        </span>
                      </p>
                    </div>
                  </p>
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
