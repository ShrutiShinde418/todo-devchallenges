import React from "react";
import "./App.css";
import TabButton from "./components/TabButton";
import AllTab from "./components/AllTab";
import ActiveTab from "./components/ActiveTab";
import CompleteTab from "./components/CompleteTab";
import { useSelector } from "react-redux";

function App() {
  const tabState = useSelector((state) => state.tabs);
  const tabNames = ["All", "Active", "Completed"];
  let tabContent;

  if (tabState === "All") {
    tabContent = <AllTab />;
  } else if (tabState === "Active") {
    tabContent = <ActiveTab />;
  } else {
    tabContent = <CompleteTab />;
  }

  return (
    <div className="flex flex-col items-center sm:justify-start justify-center mb-0 mt-10 min-h-screen">
      <h1 className="font-bold text-4xl text-gray1 font-raleway">#todo</h1>
      <div className="sm:mx-0 mx-5">
        <menu className="grid grid-cols-3 sm:gap-28 gap-6 mt-12 border-b border-gray2 sm:px-14 text-center font-montserrat font-semibold text-gray1">
          {tabNames.map((name) => (
            <TabButton
              key={name}
              content={name}
              class={tabState === name ? "active" : ""}
            />
          ))}
        </menu>
        <div className="flex flex-col mt-4 font-montserrat">{tabContent}</div>
      </div>
    </div>
  );
}

export default App;
