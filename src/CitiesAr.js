import HeaderAr from "./components/HeaderAr";

import FooterAr from "./components/FooterAr";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [data, setData] = useState([]);
  const user = localStorage.getItem("email");
  const [userA, setUserA] = useState(0);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/user/show")
      .then((res) => res.json())
      .then((dataRes) =>
        setUserA(dataRes.find((item) => `"${item.email}"` === user).accepted)
      );
  }, []);

  const id = Number(window.location.pathname.split("/").slice(-1)[0]);
  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/city/show")
      .then((res) => res.json())
      .then((data) => setData(data.filter((item) => item.state_id === id)));
  }, []);

  const items = data.map((item) => (
    <Link
      to={`hotels/${item.id}`}
      style={{
        textDecoration: "none",
        textAlign: "center",
      }}
    >
      <div class="card" style={{ width: "24rem", height: "60vh" }}>
        <img class="card-img-top" src={item.city_image} alt="Card image cap" />
        <div class="card-body">
          <h3 class="card-text" style={{ fontWeight: "bold" }}>
            {item.city_name_ar}
          </h3>
        </div>
      </div>
    </Link>
  ));
  return (
    <div>
      <HeaderAr />
      {userA ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {items}
        </div>
      ) : !localStorage.getItem("email") ? (
        <>
          <h1 className="text-center">Register To See Services</h1>
          <Link to="/Register" style={{ textAlign: "center" }}>
            {" "}
            <div
              className="btn roundrd-circle main-btn btn-login text-center"
              style={{ marginLeft: "10px" }}
            >
              Register
            </div>
          </Link>
        </>
      ) : (
        <div className="text-center">You Are Not Accepted Yet</div>
      )}
      <FooterAr />
    </div>
  );
}
