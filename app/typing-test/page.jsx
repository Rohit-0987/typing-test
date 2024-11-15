"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function TypingTest() {
  const searchParams = useSearchParams();
  const duration = searchParams.get("duration");
  const type = searchParams.get("type");
  return (
    <div>
      <div>{duration}</div>
      <div>{type}</div>
    </div>
  );
}
