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
            <h5 class="card-title">{item.details_title_ar}</h5>

            <p class="card-text">
              <i class="fa-solid fa-location-dot"> </i>
              <span style={{ color: "#fdac53", fontWeight: "bold" }}>
                City:{" "}
              </span>{" "}
              {item.city_name_ar}
            </p>
            <p class="card-text">
              <i class="fa-solid fa-clock"> </i>
              <span style={{ color: "#ff5959", fontWeight: "bold" }}>
                Period:{" "}
              </span>{" "}
              {item.package_period}
            </p>
            <p class="card-text">{item.city_details_text1_ar}</p>
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
                    {dataSliedItem.map((item) => item.title_name_ar)}
                  </h5>
                  <p class="card-text">
                    <i class="fa-solid fa-location-dot"> </i>
                    <span style={{ color: "#fdac53", fontWeight: "bold" }}>
                      City:{" "}
                    </span>{" "}
                    {dataSliedItem.map((item) => item.city_name_ar)}
                  </p>
                  <p class="card-text">
                    <i class="fa-solid fa-clock"> </i>
                    <span style={{ color: "#ff5959", fontWeight: "bold" }}>
                      Period:{" "}
                    </span>{" "}
                    {dataSliedItem.map((item) => item.package_period)}
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
