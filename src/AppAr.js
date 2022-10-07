import React, { lazy, Suspense } from "react";
import Loading from "./components/Landing";
const HeaderAr = lazy(() => import("./components/HeaderAr"));
const LandingAr = lazy(() => import("./components/LandingAr"));
const LatestAr = lazy(() => import("./LatestServicesAr"));
const ServicesAr = lazy(() => import("./ServicesAr"));
const FooterAr = lazy(() => import("./components/FooterAr"));

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
      <div className="father arabic">
        <HeaderAr />
        <LandingAr />
        <LatestAr />
        <ServicesAr />
        <FooterAr />
      </div>
    </Suspense>
  );
}
