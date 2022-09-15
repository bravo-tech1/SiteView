// view site

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import States from "./components/Slide";
import StatesAr from "./components/SlideAr";
import Cities from "./Cities";
import CitiesAr from "./CitiesAr";
import Hotels from "./Hotels";
import HotelsAr from "./HotelsAr";
import NotFound from "./404.js";
import Pack from "./components/Pack";
import PackAr from "./components/PackAr";
import Deatils from "./Deatils";
import About from "./About";
import AboutAr from "./AboutAr";
import Contact from "./ContactUs";
import ContactAr from "./ContactUsAr";
import Careers from "./Careers";
import CareersAr from "./CareersAr";
import Featured from "./Featured";
import FeaturedAr from "./FeaturedAr";
import Register from "./Register";
import Login from "./Login";
import Forget from "./Forget";
import Check from "./Check";

import AppAr from "./AppAr";

import "./style.css";
import "./all.css";
import "./admin.css";

// Router

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/about/ar" element={<AboutAr />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/contact/ar" element={<ContactAr />}></Route>
      <Route path="/states/:statesId" element={<States />}></Route>
      <Route path="/states/:statesId/ar" element={<StatesAr />}></Route>
      <Route
        path="/states/:statesId/cities/:citiesId"
        element={<Cities />}
      ></Route>
      <Route
        path="/states/:statesId/ar/cities/:citiesId"
        element={<CitiesAr />}
      ></Route>
      <Route
        path="/states/:statesId/cities/:citiesId/hotels/:hotelsId"
        element={<Hotels />}
      ></Route>
      <Route
        path="/states/:statesId/ar/cities/:citiesId/hotels/:hotelsId"
        element={<HotelsAr />}
      ></Route>
      <Route
        path="/states/:statesId/cities/:citiesId/hotels/:hotelsId/packages/:packagesId"
        element={<Pack />}
      ></Route>
      <Route
        path="/states/:statesId/ar/cities/:citiesId/hotels/:hotelsId/packages/:packagesId"
        element={<PackAr />}
      ></Route>
      <Route
        path="/states/:statesId/cities/:citiesId/hotels/:hotelsId/packages/:packagesId/deatils/:deatilsId"
        element={<Deatils />}
      ></Route>

      <Route path="/careers" element={<Careers />} />
      <Route path="/careers/ar" element={<CareersAr />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/featured/ar" element={<FeaturedAr />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/forget/check" element={<Check />} />
      <Route path="/ar" element={<AppAr />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>,
  document.getElementById("app")
);
