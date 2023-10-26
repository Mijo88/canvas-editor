import type {
  Shape,
  Circle,
} from '@/core';

type Size = {
  width: number;
  height: number;
};

type CanvasElement = (
  Shape |
  Circle
);

export class Canvas {
  public drawnElements: Map<CanvasElement, CanvasElement> = new Map();
  public size: Size;

  private ctx: CanvasRenderingContext2D;

  constructor(canvasRenderingContext: CanvasRenderingContext2D, size: Size) {
    this.ctx = canvasRenderingContext;
    this.size = size;
  }

  public draw = (element: CanvasElement) => {
    if (!this.drawnElements.has(element)) {
      this.drawnElements.set(element, element);
    }

    element.draw(this.ctx);
  };

  public clear = () => {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height);
  };

  public render() {
    this.clear();

    this.drawnElements.forEach((element) => {
      if (!element.hidden) {
        element.draw(this.ctx);
      }
    });
  }
}
