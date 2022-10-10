import { useEffect, useState } from "react";
import parse from "html-react-parser";

export default function Landing() {
  const [section, setSection] = useState([]);

  useEffect(() => {
    const controller = new AbortController(); // <-- create controller
    const { signal } = controller; // <-- get signal for request
    fetch("https://test.emkanfinances.net/api/website/showbyid/1", {
      signal,
    })
      .then((res) => res.json())
      .then((dataRes) => setSection(dataRes));
    return () => controller.abort();
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
      <h1 className="contect"> {parse(item.title_en)} </h1>
    </div>
  ));
  return <div class="landind text-center">{SectionShow}</div>;
}
