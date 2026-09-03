<div align="center">

# ⚡ Glyph

### A Canvas-Based Web Code Editor Built From Scratch

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-Testing-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Zero Dependencies](https://img.shields.io/badge/Editor_Frameworks-Zero-FF6B6B?style=flat-square)](https://github.com/rissalhedna/glyph)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

<p align="center">
  <b>Glyph</b> is an experimental browser-based code editor built entirely from first principles.<br/>
  No Monaco. No CodeMirror. No Ace. Pure HTML5 Canvas rendering, custom text data structures, and raw browser input pipelines.
</p>

</div>

---

## 📖 About

Most modern web code editors are wrappers around pre-existing powerhouses like Monaco (VS Code) or CodeMirror. While convenient, using those black-box abstractions skips over the most fascinating computer science challenges in systems and GUI development:

- _How does an editor store and edit gigabytes of text in constant time without memory fragmentation?_
- _How do you render crisp, sub-pixel monospace glyphs on high-DPI screens without relying on DOM elements?_
- _How do coordinate spaces translate between linear byte offsets, logical lines, and visual wrapped display cells?_
- _How do language servers (LSP), tokenizers, and formatting engines communicate asynchronously inside Web Workers?_

**Glyph** is a personal, deep-dive hobby project by [Rissal Hedna](https://github.com/rissalhedna) to explore, demystify, and implement these systems end-to-end. The ultimate destination is a fully responsive, web-native code editor equipped with syntax highlighting, language server protocol (LSP) diagnostics, code formatting, and intelligent autocompletion.

---

## ✍️ Development Philosophy

> **"What I cannot create, I do not understand."** — Richard Feynman

- **100% Handcrafted Codebase**: Every data structure, rendering pipeline, and input handler in this repository is written by hand. No AI-generated code, no "vibe coding", and no copy-pasting opaque snippets. The priority is deliberate practice and total mechanical sympathy with the editor's internals.
- **AI as Documentation Scribe**: AI is strictly reserved for managing roadmap updates, formatting documentation, and serving as a high-level conceptual sounding board.
- **Zero Editor Libraries**: The editor surface is an HTML5 `<canvas>` coupled with an invisible `<textarea>` proxy for input capture and IME support.
- **Real Computer Science Primitives**: Progressing from a naive line buffer to a high-performance **Piece Table**, multi-cursor selection vectors, and command-pattern undo coalescing.

---

## 🗺️ Implementation Roadmap

```
Progress: [■□□□□□□□□□□□] 1 / 12 Milestones Completed (8%)
```

### 🧱 Tier 1: Core Buffer & Rendering Engine

| Phase  | Milestone                         |      Status      | Key Deliverables                                                                                                |
| :----: | :-------------------------------- | :--------------: | :-------------------------------------------------------------------------------------------------------------- |
| **00** | **Canvas Baseline & Input Proxy** |  `🟢 COMPLETED`  | High-DPI canvas scaling (`devicePixelRatio`), hidden `<textarea>` input proxy, monospace arithmetic             |
| **01** | **The Naive Buffer**              | `🟡 IN PROGRESS` | `Buffer` interface, `StringBuffer`, line offsets array, linear offset $\leftrightarrow$ `(row, col)` conversion |
| **02** | **Cursor & Navigation**           |   `⚪ PLANNED`   | Multi-cursor selection vector (`Selection[]`), arrow navigation, sticky column, 4-space tab expansion           |
| **03** | **Mouse & Selections**            |   `⚪ PLANNED`   | Click-to-offset hit testing, drag selection, double/triple click (word/line), clipboard synchronization         |

### ⚡ Tier 2: Production Data Structures & History

| Phase  | Milestone                    |    Status    | Key Deliverables                                                                                        |
| :----: | :--------------------------- | :----------: | :------------------------------------------------------------------------------------------------------ |
| **04** | **Piece Table Architecture** | `⚪ PLANNED` | Append-only original & add buffers, piece descriptor indexing, $O(1)$ append insertions, span splitting |
| **05** | **Undo / Redo Engine**       | `⚪ PLANNED` | Command pattern (`InsertCommand`, `DeleteCommand`), edit coalescing, dual-stack history model           |

### 📐 Tier 3: Layout & Virtualized Viewport

| Phase  | Milestone                   |    Status    | Key Deliverables                                                                                                                 |
| :----: | :-------------------------- | :----------: | :------------------------------------------------------------------------------------------------------------------------------- |
| **06** | **Layout & Word Wrap**      | `⚪ PLANNED` | 3 coordinate spaces mapping (Offset $\leftrightarrow$ Logical $\leftrightarrow$ Visual), soft word wrap layout, cursor traversal |
| **07** | **Viewport Virtualization** | `⚪ PLANNED` | Visible line slicing, kinetic scrolling & scrollbars, line number gutter, active line highlight                                  |

### 🧠 Tier 4: Language Tooling & Code Intelligence

| Phase  | Milestone                          |    Status    | Key Deliverables                                                                                   |
| :----: | :--------------------------------- | :----------: | :------------------------------------------------------------------------------------------------- |
| **08** | **Syntax Highlighting**            | `⚪ PLANNED` | Tokenizer & lexer integration, scoped theme resolver, decorations layer (squiggles, highlights)    |
| **09** | **Language Server Protocol (LSP)** | `⚪ PLANNED` | Web Worker JSON-RPC transport, document synchronization, hover tooltips & diagnostics              |
| **10** | **Autocompletion & Formatting**    | `⚪ PLANNED` | Fuzzy completion popup, snippet expansion, in-browser code formatting (Prettier / Biome in Worker) |
| **11** | **Multi-Cursor Engine & Polish**   | `⚪ PLANNED` | True simultaneous multi-caret editing, overlapping cursor coalescing, command palette              |

---

## 🏛️ Architecture & Coordinate Spaces

The engine strictly decouples the text buffer from the screen representation. Core data structures have zero dependencies on DOM or Canvas APIs.

```
src/
├── main.ts              # Application bootstrap & 60fps render loop
├── core/                # Pure text models (Zero UI/DOM dependencies)
│   ├── buffer.ts        # Buffer contract & StringBuffer
│   ├── piecetable.ts    # High-performance Piece Table
│   ├── lineindex.ts     # Linear offset <-> logical (line, col) indexer
│   ├── commands.ts      # Command pattern for atomic edits
│   └── history.ts       # Undo/Redo stacks with edit coalescing
├── view/                # Rendering & Layout engine
│   ├── layout.ts        # Tab expansion, wrapping, coordinate mapping
│   ├── renderer.ts      # 2D Canvas render pipeline
│   ├── viewport.ts      # Scroll offsets & visible slice virtualization
│   └── decorations.ts   # Diagnostics, highlights, and ghost text
├── input/               # Hardware event capture
│   ├── keyboard.ts      # Keyboard dispatch & hidden textarea bridge
│   └── mouse.ts         # Hit-testing, dragging, selections
└── services/            # Background language workers
    ├── highlight.ts     # Syntax tokenizer
    ├── lsp.ts           # JSON-RPC Language Server client
    └── format.ts        # In-browser code formatting
```

### The 3 Coordinate Spaces

Every transformation is handled through explicit, named converter functions to eliminate visual off-by-one errors:

1. **Offset Space**: Linear 0-indexed byte position into the text buffer (the single source of truth).
2. **Logical Space**: `(line, column)` representing character coordinates.
3. **Visual Space**: `(visualRow, visualCol)` accounting for line wrapping and tab-stop expansion.

---

## 🛠️ Local Development

### Prerequisites

- Node.js (v18+)
- npm / pnpm / yarn

```bash
# Clone the repository
git clone https://github.com/rissalhedna/glyph.git
cd glyph

# Install dependencies
npm install

# Start local development server
npm run dev

# Run unit tests
npm run test

# Build production bundle
npm run build
```

---

## 👤 Author

**Rissal Hedna**

- GitHub: [@rissalhedna](https://github.com/rissalhedna)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) © 2026 Rissal Hedna.
