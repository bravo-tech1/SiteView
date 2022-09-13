


import React, { lazy,Suspense  } from "react";

const HeaderAr = lazy(() => import ("./components/HeaderAr"));
const LandingAr = lazy(() => import ("./components/LandingAr"));
const LatestAr = lazy(() => import ("./LatestServicesAr"));
const ServicesAr = lazy(() => import ("./ServicesAr"));
const FooterAr = lazy(() => import ("./components/FooterAr"));






export default function App() {
  
    return (
      <Suspense fallback={<div>جاري التحميل... </div>}>
      <div className="father">
          <HeaderAr />
          <LandingAr />
          <LatestAr /> 
        <ServicesAr/>
        <FooterAr/>
      </div>
      </Suspense>
    );
  }
  