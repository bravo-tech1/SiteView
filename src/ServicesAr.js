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
                          height: "11.25rem",
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
                      {item.service_text_ar}
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
      <div className="container">
        <div className="row some-mobile" style={{ margin: "3rem 0" }}>
          <div
            class=" col-md-4"
            style={{
              maxWidth: "31%",
              background: "#FDEDE4",
              fontSize: "1.625rem",
              margin: "0.6rem",
              textAlign: "center",
              padding: "6.25rem 2.5rem 1.875rem",
              position: "relative",
            }}
          >
            <img
              src={require("./assets/images/triangle_orange_0.png")}
              style={{
                position: "absolute",
                top: "-20%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              alt="img"
            />
            لدينا أقوى سهولة{" "}
            <span style={{ color: "#E26329" }}> منصة حجز وأكثرها </span>
            لوكلاء السفر
          </div>
          <div
            class=" col-md-4"
            style={{
              maxWidth: "31%",
              position: "relative",
              background: "#D9F3FC ",
              fontSize: "1.625rem",
              margin: "0.6rem",
              textAlign: "center",
              padding: "6.25rem 2.5rem 1.875rem",
            }}
          >
            <img
              src={require("./assets/images/triangle_blue_0.png")}
              style={{
                position: "absolute",
                top: "-20%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              alt="img"
            />
            يمكنك الوصول إلى{" "}
            <span style={{ color: "#00A5D3" }}> مجموعة المنتجات </span> التي
            توفر لك كل ما <span style={{ color: "#00A5D3" }}>يطلبه عملاؤك</span>
          </div>
          <div
            class=" col-md-4"
            style={{
              maxWidth: "31%",
              position: "relative",
              background: "#F7F2EB",
              fontSize: "1.625rem",
              margin: "0.6rem",
              textAlign: "center",
              padding: "6.25rem 2.5rem 1.875rem",
            }}
          >
            <img
              src={require("./assets/images/triangle_brown_0.png")}
              style={{
                position: "absolute",
                top: "-20%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              alt="img"
            />
            بفضل اتفاقياتنا الحصرية ،{" "}
            <span style={{ color: "#C8A977" }}> يمكنك الحصول على</span> أفضل
            الفنادق بأفضل الأسعار في أكثر الوجهات رواجًا
          </div>
        </div>
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
