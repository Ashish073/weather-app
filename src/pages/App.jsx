import React from "react";
import ProgressContextProvider from "../context/ProgressContext";
import WeatherContextProvider from "../context/WeatherContext";
import TempContextProvider from "../context/TempScaleContext";
import CityContextProvider from "../context/CityContext";
import LandingPage from "./LandingPage/LandingPage";
import RootLayout from '../Layout/RootLayout'
import '../styles/global.scss';

function App() {

  return (
    <>
      <ProgressContextProvider>
        <WeatherContextProvider>
          <CityContextProvider>
            <TempContextProvider>
              <RootLayout>
                <LandingPage />
              </RootLayout>
            </TempContextProvider>
          </CityContextProvider>
        </WeatherContextProvider>
      </ProgressContextProvider>
    </>
  )
}

export default App
