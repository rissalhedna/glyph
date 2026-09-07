export interface Buffer {
  length: number;
  lineCount: number;
  readRange(start: number, end: number): string;
  readLine(lineIdx: number): string;
  insert(idx: number, str: string): void;
  delete(start: number, end: number): void;
  getText(): string;
}

export class StringBuffer implements Buffer {
  private text: string = "";
  length: number;
  lineCount: number = 0;
  lineIndex: Array<number> = [];
  constructor(text: string) {
    this.text = text;
    this.length = text.length;
    this.buildIndex();
  }
  buildIndex() {
    let segments: Array<string> = this.text.split("\n");
    this.lineIndex = [];
    console.log(segments);
    let runningOffset = 0;
    for (let s of segments) {
      this.lineIndex.push(runningOffset);
      runningOffset += s.length + 1;
    }
    this.lineCount = this.lineIndex.length;
  }
  readRange(start: number, end: number) {
    return this.text.slice(start, end);
  }
  insert(charIdx: number, str: string) {
    this.text =
      this.text.slice(0, charIdx) +
      str +
      this.text.slice(charIdx, this.text.length);
    this.length = this.text.length;
    this.buildIndex();
  }
  delete(start: number, end: number) {
    this.text =
      this.text.slice(0, start) + this.text.slice(end, this.text.length);
    this.length = this.text.length;
    this.buildIndex();
  }

  readLine(lineIdx: number) {
    return this.text
      .slice(this.lineIndex[lineIdx], this.lineIndex[lineIdx + 1]) //if lineIdx+1 is out of bound then this.lineIndex would be undefined, which accidentally works since slice handles undefined as "up til the end"
      .replaceAll("\n", "");
  }

  getText() {
    return this.text;
  }
}

let text = "AB\nCD\n\n\n\n\n";

let buffer = new StringBuffer(text);
console.log(buffer.lineIndex);
