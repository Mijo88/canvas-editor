import { Shape } from './Shape';

declare global {
  namespace _ {
    interface CircleOptions extends _.ShapeOptions {
      radius: number;
    }
  }
}

export class Circle extends Shape {
  public radius: number;

  constructor(options: Partial<_.CircleOptions>) {
    super(options);

    this.radius = options.radius ?? 0;
  }

  public draw = (ctx: CanvasRenderingContext2D) => {
    this.hidden = false;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, (2 * Math.PI));
    ctx.fillStyle = this.fill;
    ctx.fill();

    return this;
  };
}
