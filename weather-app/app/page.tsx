'use client';

import React from "react";
import { useState, useEffect } from 'react';


export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERAPIKEY;

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('Tarayıcınız konum özelliğini desteklemiyor.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
      },
      (err) => {
        console.log('Konum izni reddedildi veya konum alınamadı.');
      }
    );
  };

  useEffect(() => {
    handleGetLocation();
  }, []);

  return (
    <div className="card flex flex-col relative w-88 rounded-2xl text-white aspect-square bg-white/10 backdrop-blur-lg shadow-lg shadow-black/30 font-[montserrat]">
      <div className="top flex-1 p-4 max-h-max">
        <div className="loc">
          <p className="text-lg font-bold">İstanbul, Beylikdüzü</p>
        </div>
        <div className="date text-[.9rem]">
          <p>2023-10-10</p>
        </div>
      </div>
      <div className="center relative flex-2 border-2">
        <div className="kelvin absolute top-2 left-2 text-5xl">25°C</div>
      </div>
      <div className="bottom flex-1 bg-amber-950"></div>
    </div>
  );
}
