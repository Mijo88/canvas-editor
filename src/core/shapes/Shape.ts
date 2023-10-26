declare global {
  namespace _ {
    interface ShapeOptions {
      name: string;
      x: number;
      y: number;
      fill: string;
      stroke: string;
      origin: string;
      angle: number;
    }
  }
}

export class Shape implements _.ShapeOptions {
  public type = this.constructor.name;
  public name: string;

  public x: number;
  public y: number;
  public fill: string;
  public stroke: string;
  public hidden: boolean;
  public origin: string;
  public angle: number;

  constructor(options: Partial<_.ShapeOptions>) {
    this.name = options.name ?? this.constructor.name;
    this.x = options.x ?? 0;
    this.y = options.y ?? 0;
    this.fill = options.fill ?? 'none';
    this.stroke = options.stroke ?? 'none';
    this.origin = options.origin ?? 'center';
    this.angle = options.angle ?? 0;

    this.hidden = false;
  }

  public draw = (_: CanvasRenderingContext2D): void => {
    throw new Error(`${this.constructor.name}.draw() not implemented`);
  };

  public set = <T extends keyof this>(prop: T, value: this[T]) => {
    this[prop] = value;

    return this;
  };

  public hide = () => {
    this.hidden = true;

    return this;
  };

  public show = () => {
    this.hidden = false;

    return this;
  };

  protected finishDraw(ctx: CanvasRenderingContext2D) {
    if (this.fill !== 'none') {
      ctx.fillStyle = this.fill;
      ctx.fill();
    }
    if (this.stroke !== 'none') {
      ctx.strokeStyle = this.stroke;
      ctx.closePath();
      ctx.stroke();
    }
  }
}
