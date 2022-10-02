import { useEffect, useState } from "react";

export default function Landing() {
  const [section, setSection] = useState([]);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/website/showbyid/1")
      .then((res) => res.json())
      .then((dataRes) => setSection(dataRes));
  }, []);

  const SectionShow = section.map((item) => (
    <div>
      <img
        src={item.website_image}
        alt="landing img"
        className=" img-fluid images"
      />
      <h1 className="contect"> {item.title_ar} </h1>
    </div>
  ));
  return <div class="landind text-center">{SectionShow}</div>;
}
