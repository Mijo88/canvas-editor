import {
  Canvas,
  Circle,
  Line,
} from '@/core';

export function loadDemo() {
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
    name: 'Circle #1',
    x: 200,
    y: 200,
    radius: 20,
    fill: '#FF0000',
  });

  const circleB = new Circle({
    name: 'Circle #2',
    x: 300,
    y: 300,
    radius: 10,
    stroke: '#0000FF',
  });

  const circleC = new Circle({
    name: 'Circle #3',
    x: 250,
    y: 100,
    radius: 15,
    fill: '#cccccc',
    stroke: '#000000',
  });

  const lineAB = new Line({
    from: circleA,
    to: circleB,
  });

  const lineAC = new Line({
    from: circleA,
    to: circleC,
    fill: '#000000',
  });

  const lineBC = new Line({
    from: circleB,
    to: circleC,
    fill: '#000000',
  });

  canvas
    .add(circleA, circleB, circleC)
    .add(lineAB, lineAC, lineBC);

  setInterval(() => {
    circleA.set('x', Math.floor(Math.random() * WIDTH));
    circleA.set('y', Math.floor(Math.random() * HEIGHT));

    circleB.set('x', Math.floor(Math.random() * WIDTH));
    circleB.set('y', Math.floor(Math.random() * HEIGHT));

    circleC.set('x', Math.floor(Math.random() * WIDTH));
    circleC.set('y', Math.floor(Math.random() * HEIGHT));

    canvas.render();
  }, 50);
}
