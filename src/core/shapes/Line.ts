import { Shape } from './Shape';

declare global {
  namespace _ {
    interface LineOptions extends _.ShapeOptions {
      from: _.Point;
      to: _.Point;
    }
  }
}

export class Line extends Shape {
  public from: _.Point;
  public to: _.Point;

  constructor(options: Partial<_.LineOptions>) {
    // TODO: set x.y values based on origin point between points "from" & "to"
    super(options);

    this.from = options.from ?? { x: 0, y: 0 };
    this.to = options.to ?? { x: 0, y: 0 };
    this.stroke = options.stroke ?? '#000000';
  }

  public draw = (ctx: CanvasRenderingContext2D) => {
    if (this.hidden) {
      return;
    }

    ctx.beginPath();
    ctx.moveTo(this.from.x, this.from.y);
    ctx.lineTo(this.to.x, this.to.y);

    this.finishDraw(ctx);
  };
}
