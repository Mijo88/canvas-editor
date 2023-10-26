declare global {
  namespace _ {
    interface ShapeOptions {
      x: number;
      y: number;
      fill: string;
    }
  }
}

export class Shape implements _.ShapeOptions {
  public name = this.constructor.name;

  public x: number;
  public y: number;
  public fill: string;
  public hidden: boolean;

  constructor(options: Partial<_.ShapeOptions>) {
    this.x = options.x ?? 0;
    this.y = options.y ?? 0;
    this.fill = options.fill ?? '#000';

    this.hidden = true;
  }
}
