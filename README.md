# Astro SSGπ + Firebaseπ₯

## π§βπ Setup

1. Firebase Authπ₯
2. Firestoreπ¦
3. Astro SSGπ
4. PreactβοΈ
5. Tailwindπ¬οΈ

## π Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
βββ public/
βββ lib/
βββ utils/
βββ src/
β   βββ components/
β   βββ layout/
β   βββ pages/
β       βββ index.astro
βββ package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## π§ Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## π Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
