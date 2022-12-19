import { useState } from "react";
import parse from "html-react-parser";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import Loading from "./components/Loading";
import { useEffect } from "react";

import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

export default function Pack() {
  const [data, setData] = useState([]);
  const [deatils, setDeatil] = useState([]);
  const [videos, setVideos] = useState([]);
  const user = localStorage.getItem("email");
  const [userA, setUserA] = useState("");

  // Map
  const [dataMap, setDataMap] = useState([]);
  const showIt = dataMap.filter((it) => it.type === "Itinerary");
  const showInc = dataMap.filter((it) => it.type === "Included");
  const showEx = dataMap.filter((it) => it.type === "Excluded");
  const showlocation = dataMap.filter((it) => it.type === "Location");

  const showItData = showIt.map((item) => (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {item.title_en}
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">{item.description_en}</div>
          </div>
        </div>
      </div>
    </div>
  ));

  const showIncData = showInc.map((item) => (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne2"
              aria-expanded="true"
              aria-controls="collapseOne2"
            >
              {item.title_en}
            </button>
          </h2>
          <div
            id="collapseOne2"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">{item.description_en}</div>
          </div>
        </div>
      </div>
    </div>
  ));
  const showExData = showEx.map((item, index) => (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne3"
              aria-expanded="true"
              aria-controls="collapseOne3"
            >
              {item.title_en}
            </button>
          </h2>
          <div
            id="collapseOne3"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">{item.description_en}</div>
          </div>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/user/show")
      .then((res) => res.json())
      .then((dataRes) =>
        setUserA(dataRes.find((item) => `"${item.email}"` === user).accepted)
      );
  }, []);

  const id = Number(window.location.pathname.split("/").slice(-1)[0]);

  useEffect(() => {
    fetch(`https://test.emkanfinances.net/api/detail/show`)
      .then((res) => res.json())
      .then((dataRes) => {
        console.log(dataRes);
        setDeatil(dataRes.filter((x) => x.package_id === id));
      });
  }, []);
  useEffect(() => {
    fetch(`https://test.emkanfinances.net/api/otherdetail/show`)
      .then((res) => res.json())
      .then((data) => {
        setDataMap(data);
      });
  }, []);
  useEffect(() => {
    fetch(`https://test.emkanfinances.net/api/video/show`)
      .then((res) => res.json())
      .then((dataRes) => setVideos(dataRes));
  }, []);
  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) =>
        setData(dataRes.filter((x) => x.id === id)[0].package_price)
      );
  }, []);

  const items = deatils.map((item, key) => (
    <div className="container" key={key}>
      <div>
        <div className="WordStyle">{parse(item.text_en)}</div>
      </div>
      {item.detailimages.length !== 0 && (
        <div
          id="carouselExampleControls"
          className="carousel slide custom-detail"
          data-bs-ride="carousel"
          style={{ width: "70%", margin: "0 auto" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={item.detailimages[0].image}
                className="d-block w-100"
                height={"600px"}
                alt="img"
              />
            </div>
            {deatils
              .map((item) => item.detailimages)[0]
              .slice(1)
              .map((nice) => (
                <div className="carousel-item">
                  <img
                    src={nice.image}
                    className="d-block w-100"
                    height={"600px"}
                    alt="img"
                  />
                </div>
              ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            style={{ left: "-10%" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            style={{ right: "-10%", color: "var(--yellow-color)" }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
      <div>
        <div className="WordStyle">{parse(item.text2_en)}</div>
      </div>
    </div>
  ));

  const videosI = videos.map((item) => (
    <div className="col-md-4">
      <video autoPlay muted>
        <source src={`${item.video}`} type="video/mp4" />
      </video>
    </div>
  ));
  return (
    <>
      <Header />
      {userA ? (
        <div>
          <div style={{ marginTop: "10%" }}>
            {items}
            <div className="row container">{videosI}</div>
            <div className="container" style={{ marginTop: "1rem" }}>
              <div>
                <h1>Itinerary</h1>
                {showItData}
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h1>Included</h1>
                  {showIncData}
                </div>
                <div>
                  <h1>Excluded</h1>
                  {showExData}
                </div>
              </div>
            </div>
            <div
              style={{
                position: "sticky",
                bottom: "0px",
                backgroundColor: "var(--first-color)",
                opacity: "0.8",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-between container"
                style={{
                  paddingBottom: "1rem",
                  paddingTop: "1rem",
                }}
              >
                <h4
                  style={{
                    color: "#FFAD5B",
                  }}
                >
                  Package Price:{" "}
                  <span style={{ color: "#ff5959" }}>{data}$</span>
                </h4>
                <div
                  className="btn roundrd-circle main-btn btn-book btn-business ms-0 ms-lg-2 mt-0"
                  style={{
                    marginLeft: "10px",
                    width: "120px",
                  }}
                >
                  <a
                    href="https://40.87.158.147/reseller/auth/"
                    className="b2b"
                  >
                    Book
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      ) : !localStorage.getItem("email") ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="text-center">Register To See Deatils</h1>
          <Link to="/Register" style={{ textAlign: "center" }}>
            <div
              className="btn roundrd-circle main-btn btn-login text-center"
              style={{ marginLeft: "10px" }}
            >
              Register
            </div>
          </Link>
        </div>
      ) : userA === 0 ? (
        <div
          className="text-center"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1>You Are Not Accepted Yet</h1>
            <a href="/">Back To Home</a>
          </div>
        </div>
      ) : (
        <div style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
    </>
  );
}
