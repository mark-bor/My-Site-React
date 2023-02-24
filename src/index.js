import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import './global.css';

import App from './App.js';
import ErrorPage from "./Components/Error_Page/ErrorPage.js";

import Home from "./Components/Home/Home.js";
import CV from "./Components/CV/CV.js";
import Works from "./Components/Works/Works.js";
import Contacts from "./Components/Contacts/Contacts.js";
import Certificates from "./Components/Certificates/Certificates.js";

import Calculator from "./Components/project_works/Calculator/index.js";
import BirthdayTimer from "./Components/project_works/Birthday_Timer/index.js";
import PasswordGenerator from "./Components/project_works/Password_Generator/index.js";
import MemoryGame from "./Components/project_works/Memory_Game/index.js";
import ExchangeRate from "./Components/project_works/Exchange_Rate/index.js";
import EventTimer from "./Components/project_works/Event_Timer/index.js";
import LocalDataBases from "./Components/project_works/Local_Data_Bases/index.js";
// import SendOut from "./Components/project_works/Send_Out/index.js";

import TankGame from "./Components/project_works/Tank_Game/index.js";
import Menu from "./Components/project_works/Tank_Game/components/Menu/index.js";
import Main from "./Components/project_works/Tank_Game/components/Main/index.js";
import Tank from "./Components/project_works/Tank_Game/components/Tank/index.js";
import MachineGun from "./Components/project_works/Tank_Game/components/Machine_Gun/index.js";
import Options from "./Components/project_works/Tank_Game/components/Options/index.js";
import Explanation from "./Components/project_works/Tank_Game/components/Explanation/index.js";



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
          <Route path="/works/local-data-bases" element={<LocalDataBases lang={'EN'}/>} />
          {/* <Route path="/works/send-out" element={<SendOut lang={'EN'}/>} /> */}

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
          <Route path="/ua/works/local-data-bases" element={<LocalDataBases lang={'UA'}/>} />
          {/* <Route path="/ua/works/send-out" element={<SendOut lang={'UA'}/>} /> */}
        </Route>
      </Route>
    </>
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
