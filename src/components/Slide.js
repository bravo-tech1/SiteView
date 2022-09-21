import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../cover.css";

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      ref: ref,
      className: "slide",
      "data-active": active,
      style: {
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      },
    } /*#__PURE__*/,

    React.createElement("div", {
      className: "slideBackground",
      style: {
        backgroundImage: `url('${slide.state_image}')`,
      },
    }) /*#__PURE__*/,

    React.createElement(
      "div",
      {
        className: "slideContent",
        style: {
          backgroundImage: `url('${slide.state_image}')`,
        },
      } /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "slideContentInner" } /*#__PURE__*/,
        React.createElement(
          "h2",
          { className: "slideTitle" },
          slide.state_title_en
        ) /*#__PURE__*/,
        React.createElement(
          "h3",
          { className: "slideSubtitle" },
          slide.state_title_secondary_en
        ) /*#__PURE__*/,
        React.createElement(
          "p",
          { className: "slideDescription" },
          slide.state_text_en
        )
      )
    )
  );
}

export default function FinalSlide() {
  const [data, setData] = useState([]);
  const [slides, setSlides] = useState([]);
  const user = localStorage.getItem("email");
  const [userA, setUserA] = useState(0);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/user/show")
      .then((res) => res.json())
      .then((dataRes) =>
        setUserA(dataRes.find((item) => `"${item.email}"` === user).accepted)
      );
  }, []);

  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/state/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);

  const id = Number(window.location.pathname.replace("/states/", ""));
  useEffect(() => {
    fetch("https://test.emkanfinances.net/api/state/show")
      .then((res) => res.json())
      .then((data) => setSlides(data.filter((x) => x.service_id === id)));
  }, []);

  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length,
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
      };
    }
  };

  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return userA ? (
    React.createElement(
      "div",
      { className: "slides-father" } /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "slides" } /*#__PURE__*/,
        React.createElement(
          "button",
          { onClick: () => dispatch({ type: "PREV" }) },
          "\u2039"
        ),

        [...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return (
            <Link
              to={`cities/${slide.id}`}
              className="slide"
              style={{ textDecoration: "none" }}
            >
              {" "}
              {React.createElement(Slide, {
                slide: slide,
                offset: offset,
                key: i,
              })}{" "}
            </Link>
          );
        }) /*#__PURE__*/,
        React.createElement(
          "button",
          { onClick: () => dispatch({ type: "NEXT" }) },
          "\u203A"
        )
      )
    )
  ) : !localStorage.getItem("email") ? (

    <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
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
      </div>

  ) : (
    <div
      className="text-center"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>You Are Not Accepted Yet</h1>
        <a href="/">Back To Home</a>
      </div>
    </div>
  );
}
