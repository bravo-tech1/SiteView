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
      <h1 className="text-center">{x.dep_name_ar}</h1>
      {data.map((item) =>
        item.department_id === x.id ? (
          <Link
            to={`/states/${item.id}/ar`}
            className="col-md-12"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="card mb-5 mt-5" width="100%">
              <video width="100%" autoPlay muted>
                <source src={`${item.service_video}`} type="video/mp4" />
              </video>
              <div className="card-body">
                <h1 className="card-text text-center">
                  {item.service_text_ar}
                </h1>
              </div>
            </div>
          </Link>
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
