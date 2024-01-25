'use client'

import { useRef, useEffect } from "react";
import paper from 'paper/dist/paper-core'

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {

    // Create an empty project and a view for the canvas:
    if (containerRef.current) paper.setup(containerRef.current)
    // Create a Paper.js Path to draw a line into it:
    var path = new paper.Path()
    // Give the stroke a color
    path.strokeColor = new paper.Color('black')
    var start = new paper.Point(100, 100)
    // Move to start and draw a line from there
    path.moveTo(start)
    // Note that the plus operator on Point objects does not work
    // in JavaScript. Instead, we need to call the add() function:
    path.lineTo(start.add([200, -50]))
    // Draw the view now:
    paper.view.update()
  }
  )

  return (
    <div>
      <h1>PAPER TEST</h1>
      <canvas id="paperCanvas" className='bg-white resize w-1/2 h-1/2'  ref={containerRef} ></canvas>
    </div>
  );
}
