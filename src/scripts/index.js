import AppWrap, {OptionContext} from "./Global/context";
import {hiddenLanguage} from "./Global/language";
import {changeColor, colorInputDefCheck, getAndSetColor} from "./Global/siteColor";

import {setErrorPageColor} from "./ErrorPage/setErrorPageColor";

import {showMenuWindow} from "./Header/burgerMenu";
import {hiddenMenuWindow} from "./MenuWindow/hidden";

import {hiddenAll, showMore, showSelectedList} from "./Sidebar/list";
import {mouseDown, mouseUp, setSidebarSize} from "./Sidebar/hiddenSidebar";

import {closeWindow} from "./Home/closeWindow";
import {showInformation} from "./Home/showInformation";

import {sortByColor, sortWorks} from "./Works/sort";

import {calculateOnMouseDown, calculateQuadraticEquation} from "./progectWorks/Calculator/calculate";

import {startTimer} from "./progectWorks/BirthdayTimer/startTimer";

import {startEventTimer} from "./progectWorks/EventTimer/startEventTimer";

import {getExchange} from "./progectWorks/ExchangeRate/loading";
import {getValues} from "./progectWorks/ExchangeRate/validation";

import {setLDBLanguage} from "./progectWorks/LocalDB/setLDBLanguage";
import {setLDBColor} from "./progectWorks/LocalDB/setLDBColor";

import {addEvent} from "./progectWorks/MemoryGame/MemoryGameClass";

import {onMouseDown, onMouseUp} from "./progectWorks/PasswordGenerator/click";



export {
    AppWrap, OptionContext,
    hiddenLanguage,
    changeColor, colorInputDefCheck, getAndSetColor,
    setErrorPageColor,
    showMenuWindow,
    hiddenMenuWindow,
    hiddenAll, showMore, showSelectedList,
    mouseDown, mouseUp, setSidebarSize,
    closeWindow, showInformation,
    sortByColor, sortWorks,
    calculateOnMouseDown, calculateQuadraticEquation,
    startTimer,
    startEventTimer,
    getExchange, getValues,
    setLDBLanguage, setLDBColor,
    addEvent,
    onMouseDown, onMouseUp,
}