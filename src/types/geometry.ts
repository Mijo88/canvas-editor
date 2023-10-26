import '';

declare global {
  namespace _ {
    type Point = {
      x: number;
      y: number;
    };

    type Line = {
      from: Point;
      to: Point;
    };
  }
}
