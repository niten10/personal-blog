"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
export default function WhackAMole() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [moles, setMoles] = useState(Array(9).fill(false));
  const [gameActive, setGameActive] = useState(false);

  const popUpMole = useCallback(() => {
    if (gameActive) {
      const randomIndex = Math.floor(Math.random() * moles.length);
      setMoles((prev) => prev.map((mole, index) => index === randomIndex));
    }
  }, [gameActive, moles.length]);

  const whackMole = (index) => {
    if (moles[index] && gameActive) {
      setScore((prev) => prev + 1);
      setMoles((prev) => prev.map((mole, i) => (i === index ? false : mole)));
    }
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setMoles(Array(9).fill(false));
  };

  useEffect(() => {
    let timer;
    let moleTimer;

    if (gameActive) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            clearInterval(moleTimer);
            setGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      moleTimer = setInterval(popUpMole, 1000);
    }

    return () => {
      clearInterval(timer);
      clearInterval(moleTimer);
    };
  }, [gameActive, popUpMole]);

  return (
    <div className="flex  items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">
        Whack-A-Mole
      </h1>
      <div className="p-2 sm:p-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          {moles.map((mole, index) => (
            <div
              key={index}
              className={`w-16 h-16 sm:w-24 sm:h-24 bg-brown-600 rounded-full cursor-pointer transition-all duration-200 ${
                mole
                  ? "bg-brown-400 transform translate-y-[-5px] sm:translate-y-[-10px]"
                  : ""
              }`}
              onClick={() => whackMole(index)}
            >
              {mole && (
                <div className="w-full h-full rounded-full bg-brown-800 border-2 sm:border-4 border-brown-900 flex items-center justify-center">
                  <div className="w-8 h-3 sm:w-10 sm:h-4 bg-black rounded-full" />
                  <Image src="/mole.png" alt="mole" width="100" height="100" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 sm:mt-4 text-orange-600 text-lg sm:text-xl flex flex-col gap-x-8">
        <p>Score: {score}</p>
        <p>Time Left: {timeLeft}s</p>
        <Button
        onClick={startGame}
        disabled={gameActive}
        className="mt-2 sm:mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
      >
        {gameActive ? "Game in Progress" : "Start Game"}
      </Button>
      </div>
      
    </div>
  );
}
