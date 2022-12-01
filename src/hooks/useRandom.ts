import { useState, useEffect } from "react";

export const useRandomBackgroundColor = () => {
  const colorArray = ["bg-rose-200", "bg-fuchsia-200", "bg-indigo-200", "bg-cyan-200", "bg-teal-200", "bg-lime-200", "bg-yellow-200"];
  const [randomBackground, setRandomBackground] = useState("white");

  useEffect(() => {
    setRandomBackground(colorArray[Math.floor(Math.random() * colorArray.length)]);
  }, []);

  return randomBackground;
};

export const useRandomNoteRotation = () => {
  const rotationArray = ["rotate-1", "rotate-0", "rotate-[-1deg]"];
  const [randomRotation, setRandomRotation] = useState("rotation-0");

  useEffect(() => {
    setRandomRotation(rotationArray[Math.floor(Math.random() * rotationArray.length)]);
  }, []);

  return randomRotation;
};
