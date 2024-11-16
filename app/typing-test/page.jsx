"use client";
import { useState, useEffect, useRef } from "react";

const InteractiveSlidingCanvas = () => {
  const canvasRef = useRef(null);

  const sentence =
    "The quick brown fox jumps over the lazy dog. JavaScript is a versatile programming language. Frontend development involves HTML, CSS, and JavaScript. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga unde non, neque natus, assumenda id animi veniam ipsam, mollitia quibusdam soluta et tempora consectetur eos voluptate. Vitae nisi unde repellendus dicta obcaecati minima accusantium voluptatem culpa modi. Tempore ad deserunt mollitia illo cumque, praesentium illum, itaque et facere at ratione. Dolorem velit molestiae voluptas.";
  const words = sentence.split(" ");
  const wordsPerLine = 5; // Number of words per line

  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [userTyped, setUserTyped] = useState("");
  const [animationOffset, setAnimationOffset] = useState(0);

  // Split the sentence into multiple lines
  useEffect(() => {
    const lineArray = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lineArray.push(words.slice(i, i + wordsPerLine).join(" "));
    }
    setLines(lineArray);
  }, []);

  // Draw text and input field on the canvas
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "18px Arial";
    ctx.textBaseline = "top";

    lines.forEach((line, index) => {
      const y = 10 + index * 60 - animationOffset;
      if (y >= -50 && y <= canvas.height) {
        // Draw the line of text
        ctx.fillStyle = index === currentLineIndex ? "blue" : "black";
        ctx.fillText(line, 10, y);

        // Draw the input text below the current line
        if (index === currentLineIndex) {
          const inputY = y + 30; // Position user-typed text below the line

          let x = 12; // Padding inside the input box
          const currentSentence = lines[currentLineIndex];
          currentSentence.split("").forEach((char, i) => {
            if (i < userTyped.length) {
              ctx.fillStyle = userTyped[i] === char ? "black" : "red";
            } else {
              ctx.fillStyle = "gray";
            }
            ctx.fillText(char, x, inputY + 5); // Position text inside input box
            x += ctx.measureText(char).width;
          });

          // Add an underline to mimic an input field
          ctx.beginPath();
          ctx.moveTo(10, inputY + 30);
          ctx.lineTo(canvas.width - 20, inputY + 30);
          ctx.strokeStyle = "black"; // Underline color
          ctx.lineWidth = 1; // Underline thickness
          ctx.stroke();
        }
      }
    });
  };

  // Update the canvas whenever userTyped, currentLineIndex, or animationOffset changes
  useEffect(() => {
    drawCanvas();
  }, [userTyped, currentLineIndex, animationOffset]);

  // Handle user key press
  const handleKeyPress = (e) => {
    const key = e.key;
    const currentSentence = lines[currentLineIndex];

    if (key === "Backspace") {
      setUserTyped((prev) => prev.slice(0, -1));
    } else if (key.length === 1) {
      setUserTyped((prev) => prev + key);
    }

    // Check if the input matches the current line
    if (userTyped + key === currentSentence) {
      setUserTyped("");
      setCurrentLineIndex((prevIndex) => prevIndex + 1);
      setAnimationOffset((pre) => pre + 60);
    }
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "20px" }}
      tabIndex={0} // Makes the div focusable
      onKeyDown={handleKeyPress} // Handle user input
    >
      <canvas
        ref={canvasRef}
        width="600"
        height="400"
        style={{
          border: "1px solid #000",
          display: "block",
          margin: "20px auto",
        }}
      ></canvas>
    </div>
  );
};

export default InteractiveSlidingCanvas;
