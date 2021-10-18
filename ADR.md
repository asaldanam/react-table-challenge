# Architecture technical decisions

## Libraries

I have decided to use `React` with `create-react-app` for the challenge. Additionally, I added `styled-components` for the styles.
In a slightly larger project I would have possibly opted for `redux` with `@reduxjs/toolkit` but given the size of the challenge
it was easy to implement it with `Context`.

Additionally, I have decided to use `Typescript` to maintain static typing as it brings a lot of robustness to the developments.

## UI & UX

I decided to refactor also the visual style and some key aspects of the user experience in order to showcase my layout skills as well.

## Structure

The project structure has been created with the scalability of the application in mind:

```
konica-minolta-frontend-challenge/
├─ node_modules/
├─ public/
├─ src/
│  ├─ modules/
│  ├─ utils/
│  ├─ styles/
│  ├─ routes/
```

- `modules` hosts modules whose functionality could be instantiated in various parts of the application.
  The Items table has been treated in this way.
- `utils` highly reusable utilities, such as `ui` components.
- `styles` global and common styles and theme definition.
- `routes` pages or paths of the application. No router implementation has been done for this challenge.

## Testing

I have decided to use `testing-library` and `jest` as environment because they are the recommended tools for `React`.
Only the `Items` module has been tested for this challenge as a sample, with the following tests implemented:

```
 PASS  src/modules/Items/Items.test.tsx
  ✓ Add new item to the table (70 ms)
  ✓ Edits item from the table (19 ms)
  ✓ Display is shown when users clicks on first element (9 ms)
  ✓ Closes detail panel after click close (5 ms)
  ✓ Remove testing element from the list (12 ms)

-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |      100 |     100 |     100 |
 components/Detail |     100 |      100 |     100 |     100 |
  index.tsx        |     100 |      100 |     100 |     100 |
 context           |     100 |      100 |     100 |     100 |
  provider.tsx     |     100 |      100 |     100 |     100 |
-------------------|---------|----------|---------|---------|-------------------
```
