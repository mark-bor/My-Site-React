import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Header, MenuWindow, Sidebar, Footer } from "./components/index";
import { AppWrap } from "./scripts/index";



export default function App() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, [setWindowSize]);

  window.onresize = () => setWindowSize(window.innerWidth);


  return (
    <AppWrap>
      <Header />

      {windowSize>=769 ? <Sidebar /> : <MenuWindow />}

      <main>
        <Outlet />

        <Footer />
      </main>
    </AppWrap>
  );
}

