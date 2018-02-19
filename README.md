# Hero Helper

This is a practice application to learn Angular.

It is inspired by the Tour of Heros angular tutorial.

---

If you would like to use Postman to test the backend API calls there is a config file, named HeroHelper.postman_dump.json, that you can load into Postman that has all of the calls set up for you.

---

To fix the compiler error add the following to node_modules/@ngtools/webpack/src/compiler_host.d.ts

    readonly atimeMs: number;
    readonly mtimeMs: number;
    readonly ctimeMs: number;
    readonly birthtimeMs: number;
