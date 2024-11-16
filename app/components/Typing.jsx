"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const sampleText =
  "Bamboo is a very sustainable material as it is one of the world's fastest-growing plants!";

export default function TypingTest() {
  const searchParams = useSearchParams();
  const duration = searchParams.get("duration");
  const type = searchParams.get("type");
  const [inputText, setInputText] = useState("");
  const [totalTime, setTotalTime] = useState(parseInt(duration)); // Total time in seconds (default: 1 minute)
  const [remainingTime, setRemainingTime] = useState(totalTime); // Remaining time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [stats, setStats] = useState({ wpm: 0, accuracy: 0 });

  // Start the timer when typing begins
  useEffect(() => {
    let interval;
    if (isRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
      calculateStats();
      setIsCompleted(true);
    }
    return () => clearInterval(interval);
  }, [isRunning, remainingTime]);

  // Calculate WPM and accuracy
  const calculateStats = () => {
    const wordsTyped = inputText.trim().split(" ").length;
    const correctChars = inputText
      .split("")
      .filter((char, idx) => char === sampleText[idx]).length;
    const accuracy = Math.round((correctChars / sampleText.length) * 100);

    setStats({
      wpm: wordsTyped * (60 / (totalTime / 60)),
      accuracy,
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-2xl font-bold">Typing Test</h1>

      {isCompleted ? (
        <div className="mt-5">
          <h2 className="text-xl font-semibold">Test Completed!</h2>
          <p>Words Per Minute: {stats.wpm}</p>
          <p>Accuracy: {stats.accuracy}%</p>
        </div>
      ) : (
        <div className="w-full max-w-2xl mt-5">
          <div className="flex justify-between items-center mb-3">
            <p className="text-lg">Time Left: {formatTime(remainingTime)}</p>
            <button
              onClick={() => {
                setIsRunning(true);
              }}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Start Test
            </button>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <p className="text-lg">{sampleText}</p>
          </div>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={!isRunning || isCompleted}
            className="w-full mt-3 p-2 border rounded"
            rows="5"
            placeholder="Start typing here..."
          />
        </div>
      )}
    </div>
  );
}
