import { describe, it, expect, beforeEach } from "vitest";
import { StringBuffer } from "../src/core/buffer";
// export interface Buffer {
//   length: number;
//   lineCount: number;
//   readRange(start: number, end: number): string;
//   readLine(lineIdx: number): string;
//   insert(idx: number, str: string): void;
//   delete(start: number, end: number): void;
//   getText(): string;
// }
describe("StringBuffer", () => {
  it("Buffer Initialization", () => {
    const buffer = new StringBuffer("Hello World");
    expect(buffer.getText()).toBe("Hello World");
    expect(buffer.lineCount).toBe(1);
    expect(buffer.lineIndex).toEqual([0]);
  });

  it("Insert and Delete Text", () => {
    const buffer = new StringBuffer("Hello");
    buffer.insert(5, " \nWorld");
    expect(buffer.getText()).toBe("Hello \nWorld");
    expect(buffer.lineIndex).toEqual([0, 7]);
    buffer.delete(0, 6);
    expect(buffer.getText()).toBe("\nWorld");
  });
});
