import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Loading from "./Loading";
import { useEffect } from "react";

export default function Pack() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = Number(window.location.pathname.split("/").slice(-1)[0]);
  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) => {
        setData(dataRes.filter((x) => x.hotel_id === id));
        setLoading(false);
      });
  }, []);

  const items = data.map((item) => (
    <div
      style={{
        marginBottom: "2rem",
        boxShadow: "0 2px 15px rgb(0 0 0 / 10%)",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div
        className="w-100"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div class="header">
          <p style={{ marginBottom: "0" }}>Package</p>
        </div>
      </div>
      <div class="pakeg">
        <div class="content">
          <h1>{item.details_title_en}</h1>

          <p class="balneo">
            Package Period: <span style={{ fontWeight: "blod" }}> From </span>
            <span style={{ color: "#ff5959" }}> {item.period_from}</span>
            <span style={{ fontWeight: "blod" }}> To </span>{" "}
            <span style={{ color: "#ff5959" }}> {item.period_to}</span>
          </p>
          <p class="balneo">
            Package Price:{" "}
            <span style={{ color: "var(--yellow-color)" }}>
              {item.package_price}$
            </span>
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
          <Link to={`deatils/${item.id}`}>
            <div
              className="btn roundrd-circle main-btn btn-login"
              style={{ marginLeft: "10px" }}
            >
              Deatils
            </div>
          </Link>
          <div
            className="btn roundrd-circle main-btn btn-book btn-business ms-0 ms-lg-2 mt-0"
            style={{ marginLeft: "10px", width: "80px" }}
          >
            Book
          </div>
        </div>
        <img
          src={item.package_image}
          width={"500px"}
          height="300px"
          alt={"img"}
        />
      </div>
    </div>
  ));
  return (
    <>
      {loading && (
        <div style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
      <Header />
      <div class="container" style={{ marginTop: "5rem" }}>
        {items}
      </div>
      <Footer />
    </>
  );
}
