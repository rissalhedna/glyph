interface Buffer {
  length: number;
  lineCount: number;
  readRange: Array<number>;
  readLine: number;
  insert: number;
  delete: Array<number>;
  getText: string;
}
class StringBuffer implements Buffer {
  // In TypeScript, class properties must be explicitly declared on the class body to define
  // their types and satisfy the implemented interface (`Buffer`), unless parameter properties
  // (e.g. `public length: number` in the constructor) are used instead.
  length: number;
  lineCount: number;
  readRange: Array<number>;
  readLine: number;
  insert: number;
  delete: Array<number>;
  getText: string;

  constructor(
    length: number,
    lineCount: number,
    readRange: Array<number>,
    readLine: number,
    insert: number,
    del: Array<number>,
    getText: string,
  ) {
    this.length = length;
    this.lineCount = lineCount;
    this.readRange = readRange;
    this.readLine = readLine;
    this.insert = insert;
    this.delete = del;
    this.getText = getText;
  }
}
const canvas: HTMLCanvasElement = document.getElementById(
  "canvas",
) as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
console.log(ctx);
