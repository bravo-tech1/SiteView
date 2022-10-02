import React, { lazy, Suspense } from "react";
import Loading from "./components/Landing";

const Header = lazy(() => import("./components/Header"));
const Landing = lazy(() => import("./components/Landing"));
const Latest = lazy(() => import("./LatestServices"));
const Services = lazy(() => import("./Services"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "relative",
            height: "100vh",
          }}
        >
          <Loading />
        </div>
      }
    >
      <div className="father">
        <Header />
        <Landing />
        <Latest />
        <Services />
        <Footer />
      </div>
    </Suspense>
  );
}
