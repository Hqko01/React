'use client';

import React from "react";
import { useState, useEffect } from 'react';


export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERAPIKEY;
  const [locationStatu, setLocationStatu] = useState<boolean | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null);
  const [weatherDescription, setWeatherDescription] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatu(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);

        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=tr&appid=${API_KEY}`
          );

          if (!response.ok) {
            throw new Error('Konum bilgisine göre hava durumu alınamadı.');
          }

          const data = await response.json();

          setCity(data.name);
          setWeatherIcon(data.weather[0].icon);
          setWeatherDescription(data.weather[0].description);
          setTemperature(Math.floor(data.main.temp));

        } catch (err: any) {
          console.log(err);
        } finally {
          setLocationStatu(true);
        }
      },
      (err) => {
        setLocationStatu(false);
      }
    );
  };

  useEffect(() => {
    handleGetLocation();
  }, []);

  return (
    <div className="card flex flex-col relative w-88 rounded-2xl text-white aspect-square bg-black/10 backdrop-blur-lg shadow-lg shadow-black/30 font-[montserrat] overflow-hidden">
      {locationStatu === false ?
        <div className="error absolute top 0 left 0 w-full h-full flex flex-col justify-center items-center gap-8 bg-red-400 opacity-80 p-8">
          <div className="icon w-24 h-24">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 9V13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 17.0195V17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </div>
          <div className="text text-2xl text-center font-bold">
            <p>Konum bilgisine erişilemedi</p>
          </div>
        </div>
        :
        locationStatu === null ?
          <div className="load absolute top 0 left 0 w-full h-full flex flex-col justify-center items-center gap-8 bg-green-400 opacity-80 p-8">
            <div className="icon w-24 h-24">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 9V13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 17.0195V17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </div>
            <div className="text text-2xl text-center font-bold">
              <p>Konum bilgisi yükleniyor</p>
            </div>
          </div>
          :
          <>
            <div className="top flex flex-1 p-4 max-h-max">
              <div className="left flex-1">
                <div className="loc">
                  <p className="text-2xl font-bold">{city}</p>
                </div>
                <div className="date text-[.9rem]">
                  <p>{new Date().toLocaleDateString()}</p>
                </div>
              </div>
              <div className="right flex flex-1 items-center justify-center">
                <p className="text-3xl font-bold">{temperature}°C</p>
              </div>
            </div>
            <div className="center relative flex flex-col items-center justify-center flex-2">
              <div className="icon flex-1">
                <img className="w-40 h-40" src={`https://openweathermap.org/payload/api/media/file/${weatherIcon}.png`} alt="Weather Icon" />
              </div>
              <div className="weatherDescription flex flex-1 justify-center items-center text-2xl font-bold capitalize">
                <p>{weatherDescription}</p>
              </div>
            </div>
          </>
      }
    </div >
  );
}
