import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

import Header from "./Components/Header/index.js";
import MenuWindow from "./Components/Menu_Window/index.js";
import Sidebar from "./Components/Sidebar/index.js";
import Footer from "./Components/Footer/index.js";



export default function App({lang, setLang}) {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, [setWindowSize]);

  window.onresize = () => setWindowSize(window.innerWidth);



  return (
    <>
      <Header lang={lang} setLang={setLang} />

      {windowSize>=769 ? <Sidebar lang={lang} /> : <MenuWindow lang={lang} />}

      <main>
        <Outlet />
      </main>

      <Footer lang={lang} />
    </>
  );

}

