import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

import Header from "./Components/Header/Header.js";
import MenuWindow from "./Components/Menu_Window/Menu_Window.js";
import Sidebar from "./Components/Sidebar/index.js";
import Footer from "./Components/Footer/Footer.js";

import { getOrSetColor } from './scripts/site_color.js';



export default function App({lang, setLang}) {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    getOrSetColor();
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

