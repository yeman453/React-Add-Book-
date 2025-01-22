import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from '../redux/themeSlice'

function SwitchTheme() {
  const theme =useSelector(state => state.theme);
  console.log(theme)
  const dispatch =useDispatch()
  const lightTheme= theme === "light";
  return (
 <>
 <div style={{background: lightTheme? "#fff": "#333",color:lightTheme? "#000": "#fff"}}>
  <h1>{lightTheme ? "Light Theme": "Dark Theme"}</h1>
  <button onClick={()=>dispatch(toggleTheme())}>Toggle Theme</button>
 </div>
 </>
  )
}

export default SwitchTheme
