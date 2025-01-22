import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../reduxHw/themeSliceHw";

function SwitchThemeHw() {
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  const dispatch = useDispatch();
  const lightTheme = theme === "light";
  return (
    <>
      <div
        style={{
          background: lightTheme ? "pink" : "#333",
          color: lightTheme ? "#000" : "hotpink",
          padding: "15px",
        }}
      >
        <h1>{lightTheme ? "Light Theme" : "Dark Theme"}</h1>
        <button
          onClick={() => dispatch(toggleTheme())}
          style={{ borderRadius: "7px", background: "aqua" }}
        >
          Toogle Theme
        </button>
      </div>
    </>
  );
}

export default SwitchThemeHw;
