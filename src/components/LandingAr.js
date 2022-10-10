import { useEffect, useState } from "react";
import parse from "html-react-parser";

export default function Landing() {
  const [section, setSection] = useState([]);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/website/showbyid/1")
      .then((res) => res.json())
      .then((dataRes) => setSection(dataRes));
  }, []);

  const SectionShow = section.map((item) => (
    <div>
      <div
        style={{
          background: `url(${item.website_image})`,
          backgroundPosition: " center",
          backgroundSize: "cover",
        }}
        className=" img-fluid images"
      ></div>
      <h1 className="contect"> {parse(item.title_ar)} </h1>
    </div>
  ));
  return <div class="landind text-center">{SectionShow}</div>;
}
