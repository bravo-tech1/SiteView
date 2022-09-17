import { useState } from "react";
import { Link } from "react-router-dom";

import HeaderAr from "./HeaderAr";

import FooterAr from "./FooterAr";

import { useEffect } from "react";

export default function Pack() {
  const [data, setData] = useState([]);

  const id = Number(window.location.pathname.split("/").slice(-1)[0]);
  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes.filter((x) => x.hotel_id === id)));
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
          <p style={{ marginBottom: "0" }}>حزمة</p>
        </div>
      </div>
      <div class="pakeg" style={{ flexDirection: "row-reverse" }}>
        <div class="content ">
          <h1 dir="rtl">{item.details_title_ar}</h1>

          <p class="balneo" dir="rtl">
            مدة البكج:{" "}
            <span style={{ color: "var(--yellow-color)" }}>
              {item.package_period}
            </span>
          </p>
          <p class="balneo" dir="rtl">
            سعر البكج:{" "}
            <span style={{ color: "var(--yellow-color)" }}>
              {item.package_price}$
            </span>
          </p>
          <div>
            <p class="paragraph" dir="rtl">
              الوصف:{" "}
              <span style={{ color: "var(--yellow-color)" }}>
                {item.details_text1_ar}
              </span>
            </p>
            <p class="paragraph" dir="rtl">
              وصف ثاني:{" "}
              <span style={{ color: "var(--yellow-color)" }}>
                {item.details_text2_ar}
              </span>
            </p>
          </div>
        </div>
        <img src={item.package_image} width={"50%"} />
      </div>
    </div>
  ));
  return (
    <>
      <HeaderAr />
      <div class="container" style={{ marginTop: "10%" }}>
        {items}
      </div>
      <FooterAr />
    </>
  );
}
