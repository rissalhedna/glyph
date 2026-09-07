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
  it("Test Buffer Initialization", () => {
    const buffer = new StringBuffer("Hello World");
    expect(buffer.getText()).toBe("Hello World");
    expect(buffer.lineCount).toBe(1);
    expect(buffer.lineIndex).toEqual([0]);
  });
});
