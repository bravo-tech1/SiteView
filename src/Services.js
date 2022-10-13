import React from "react";
import "reactjs-popup/dist/index.css";
import "react-image-lightbox/style.css";
import Loading from "./components/Loading";
import "./style.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Services() {
  const [loading, setLoading] = useState(true);
  const [dataDepartment, setdataDepartment] = useState([]);
  const [data, setData] = useState([]);

  function getFileExtension(fileName) {
    var fileExtension;
    fileExtension = fileName.replace(/^.*\./, "");
    return fileExtension;
  }
  function isIMage(fileName) {
    var fileExt = getFileExtension(fileName);
    var imagesExtension = ["mp4"];
    if (imagesExtension.indexOf(fileExt) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/service/show")
      .then((res) => res.json())
      .then((dataRes) => {
        setData(dataRes);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/Department/show")
      .then((res) => res.json())
      .then((dataRes) => setdataDepartment(dataRes));
  }, []);

  const dataDepartmentShow = dataDepartment.map((x, key) => (
    <div key={key}>
      {data.map((item, key) =>
        item.department_id === x.id ? (
          <div key={key}>
            <div
              className="col-md-12"
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  className="card mb-3 mt-3 service-card"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Link
                    to={`/states/${item.id}`}
                    width="100%"
                    style={{ display: "flex", width: "100%" }}
                  >
                    {isIMage(item.service_video) ? (
                      <video
                        width="900px"
                        autoPlay
                        muted
                        className="service-video"
                      >
                        <source
                          src={`${item.service_video}`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <div
                        style={{
                          backgroundImage: ` url(${item.service_video})`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          width: "100%",
                          backgroundSize: " cover",
                          height: "15.25rem",
                          position: "relative",
                        }}
                      ></div>
                    )}
                    <h4
                      style={{
                        color: "gray",
                        fontWeight: "bold",
                        position: "absolute",
                        top: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "white",
                        padding: "10px",
                        width: "240px",
                        textAlign: "center",
                      }}
                    >
                      {" "}
                      {item.service_text_en}
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  ));

  return (
    <>
      <div className="container text-center mb-3">
        <h1>Travelling Around The World</h1>
      </div>
      <div
        style={{
          width: "100%",
          height: "60vh",
          margin: " 0 0 4rem 0",
          overflow: "hidden",
        }}
      >
        <video
          width="100%"
          style={{ objectFit: "initial", height: "75vh" }}
          autoPlay
          loop
          muted
          className="service-video"
        >
          <source
            src={require("./assets/before_service.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      <h1 className="text-center fw-bold mb-4 title-photo-s">
        <img
          src={require("./assets/images/Asset 4@3x.png")}
          alt="assest img"
          style={{
            position: "absolute",
            top: "0",
            width: "210px",
            left: "50%",
            height: "54px",
            transform: "translate(-50%, 0%)",
            zIndex: "-1",
          }}
          className="assest-img"
        />
        Services
      </h1>
      <div className="bg-custom">
        <div className="container" id="services">
          <div className="row" style={{ position: "relative" }}>
            {loading && <Loading />}
            {dataDepartmentShow}
          </div>
        </div>
      </div>
    </>
  );
}
