import React from "react";
import "reactjs-popup/dist/index.css";
import "react-image-lightbox/style.css";
import "./style.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Projects() {
  const [dataDepartment, setdataDepartment] = useState([]);
  const [data, setData] = useState([]);
  const user = localStorage.getItem("email");
  const [userA, setUserA] = useState(0);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/service/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);
  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/Department/show")
      .then((res) => res.json())
      .then((dataRes) => setdataDepartment(dataRes));
  }, []);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/user/show")
      .then((res) => res.json())
      .then((dataRes) =>
        setUserA(dataRes.find((item) => `"${item.email}"` === user).accepted)
      );
  }, []);

  const dataDepartmentShow = dataDepartment.map((x) => (
    <div className="mb-5">
      <h1 className="text-center">{x.dep_name_en}</h1>
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
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className="card mb-5 mt-5 service-card"
                    style={{
                      width: "100%",
                      display: "flex",

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
                    </Link>
                    <div class="card-body ">
                      <h2 style={{ color: "black", fontWeight: "bold" }}>
                        {" "}
                        {item.service_text_en}
                      </h2>
                      <p class="card-text">
                        Click On The Service To See The Whole Information About
                        This Service
                      </p>
                    </div>
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
      <h1 className="text-center fw-bold mb-4">Services</h1>
      <div className="bg-custom">
        <div className="container" id="services">
          <div className="row">{dataDepartmentShow}</div>
        </div>
      </div>
    </>
  );
}
