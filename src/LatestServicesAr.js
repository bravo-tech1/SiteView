import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Latest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);

  const items = data.map((item) => (
    <>
      <div class="box col-lg-4 col-md-6 mb-5">
        <div class="card embed-responsive" dir="rtl">
          <img src={item.package_image} class="card-img-top img-card" alt="" />
          <div class="card-body">
            <h3 class="card-title" style={{ color: "black" }}>
              {item.details_title_ar}
            </h3>
            <p class="location location-color">
              <i class="fa-solid fa-location-dot"></i> {item.city_name_ar}
            </p>

            <a href="#services" class="btn btn-card">
              التفاصيل
            </a>
          </div>
        </div>
      </div>
    </>
  ));

  return (
    <div class="container pt-5 pb-5">
      <div class="row">
        <h3 class="fw-bold pt-5">Featured Listings</h3>
        {items}
      </div>
    </div>
  );
}
