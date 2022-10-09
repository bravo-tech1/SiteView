import React from "react";
import "reactjs-popup/dist/index.css";
import "react-image-lightbox/style.css";
import Loading from "./components/Loading";
import "./style.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [dataDepartment, setdataDepartment] = useState([]);
  const [data, setData] = useState([]);
  const user = localStorage.getItem("email");

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

  const dataDepartmentShow = dataDepartment.map((x) => (
    <div className="mb-5">
      <h1 className="text-center">{x.dep_name_ar}</h1>
      {data.map((item) =>
        item.department_id === x.id ? (
          <>
            <div>
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
                    className="card mb-5 mt-5 service-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <Link
                      to={`/states/${item.id}`}
                      width="100%"
                      style={{ display: "flex" }}
                    >
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
          </>
        ) : (
          ""
        )
      )}
    </div>
  ));

  return (
    <>
      <h1 className="text-center fw-bold mb-4">الخدمات</h1>
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
