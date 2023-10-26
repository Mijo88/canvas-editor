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
  public elements: Map<CanvasElement, CanvasElement> = new Map();
  public size: Size;

  private ctx: CanvasRenderingContext2D;

  constructor(canvasRenderingContext: CanvasRenderingContext2D, size: Size) {
    this.ctx = canvasRenderingContext;
    this.size = size;
  }

  public add = (...elements: CanvasElement[]) => {
    elements.forEach((element) => {
      if (!this.elements.has(element)) {
        this.elements.set(element, element);
      }
    });

    this.render();

    return this;
  };

  public remove = (...elements: CanvasElement[]) => {
    elements.forEach((element) => {
      this.elements.delete(element);
    });

    this.render();

    return this;
  };

  public hide = (...elements: CanvasElement[]) => {
    elements.forEach((element) => {
      element.hide();
    });

    return this;
  };

  public show = (...elements: CanvasElement[]) => {
    elements.forEach((element) => {
      element.show();
    });

    return this;
  };

  public clear = () => {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height);
    this.elements = new Map();

    return this;
  };

  public render = () => {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height);

    this.elements.forEach((element) => {
      this.ctx.fillStyle = 'none';
      this.ctx.strokeStyle = 'none';
      element.draw(this.ctx);
    });

    return this;
  };
}
