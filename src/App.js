import React, { lazy,Suspense  } from "react";

const Header = lazy(() => import ("./components/Header"));
const Landing = lazy(() => import ("./components/Landing"));
const Latest = lazy(() => import ("./LatestServices"));
const Services = lazy(() => import ("./Services"));
const Footer = lazy(() => import ("./components/Footer"));






export default function App() {
  
  return (
    <Suspense fallback={<div>Loading... </div>}>
    <div className="father">
        <Header />
        <Landing />
        <Latest /> 
      <Services/>
      <Footer/>
    </div>
    </Suspense>
  );
}
