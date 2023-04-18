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
  ErrorPage, Home, CV, Works, Contacts, Certificates,
  
  Calculator,
  BirthdayTimer,
  PasswordGenerator,
  MemoryGame,
  ExchangeRate,
  EventTimer,
  LocalDB,
  SendOut,
  
  TankGame, Menu, Main, Tank, MachineGun, Options, Explanation,
} from "./Pages/index.js";

import './global.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App lang={'EN'} />} errorElement={<ErrorPage lang={'EN'} position={'fixed'} />}>
        <Route errorElement={<ErrorPage lang={'EN'} position={'static'} />}>
          
          <Route path="/" element={<Home lang={'EN'} />} />
          <Route path="/cv" element={<CV lang={'EN'} />} />
          <Route path="/works" element={<Works lang={'EN'} />} />
          <Route path="/contacts" element={<Contacts lang={'EN'} />} />
          <Route path="/certificates" element={<Certificates lang={'EN'} />} />
          
          <Route path="/works/calculator" element={<Calculator lang={'EN'}/>} />
          <Route path="/works/birthday-timer" element={<BirthdayTimer lang={'EN'}/>} />
          <Route path="/works/password-generator" element={<PasswordGenerator lang={'EN'}/>} />
          <Route path="/works/memory-game" element={<MemoryGame lang={'EN'}/>} />
          <Route path="/works/exchange-rate" element={<ExchangeRate lang={'EN'}/>} />
          <Route path="/works/event-timer" element={<EventTimer lang={'EN'}/>} />
          <Route path="/works/local-data-bases" element={<LocalDB lang={'EN'}/>} />
          <Route path="/works/send-out" element={<SendOut lang={'EN'}/>} />

          <Route path="/works/tank-game" element={<TankGame lang={'EN'}/>}>
            <Route path="/works/tank-game/menu" element={<Menu lang={'EN'}/>}>
              <Route path="/works/tank-game/menu/" element={<Main lang={'EN'}/>}>
                <Route path="/works/tank-game/menu/" element={<Tank lang={'EN'}/>} />
                <Route path="/works/tank-game/menu/machine-gun" element={<MachineGun lang={'EN'}/>} />
              </Route>
              <Route path="/works/tank-game/menu/options" element={<Options lang={'EN'}/>} />
              <Route path="/works/tank-game/menu/explanation" element={<Explanation lang={'EN'}/>} />
            </Route>
          </Route>
          
        </Route>
      </Route>

      <Route path="/ua/" element={<App lang={'UA'} />} errorElement={<ErrorPage lang={'UA'} position={'fixed'} />}>
        <Route errorElement={<ErrorPage lang={'UA'} position={'static'} />}>
          
          <Route path="/ua/" element={<Home lang={'UA'} />} />
          <Route path="/ua/cv" element={<CV lang={'UA'} />} />
          <Route path="/ua/works" element={<Works lang={'UA'} />} />
          <Route path="/ua/contacts" element={<Contacts lang={'UA'} />} />
          <Route path="/ua/certificates" element={<Certificates lang={'UA'} />} />

          <Route path="/ua/works/calculator" element={<Calculator lang={'UA'}/>} />
          <Route path="/ua/works/birthday-timer" element={<BirthdayTimer lang={'UA'}/>} />
          <Route path="/ua/works/password-generator" element={<PasswordGenerator lang={'UA'}/>} />
          <Route path="/ua/works/memory-game" element={<MemoryGame lang={'UA'}/>} />
          <Route path="/ua/works/exchange-rate" element={<ExchangeRate lang={'UA'}/>} />
          <Route path="/ua/works/event-timer" element={<EventTimer lang={'UA'}/>} />
          <Route path="/ua/works/local-data-bases" element={<LocalDB lang={'UA'}/>} />
          <Route path="/ua/works/send-out" element={<SendOut lang={'UA'}/>} />
        </Route>
      </Route>
    </>
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
