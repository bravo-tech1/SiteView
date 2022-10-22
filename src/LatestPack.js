import { useState } from "react";
import parse from "html-react-parser";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import Loading from "./components/Loading";
import { useEffect } from "react";

export default function Pack() {
  const [data, setData] = useState([]);
  const [deatils, setDeatil] = useState([]);
  const [videos, setVideos] = useState([]);
  const user = localStorage.getItem("email");
  const [userA, setUserA] = useState("");

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
      .then((dataRes) => setDeatil(dataRes.filter((x) => x.package_id === id)));
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

  const items = deatils.map((item) => (
    <>
      <div>
        <div className="WordStyle">{parse(item.text_en)}</div>
      </div>
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
      <div>
        <div className="WordStyle">{parse(item.text2_en)}</div>
      </div>
    </>
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
          <div className="container" style={{ marginTop: "10%" }}>
            {items}
            <div className="row">{videosI}</div>
            <div className="d-flex align-items-center justify-content-between">
              <h4
                style={{
                  color: "#FFAD5B",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Package Price: <span style={{ color: "#ff5959" }}>{data}$</span>
              </h4>
              <div
                className="btn roundrd-circle main-btn btn-book btn-business ms-0 ms-lg-2 mt-0"
                style={{
                  marginLeft: "10px",
                  width: "120px",
                }}
              >
                Book
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
            {" "}
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
