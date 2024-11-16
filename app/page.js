"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  const [testData, setTestData] = useState({ type: "", duration: "" });

  function submitHandler(e) {
    e.preventDefault();
    router.push(
      `/typing-test?type=${testData.type}&duration=${testData.duration}`
    );
  }

  function changeHandler(e) {
    setTestData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  }

  return (
    <div
      className={`p-2 flex items-center justify-center ${poppins.className}`}
    >
      <div className="py-3 px-5 border-[1px] rounded-md bg-slate-200 flex flex-col items-center justify-center min-w-[70%] h-[70vh]">
        <h1 className="text-[2em] font-semibold">
          Check your typing skills in a minute
        </h1>
        <p className="text-lg text-slate-700 mb-2">
          Type away to join 150+ million test takers!
        </p>

        <form
          className="flex flex-col items-center justify-center gap-3 my-3 w-full"
          onSubmit={submitHandler}
        >
          <label>Choose your options for test</label>
          <select
            name="duration"
            id="duration"
            className="p-2 rounded-lg outline-none w-1/2"
            value={testData?.duration}
            onChange={changeHandler}
            required
          >
            <option value="" disabled>
              Choose test duration
            </option>
            <option value="30">30 Seconds</option>
            <option value="60">1 Minute</option>
            <option value="120">2 Minute</option>
            <option value="180">3 Minute</option>
            <option value="300">5 Minute</option>
            <option value="600">10 Minute</option>
          </select>

          <select
            name="type"
            id="type"
            className="p-2 rounded-lg outline-none w-1/2"
            value={testData?.type}
            onChange={changeHandler}
            required
          >
            <option value="" disabled>
              Choose test type
            </option>
            <optgroup label="Difficulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </optgroup>
            <optgroup label="Typed">
              <option value="tricky">Tricky</option>
              <option value="blind">Blind</option>
              <option value="story">Story Typing</option>
              <option value="themed">Themed</option>
            </optgroup>
            <optgroup label="Others">
              <option value="benchmark">Benchmark</option>
              <option value="certificate">Certificate</option>
              <option value="professional">Professional</option>
            </optgroup>
          </select>

          <button className="bg-blue-600 text-white px-5 py-[6px] rounded-sm mt-3 hover:opacity-80">
            Start Test
          </button>
        </form>
      </div>
    </div>
  );
}
