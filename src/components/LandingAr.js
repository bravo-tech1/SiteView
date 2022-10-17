import { useEffect, useState } from "react";
import parse from "html-react-parser";

export default function Landing() {
  const [section, setSection] = useState([]);

  useEffect(() => {
    let isApiSubscribed = true;
    fetch("https://test.emkanfinances.net/api/website/showbyid/1")
      .then((res) => res.json())
      .then((dataRes) => {
        if (isApiSubscribed) {
          setSection(dataRes);
        }
      });
    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  }, []);

  const SectionShow = section.map((item, key) => (
    <div key={key}>
      {localStorage.getItem("dark") === "true" ? (
        <div
          style={{
            background: `url(${item.website_image_night})`,
            backgroundPosition: " center",
            backgroundSize: "cover",
          }}
          className=" img-fluid images"
        ></div>
      ) : (
        <div
          style={{
            background: `url(${item.website_image})`,
            backgroundPosition: " center",
            backgroundSize: "cover",
          }}
          className=" img-fluid images"
        ></div>
      )}
      {localStorage.getItem("dark") === "true" ? (
        <div className="contect"> {parse(item.title_ar_night)} </div>
      ) : (
        <div className="contect"> {parse(item.title_ar)} </div>
      )}
    </div>
  ));
  return <div className="landind text-center">{SectionShow}</div>;
}
