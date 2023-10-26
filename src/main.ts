import '@/style/main.scss';

import { Canvas, Circle } from '@/core';

const WIDTH = 400;
const HEIGHT = 400;

const canvasNode: HTMLCanvasElement = document.querySelector('canvas')!;
canvasNode.setAttribute('width', `${WIDTH}`);
canvasNode.setAttribute('height', `${HEIGHT}`);

const canvas = new Canvas(canvasNode.getContext('2d')!, {
  width: WIDTH,
  height: HEIGHT,
});

const circleA = new Circle({
  x: 200,
  y: 200,
  radius: 4,
  fill: '#FF0000',
});
canvas.draw(circleA);

const circleB = new Circle({
  x: 300,
  y: 300,
  radius: 4,
  fill: '#0000FF',
});
canvas.draw(circleB);

setTimeout(() => {
  circleB.hidden = true;
  canvas.render();

  setTimeout(() => {
    circleB.hidden = false;
    canvas.render();
  }, 1000);
}, 2000);
