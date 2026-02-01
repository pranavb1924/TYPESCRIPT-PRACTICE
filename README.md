# TypeScript Practice

Learning TypeScript in 2026, from "Hello, TypeScript!" to a full-stack app by December. Started January 3, 2026.

Every week has the same rhythm: **learn** a concept, **practice** it twice, then **build** something small with it. The last week of each month is a project week.

## Setup

You need [Node.js](https://nodejs.org) (I'm using v22). Then install the dev tools (TypeScript and tsx):

```bash
npm install
```

## Running a lesson

Every lesson is a folder with an `index.ts`. Run one with tsx:

```bash
npx tsx 01-fundamentals/01-hello-typescript/index.ts
```

Type-check the whole repo (tsx runs code but doesn't check types):

```bash
npm run typecheck
```

## Roadmap

- [x] **Day 1:** Node, TypeScript and tsx setup
- [x] **01 Fundamentals** (Jan): types, inference, operators, template literals, console input, if/switch, loops
  - Project: number guesser + calculator CLI
- [ ] **02 Functions & Collections** (Feb): typed functions, parameters, arrow functions, arrays, tuples, objects, Map/Set, strings
  - Project: grade book
- [ ] **03 Type System I** (Mar): type aliases, interfaces, unions and literals, narrowing, enums, unknown vs any
  - Project: bank account system
- [ ] **04 Classes & OOP** (Apr): classes, access modifiers, getters/setters, inheritance, abstract classes, interfaces, composition
  - Project: RPG inventory
- [ ] **05 Errors, Files & Testing** (May): try/catch, custom errors, Node fs, JSON, Vitest
  - Project: to-do CLI with JSON storage and tests
- [ ] **06 Generics & Utility Types** (Jun): generic functions, interfaces and classes, constraints, keyof/typeof, utility types
  - Project: typed store with events
- [ ] **07 Functional Patterns** (Jul): map/filter/reduce, sort, find, flatMap, iterators, generators, immutability
  - Project: CSV analyzer
- [ ] **08 Async** (Aug): event loop, Promises, async/await, Promise.all, fetch, AbortController, typed API responses
  - Project: API fetcher CLI
- [ ] **09 Advanced Types & Tooling** (Sep): discriminated unions, type guards, mapped/conditional/template literal types, ES modules, ESLint, Prettier
  - Project: refactor the to-do app
- [ ] **10 Backend** (Oct): Express, routing, Zod validation, SQLite with Drizzle
  - Project: library REST API
- [ ] **11 Frontend** (Nov): React with Vite, typed props, state, effects, forms, calling the API
  - Project: library web app
- [ ] **12 Capstone** (Dec): full-stack polish, integration tests, GitHub Actions CI, Docker, docs
  - Project: full-stack library app
