# Glyph

A lightweight, canvas-based code editor built from scratch in TypeScript.

No Monaco, no CodeMirror, no third-party editor libraries. Built from first principles to explore custom text buffer data structures, hardware-accelerated text rendering, and language tooling architecture.

---

## About

**Glyph** is an experimental browser-based text and code editor written entirely by hand using Vim motions. The project focuses on the core computer science and systems challenges behind modern editors:

- **Data Structures**: Implementing a naive line buffer transitioning to an append-only **Piece Table** for fast $O(1)$ edits.
- **Canvas Rendering**: Monospace sub-pixel glyph rendering on HTML5 2D Canvas with `devicePixelRatio` scaling.
- **Coordinate Spaces**: Exact mapping between linear character offsets, logical `(line, col)` coordinates, and visual display cells.
- **Input Pipeline**: Invisible proxy bridge for native browser IME, clipboard, and keyboard capture.

---

## Roadmap

- [x] **Phase 0**: Canvas setup, HiDPI scaling, hidden textarea input proxy & caret loop
- [ ] **Phase 1**: Naive Buffer (`StringBuffer`, line index mapping, unit tests)
- [ ] **Phase 2**: Cursor movement, sticky column navigation & tab expansion
- [ ] **Phase 3**: Mouse hit-testing, drag selection & clipboard sync
- [ ] **Phase 4**: Piece Table data structure with fuzz testing
- [ ] **Phase 5**: Undo/Redo engine (Command pattern & edit coalescing)
- [ ] **Phase 6**: Word wrap & visual layout
- [ ] **Phase 7**: Viewport virtualization & line gutter
- [ ] **Phase 8**: Syntax highlighting & decorations
- [ ] **Phase 9**: Language Server Protocol (LSP) integration
- [ ] **Phase 10**: Inline completions & AI ghost text
- [ ] **Phase 11**: Multi-cursor editing

---

## Tech Stack

- **Language**: TypeScript
- **Bundler**: Vite
- **Testing**: Vitest
- **Rendering**: HTML5 Canvas 2D API

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rissalhedna/glyph.git
cd glyph

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
```

---

## Author

**Rissal Hedna**

- GitHub: [@rissalhedna](https://github.com/rissalhedna)

---

## License

This project is licensed under the [MIT License](LICENSE).
