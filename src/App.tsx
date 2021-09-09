import React from "react"

import MainPage from "./components/main-page/MainPage"
import MenuTopbar from "./components/menu-topbar/MenuTopbar"
import Navbar from "./components/navbar/Navbar"

import { GlobalStyle } from "./utils/css/global"

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MenuTopbar />
      <MainPage />
      <GlobalStyle />
    </div>
  )
}

export default App
