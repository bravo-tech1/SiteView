import React, { lazy, Suspense } from "react";
import Landing from "./components/Landing";
import Loading from "./components/Loading";

const Header = lazy(() => import("./components/Header"));
const Latest = lazy(() => import("./LatestServices"));
const Services = lazy(() => import("./Services"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div className="father">
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
        <Header />
      </Suspense>
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
      ></Suspense>
      <Landing />
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
        <Latest />
      </Suspense>
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
        <Services />
      </Suspense>
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
        <Footer />
      </Suspense>
    </div>
  );
}
