import p5 from 'p5';

import './style.css';

new p5((p5Instance) => {
  const p = p5Instance as unknown as p5;

  p.setup = function () {
    p.createCanvas(1000, 700);
  };

  p.draw = function () {
    p.background(240);
  };
}, document.getElementById('app')!);
