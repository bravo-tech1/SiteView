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
      <div
        style={{
          background: `url(${item.website_image})`,
          backgroundPosition: " center",
          backgroundSize: "cover",
        }}
        className=" img-fluid images"
      ></div>
      <div className="contect"> {parse(item.title_ar)} </div>
    </div>
  ));
  return <div className="landind text-center">{SectionShow}</div>;
}
