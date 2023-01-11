import { useState } from "react";
import parse from "html-react-parser";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import Loading from "./components/Loading";
import { useEffect, useRef, useCallback } from "react";
import Accordion from "react-bootstrap/Accordion";
import { LoadScript, GoogleMap, Polygon } from "@react-google-maps/api";

export default function Pack() {
  const [data, setData] = useState([]);
  const [deatils, setDeatil] = useState([]);
  const [videos, setVideos] = useState([]);
  const user = localStorage.getItem("email");
  const [userA, setUserA] = useState("");

  // Map
  const [dataMap, setDataMap] = useState([]);
  const [lat, setlat] = useState(52.52047739093263);
  const [lng, setlng] = useState(13.36653284549709);
  const [useE, runUseEffect] = useState(0);
  const showIt = dataMap.filter((it) => it.type === "Itinerary");
  const showInc = dataMap.filter((it) => it.type === "Included");
  const showEx = dataMap.filter((it) => it.type === "Excluded");
  const showlocation = dataMap.filter((it) => it.type === "Location");

  useEffect(() => {
    const upPath = showlocation.map((item) => {
      return {
        lat: Number(item.description_ar),
        lng: Number(item.description_en),
      };
    });
    setlat(upPath[0] && upPath[0].lat);
    setlng(upPath[0] && upPath[0].lng);
    setPath(upPath);
  }, [useE]);

  // Store Polygon path in state
  const [path, setPath] = useState([
    { lat: 52.52549080781086, lng: 13.398118538856465 },
    { lat: 52.48578559055679, lng: 13.36653284549709 },
    { lat: 52.48871246221608, lng: 13.44618372440334 },
  ]);

  // Define refs for Polygon instance and listeners
  const polygonRef = useRef(null);
  const listenersRef = useRef([]);

  // Call setPath with new edited path
  const onEdit = useCallback(() => {
    if (polygonRef.current) {
      const nextPath = polygonRef.current
        .getPath()
        .getArray()
        .map((latLng) => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      setPath(nextPath);
    }
  }, [setPath]);

  // Bind refs to current Polygon and listeners
  const onLoad = useCallback(
    (polygon) => {
      polygonRef.current = polygon;
      const path = polygon.getPath();
      listenersRef.current.push(
        path.addListener("set_at", onEdit),
        path.addListener("insert_at", onEdit),
        path.addListener("remove_at", onEdit)
      );
    },
    [onEdit]
  );

  // Clean up refs
  const onUnmount = useCallback(() => {
    listenersRef.current.forEach((lis) => lis.remove());
    polygonRef.current = null;
  }, []);

  console.log(showlocation);

  const showItData = showIt.map((item, index) => (
    <Accordion.Item eventKey={index}>
      <div className="d-flex align-items-center gap-1">
        {index === 0 ? (
          <i
            class="fa-solid fa-location-dot"
            style={{ color: "green", fontSize: "20px" }}
          ></i>
        ) : (
          <i
            class="fa-sharp fa-solid fa-location-pin"
            style={{ color: "green", fontSize: "20px" }}
          ></i>
        )}
        <Accordion.Header>{item.title_en}</Accordion.Header>
      </div>
      <Accordion.Body>{item.description_en}</Accordion.Body>
    </Accordion.Item>
  ));

  const showIncData = showInc.map((item, index) => (
    <Accordion.Item eventKey={index}>
      <div className="d-flex align-items-center gap-1">
        <i
          class="fa-solid fa-check"
          style={{ color: "green", fontSize: "20px" }}
        ></i>
        <Accordion.Header>{item.title_en}</Accordion.Header>
      </div>
      <Accordion.Body>{item.description_en}</Accordion.Body>
    </Accordion.Item>
  ));
  const showExData = showEx.map((item, index) => (
    <Accordion.Item eventKey={index}>
      <div className="d-flex align-items-center gap-1">
        <i
          class="fa-solid fa-xmark"
          style={{ color: "red", fontSize: "20px" }}
        ></i>
        <Accordion.Header>{item.title_en}</Accordion.Header>
      </div>
      <Accordion.Body>{item.description_en}</Accordion.Body>
    </Accordion.Item>
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
        setDeatil(dataRes.filter((x) => x.package_id === id));
      });
  }, []);
  useEffect(() => {
    fetch(`https://test.emkanfinances.net/api/otherdetail/show`)
      .then((res) => res.json())
      .then((data) => {
        setDataMap(data.filter((item) => item.package_id === id));
        runUseEffect((prev) => prev + 1);
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
                <h3 className="color-black">Itinerary</h3>
                <Accordion>{showItData}</Accordion>
              </div>
              <div className="w-100">
                <h2 style={{ color: "#1a2b48" }}>
                  <i class="fa-solid fa-map-location-dot pe-1"></i>Location
                </h2>
                <LoadScript
                  id="script-loader"
                  googleMapsApiKey=""
                  language="en"
                  region="us"
                >
                  <GoogleMap
                    mapContainerClassName="App-map"
                    center={{ lat: lat, lng: lng }}
                    zoom={12}
                    version="weekly"
                    on
                  >
                    <Polygon
                      // Make the Polygon editable / draggable

                      // Event used when dragging the whole Polygon
                      onDragEnd={onEdit}
                      onLoad={onLoad}
                      onUnmount={onUnmount}
                      path={path}
                    />
                  </GoogleMap>
                </LoadScript>
              </div>
              <div className="d-flex flex-wrap justify-content-between">
                <div className="col-12 col-md-4 ">
                  <h3 style={{ color: "green" }} className="my-1 text-center">
                    Included
                  </h3>
                  <Accordion>{showIncData}</Accordion>
                </div>
                <div className="col-12 col-md-4">
                  <h3 style={{ color: "red" }} className="my-1 text-center">
                    Excluded
                  </h3>
                  <Accordion>{showExData}</Accordion>
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
