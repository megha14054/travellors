
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import HeaderNavBar from "@/components/HeaderNavBar";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [userLocation, setUserLocation] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState([]);
  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    });
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
          <HeaderNavBar />
          {children}
          </UserLocationContext.Provider>
          
        </Provider>
      </body>
    </html>
  );
}
