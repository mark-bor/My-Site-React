import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App.js';
import { 
  ErrorPage, Home, Works, AboutMe, Certificates,
  
  Calculator,
  BirthdayTimer,
  PasswordGenerator,
  MemoryGame,
  ExchangeRate,
  EventTimer,
  LocalDB,
  SendOut,
  TankGame, Menu, Main, Tank, MachineGun, Options, Explanation,
} from "./pages/index.js";

import './global.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorPage position={'fixed'} />}>
        <Route errorElement={<ErrorPage position={'static'} />}>
          
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/certificates" element={<Certificates />} />
          
          <Route path="/works/calculator" element={<Calculator />} />
          <Route path="/works/birthday-timer" element={<BirthdayTimer />} />
          <Route path="/works/password-generator" element={<PasswordGenerator />} />
          <Route path="/works/memory-game" element={<MemoryGame />} />
          <Route path="/works/exchange-rate" element={<ExchangeRate />} />
          <Route path="/works/event-timer" element={<EventTimer />} />
          <Route path="/works/local-data-bases" element={<LocalDB />} />
          <Route path="/works/send-out" element={<SendOut />} />

          <Route path="/works/tank-game" element={<TankGame />}>
            <Route path="/works/tank-game/menu" element={<Menu />}>
              <Route path="/works/tank-game/menu/" element={<Main />}>
                <Route path="/works/tank-game/menu/" element={<Tank />} />
                <Route path="/works/tank-game/menu/machine-gun" element={<MachineGun />} />
              </Route>
              <Route path="/works/tank-game/menu/options" element={<Options />} />
              <Route path="/works/tank-game/menu/explanation" element={<Explanation />} />
            </Route>
          </Route>
          
        </Route>
      </Route>
    </>
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
