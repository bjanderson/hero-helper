# Hero Helper

This is a practice application to learn Angular.

It is inspired by the Tour of Heros angular tutorial.

---

To fix the compiler error add the following to node_modules/@ngtools/webpack/src/compiler_host.d.ts

    readonly atimeMs: number;
    readonly mtimeMs: number;
    readonly ctimeMs: number;
    readonly birthtimeMs: number;
